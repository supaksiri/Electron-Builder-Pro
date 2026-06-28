// script.js — Electron Builder Pro
// พัฒนาโดย ครูสุพักตร์ศิริ โรงเรียนโพธิ์ศรีสว่างวิทยา
// ============================================================

'use strict';

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
const STATE = {
  student: { name: '', class: '', number: '' },
  theme: 'light',
  currentPage: 'home',
  lessonProgress: {},       // { lessonId: true/false }
  practiceScores: [],       // [{ topic, score, total, date }]
  quizScores: [],           // [{ score, total, date, grade }]
  badges: [],               // ['badge-id', ...]
  selectedElement: null,    // atomicNumber
  compareElements: [null, null],
  animation: {
    steps: [],
    currentStep: 0,
    timer: null,
    speed: 800,             // ms per step
    playing: false
  }
};

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  applyTheme(STATE.theme);
  renderPage('home');
  setupNav();
  setupThemeToggle();
});

// ═══════════════════════════════════════════════
// LOCAL STORAGE
// ═══════════════════════════════════════════════
function loadFromStorage() {
  const keys = ['studentName','studentClass','studentNumber','lessonProgress',
                'practiceScores','quizScores','badges','themeMode','lastSelectedElement'];
  const get = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };

  STATE.student.name    = get('studentName')   || '';
  STATE.student.class   = get('studentClass')  || '';
  STATE.student.number  = get('studentNumber') || '';
  STATE.lessonProgress  = get('lessonProgress')  || {};
  STATE.practiceScores  = get('practiceScores')  || [];
  STATE.quizScores      = get('quizScores')      || [];
  STATE.badges          = get('badges')          || [];
  STATE.theme           = get('themeMode')       || 'light';
  STATE.selectedElement = get('lastSelectedElement') || 6; // Carbon default
}

function saveToStorage() {
  const set = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  set('studentName',       STATE.student.name);
  set('studentClass',      STATE.student.class);
  set('studentNumber',     STATE.student.number);
  set('lessonProgress',    STATE.lessonProgress);
  set('practiceScores',    STATE.practiceScores);
  set('quizScores',        STATE.quizScores);
  set('badges',            STATE.badges);
  set('themeMode',         STATE.theme);
  set('lastSelectedElement', STATE.selectedElement);
}

// ═══════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════
function applyTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  STATE.theme = mode;
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = mode === 'dark' ? '☀️' : '🌙';
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = STATE.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    saveToStorage();
  });
}

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function setupNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => {
      const page = el.dataset.page;
      navigateTo(page);
    });
  });
}

function navigateTo(page) {
  STATE.currentPage = page;
  renderPage(page);
  // update active nav
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  // close mobile menu if open
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.remove('open');
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════
// PAGE ROUTER
// ═══════════════════════════════════════════════
function renderPage(page) {
  const main = document.getElementById('main-content');
  if (!main) return;
  const pages = {
    home:     renderHome,
    lesson:   renderLesson,
    table:    renderPeriodicTable,
    map:      renderShellMap,
    sim:      renderSimulator,
    practice: renderPractice,
    quiz:     renderQuiz,
    compare:  renderCompare,
    result:   renderResult
  };
  const fn = pages[page];
  if (fn) {
    main.innerHTML = '';
    fn(main);
  }
}

// ═══════════════════════════════════════════════
// PAGE: HOME
// ═══════════════════════════════════════════════
function renderHome(container) {
  const totalLessons = 6;
  const doneLessons  = Object.values(STATE.lessonProgress).filter(Boolean).length;
  const progress     = Math.round((doneLessons / totalLessons) * 100);
  const badgeCount   = STATE.badges.length;
  const quizBest     = STATE.quizScores.length
    ? Math.max(...STATE.quizScores.map(s => s.score)) : 0;

  container.innerHTML = `
    <div class="home-hero">
      <div class="mascot-wrap">
        <div class="mascot" id="mascot">⚛️</div>
        <div class="mascot-speech" id="speech">${getGreeting()}</div>
      </div>
      <h1 class="hero-title">Electron Builder Pro</h1>
      <p class="hero-sub">สื่อการเรียนรู้การจัดเรียงอิเล็กตรอน ระดับ ม.4</p>
    </div>

    ${STATE.student.name ? `
    <div class="student-card card">
      <div class="student-avatar">👨‍🎓</div>
      <div class="student-info">
        <div class="student-name">${STATE.student.name}</div>
        <div class="student-detail">ชั้น ${STATE.student.class} เลขที่ ${STATE.student.number}</div>
      </div>
      <button class="btn-ghost btn-sm" onclick="showStudentForm()">แก้ไข</button>
    </div>` : `
    <div class="card student-form-card" id="student-form-wrap">
      <h3>👋 ยินดีต้อนรับ! กรอกข้อมูลของคุณ</h3>
      <div class="form-row">
        <input type="text" id="inp-name"   class="form-input" placeholder="ชื่อ-นามสกุล" maxlength="50">
        <input type="text" id="inp-class"  class="form-input" placeholder="ชั้นเรียน เช่น ม.4/1" maxlength="20">
        <input type="text" id="inp-number" class="form-input" placeholder="เลขที่" maxlength="5">
      </div>
      <button class="btn-primary" onclick="saveStudentInfo()">เริ่มเรียน 🚀</button>
    </div>`}

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num">${progress}%</div>
        <div class="stat-label">ความก้าวหน้าบทเรียน</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${badgeCount}</div>
        <div class="stat-label">เหรียญรางวัล 🏅</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${quizBest}/20</div>
        <div class="stat-label">คะแนนสูงสุด</div>
      </div>
    </div>

    <div class="menu-grid">
      ${MENU_ITEMS.map(m => `
        <button class="menu-card" onclick="navigateTo('${m.page}')">
          <div class="menu-icon">${m.icon}</div>
          <div class="menu-title">${m.title}</div>
          <div class="menu-desc">${m.desc}</div>
        </button>`).join('')}
    </div>
  `;

  animateMascot();
}

const MENU_ITEMS = [
  { page:'lesson',   icon:'📖', title:'บทเรียน',          desc:'6 บท ตั้งแต่อะตอมถึง f-block' },
  { page:'table',    icon:'🔬', title:'ตารางธาตุ',         desc:'Interactive 118 ธาตุ' },
  { page:'map',      icon:'🗺️', title:'Shell↔Subshell↔Orbital', desc:'แผนที่ความสัมพันธ์' },
  { page:'sim',      icon:'⚗️', title:'Simulator',        desc:'ดูการจัดเรียงแบบ Animation' },
  { page:'practice', icon:'✏️', title:'ฝึกทำโจทย์',       desc:'5 รูปแบบ ฝึกทักษะ' },
  { page:'quiz',     icon:'📝', title:'แบบทดสอบ',          desc:'30 ข้อ สุ่ม 20 ข้อ' },
  { page:'compare',  icon:'⚖️', title:'เปรียบเทียบธาตุ',   desc:'เทียบ 2 ธาตุแบบ side-by-side' },
  { page:'result',   icon:'📊', title:'ผลการเรียน',        desc:'สรุปคะแนนและดาวน์โหลดใบประกาศ' }
];

function getGreeting() {
  const h = new Date().getHours();
  const name = STATE.student.name ? STATE.student.name.split(' ')[0] : 'น้อง';
  if (h < 12) return `สวัสดีตอนเช้า ${name}! พร้อมเรียนเรื่องอิเล็กตรอนไหม?`;
  if (h < 17) return `สวัสดีตอนบ่าย ${name}! มาฝึกจัดเรียงอิเล็กตรอนกันเลย!`;
  return `สวัสดีตอนเย็น ${name}! วันนี้ได้เรียนอะไรใหม่บ้าง?`;
}

function animateMascot() {
  const m = document.getElementById('mascot');
  if (!m) return;
  const atoms = ['⚛️','🔬','🧪','💡','⚡','🌟','🎯'];
  let i = 0;
  setInterval(() => { m.textContent = atoms[i++ % atoms.length]; }, 2000);
}

function saveStudentInfo() {
  const name   = document.getElementById('inp-name')?.value.trim();
  const cls    = document.getElementById('inp-class')?.value.trim();
  const num    = document.getElementById('inp-number')?.value.trim();
  if (!name) { alert('กรุณากรอกชื่อ'); return; }
  STATE.student = { name, class: cls, number: num };
  saveToStorage();
  awardBadge('เริ่มต้นอะตอม');
  renderPage('home');
}

function showStudentForm() {
  const card = document.getElementById('student-form-wrap');
  if (card) card.scrollIntoView({ behavior:'smooth' });
  else renderPage('home');
}

// ═══════════════════════════════════════════════
// PAGE: LESSON
// ═══════════════════════════════════════════════
const LESSONS = [
  {
    id: 'atom', title: 'บทที่ 1: โครงสร้างอะตอม', icon: '⚛️',
    content: `
      <h3>อะตอมคืออะไร?</h3>
      <p>อะตอมเป็นหน่วยย่อยที่สุดของสสาร ประกอบด้วยสามส่วนหลัก:</p>
      <div class="concept-grid">
        <div class="concept-card proton">⊕ โปรตอน<br><small>ประจุบวก อยู่ในนิวเคลียส</small></div>
        <div class="concept-card neutron">◎ นิวตรอน<br><small>ไม่มีประจุ อยู่ในนิวเคลียส</small></div>
        <div class="concept-card electron">⊖ อิเล็กตรอน<br><small>ประจุลบ อยู่รอบนิวเคลียส</small></div>
      </div>
      <div class="info-box">💡 <strong>เลขอะตอม (Z)</strong> = จำนวนโปรตอน = จำนวนอิเล็กตรอน (ในอะตอมที่เป็นกลาง)</div>
      <h3>ทำไมอิเล็กตรอนถึงสำคัญ?</h3>
      <p>อิเล็กตรอนเป็นตัวกำหนดสมบัติทางเคมีทั้งหมด เช่น การเกิดพันธะ ความเป็นกรด-เบส และสี</p>
      <div class="example-box">
        <strong>ตัวอย่าง:</strong> คาร์บอน (C) เลขอะตอม 6 มีอิเล็กตรอน 6 ตัว → เป็นส่วนสำคัญในสารอินทรีย์ทุกชนิด!
      </div>
    `
  },
  {
    id: 'shell', title: 'บทที่ 2: ระดับพลังงาน Shell', icon: '🔵',
    content: `
      <h3>Shell คืออะไร?</h3>
      <p>Shell หรือระดับพลังงานหลัก (Principal Energy Level) คือวงโคจรของอิเล็กตรอนรอบนิวเคลียส แทนด้วยตัวเลข n = 1, 2, 3, ... หรือตัวอักษร K, L, M, ...</p>
      <div class="shell-table">
        <div class="shell-row header"><span>Shell (n)</span><span>ชื่อ</span><span>รับอิเล็กตรอนสูงสุด</span></div>
        ${[['1','K','2'],['2','L','8'],['3','M','18'],['4','N','32']].map(([n,name,max]) =>
          `<div class="shell-row"><span>n = ${n}</span><span>${name}</span><span>${max} ตัว</span></div>`
        ).join('')}
      </div>
      <div class="info-box">📐 <strong>สูตร:</strong> Shell n รับอิเล็กตรอนสูงสุด = 2n² ตัว</div>
      <h3>ตัวอย่าง: Na (เลขอะตอม 11)</h3>
      <div class="shell-diagram" id="shell-demo-na"></div>
      <div class="example-box">11 อิเล็กตรอน → Shell K: 2, Shell L: 8, Shell M: 1 → <strong>2, 8, 1</strong></div>
    `
  },
  {
    id: 'subshell', title: 'บทที่ 3: Subshell s p d f', icon: '🎯',
    content: `
      <h3>Subshell คืออะไร?</h3>
      <p>ภายใน Shell แต่ละชั้น อิเล็กตรอนยังแบ่งอยู่ใน Subshell ย่อย ๆ อีก ได้แก่ s, p, d, f</p>
      <div class="subshell-table">
        <div class="sub-row header"><span>Subshell</span><span>จำนวน Orbital</span><span>รับ e⁻ สูงสุด</span><span>รูปร่าง</span></div>
        ${[['s','1','2','ทรงกลม'],['p','3','6','ดัมเบล'],['d','5','10','ซับซ้อน'],['f','7','14','ซับซ้อนมาก']].map(([t,o,e,shape]) =>
          `<div class="sub-row sub-${t}"><span><b>${t}</b></span><span>${o}</span><span>${e}</span><span>${shape}</span></div>`
        ).join('')}
      </div>
      <h3>ลำดับพลังงาน (กฎ Aufbau)</h3>
      <div class="aufbau-order">
        <div class="aufbau-arrow">1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p</div>
      </div>
      <div class="info-box">🧠 จำง่าย: ลากเส้นทแยงมุม เริ่มจาก 1s ไปตามลูกศร</div>
    `
  },
  {
    id: 'aufbau', title: 'บทที่ 4: กฎ Aufbau', icon: '📈',
    content: `
      <h3>กฎ Aufbau คืออะไร?</h3>
      <p>Aufbau มาจากภาษาเยอรมัน แปลว่า "การก่อสร้าง" — หลักการคือ เติมอิเล็กตรอนจาก Orbital ที่มีพลังงาน<strong>ต่ำสุดก่อน</strong></p>
      <div class="aufbau-demo">
        <div class="aufbau-step">1s² → 2s² → 2p⁶ → 3s² → 3p⁶ → 4s² → 3d¹⁰ → ...</div>
      </div>
      <h3>ตัวอย่างการเติม: Fe (เลขอะตอม 26)</h3>
      <div class="config-display">
        <span class="sub-chip s">1s²</span>
        <span class="sub-chip s">2s²</span>
        <span class="sub-chip p">2p⁶</span>
        <span class="sub-chip s">3s²</span>
        <span class="sub-chip p">3p⁶</span>
        <span class="sub-chip s">4s²</span>
        <span class="sub-chip d">3d⁶</span>
      </div>
      <div class="example-box">นับรวม: 2+2+6+2+6+2+6 = <strong>26 ✓</strong></div>
      <div class="info-box">⚠️ ข้อยกเว้น: Cr และ Cu เติม d ให้ครบ (d⁵ หรือ d¹⁰) เพราะเสถียรกว่า</div>
    `
  },
  {
    id: 'pauli', title: 'บทที่ 5: หลักการกีดกันของ Pauli', icon: '🚫',
    content: `
      <h3>หลักการของ Pauli</h3>
      <p>Wolfgang Pauli (1925): ใน Orbital เดียวกัน มีอิเล็กตรอนได้ไม่เกิน <strong>2 ตัว</strong> และต้องมีสปินตรงข้ามกัน</p>
      <div class="pauli-demo">
        <div class="orbital-box allowed">
          <span class="spin up">↑</span><span class="spin down">↓</span>
          <div class="label">✅ ถูกต้อง</div>
        </div>
        <div class="orbital-box forbidden">
          <span class="spin up">↑</span><span class="spin up">↑</span>
          <div class="label">❌ ผิด! สปินเหมือนกัน</div>
        </div>
        <div class="orbital-box forbidden">
          <span class="spin up">↑</span><span class="spin up">↑</span><span class="spin up">↑</span>
          <div class="label">❌ ผิด! เกิน 2 ตัว</div>
        </div>
      </div>
      <div class="info-box">💡 <strong>สปิน:</strong> ↑ (spin up, ms = +½) และ ↓ (spin down, ms = −½)</div>
      <h3>ผลลัพธ์ที่ตามมา</h3>
      <p>เพราะ Orbital รับได้ 2 ตัว ดังนั้น: s (1 orbital) = 2e⁻, p (3 orbital) = 6e⁻, d (5 orbital) = 10e⁻, f (7 orbital) = 14e⁻</p>
    `
  },
  {
    id: 'hund', title: "บทที่ 6: กฎของ Hund", icon: '⬆️',
    content: `
      <h3>กฎของ Hund</h3>
      <p>Friedrich Hund (1925): ใน Orbital ที่มีพลังงานเท่ากัน (degenerate orbitals) อิเล็กตรอนจะเติม<strong>เดี่ยว ↑ ให้ครบทุกช่องก่อน</strong> แล้วจึงจับคู่ ↑↓</p>
      <h3>ตัวอย่าง N (เลขอะตอม 7) — 2p orbital</h3>
      <div class="hund-demo">
        <div class="hund-row correct">
          <div class="orbital-box"><span class="spin up">↑</span></div>
          <div class="orbital-box"><span class="spin up">↑</span></div>
          <div class="orbital-box"><span class="spin up">↑</span></div>
          <span class="hund-label">✅ ถูก! (2p³ เดี่ยวทุกช่อง)</span>
        </div>
        <div class="hund-row wrong">
          <div class="orbital-box"><span class="spin up">↑</span><span class="spin down">↓</span></div>
          <div class="orbital-box"><span class="spin up">↑</span></div>
          <div class="orbital-box"></div>
          <span class="hund-label">❌ ผิด! จับคู่ก่อนเติมครบ</span>
        </div>
      </div>
      <h3>ตัวอย่าง O (เลขอะตอม 8) — 2p orbital</h3>
      <div class="hund-demo">
        <div class="hund-row correct">
          <div class="orbital-box"><span class="spin up">↑</span><span class="spin down">↓</span></div>
          <div class="orbital-box"><span class="spin up">↑</span></div>
          <div class="orbital-box"><span class="spin up">↑</span></div>
          <span class="hund-label">✅ ถูก! (2p⁴ เติมเดี่ยวก่อนแล้วจับคู่)</span>
        </div>
      </div>
      <div class="info-box">🧲 เหตุผล: อิเล็กตรอนสปินเดียวกันในช่องต่างกัน มีพลังงานต่ำกว่า (เสถียรกว่า)</div>
    `
  }
];

function renderLesson(container) {
  const doneLessons = Object.values(STATE.lessonProgress).filter(Boolean).length;
  container.innerHTML = `
    <div class="page-header">
      <h2>📖 บทเรียน</h2>
      <p>เรียนครบ ${doneLessons}/${LESSONS.length} บท</p>
    </div>
    <div class="progress-bar page-progress">
      <div class="progress-fill" style="width:${Math.round(doneLessons/LESSONS.length*100)}%"></div>
    </div>
    <div class="lesson-grid" id="lesson-list"></div>
    <div class="lesson-content card" id="lesson-content" style="display:none"></div>
  `;
  const grid = document.getElementById('lesson-list');
  LESSONS.forEach(lesson => {
    const done = STATE.lessonProgress[lesson.id];
    const btn = document.createElement('div');
    btn.className = `lesson-card ${done ? 'done' : ''}`;
    btn.innerHTML = `
      <div class="lesson-icon">${lesson.icon}</div>
      <div class="lesson-title">${lesson.title}</div>
      <div class="lesson-check">${done ? '✅' : '○'}</div>
    `;
    btn.onclick = () => openLesson(lesson);
    grid.appendChild(btn);
  });
}

function openLesson(lesson) {
  const panel = document.getElementById('lesson-content');
  panel.style.display = 'block';
  panel.innerHTML = `
    <button class="btn-ghost" onclick="closeLesson()">← กลับ</button>
    <h2>${lesson.icon} ${lesson.title}</h2>
    ${lesson.content}
    ${!STATE.lessonProgress[lesson.id] ? `
      <button class="btn-primary lesson-done-btn" onclick="completeLesson('${lesson.id}')">
        ✅ เรียนจบบทนี้แล้ว
      </button>` : `<div class="badge-earned">✅ เรียนบทนี้เสร็จแล้ว</div>`}
  `;
  panel.scrollIntoView({ behavior:'smooth' });
}

function closeLesson() {
  const panel = document.getElementById('lesson-content');
  if (panel) panel.style.display = 'none';
}

function completeLesson(id) {
  STATE.lessonProgress[id] = true;
  saveToStorage();
  checkLessonBadges();
  renderPage('lesson');
}

function checkLessonBadges() {
  const done = Object.values(STATE.lessonProgress).filter(Boolean).length;
  if (done >= 1) awardBadge('เริ่มต้นอะตอม');
  if (STATE.lessonProgress['shell']) awardBadge('เข้าใจ Shell');
  if (STATE.lessonProgress['subshell']) awardBadge('รู้จัก Subshell');
  if (done >= 6) awardBadge('เซียนลูกศร');
}

// ═══════════════════════════════════════════════
// PAGE: PERIODIC TABLE
// ═══════════════════════════════════════════════
function renderPeriodicTable(container) {
  const filterCat = 'all';
  container.innerHTML = `
    <div class="page-header">
      <h2>🔬 ตารางธาตุ Interactive</h2>
    </div>
    <div class="table-controls">
      <input type="text" id="table-search" class="form-input search-input" placeholder="🔍 ค้นหาธาตุ...">
      <select id="table-filter" class="form-input">
        <option value="all">ทุกประเภท</option>
        ${Object.keys(CATEGORY_COLORS).map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
    </div>
    <div class="category-legend">
      ${Object.entries(CATEGORY_COLORS).map(([cat,col]) =>
        `<span class="legend-chip" style="background:${col.bg};color:${col.text}">${cat}</span>`
      ).join('')}
    </div>
    <div class="periodic-grid" id="ptable"></div>
    <div class="element-detail card" id="el-detail" style="display:none"></div>
  `;

  buildPeriodicTable();

  document.getElementById('table-search').addEventListener('input', e => filterTable(e.target.value));
  document.getElementById('table-filter').addEventListener('change', e => filterTable('', e.target.value));
}

function buildPeriodicTable() {
  const grid = document.getElementById('ptable');
  if (!grid) return;
  grid.innerHTML = '';
  // 18 columns, 10 rows (including lanthanide/actinide rows)
  const layout = Array.from({length:10}, () => Array(18).fill(null));

  ELEMENTS_DATA.forEach(el => {
    if (el.block === 'f') return; // place separately
    const row = el.period - 1;
    let col;
    if (el.group) col = el.group - 1;
    else return;
    if (row >= 0 && row < 7 && col >= 0 && col < 18) {
      layout[row][col] = el;
    }
  });

  // Render main grid (periods 1-7)
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 18; c++) {
      const cell = document.createElement('div');
      const el = layout[r][c];
      if (el) {
        const col = CATEGORY_COLORS[el.category] || { bg: '#ccc', text: '#000' };
        cell.className = 'pt-cell';
        cell.style.background = col.bg;
        cell.style.color = col.text;
        cell.innerHTML = `<div class="pt-num">${el.atomicNumber}</div><div class="pt-sym">${el.symbol}</div><div class="pt-name">${el.thaiName.substring(0,5)}</div>`;
        cell.onclick = () => showElementDetail(el.atomicNumber);
        cell.title = `${el.thaiName} (${el.englishName})`;
      } else {
        cell.className = 'pt-cell empty';
        // placeholder for f-block
        if (r === 5 && c === 2) cell.innerHTML = `<small style="font-size:9px;color:#aaa">57-71</small>`;
        if (r === 6 && c === 2) cell.innerHTML = `<small style="font-size:9px;color:#aaa">89-103</small>`;
      }
      grid.appendChild(cell);
    }
  }

  // f-block rows
  ['แลนทาไนด์','แอกทิไนด์'].forEach((cat, ri) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'f-block-row';
    rowDiv.innerHTML = `<div class="f-block-label">${ri===0?'La-Lu':'Ac-Lr'}</div>`;
    const els = ELEMENTS_DATA.filter(e => e.category === cat);
    els.forEach(el => {
      const col = CATEGORY_COLORS[el.category] || { bg: '#ccc', text: '#000' };
      const cell = document.createElement('div');
      cell.className = 'pt-cell f-cell';
      cell.style.background = col.bg;
      cell.style.color = col.text;
      cell.innerHTML = `<div class="pt-num">${el.atomicNumber}</div><div class="pt-sym">${el.symbol}</div>`;
      cell.onclick = () => showElementDetail(el.atomicNumber);
      rowDiv.appendChild(cell);
    });
    grid.appendChild(rowDiv);
  });
}

function filterTable(search, category = 'all') {
  const cells = document.querySelectorAll('.pt-cell:not(.empty)');
  cells.forEach(cell => {
    const num = parseInt(cell.querySelector('.pt-num')?.textContent);
    const el = ELEMENTS_DATA.find(e => e.atomicNumber === num);
    if (!el) return;
    const matchSearch = !search || el.thaiName.includes(search) || el.englishName.toLowerCase().includes(search.toLowerCase()) || el.symbol.toLowerCase().includes(search.toLowerCase()) || el.atomicNumber.toString() === search;
    const matchCat = category === 'all' || el.category === category;
    cell.style.opacity = (matchSearch && matchCat) ? '1' : '0.15';
  });
}

function showElementDetail(atomicNum) {
  const el = getElementByAtomicNumber(atomicNum);
  if (!el) return;
  STATE.selectedElement = atomicNum;
  saveToStorage();
  awardBadge('นักสำรวจตารางธาตุ');

  const panel = document.getElementById('el-detail');
  if (!panel) return;
  panel.style.display = 'block';
  const col = CATEGORY_COLORS[el.category] || { bg: '#ccc', text: '#000' };
  const boxes = buildSubshellBoxDisplay(el.electronConfiguration);

  panel.innerHTML = `
    <button class="btn-ghost" onclick="document.getElementById('el-detail').style.display='none'">✕ ปิด</button>
    <div class="el-header" style="background:${col.bg};color:${col.text}">
      <div class="el-num">${el.atomicNumber}</div>
      <div class="el-sym-big">${el.symbol}</div>
      <div class="el-names">
        <div class="el-thai">${el.thaiName}</div>
        <div class="el-eng">${el.englishName}</div>
      </div>
      <div class="el-mass">${el.atomicMass}</div>
    </div>
    <div class="el-info-grid">
      <div class="el-info-row"><span>หมวด</span><span>${el.category}</span></div>
      <div class="el-info-row"><span>คาบ</span><span>${el.period}</span></div>
      <div class="el-info-row"><span>หมู่</span><span>${el.group || '-'}</span></div>
      <div class="el-info-row"><span>Block</span><span>${el.block}-block</span></div>
      <div class="el-info-row"><span>สถานะ (STP)</span><span>${el.stateAtSTP}</span></div>
      <div class="el-info-row"><span>เวเลนซ์ e⁻</span><span>${el.valenceElectrons}</span></div>
    </div>
    <div class="el-config">
      <div class="config-label">Electron Configuration:</div>
      <div class="config-text">${formatConfig(el.electronConfiguration)}</div>
      <div class="config-label">Noble Gas:</div>
      <div class="config-text">${formatConfig(el.nobleGasConfiguration)}</div>
    </div>
    <div class="el-shell">
      <div class="config-label">Shell Distribution:</div>
      <div class="shell-chips">
        ${el.shellDistribution.map((n,i) =>
          `<span class="shell-chip n${i+1}">${SHELL_NAMES[i]}: ${n}</span>`
        ).join('')}
      </div>
    </div>
    <div class="el-orbital-boxes">
      <div class="config-label">Orbital Box Diagram:</div>
      ${boxes}
    </div>
    <div class="el-explanation">
      <div class="config-label">คำอธิบาย:</div>
      <p>${generateExplanation(el)}</p>
    </div>
    <div class="el-actions">
      <button class="btn-secondary" onclick="navigateTo('sim');selectElementInSim(${el.atomicNumber})">🎬 ดู Animation</button>
      <button class="btn-secondary" onclick="navigateTo('compare')">⚖️ เปรียบเทียบ</button>
    </div>
  `;
  panel.scrollIntoView({ behavior:'smooth' });
}

function formatConfig(cfg) {
  return cfg
    .replace(/(\d+)([spdf])(\d+)/g, '$1$2<sup>$3</sup>')
    .replace(/\[([A-Za-z]+)\]/g, '<span class="noble-gas-label">[$1]</span>');
}

function buildSubshellBoxDisplay(configStr) {
  const subs = parseElectronConfiguration(configStr);
  let html = '<div class="orbital-diagram">';
  subs.forEach(sub => {
    const boxes = buildOrbitalBoxes(sub.type, sub.count);
    html += `<div class="orbital-group">
      <div class="orbital-label">${sub.n}${sub.type}</div>
      <div class="orbital-boxes">
        ${boxes.map(b => `<div class="orbital-box"><span class="spin-arrow">${boxToArrow(b)}</span></div>`).join('')}
      </div>
    </div>`;
  });
  html += '</div>';
  return html;
}

// ═══════════════════════════════════════════════
// PAGE: SHELL MAP (Shell↔Subshell↔Orbital)
// ═══════════════════════════════════════════════
function renderShellMap(container) {
  const el = getElementByAtomicNumber(STATE.selectedElement || 6);
  container.innerHTML = `
    <div class="page-header">
      <h2>🗺️ Shell ↔ Subshell ↔ Orbital</h2>
      <p>เลือกธาตุ แล้วดูความสัมพันธ์ทั้ง 3 มิติพร้อมกัน</p>
    </div>
    <div class="sim-controls">
      <input type="text" id="map-search" class="form-input" placeholder="ค้นหาธาตุ..." style="max-width:200px">
      <select id="map-select" class="form-input" style="max-width:300px"></select>
    </div>
    <div class="map-panels" id="map-panels"></div>
  `;

  const sel = document.getElementById('map-select');
  ELEMENTS_DATA.forEach(e => {
    const opt = document.createElement('option');
    opt.value = e.atomicNumber;
    opt.textContent = `${e.atomicNumber}. ${e.thaiName} (${e.symbol})`;
    if (e.atomicNumber === (STATE.selectedElement || 6)) opt.selected = true;
    sel.appendChild(opt);
  });

  sel.addEventListener('change', () => renderMapPanels(parseInt(sel.value)));
  document.getElementById('map-search').addEventListener('input', e => {
    const q = e.target.value.trim();
    const found = searchElements(q)[0];
    if (found) { sel.value = found.atomicNumber; renderMapPanels(found.atomicNumber); }
  });

  renderMapPanels(STATE.selectedElement || 6);
}

function renderMapPanels(atomicNum) {
  const el = getElementByAtomicNumber(atomicNum);
  if (!el) return;
  STATE.selectedElement = atomicNum;
  saveToStorage();
  awardBadge('นักวิเคราะห์เวเลนซ์');

  const subs = parseElectronConfiguration(el.electronConfiguration);
  const panel = document.getElementById('map-panels');
  if (!panel) return;

  panel.innerHTML = `
    <!-- Panel 1: Shell -->
    <div class="map-panel panel-shell">
      <h3>🔵 Shell (n)</h3>
      <div class="shell-visual">
        ${el.shellDistribution.map((count, i) => `
          <div class="shell-ring n${i+1}">
            <div class="shell-label">n=${i+1} (${SHELL_NAMES[i]})</div>
            <div class="shell-count">${count} e⁻</div>
          </div>
        `).join('')}
      </div>
      <div class="map-summary">Shell Distribution: <strong>${el.shellDistribution.join(', ')}</strong></div>
    </div>

    <!-- Panel 2: Subshell -->
    <div class="map-panel panel-subshell">
      <h3>🎯 Subshell</h3>
      <div class="subshell-chips-list">
        ${subs.map(s => `
          <div class="subshell-chip sub-${s.type}">
            <span class="chip-label">${s.n}${s.type}</span>
            <sup>${s.count}</sup>
            <span class="chip-info">${s.count} e⁻</span>
          </div>
        `).join('')}
      </div>
      <div class="map-summary">Config: <strong>${formatConfig(el.electronConfiguration)}</strong></div>
    </div>

    <!-- Panel 3: Orbital Box -->
    <div class="map-panel panel-orbital">
      <h3>📦 Orbital Box</h3>
      ${buildSubshellBoxDisplay(el.electronConfiguration)}
    </div>

    <!-- Panel 4: Mapping -->
    <div class="map-panel panel-mapping">
      <h3>🔗 ความสัมพันธ์</h3>
      <div class="mapping-table">
        <div class="map-row header">
          <span>Shell n</span><span>Subshell</span><span>Orbitals</span><span>e⁻</span>
        </div>
        ${subs.map(s => {
          const numOrbits = {s:1,p:3,d:5,f:7}[s.type]||1;
          return `<div class="map-row sub-${s.type}">
            <span>n=${s.n}</span>
            <span>${s.n}${s.type}</span>
            <span>${numOrbits}</span>
            <span>${s.count}</span>
          </div>`;
        }).join('')}
        <div class="map-row total">
          <span colspan="3">รวม</span>
          <span>${el.atomicNumber}</span>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// PAGE: SIMULATOR (Animation)
// ═══════════════════════════════════════════════
function renderSimulator(container) {
  container.innerHTML = `
    <div class="page-header">
      <h2>⚗️ Electron Filling Simulator</h2>
      <p>ดูการเติมอิเล็กตรอนทีละตัวพร้อม Animation</p>
    </div>
    <div class="sim-controls">
      <input type="text" id="sim-search" class="form-input" placeholder="ค้นหาธาตุ..." style="max-width:200px">
      <select id="sim-select" class="form-input" style="max-width:300px"></select>
      <label>ความเร็ว: <input type="range" id="sim-speed" min="200" max="2000" step="100" value="800"></label>
    </div>
    <div class="sim-display card" id="sim-display">
      <!-- ข้อมูลธาตุ -->
      <div class="sim-element-info" id="sim-el-info"></div>
      <!-- Animation area -->
      <div class="sim-anim-area" id="sim-anim"></div>
      <!-- Current step info -->
      <div class="sim-step-info" id="sim-step"></div>
    </div>
    <div class="sim-btn-row">
      <button class="btn-secondary" id="btn-reset" onclick="simReset()">⏮ รีเซ็ต</button>
      <button class="btn-secondary" id="btn-back" onclick="simBack()">◀ ย้อนกลับ</button>
      <button class="btn-primary"   id="btn-play" onclick="simTogglePlay()">▶ เล่นอัตโนมัติ</button>
      <button class="btn-secondary" id="btn-next" onclick="simNext()">▶ ทีละตัว</button>
      <button class="btn-secondary" id="btn-end"  onclick="simEnd()">⏭ สิ้นสุด</button>
    </div>
    <div class="sim-progress-wrap">
      <div class="sim-progress-bar">
        <div class="sim-progress-fill" id="sim-prog" style="width:0%"></div>
      </div>
      <div class="sim-step-counter" id="sim-counter">0 / 0</div>
    </div>
  `;

  const sel = document.getElementById('sim-select');
  ELEMENTS_DATA.forEach(e => {
    const opt = document.createElement('option');
    opt.value = e.atomicNumber;
    opt.textContent = `${e.atomicNumber}. ${e.thaiName} (${e.symbol})`;
    if (e.atomicNumber === (STATE.selectedElement || 6)) opt.selected = true;
    sel.appendChild(opt);
  });

  sel.addEventListener('change', () => simLoad(parseInt(sel.value)));
  document.getElementById('sim-search').addEventListener('input', e => {
    const found = searchElements(e.target.value.trim())[0];
    if (found) { sel.value = found.atomicNumber; simLoad(found.atomicNumber); }
  });
  document.getElementById('sim-speed').addEventListener('input', e => {
    STATE.animation.speed = parseInt(e.target.value);
  });

  simLoad(STATE.selectedElement || 6);
}

function selectElementInSim(num) {
  const sel = document.getElementById('sim-select');
  if (sel) { sel.value = num; simLoad(num); }
}

function simLoad(atomicNum) {
  const el = getElementByAtomicNumber(atomicNum);
  if (!el) return;
  STATE.selectedElement = atomicNum;
  simStop();
  STATE.animation.steps = generateFillingSteps(el.electronConfiguration);
  STATE.animation.currentStep = 0;

  const info = document.getElementById('sim-el-info');
  if (info) {
    const col = CATEGORY_COLORS[el.category] || { bg:'#ccc', text:'#000' };
    info.innerHTML = `
      <div class="sim-el-badge" style="background:${col.bg};color:${col.text}">
        <span class="sim-el-num">${el.atomicNumber}</span>
        <span class="sim-el-sym">${el.symbol}</span>
        <span class="sim-el-name">${el.thaiName}</span>
      </div>
      <div class="sim-el-config">${formatConfig(el.electronConfiguration)}</div>
    `;
  }

  simRender();
}

function simRender() {
  const { steps, currentStep } = STATE.animation;
  const total = steps.length;
  const el = getElementByAtomicNumber(STATE.selectedElement);
  if (!el) return;

  // Build current partial config
  const allSubs = parseElectronConfiguration(el.electronConfiguration);
  const anim = document.getElementById('sim-anim');
  if (!anim) return;

  // Count electrons per subshell up to currentStep
  const counts = {};
  for (let i = 0; i < currentStep; i++) {
    const s = steps[i];
    if (!counts[s.subshellLabel]) counts[s.subshellLabel] = 0;
    counts[s.subshellLabel]++;
  }

  let html = '<div class="orbital-diagram sim-orbital">';
  allSubs.forEach(sub => {
    const key = `${sub.n}${sub.type}`;
    const filled = counts[key] || 0;
    const boxes = buildOrbitalBoxes(sub.type, filled);
    const isActive = currentStep > 0 && steps[currentStep-1]?.subshellLabel === key;
    html += `<div class="orbital-group ${isActive ? 'active-sub' : ''}">
      <div class="orbital-label">${key}<sup>${filled||''}</sup></div>
      <div class="orbital-boxes">
        ${boxes.map(b => `<div class="orbital-box ${b>0?'filled':''}"><span class="spin-arrow">${boxToArrow(b)}</span></div>`).join('')}
      </div>
    </div>`;
  });
  html += '</div>';
  anim.innerHTML = html;

  // Step info
  const stepEl = document.getElementById('sim-step');
  if (stepEl && currentStep > 0) {
    const s = steps[currentStep - 1];
    const shellSnapshot = s.shellSnapshot;
    const shellStr = Object.keys(shellSnapshot).sort().map(n =>
      `${SHELL_NAMES[n-1]}(n=${n}): ${shellSnapshot[n]}`
    ).join('  |  ');
    stepEl.innerHTML = `
      <div class="step-info-row">
        <span>อิเล็กตรอนที่ <strong>${s.electronNum}</strong></span>
        <span>Subshell: <strong>${s.subshellLabel}</strong></span>
        <span>Spin: <strong class="spin-${s.spin==='↑'?'up':'down'}">${s.spin}</strong></span>
        <span>Shell n=${s.shellN}: <strong>${shellSnapshot[s.shellN]}</strong> e⁻</span>
      </div>
      <div class="shell-status">${shellStr}</div>
    `;
  } else if (stepEl) {
    stepEl.innerHTML = '<div class="step-info-row">กด ▶ ทีละตัว หรือ ▶ เล่นอัตโนมัติ เพื่อเริ่ม</div>';
  }

  // Progress
  const prog = document.getElementById('sim-prog');
  const counter = document.getElementById('sim-counter');
  if (prog) prog.style.width = `${total ? (currentStep/total*100) : 0}%`;
  if (counter) counter.textContent = `${currentStep} / ${total}`;
}

function simNext() {
  if (STATE.animation.currentStep < STATE.animation.steps.length) {
    STATE.animation.currentStep++;
    simRender();
  }
}

function simBack() {
  if (STATE.animation.currentStep > 0) {
    STATE.animation.currentStep--;
    simRender();
  }
}

function simReset() {
  simStop();
  STATE.animation.currentStep = 0;
  simRender();
}

function simEnd() {
  simStop();
  STATE.animation.currentStep = STATE.animation.steps.length;
  simRender();
}

function simTogglePlay() {
  if (STATE.animation.playing) {
    simStop();
  } else {
    simPlay();
  }
}

function simPlay() {
  STATE.animation.playing = true;
  const btn = document.getElementById('btn-play');
  if (btn) btn.textContent = '⏸ หยุด';
  STATE.animation.timer = setInterval(() => {
    if (STATE.animation.currentStep >= STATE.animation.steps.length) {
      simStop();
      return;
    }
    STATE.animation.currentStep++;
    simRender();
  }, STATE.animation.speed);
}

function simStop() {
  STATE.animation.playing = false;
  if (STATE.animation.timer) { clearInterval(STATE.animation.timer); STATE.animation.timer = null; }
  const btn = document.getElementById('btn-play');
  if (btn) btn.textContent = '▶ เล่นอัตโนมัติ';
}

// ═══════════════════════════════════════════════
// PAGE: PRACTICE
// ═══════════════════════════════════════════════
const PRACTICE_TYPES = [
  { id:'shell',    icon:'🔵', title:'Shell Distribution', desc:'กรอกการกระจาย Shell ของธาตุที่กำหนด' },
  { id:'subshell', icon:'🎯', title:'Subshell Config',    desc:'เขียน electron configuration แบบ Subshell' },
  { id:'valence',  icon:'⭐', title:'Valence Electrons',  desc:'หาจำนวนเวเลนซ์อิเล็กตรอน' },
  { id:'category', icon:'🏷️', title:'Element Category',   desc:'จำแนกประเภทธาตุ' },
  { id:'orbital',  icon:'📦', title:'Orbital Box',        desc:'เลือก orbital box ที่ถูกต้อง' }
];

let practiceState = { type: null, element: null, answered: false, score: 0, total: 0 };

function renderPractice(container) {
  container.innerHTML = `
    <div class="page-header">
      <h2>✏️ ฝึกทำโจทย์</h2>
    </div>
    <div class="practice-type-grid">
      ${PRACTICE_TYPES.map(t => `
        <button class="practice-type-card" onclick="startPractice('${t.id}')">
          <div class="pt-icon">${t.icon}</div>
          <div class="pt-title">${t.title}</div>
          <div class="pt-desc">${t.desc}</div>
          <div class="pt-score">${getPracticeStats(t.id)}</div>
        </button>`).join('')}
    </div>
    <div class="practice-area card" id="practice-area" style="display:none"></div>
  `;
}

function getPracticeStats(type) {
  const scores = STATE.practiceScores.filter(s => s.topic === type);
  if (!scores.length) return 'ยังไม่เคยฝึก';
  const last = scores[scores.length-1];
  return `ล่าสุด: ${last.score}/${last.total}`;
}

function startPractice(type) {
  practiceState.type = type;
  practiceState.answered = false;
  practiceState.score = 0;
  practiceState.total = 0;

  // Pick random element (Z 1-36 for clarity)
  const pool = ELEMENTS_DATA.filter(e => e.atomicNumber <= 54);
  practiceState.element = pool[Math.floor(Math.random() * pool.length)];

  const area = document.getElementById('practice-area');
  area.style.display = 'block';
  area.scrollIntoView({ behavior:'smooth' });
  renderPracticeQuestion(area);
}

function renderPracticeQuestion(area) {
  const el = practiceState.element;
  const type = practiceState.type;
  let html = `<button class="btn-ghost" onclick="document.getElementById('practice-area').style.display='none'">← กลับ</button>`;
  html += `<div class="practice-el-badge">
    <strong>${el.symbol}</strong> — ${el.thaiName} (เลขอะตอม ${el.atomicNumber})
  </div>`;

  if (type === 'shell') {
    html += `<div class="practice-question">Shell Distribution ของ ${el.symbol} คือ?</div>
      <input type="text" id="prac-ans" class="form-input" placeholder="เช่น 2,8,1" style="max-width:200px">
      <button class="btn-primary" onclick="checkPractice('shell')">ตรวจ</button>`;
  } else if (type === 'valence') {
    html += `<div class="practice-question">เวเลนซ์อิเล็กตรอนของ ${el.symbol} คือ?</div>
      <input type="number" id="prac-ans" class="form-input" min="0" max="14" style="max-width:120px">
      <button class="btn-primary" onclick="checkPractice('valence')">ตรวจ</button>`;
  } else if (type === 'subshell') {
    html += `<div class="practice-question">Electron Configuration (Subshell) ของ ${el.symbol} คือ?</div>
      <input type="text" id="prac-ans" class="form-input" placeholder="เช่น 1s2 2s2 2p6" style="max-width:400px">
      <button class="btn-primary" onclick="checkPractice('subshell')">ตรวจ</button>`;
  } else if (type === 'category') {
    const opts = Object.keys(CATEGORY_COLORS);
    html += `<div class="practice-question">${el.symbol} (${el.thaiName}) จัดอยู่ในประเภทใด?</div>
      <div class="practice-options">
        ${opts.map(c => `<button class="opt-btn" onclick="checkPractice('category','${c}')">${c}</button>`).join('')}
      </div>`;
  } else if (type === 'orbital') {
    // Last subshell orbital box
    const subs = parseElectronConfiguration(el.electronConfiguration);
    const last = subs[subs.length-1];
    const correctBoxes = buildOrbitalBoxes(last.type, last.count);
    // Generate 3 wrong options
    const options = generateOrbitalOptions(last.type, last.count, correctBoxes);
    html += `<div class="practice-question">Orbital Box สุดท้าย (${last.n}${last.type}${last.count}) ของ ${el.symbol} คือ?</div>
      <div class="practice-options orbital-options">
        ${options.map((opt, i) => `
          <button class="opt-btn orbital-opt" onclick="checkPractice('orbital',${i},${JSON.stringify(opt.correct)})">
            <div class="orbital-boxes">
              ${opt.boxes.map(b => `<div class="orbital-box"><span class="spin-arrow">${boxToArrow(b)}</span></div>`).join('')}
            </div>
          </button>`).join('')}
      </div>`;
  }

  html += `<div class="practice-feedback" id="prac-feedback"></div>`;
  html += `<button class="btn-secondary" onclick="nextPractice()" style="margin-top:12px">คำถามต่อไป →</button>`;
  area.innerHTML = html;
}

function generateOrbitalOptions(type, count, correct) {
  const numOrb = {s:1,p:3,d:5,f:7}[type]||1;
  const options = [{ boxes: correct, correct: true }];
  const used = [JSON.stringify(correct)];
  let attempts = 0;
  while (options.length < 4 && attempts < 50) {
    attempts++;
    const randCount = Math.max(1, Math.min(numOrb*2, count + Math.floor(Math.random()*3)-1));
    const boxes = buildOrbitalBoxes(type, randCount);
    const key = JSON.stringify(boxes);
    if (!used.includes(key)) { used.push(key); options.push({ boxes, correct: false }); }
  }
  return options.sort(() => Math.random()-0.5);
}

function checkPractice(type, val, isCorrect) {
  if (practiceState.answered) return;
  practiceState.answered = true;
  practiceState.total++;
  const el = practiceState.element;
  const fb = document.getElementById('prac-feedback');
  let correct = false;
  let explanation = '';

  if (type === 'shell') {
    const ans = document.getElementById('prac-ans')?.value.trim().replace(/\s/g,'');
    const expected = el.shellDistribution.join(',');
    correct = ans === expected;
    explanation = `Shell Distribution ของ ${el.symbol} คือ <strong>${expected}</strong>`;
  } else if (type === 'valence') {
    const ans = parseInt(document.getElementById('prac-ans')?.value);
    correct = ans === el.valenceElectrons;
    explanation = `เวเลนซ์อิเล็กตรอนของ ${el.symbol} คือ <strong>${el.valenceElectrons}</strong>`;
  } else if (type === 'subshell') {
    const ans = document.getElementById('prac-ans')?.value.trim().replace(/\s+/g,' ').toLowerCase();
    const expected = el.electronConfiguration.toLowerCase();
    correct = ans === expected;
    explanation = `Electron Configuration ของ ${el.symbol} คือ <strong>${el.electronConfiguration}</strong>`;
  } else if (type === 'category') {
    correct = val === el.category;
    explanation = `${el.symbol} จัดอยู่ใน<strong>${el.category}</strong>`;
    // highlight buttons
    document.querySelectorAll('.opt-btn').forEach(btn => {
      if (btn.textContent === el.category) btn.classList.add('opt-correct');
      else if (btn.textContent === val && !correct) btn.classList.add('opt-wrong');
    });
  } else if (type === 'orbital') {
    correct = isCorrect;
    const subs = parseElectronConfiguration(el.electronConfiguration);
    const last = subs[subs.length-1];
    explanation = `Orbital box สุดท้าย ${last.n}${last.type}<sup>${last.count}</sup> ของ ${el.symbol}`;
  }

  if (correct) practiceState.score++;
  if (fb) {
    fb.className = `practice-feedback ${correct ? 'correct' : 'wrong'}`;
    fb.innerHTML = `${correct ? '✅ ถูกต้อง!' : '❌ ไม่ถูก'} ${explanation}`;
  }

  STATE.practiceScores.push({ topic: type, score: correct?1:0, total:1, date: new Date().toLocaleDateString('th') });
  saveToStorage();
}

function nextPractice() {
  practiceState.answered = false;
  const pool = ELEMENTS_DATA.filter(e => e.atomicNumber <= 54);
  practiceState.element = pool[Math.floor(Math.random() * pool.length)];
  const area = document.getElementById('practice-area');
  if (area) renderPracticeQuestion(area);
}

// ═══════════════════════════════════════════════
// PAGE: QUIZ
// ═══════════════════════════════════════════════
let quizState = { questions: [], current: 0, answers: {}, submitted: false };

function renderQuiz(container) {
  if (quizState.submitted) {
    renderQuizResult(container);
    return;
  }
  if (!quizState.questions.length) {
    container.innerHTML = `
      <div class="page-header">
        <h2>📝 แบบทดสอบ</h2>
        <p>สุ่ม 20 ข้อจาก 35 ข้อ ครอบคลุมทุกหัวข้อ</p>
      </div>
      <div class="quiz-start card">
        <div class="quiz-rules">
          <h3>📋 กติกา</h3>
          <ul>
            <li>ข้อสอบ 20 ข้อ สุ่มทุกครั้ง</li>
            <li>ทำได้ทุกข้อ ไม่มีหักคะแนน</li>
            <li>เฉลยแสดงหลังส่ง</li>
          </ul>
        </div>
        <div class="quiz-grade-scale">
          <h3>🏆 เกณฑ์</h3>
          <div class="grade-row gold">18-20 คะแนน → นักจัดเรียงอิเล็กตรอนขั้นเทพ 🥇</div>
          <div class="grade-row silver">15-17 คะแนน → เข้าใจดีมาก 🥈</div>
          <div class="grade-row bronze">10-14 คะแนน → ผ่าน 🥉</div>
          <div class="grade-row review">0-9 คะแนน → ควรทบทวน 📚</div>
        </div>
        <button class="btn-primary btn-lg" onclick="startQuiz()">🚀 เริ่มทำแบบทดสอบ</button>
      </div>
    `;
    return;
  }
  renderQuizQuestion(container);
}

function startQuiz() {
  quizState.questions = getRandomQuestions(20);
  quizState.current = 0;
  quizState.answers = {};
  quizState.submitted = false;
  renderPage('quiz');
}

function renderQuizQuestion(container) {
  const { questions, current, answers } = quizState;
  const q = questions[current];
  const progress = Math.round((current / questions.length) * 100);

  container.innerHTML = `
    <div class="page-header">
      <h2>📝 แบบทดสอบ</h2>
      <div class="quiz-progress-row">
        <span>ข้อ ${current+1} จาก ${questions.length}</span>
        <div class="progress-bar" style="flex:1;margin:0 12px"><div class="progress-fill" style="width:${progress}%"></div></div>
        <span>${progress}%</span>
      </div>
    </div>
    <div class="quiz-question card">
      <div class="q-number">ข้อ ${current+1}</div>
      <div class="q-text">${q.question}</div>
      <div class="q-options" id="q-opts">
        ${q.type === 'truefalse' ?
          ['ถูก','ผิด'].map((opt, i) => `
            <button class="opt-btn ${answers[q.id] === i ? 'selected':''}"
              onclick="selectAnswer(${q.id},${i})">${opt}</button>`).join('') :
          q.options.map((opt, i) => `
            <button class="opt-btn ${answers[q.id] === i ? 'selected':''}"
              onclick="selectAnswer(${q.id},${i})">${String.fromCharCode(65+i)}. ${opt}</button>`).join('')}
      </div>
    </div>
    <div class="quiz-nav">
      <button class="btn-secondary" ${current===0?'disabled':''} onclick="quizNav(-1)">◀ ก่อนหน้า</button>
      ${current < questions.length-1 ?
        `<button class="btn-primary" onclick="quizNav(1)">ถัดไป ▶</button>` :
        `<button class="btn-primary btn-submit" onclick="submitQuiz()">📤 ส่งคำตอบ</button>`}
    </div>
    <div class="quiz-dots">
      ${questions.map((qq, i) => `
        <span class="q-dot ${i===current?'current':''} ${answers[qq.id]!==undefined?'answered':''}"
          onclick="jumpQuestion(${i})">${i+1}</span>`).join('')}
    </div>
  `;
}

function selectAnswer(qId, ansIndex) {
  quizState.answers[qId] = ansIndex;
  renderQuizQuestion(document.getElementById('main-content'));
}

function quizNav(dir) {
  quizState.current = Math.max(0, Math.min(quizState.questions.length-1, quizState.current + dir));
  renderQuizQuestion(document.getElementById('main-content'));
}

function jumpQuestion(i) {
  quizState.current = i;
  renderQuizQuestion(document.getElementById('main-content'));
}

function submitQuiz() {
  const unanswered = quizState.questions.filter(q => quizState.answers[q.id] === undefined).length;
  if (unanswered > 0) {
    if (!confirm(`ยังเหลือ ${unanswered} ข้อที่ยังไม่ตอบ ต้องการส่งเลยไหม?`)) return;
  }
  let score = 0;
  quizState.questions.forEach(q => {
    const userAns = quizState.answers[q.id];
    if (q.type === 'truefalse') {
      const correct = q.answer === true ? 0 : 1;
      if (userAns === correct) score++;
    } else {
      if (userAns === q.answer) score++;
    }
  });
  quizState.submitted = true;

  const grade = score >= 18 ? 'นักจัดเรียงอิเล็กตรอนขั้นเทพ 🥇'
              : score >= 15 ? 'เข้าใจดีมาก 🥈'
              : score >= 10 ? 'ผ่าน 🥉'
              : 'ควรทบทวน 📚';

  STATE.quizScores.push({ score, total:20, date: new Date().toLocaleDateString('th'), grade });
  saveToStorage();

  if (score >= 18) awardBadge('Electron Master');
  renderPage('quiz');
}

function renderQuizResult(container) {
  const last = STATE.quizScores[STATE.quizScores.length-1];
  const pct = Math.round((last.score/20)*100);
  container.innerHTML = `
    <div class="page-header"><h2>📊 ผลแบบทดสอบ</h2></div>
    <div class="quiz-result card">
      <div class="result-score">${last.score}<span>/20</span></div>
      <div class="result-pct">${pct}%</div>
      <div class="result-grade">${last.grade}</div>
      <div class="result-progress">
        <div class="progress-bar big"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>
    </div>
    <div class="quiz-review">
      <h3>เฉลยข้อสอบ</h3>
      ${quizState.questions.map((q, i) => {
        const userAns = quizState.answers[q.id];
        let correct;
        if (q.type === 'truefalse') correct = q.answer === true ? 0 : 1;
        else correct = q.answer;
        const isRight = userAns === correct;
        const opts = q.type === 'truefalse' ? ['ถูก','ผิด'] : q.options;
        return `<div class="review-item ${isRight?'right':'wrong'}">
          <div class="review-num">${i+1}. ${isRight?'✅':'❌'}</div>
          <div class="review-q">${q.question}</div>
          <div class="review-ans">
            <span class="your-ans">คำตอบคุณ: ${userAns !== undefined ? opts[userAns] : 'ไม่ตอบ'}</span>
            <span class="correct-ans">เฉลย: ${opts[correct]}</span>
          </div>
          <div class="review-exp">${q.explanation}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="quiz-actions">
      <button class="btn-primary" onclick="quizState.questions=[];quizState.submitted=false;renderPage('quiz')">🔄 ทำใหม่</button>
      <button class="btn-secondary" onclick="navigateTo('result')">📊 ดูสรุปผล</button>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// PAGE: COMPARE
// ═══════════════════════════════════════════════
function renderCompare(container) {
  container.innerHTML = `
    <div class="page-header">
      <h2>⚖️ เปรียบเทียบธาตุ</h2>
    </div>
    <div class="compare-selectors">
      <div class="compare-col">
        <label>ธาตุที่ 1</label>
        <select id="cmp-sel-1" class="form-input" onchange="updateCompare()"></select>
      </div>
      <div class="compare-vs">VS</div>
      <div class="compare-col">
        <label>ธาตุที่ 2</label>
        <select id="cmp-sel-2" class="form-input" onchange="updateCompare()"></select>
      </div>
    </div>
    <div class="compare-result" id="cmp-result"></div>
  `;

  ['cmp-sel-1','cmp-sel-2'].forEach((id, idx) => {
    const sel = document.getElementById(id);
    ELEMENTS_DATA.forEach(e => {
      const opt = document.createElement('option');
      opt.value = e.atomicNumber;
      opt.textContent = `${e.atomicNumber}. ${e.thaiName} (${e.symbol})`;
      if (e.atomicNumber === (STATE.compareElements[idx] || (idx===0?6:8))) opt.selected = true;
      sel.appendChild(opt);
    });
  });

  updateCompare();
}

function updateCompare() {
  const n1 = parseInt(document.getElementById('cmp-sel-1')?.value);
  const n2 = parseInt(document.getElementById('cmp-sel-2')?.value);
  if (!n1 || !n2) return;
  STATE.compareElements = [n1, n2];

  const el1 = getElementByAtomicNumber(n1);
  const el2 = getElementByAtomicNumber(n2);
  const result = document.getElementById('cmp-result');
  if (!result || !el1 || !el2) return;

  const fields = [
    ['เลขอะตอม', el => el.atomicNumber],
    ['มวลอะตอม', el => el.atomicMass],
    ['คาบ', el => el.period],
    ['หมู่', el => el.group || '-'],
    ['Block', el => el.block],
    ['ประเภท', el => el.category],
    ['สถานะ (STP)', el => el.stateAtSTP],
    ['Shell Distribution', el => el.shellDistribution.join(', ')],
    ['เวเลนซ์ e⁻', el => el.valenceElectrons],
    ['Electron Config', el => el.electronConfiguration],
  ];

  const col1 = CATEGORY_COLORS[el1.category] || { bg:'#ccc', text:'#000' };
  const col2 = CATEGORY_COLORS[el2.category] || { bg:'#ccc', text:'#000' };

  result.innerHTML = `
    <div class="compare-table">
      <div class="cmp-row header">
        <div class="cmp-field"></div>
        <div class="cmp-val" style="background:${col1.bg};color:${col1.text}">
          <div class="cmp-sym">${el1.symbol}</div><div class="cmp-name">${el1.thaiName}</div>
        </div>
        <div class="cmp-val" style="background:${col2.bg};color:${col2.text}">
          <div class="cmp-sym">${el2.symbol}</div><div class="cmp-name">${el2.thaiName}</div>
        </div>
      </div>
      ${fields.map(([label, fn]) => {
        const v1 = fn(el1), v2 = fn(el2);
        const same = v1.toString() === v2.toString();
        return `<div class="cmp-row ${same?'same':'diff'}">
          <div class="cmp-field">${label}</div>
          <div class="cmp-val">${v1}</div>
          <div class="cmp-val">${v2}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="cmp-orbital-compare">
      <div class="cmp-orbital-col">
        <h4>${el1.symbol} — Orbital Box</h4>
        ${buildSubshellBoxDisplay(el1.electronConfiguration)}
      </div>
      <div class="cmp-orbital-col">
        <h4>${el2.symbol} — Orbital Box</h4>
        ${buildSubshellBoxDisplay(el2.electronConfiguration)}
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// PAGE: RESULT
// ═══════════════════════════════════════════════
function renderResult(container) {
  const totalQuiz = STATE.quizScores.length;
  const bestScore = totalQuiz ? Math.max(...STATE.quizScores.map(s => s.score)) : 0;
  const avgScore  = totalQuiz ? Math.round(STATE.quizScores.reduce((a,s)=>a+s.score,0)/totalQuiz*10)/10 : 0;
  const doneLessons = Object.values(STATE.lessonProgress).filter(Boolean).length;

  container.innerHTML = `
    <div class="page-header">
      <h2>📊 สรุปผลการเรียน</h2>
      ${STATE.student.name ? `<p>${STATE.student.name} ชั้น ${STATE.student.class} เลขที่ ${STATE.student.number}</p>` : ''}
    </div>

    <div class="result-summary card">
      <div class="summary-grid">
        <div class="summary-item">
          <div class="s-num">${doneLessons}/6</div>
          <div class="s-label">บทเรียนที่เรียนจบ</div>
        </div>
        <div class="summary-item">
          <div class="s-num">${totalQuiz}</div>
          <div class="s-label">ครั้งที่ทำแบบทดสอบ</div>
        </div>
        <div class="summary-item">
          <div class="s-num">${bestScore}/20</div>
          <div class="s-label">คะแนนสูงสุด</div>
        </div>
        <div class="summary-item">
          <div class="s-num">${avgScore}</div>
          <div class="s-label">คะแนนเฉลี่ย</div>
        </div>
      </div>
    </div>

    <div class="badges-section card">
      <h3>🏅 เหรียญรางวัล (${STATE.badges.length}/${BADGE_LIST.length})</h3>
      <div class="badges-grid">
        ${BADGE_LIST.map(b => {
          const earned = STATE.badges.includes(b.id);
          return `<div class="badge-item ${earned?'earned':'locked'}">
            <div class="badge-icon">${earned ? b.icon : '🔒'}</div>
            <div class="badge-name">${b.name}</div>
          </div>`;
        }).join('')}
      </div>
    </div>

    ${totalQuiz ? `
    <div class="quiz-history card">
      <h3>📜 ประวัติแบบทดสอบ</h3>
      <div class="history-list">
        ${STATE.quizScores.slice().reverse().slice(0,10).map(s => `
          <div class="history-row">
            <span>${s.date}</span>
            <span>${s.score}/20 (${Math.round(s.score/20*100)}%)</span>
            <span>${s.grade}</span>
          </div>`).join('')}
      </div>
    </div>` : ''}

    <div class="certificate-section card">
      <h3>📜 ใบประกาศนียบัตร</h3>
      ${STATE.student.name && bestScore >= 10 ? `
        <p>ยินดีด้วย! คุณผ่านเกณฑ์และสามารถดาวน์โหลดใบประกาศได้</p>
        <button class="btn-primary" onclick="downloadCertificate()">⬇️ ดาวน์โหลดใบประกาศ</button>` :
        `<p>${!STATE.student.name ? 'กรุณากรอกชื่อที่หน้าแรกก่อน' : 'ทำแบบทดสอบผ่าน 10 คะแนนขึ้นไปเพื่อรับใบประกาศ'}</p>`}
    </div>

    <button class="btn-ghost btn-sm" onclick="confirmReset()" style="margin-top:24px;color:#e55">🗑️ รีเซ็ตข้อมูลทั้งหมด</button>
  `;
}

function confirmReset() {
  if (confirm('ลบข้อมูลทั้งหมด? (คะแนน, ความก้าวหน้า, เหรียญ)')) {
    localStorage.clear();
    location.reload();
  }
}

// ═══════════════════════════════════════════════
// BADGE SYSTEM
// ═══════════════════════════════════════════════
const BADGE_LIST = [
  { id:'เริ่มต้นอะตอม',            icon:'🌱', name:'เริ่มต้นอะตอม' },
  { id:'เข้าใจ Shell',             icon:'🔵', name:'เข้าใจ Shell' },
  { id:'รู้จัก Subshell',          icon:'🎯', name:'รู้จัก Subshell' },
  { id:'เซียนลูกศร',               icon:'⬆️', name:'เซียนลูกศร' },
  { id:'นักสำรวจตารางธาตุ',        icon:'🔭', name:'นักสำรวจตารางธาตุ' },
  { id:'นักวิเคราะห์เวเลนซ์',      icon:'🧠', name:'นักวิเคราะห์เวเลนซ์' },
  { id:'Electron Master',          icon:'🏆', name:'Electron Master' }
];

function awardBadge(id) {
  if (!STATE.badges.includes(id)) {
    STATE.badges.push(id);
    saveToStorage();
    showBadgeToast(id);
  }
}

function showBadgeToast(id) {
  const badge = BADGE_LIST.find(b => b.id === id);
  if (!badge) return;
  const toast = document.createElement('div');
  toast.className = 'badge-toast';
  toast.innerHTML = `${badge.icon} ได้รับเหรียญ: <strong>${badge.name}</strong>!`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}

// ═══════════════════════════════════════════════
// CERTIFICATE
// ═══════════════════════════════════════════════
function downloadCertificate() {
  const bestScore = Math.max(...STATE.quizScores.map(s => s.score));
  const grade = bestScore >= 18 ? 'นักจัดเรียงอิเล็กตรอนขั้นเทพ'
              : bestScore >= 15 ? 'ผู้เชี่ยวชาญการจัดเรียงอิเล็กตรอน'
              : 'ผู้ผ่านการเรียนรู้การจัดเรียงอิเล็กตรอน';
  const canvas = document.createElement('canvas');
  canvas.width = 900; canvas.height = 630;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const grad = ctx.createLinearGradient(0,0,900,630);
  grad.addColorStop(0,'#1e3a5f'); grad.addColorStop(1,'#0d1b2a');
  ctx.fillStyle = grad; ctx.fillRect(0,0,900,630);

  // Border
  ctx.strokeStyle = '#52d9b5'; ctx.lineWidth = 6;
  ctx.strokeRect(20,20,860,590);
  ctx.strokeStyle = '#4da6ff'; ctx.lineWidth = 2;
  ctx.strokeRect(30,30,840,570);

  // Title
  ctx.fillStyle = '#52d9b5'; ctx.font = 'bold 42px Sarabun, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('ใบประกาศนียบัตร', 450, 110);

  ctx.fillStyle = '#ffffff'; ctx.font = '22px Sarabun, sans-serif';
  ctx.fillText('มอบให้แก่', 450, 160);

  ctx.fillStyle = '#fde68a'; ctx.font = 'bold 36px Sarabun, sans-serif';
  ctx.fillText(STATE.student.name || 'นักเรียน', 450, 220);

  ctx.fillStyle = '#cbd5e1'; ctx.font = '20px Sarabun, sans-serif';
  ctx.fillText(`ชั้น ${STATE.student.class || '-'} เลขที่ ${STATE.student.number || '-'}`, 450, 260);

  ctx.fillStyle = '#ffffff'; ctx.font = '22px Sarabun, sans-serif';
  ctx.fillText('ผ่านการเรียนรู้ สื่อการเรียน Electron Builder Pro', 450, 320);
  ctx.fillText('วิชาเคมี เรื่อง การจัดเรียงอิเล็กตรอน', 450, 355);

  ctx.fillStyle = '#52d9b5'; ctx.font = 'bold 28px Sarabun, sans-serif';
  ctx.fillText(`ระดับ: ${grade}`, 450, 410);

  ctx.fillStyle = '#fde68a'; ctx.font = 'bold 24px Sarabun, sans-serif';
  ctx.fillText(`คะแนนสูงสุด: ${bestScore}/20 คะแนน`, 450, 455);

  ctx.fillStyle = '#94a3b8'; ctx.font = '18px Sarabun, sans-serif';
  ctx.fillText(`วันที่: ${new Date().toLocaleDateString('th-TH',{year:'numeric',month:'long',day:'numeric'})}`, 450, 510);

  ctx.fillStyle = '#64748b'; ctx.font = '14px Sarabun, sans-serif';
  ctx.fillText('โรงเรียนโพธิ์ศรีสว่างวิทยา | ครูสุพักตร์ศิริ พืชสิงห์', 450, 560);

  // Atom decoration
  ctx.fillStyle = 'rgba(82,217,181,0.1)'; ctx.font = '120px';
  ctx.fillText('⚛️', 60, 200);
  ctx.fillText('⚛️', 780, 500);

  // Download
  const link = document.createElement('a');
  link.download = `certificate_${STATE.student.name||'student'}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
