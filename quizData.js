// quizData.js - ข้อสอบแบบทดสอบ
// พัฒนาโดย ครูสุพักตร์ศิริ

const QUIZ_DATA = [
  {
    id: 1,
    type: "multiple",
    question: "ธาตุ Na มีเลขอะตอม 11 การจัดเรียงอิเล็กตรอนแบบ Shell คือข้อใด?",
    options: ["2, 8, 1", "2, 9", "2, 8, 8, 1", "2, 1, 8"],
    answer: 0,
    explanation: "Na มี 11 อิเล็กตรอน เติมตาม Shell: n=1 รับได้ 2 → n=2 รับได้ 8 → n=3 รับ 1 ที่เหลือ = 2,8,1",
    topic: "shell"
  },
  {
    id: 2,
    type: "multiple",
    question: "Subshell ชนิด d มีกี่ Orbital?",
    options: ["1", "3", "5", "7"],
    answer: 2,
    explanation: "Subshell d มี 5 Orbital จึงรับอิเล็กตรอนได้สูงสุด 10 ตัว",
    topic: "subshell"
  },
  {
    id: 3,
    type: "multiple",
    question: "การจัดเรียงอิเล็กตรอนของ Cl (เลขอะตอม 17) ใน Subshell แบบเต็มคือข้อใด?",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁵",
      "1s² 2s² 2p⁶ 3s² 3p⁶",
      "1s² 2s² 2p⁶ 3s² 3d⁵",
      "1s² 2s⁶ 2p² 3s² 3p⁵"
    ],
    answer: 0,
    explanation: "Cl มี 17 อิเล็กตรอน: 1s²(2) + 2s²(2) + 2p⁶(6) + 3s²(2) + 3p⁵(5) = 17",
    topic: "subshell"
  },
  {
    id: 4,
    type: "multiple",
    question: "กฎของ Hund กล่าวว่าอย่างไร?",
    options: [
      "Orbital หนึ่งรับอิเล็กตรอนได้ไม่เกิน 2 ตัว",
      "อิเล็กตรอนเติมจากระดับพลังงานต่ำไปสูง",
      "ใน Orbital ที่มีพลังงานเท่ากันต้องเติมเดี่ยวทุกช่องก่อนจับคู่",
      "อิเล็กตรอนในช่องเดียวกันต้องมีสปินตรงข้าม"
    ],
    answer: 2,
    explanation: "กฎ Hund: ใน Orbital ที่มีพลังงานเท่ากัน (เช่น p ทั้ง 3 ช่อง) ต้องเติมอิเล็กตรอนเดี่ยว ↑ ให้ครบก่อน แล้วจึงจับคู่ ↑↓",
    topic: "hund"
  },
  {
    id: 5,
    type: "multiple",
    question: "Fe (เลขอะตอม 26) มี Shell distribution เท่าใด?",
    options: ["2, 8, 8, 8", "2, 8, 14, 2", "2, 8, 16", "2, 8, 10, 6"],
    answer: 1,
    explanation: "Fe: 1s²2s²2p⁶3s²3p⁶4s²3d⁶ → n=1:2, n=2:8, n=3:(3s²+3p⁶+3d⁶)=14, n=4:2 → 2,8,14,2",
    topic: "shell"
  },
  {
    id: 6,
    type: "multiple",
    question: "ธาตุ Ca (เลขอะตอม 20) มีเวเลนซ์อิเล็กตรอนกี่ตัว?",
    options: ["1", "2", "8", "18"],
    answer: 1,
    explanation: "Ca อยู่หมู่ 2 มี Shell distribution 2,8,8,2 อิเล็กตรอนใน shell นอกสุด (n=4) คือ 4s² = 2 ตัว",
    topic: "valence"
  },
  {
    id: 7,
    type: "multiple",
    question: "ลำดับการเติมอิเล็กตรอนตามหลัก Aufbau ข้อใดถูกต้อง?",
    options: [
      "1s → 2p → 2s → 3s → 3p",
      "1s → 2s → 2p → 3s → 3p → 4s → 3d",
      "1s → 2s → 3s → 2p → 3p → 4s",
      "1s → 2s → 2p → 3p → 3s → 4s"
    ],
    answer: 1,
    explanation: "หลัก Aufbau เติมจากพลังงานต่ำไปสูง: 1s→2s→2p→3s→3p→4s→3d→4p→...",
    topic: "aufbau"
  },
  {
    id: 8,
    type: "truefalse",
    question: "Cr (โครเมียม) มีการจัดเรียงอิเล็กตรอนเป็น [Ar] 3d4 4s2",
    answer: false,
    explanation: "ผิด! Cr เป็นข้อยกเว้น มีการจัดเรียงเป็น [Ar] 3d⁵ 4s¹ เพราะ d⁵ (half-filled) มีเสถียรภาพสูงกว่า",
    topic: "exceptions"
  },
  {
    id: 9,
    type: "multiple",
    question: "Orbital Box ของ 2p³ ตามกฎ Hund ควรเป็นข้อใด?",
    options: [
      "[↑↓][↑][ ]",
      "[↑][↑][↑]",
      "[↑↓][↑↓][ ]",
      "[ ][↑↓][↑]"
    ],
    answer: 1,
    explanation: "2p³ มี 3 อิเล็กตรอนใน 3 Orbital ตามกฎ Hund ต้องเติมเดี่ยว ↑ ทุกช่องก่อน = [↑][↑][↑]",
    topic: "orbital"
  },
  {
    id: 10,
    type: "multiple",
    question: "Shell n=3 มี Subshell ใดบ้าง?",
    options: ["3s, 3p", "3s, 3p, 3d", "3s, 3p, 3d, 3f", "3s เท่านั้น"],
    answer: 1,
    explanation: "Shell n=3 มี Subshell 3s, 3p, 3d (f เริ่มที่ n=4) ดังนั้นรับอิเล็กตรอนสูงสุดได้ 18 ตัว",
    topic: "subshell"
  },
  {
    id: 11,
    type: "multiple",
    question: "ธาตุใดมีเวเลนซ์อิเล็กตรอน 7 ตัว?",
    options: ["N (เลขอะตอม 7)", "Cl (เลขอะตอม 17)", "O (เลขอะตอม 8)", "S (เลขอะตอม 16)"],
    answer: 1,
    explanation: "Cl มี Shell distribution 2,8,7 จึงมีเวเลนซ์อิเล็กตรอน 7 ตัว (หมู่ 17)",
    topic: "valence"
  },
  {
    id: 12,
    type: "multiple",
    question: "Cu (ทองแดง เลขอะตอม 29) มีการจัดเรียงอิเล็กตรอนแบบย่อใด?",
    options: [
      "[Ar] 4s2 3d9",
      "[Ar] 4s1 3d10",
      "[Ar] 4s2 3d8",
      "[Ar] 4s0 3d10 4p1"
    ],
    answer: 1,
    explanation: "Cu เป็นข้อยกเว้น d¹⁰ (filled) มีเสถียรภาพสูง จึงมีการจัดเรียงเป็น [Ar] 4s¹ 3d¹⁰",
    topic: "exceptions"
  },
  {
    id: 13,
    type: "multiple",
    question: "Shell distribution ของ K (โพแทสเซียม เลขอะตอม 19) คือข้อใด?",
    options: ["2, 8, 9", "2, 8, 8, 1", "2, 8, 1", "2, 17"],
    answer: 1,
    explanation: "K มี 19 อิเล็กตรอน: n=1:2, n=2:8, n=3:8, n=4:1 → 2,8,8,1 (4s¹ เติมก่อน 3d)",
    topic: "shell"
  },
  {
    id: 14,
    type: "truefalse",
    question: "อิเล็กตรอน 2 ตัวในออร์บิทัลเดียวกันสามารถมีสปินเหมือนกันได้",
    answer: false,
    explanation: "ผิด! ตามหลัก Pauli Exclusion อิเล็กตรอน 2 ตัวในออร์บิทัลเดียวกันต้องมีสปินตรงข้ามกัน (↑↓)",
    topic: "pauli"
  },
  {
    id: 15,
    type: "multiple",
    question: "ธาตุที่มี Shell distribution 2, 8, 8, 2 คือธาตุใด?",
    options: ["Mg", "Ca", "Sr", "Ba"],
    answer: 1,
    explanation: "Ca (เลขอะตอม 20) มี Shell distribution 2,8,8,2 อยู่คาบที่ 4 หมู่ 2",
    topic: "shell"
  },
  {
    id: 16,
    type: "multiple",
    question: "Orbital f มีกี่ช่อง และรับอิเล็กตรอนสูงสุดได้กี่ตัว?",
    options: ["5 ช่อง, 10 ตัว", "7 ช่อง, 14 ตัว", "3 ช่อง, 6 ตัว", "7 ช่อง, 7 ตัว"],
    answer: 1,
    explanation: "f Subshell มี 7 Orbital จึงรับอิเล็กตรอนได้สูงสุด 7×2 = 14 ตัว",
    topic: "subshell"
  },
  {
    id: 17,
    type: "multiple",
    question: "การจัดเรียง 1s² 2s² 2p⁶ 3s² 3p⁵ มี Shell distribution เท่าใด?",
    options: ["2, 8, 5", "2, 8, 7", "2, 8, 6", "2, 8, 8"],
    answer: 1,
    explanation: "n=1: 1s²=2, n=2: 2s²+2p⁶=8, n=3: 3s²+3p⁵=7 → Shell = 2,8,7 คือธาตุ Cl",
    topic: "shell"
  },
  {
    id: 18,
    type: "multiple",
    question: "ธาตุใดอยู่ใน d-block?",
    options: ["Na", "Cl", "Fe", "Ca"],
    answer: 2,
    explanation: "Fe (Iron) เป็นโลหะทรานซิชัน อยู่ใน d-block มี electron configuration ..3d⁶ 4s²",
    topic: "block"
  },
  {
    id: 19,
    type: "truefalse",
    question: "He (ฮีเลียม) มีเวเลนซ์อิเล็กตรอน 2 ตัว",
    answer: true,
    explanation: "ถูก! He มีการจัดเรียง 1s² มีอิเล็กตรอน 2 ตัวใน Shell เดียว นับเป็นเวเลนซ์อิเล็กตรอน 2 ตัว",
    topic: "valence"
  },
  {
    id: 20,
    type: "multiple",
    question: "O (ออกซิเจน เลขอะตอม 8) มี Orbital Box 2p ตามกฎ Hund เป็นข้อใด?",
    options: [
      "[↑↓][↑↓][ ]",
      "[↑↓][↑][↑]",
      "[↑][↑][↑↓]",
      "[↑][↑][ ]"
    ],
    answer: 1,
    explanation: "O มี 2p⁴: เติมเดี่ยว 3 ช่องก่อน [↑][↑][↑] แล้วจับคู่ช่องแรก → [↑↓][↑][↑]",
    topic: "orbital"
  },
  {
    id: 21,
    type: "multiple",
    question: "ธาตุที่มี 3 Shell คือธาตุที่อยู่ในคาบใด?",
    options: ["คาบที่ 1", "คาบที่ 2", "คาบที่ 3", "คาบที่ 4"],
    answer: 2,
    explanation: "ธาตุในคาบที่ 3 มีอิเล็กตรอน 3 Shell (n=1,2,3) เช่น Na, Mg, Al, Si, P, S, Cl, Ar",
    topic: "shell"
  },
  {
    id: 22,
    type: "multiple",
    question: "ในตารางธาตุ แก๊สมีตระกูล (Noble Gas) อยู่หมู่ใด?",
    options: ["หมู่ 1", "หมู่ 8", "หมู่ 17", "หมู่ 18"],
    answer: 3,
    explanation: "แก๊สมีตระกูล (He, Ne, Ar, Kr, Xe, Rn) อยู่หมู่ 18 มี outermost shell ที่เต็ม",
    topic: "periodic"
  },
  {
    id: 23,
    type: "multiple",
    question: "การจัดเรียง [Ar] 4s² 3d⁶ แปลงเป็น Shell distribution ได้อย่างไร?",
    options: ["2, 8, 8, 8", "2, 8, 14, 2", "2, 8, 6, 2", "2, 8, 13, 1"],
    answer: 1,
    explanation: "[Ar]=2,8,8 แล้ว 3d⁶ อยู่ใน n=3 จึงเพิ่มเป็น 8+6=14, 4s² อยู่ใน n=4 = 2 → 2,8,14,2 คือ Fe",
    topic: "shell"
  },
  {
    id: 24,
    type: "truefalse",
    question: "ลำดับพลังงาน 4s ต่ำกว่า 3d ดังนั้น 4s เติมก่อน 3d",
    answer: true,
    explanation: "ถูก! ตามหลัก Aufbau พลังงาน 4s < 3d ดังนั้นอิเล็กตรอนเติม 4s ก่อน 3d",
    topic: "aufbau"
  },
  {
    id: 25,
    type: "multiple",
    question: "ธาตุ N (ไนโตรเจน เลขอะตอม 7) มี Orbital 2p แบบใด?",
    options: [
      "[↑↓][↑][  ]",
      "[↑][↑][↑]",
      "[↑↓][↑↓][↑]",
      "[↑↓][  ][  ]"
    ],
    answer: 1,
    explanation: "N มี 2p³ ตามกฎ Hund เติมเดี่ยวทุกช่อง → [↑][↑][↑] (half-filled มีเสถียรภาพ)",
    topic: "orbital"
  },
  {
    id: 26,
    type: "multiple",
    question: "ธาตุที่มีเวเลนซ์อิเล็กตรอน 1 ตัวและอยู่คาบที่ 3 คือธาตุใด?",
    options: ["Li", "Na", "K", "Rb"],
    answer: 1,
    explanation: "Na (เลขอะตอม 11) อยู่คาบ 3 หมู่ 1 มี Shell distribution 2,8,1 เวเลนซ์อิเล็กตรอน 1 ตัว",
    topic: "periodic"
  },
  {
    id: 27,
    type: "multiple",
    question: "จำนวนอิเล็กตรอนสูงสุดใน Shell n=4 คือเท่าใด?",
    options: ["8", "18", "32", "50"],
    answer: 2,
    explanation: "Shell n=4 มี subshell 4s, 4p, 4d, 4f รับได้ 2+6+10+14 = 32 อิเล็กตรอน",
    topic: "shell"
  },
  {
    id: 28,
    type: "truefalse",
    question: "Mg (แมกนีเซียม) และ Ca (แคลเซียม) อยู่ในหมู่เดียวกัน",
    answer: true,
    explanation: "ถูก! ทั้ง Mg (หมู่ 2 คาบ 3) และ Ca (หมู่ 2 คาบ 4) ต่างมีเวเลนซ์อิเล็กตรอน 2 ตัว",
    topic: "periodic"
  },
  {
    id: 29,
    type: "multiple",
    question: "ข้อใด คือ Noble Gas Configuration ของ Na?",
    options: ["[He] 2s1", "[Ne] 3s1", "[Ar] 4s1", "[Kr] 5s1"],
    answer: 1,
    explanation: "Na: 1s²2s²2p⁶3s¹ สามารถเขียนย่อโดยใช้ [Ne] แทน 1s²2s²2p⁶ ได้เป็น [Ne] 3s¹",
    topic: "subshell"
  },
  {
    id: 30,
    type: "multiple",
    question: "ธาตุที่มี electron configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ คือแก๊สใด?",
    options: ["Ar", "Kr", "Xe", "Ne"],
    answer: 1,
    explanation: "นับอิเล็กตรอน: 2+2+6+2+6+2+10+6 = 36 คือ Kr (คริปทอน เลขอะตอม 36)",
    topic: "subshell"
  },
  {
    id: 31,
    type: "multiple",
    question: "ธาตุ P (ฟอสฟอรัส เลขอะตอม 15) อยู่ในบล็อกใดของตารางธาตุ?",
    options: ["s-block", "p-block", "d-block", "f-block"],
    answer: 1,
    explanation: "P มี electron ตัวสุดท้ายเติมใน 3p³ จึงอยู่ใน p-block",
    topic: "block"
  },
  {
    id: 32,
    type: "multiple",
    question: "Orbital 1s² หมายความว่าอะไร?",
    options: [
      "มี 1 orbital มีอิเล็กตรอน 2 ตัว อยู่ระดับพลังงาน s",
      "มี 2 orbital แต่ละออร์บิทัลมีอิเล็กตรอน 1 ตัว",
      "มีออร์บิทัล s ระดับ 2 มีอิเล็กตรอน 1 ตัว",
      "มีออร์บิทัล 2 ตัว อยู่ใน s-block"
    ],
    answer: 0,
    explanation: "1s² หมายถึง: เลข 1 = ระดับพลังงาน n=1, s = ชนิด subshell, ² = มีอิเล็กตรอน 2 ตัว",
    topic: "subshell"
  },
  {
    id: 33,
    type: "multiple",
    question: "ธาตุใดมี electron configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰?",
    options: ["Zn", "Cu", "Ag", "Au"],
    answer: 1,
    explanation: "นับ: 2+2+6+2+6+1+10 = 29 คือ Cu (ทองแดง) ซึ่งเป็นข้อยกเว้น d¹⁰ เสถียรกว่า",
    topic: "exceptions"
  },
  {
    id: 34,
    type: "truefalse",
    question: "ธาตุในหมู่เดียวกันมีจำนวนเวเลนซ์อิเล็กตรอนเท่ากัน",
    answer: true,
    explanation: "ถูก! ธาตุในหมู่เดียวกันมีเวเลนซ์อิเล็กตรอนเท่ากัน จึงมีสมบัติทางเคมีคล้ายกัน",
    topic: "periodic"
  },
  {
    id: 35,
    type: "multiple",
    question: "Shell distribution 2,8,18,8,1 คือธาตุใด?",
    options: ["Na", "K", "Rb", "Cs"],
    answer: 2,
    explanation: "Rb (รูบิเดียม เลขอะตอม 37) มี Shell 2,8,18,8,1 อยู่คาบ 5 หมู่ 1",
    topic: "shell"
  }
];

// ฟังก์ชัน helper สำหรับ quiz
function getRandomQuestions(count = 20) {
  const shuffled = [...QUIZ_DATA].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, QUIZ_DATA.length));
}

function getQuestionsByTopic(topic) {
  return QUIZ_DATA.filter(q => q.topic === topic);
}
