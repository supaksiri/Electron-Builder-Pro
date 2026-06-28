// elements.js — Electron Builder Pro
// ข้อมูลธาตุครบ 118 ธาตุ พร้อม electron configuration ที่ถูกต้องตามมาตรฐาน IUPAC
// พัฒนาโดย ครูสุพักตร์ศิริ

const ELEMENTS_DATA = [
  {
    atomicNumber: 1, symbol: "H", thaiName: "ไฮโดรเจน", englishName: "Hydrogen",
    group: 1, period: 1, block: "s", category: "อโลหะ",
    atomicMass: 1.008, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s1", nobleGasConfiguration: "1s1",
    shellDistribution: [1], valenceElectrons: 1, commonOxidationStates: ["+1", "-1"]
  },
  {
    atomicNumber: 2, symbol: "He", thaiName: "ฮีเลียม", englishName: "Helium",
    group: 18, period: 1, block: "s", category: "แก๊สมีตระกูล",
    atomicMass: 4.003, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2", nobleGasConfiguration: "1s2",
    shellDistribution: [2], valenceElectrons: 2, commonOxidationStates: ["0"]
  },
  {
    atomicNumber: 3, symbol: "Li", thaiName: "ลิเทียม", englishName: "Lithium",
    group: 1, period: 2, block: "s", category: "โลหะอัลคาไล",
    atomicMass: 6.941, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s1", nobleGasConfiguration: "[He] 2s1",
    shellDistribution: [2, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 4, symbol: "Be", thaiName: "เบริลเลียม", englishName: "Beryllium",
    group: 2, period: 2, block: "s", category: "โลหะอัลคาไลน์เอิร์ท",
    atomicMass: 9.012, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2", nobleGasConfiguration: "[He] 2s2",
    shellDistribution: [2, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 5, symbol: "B", thaiName: "โบรอน", englishName: "Boron",
    group: 13, period: 2, block: "p", category: "กึ่งโลหะ",
    atomicMass: 10.811, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p1", nobleGasConfiguration: "[He] 2s2 2p1",
    shellDistribution: [2, 3], valenceElectrons: 3, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 6, symbol: "C", thaiName: "คาร์บอน", englishName: "Carbon",
    group: 14, period: 2, block: "p", category: "อโลหะ",
    atomicMass: 12.011, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p2", nobleGasConfiguration: "[He] 2s2 2p2",
    shellDistribution: [2, 4], valenceElectrons: 4, commonOxidationStates: ["+4", "+2", "-4"]
  },
  {
    atomicNumber: 7, symbol: "N", thaiName: "ไนโตรเจน", englishName: "Nitrogen",
    group: 15, period: 2, block: "p", category: "อโลหะ",
    atomicMass: 14.007, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p3", nobleGasConfiguration: "[He] 2s2 2p3",
    shellDistribution: [2, 5], valenceElectrons: 5, commonOxidationStates: ["-3", "+3", "+5"]
  },
  {
    atomicNumber: 8, symbol: "O", thaiName: "ออกซิเจน", englishName: "Oxygen",
    group: 16, period: 2, block: "p", category: "อโลหะ",
    atomicMass: 15.999, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p4", nobleGasConfiguration: "[He] 2s2 2p4",
    shellDistribution: [2, 6], valenceElectrons: 6, commonOxidationStates: ["-2"]
  },
  {
    atomicNumber: 9, symbol: "F", thaiName: "ฟลูออรีน", englishName: "Fluorine",
    group: 17, period: 2, block: "p", category: "ฮาโลเจน",
    atomicMass: 18.998, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p5", nobleGasConfiguration: "[He] 2s2 2p5",
    shellDistribution: [2, 7], valenceElectrons: 7, commonOxidationStates: ["-1"]
  },
  {
    atomicNumber: 10, symbol: "Ne", thaiName: "นีออน", englishName: "Neon",
    group: 18, period: 2, block: "p", category: "แก๊สมีตระกูล",
    atomicMass: 20.180, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6", nobleGasConfiguration: "[He] 2s2 2p6",
    shellDistribution: [2, 8], valenceElectrons: 8, commonOxidationStates: ["0"]
  },
  {
    atomicNumber: 11, symbol: "Na", thaiName: "โซเดียม", englishName: "Sodium",
    group: 1, period: 3, block: "s", category: "โลหะอัลคาไล",
    atomicMass: 22.990, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s1", nobleGasConfiguration: "[Ne] 3s1",
    shellDistribution: [2, 8, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 12, symbol: "Mg", thaiName: "แมกนีเซียม", englishName: "Magnesium",
    group: 2, period: 3, block: "s", category: "โลหะอัลคาไลน์เอิร์ท",
    atomicMass: 24.305, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2", nobleGasConfiguration: "[Ne] 3s2",
    shellDistribution: [2, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 13, symbol: "Al", thaiName: "อะลูมิเนียม", englishName: "Aluminum",
    group: 13, period: 3, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 26.982, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p1", nobleGasConfiguration: "[Ne] 3s2 3p1",
    shellDistribution: [2, 8, 3], valenceElectrons: 3, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 14, symbol: "Si", thaiName: "ซิลิคอน", englishName: "Silicon",
    group: 14, period: 3, block: "p", category: "กึ่งโลหะ",
    atomicMass: 28.086, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p2", nobleGasConfiguration: "[Ne] 3s2 3p2",
    shellDistribution: [2, 8, 4], valenceElectrons: 4, commonOxidationStates: ["+4", "-4"]
  },
  {
    atomicNumber: 15, symbol: "P", thaiName: "ฟอสฟอรัส", englishName: "Phosphorus",
    group: 15, period: 3, block: "p", category: "อโลหะ",
    atomicMass: 30.974, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p3", nobleGasConfiguration: "[Ne] 3s2 3p3",
    shellDistribution: [2, 8, 5], valenceElectrons: 5, commonOxidationStates: ["-3", "+3", "+5"]
  },
  {
    atomicNumber: 16, symbol: "S", thaiName: "กำมะถัน", englishName: "Sulfur",
    group: 16, period: 3, block: "p", category: "อโลหะ",
    atomicMass: 32.065, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p4", nobleGasConfiguration: "[Ne] 3s2 3p4",
    shellDistribution: [2, 8, 6], valenceElectrons: 6, commonOxidationStates: ["-2", "+4", "+6"]
  },
  {
    atomicNumber: 17, symbol: "Cl", thaiName: "คลอรีน", englishName: "Chlorine",
    group: 17, period: 3, block: "p", category: "ฮาโลเจน",
    atomicMass: 35.453, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p5", nobleGasConfiguration: "[Ne] 3s2 3p5",
    shellDistribution: [2, 8, 7], valenceElectrons: 7, commonOxidationStates: ["-1", "+1", "+3", "+5", "+7"]
  },
  {
    atomicNumber: 18, symbol: "Ar", thaiName: "อาร์กอน", englishName: "Argon",
    group: 18, period: 3, block: "p", category: "แก๊สมีตระกูล",
    atomicMass: 39.948, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6", nobleGasConfiguration: "[Ne] 3s2 3p6",
    shellDistribution: [2, 8, 8], valenceElectrons: 8, commonOxidationStates: ["0"]
  },
  {
    atomicNumber: 19, symbol: "K", thaiName: "โพแทสเซียม", englishName: "Potassium",
    group: 1, period: 4, block: "s", category: "โลหะอัลคาไล",
    atomicMass: 39.098, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1", nobleGasConfiguration: "[Ar] 4s1",
    shellDistribution: [2, 8, 8, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 20, symbol: "Ca", thaiName: "แคลเซียม", englishName: "Calcium",
    group: 2, period: 4, block: "s", category: "โลหะอัลคาไลน์เอิร์ท",
    atomicMass: 40.078, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2", nobleGasConfiguration: "[Ar] 4s2",
    shellDistribution: [2, 8, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 21, symbol: "Sc", thaiName: "สแคนเดียม", englishName: "Scandium",
    group: 3, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 44.956, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d1", nobleGasConfiguration: "[Ar] 3d1 4s2",
    shellDistribution: [2, 8, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 22, symbol: "Ti", thaiName: "ไทเทเนียม", englishName: "Titanium",
    group: 4, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 47.867, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d2", nobleGasConfiguration: "[Ar] 3d2 4s2",
    shellDistribution: [2, 8, 10, 2], valenceElectrons: 2, commonOxidationStates: ["+4", "+3", "+2"]
  },
  {
    atomicNumber: 23, symbol: "V", thaiName: "วาเนเดียม", englishName: "Vanadium",
    group: 5, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 50.942, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d3", nobleGasConfiguration: "[Ar] 3d3 4s2",
    shellDistribution: [2, 8, 11, 2], valenceElectrons: 2, commonOxidationStates: ["+5", "+4", "+3", "+2"]
  },
  {
    atomicNumber: 24, symbol: "Cr", thaiName: "โครเมียม", englishName: "Chromium",
    group: 6, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 51.996, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1 3d5", nobleGasConfiguration: "[Ar] 3d5 4s1",
    shellDistribution: [2, 8, 13, 1], valenceElectrons: 1, commonOxidationStates: ["+6", "+3", "+2"]
  },
  {
    atomicNumber: 25, symbol: "Mn", thaiName: "แมงกานีส", englishName: "Manganese",
    group: 7, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 54.938, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d5", nobleGasConfiguration: "[Ar] 3d5 4s2",
    shellDistribution: [2, 8, 13, 2], valenceElectrons: 2, commonOxidationStates: ["+7", "+4", "+2"]
  },
  {
    atomicNumber: 26, symbol: "Fe", thaiName: "เหล็ก", englishName: "Iron",
    group: 8, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 55.845, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d6", nobleGasConfiguration: "[Ar] 3d6 4s2",
    shellDistribution: [2, 8, 14, 2], valenceElectrons: 2, commonOxidationStates: ["+3", "+2"]
  },
  {
    atomicNumber: 27, symbol: "Co", thaiName: "โคบอลต์", englishName: "Cobalt",
    group: 9, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 58.933, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d7", nobleGasConfiguration: "[Ar] 3d7 4s2",
    shellDistribution: [2, 8, 15, 2], valenceElectrons: 2, commonOxidationStates: ["+3", "+2"]
  },
  {
    atomicNumber: 28, symbol: "Ni", thaiName: "นิกเกิล", englishName: "Nickel",
    group: 10, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 58.693, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d8", nobleGasConfiguration: "[Ar] 3d8 4s2",
    shellDistribution: [2, 8, 16, 2], valenceElectrons: 2, commonOxidationStates: ["+2", "+3"]
  },
  {
    atomicNumber: 29, symbol: "Cu", thaiName: "ทองแดง", englishName: "Copper",
    group: 11, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 63.546, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1 3d10", nobleGasConfiguration: "[Ar] 3d10 4s1",
    shellDistribution: [2, 8, 18, 1], valenceElectrons: 1, commonOxidationStates: ["+2", "+1"]
  },
  {
    atomicNumber: 30, symbol: "Zn", thaiName: "สังกะสี", englishName: "Zinc",
    group: 12, period: 4, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 65.38, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10", nobleGasConfiguration: "[Ar] 3d10 4s2",
    shellDistribution: [2, 8, 18, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 31, symbol: "Ga", thaiName: "แกลเลียม", englishName: "Gallium",
    group: 13, period: 4, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 69.723, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1", nobleGasConfiguration: "[Ar] 3d10 4s2 4p1",
    shellDistribution: [2, 8, 18, 3], valenceElectrons: 3, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 32, symbol: "Ge", thaiName: "เจอร์เมเนียม", englishName: "Germanium",
    group: 14, period: 4, block: "p", category: "กึ่งโลหะ",
    atomicMass: 72.630, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2", nobleGasConfiguration: "[Ar] 3d10 4s2 4p2",
    shellDistribution: [2, 8, 18, 4], valenceElectrons: 4, commonOxidationStates: ["+4", "+2"]
  },
  {
    atomicNumber: 33, symbol: "As", thaiName: "สารหนู", englishName: "Arsenic",
    group: 15, period: 4, block: "p", category: "กึ่งโลหะ",
    atomicMass: 74.922, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3", nobleGasConfiguration: "[Ar] 3d10 4s2 4p3",
    shellDistribution: [2, 8, 18, 5], valenceElectrons: 5, commonOxidationStates: ["-3", "+3", "+5"]
  },
  {
    atomicNumber: 34, symbol: "Se", thaiName: "ซีลีเนียม", englishName: "Selenium",
    group: 16, period: 4, block: "p", category: "อโลหะ",
    atomicMass: 78.971, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4", nobleGasConfiguration: "[Ar] 3d10 4s2 4p4",
    shellDistribution: [2, 8, 18, 6], valenceElectrons: 6, commonOxidationStates: ["-2", "+4", "+6"]
  },
  {
    atomicNumber: 35, symbol: "Br", thaiName: "โบรมีน", englishName: "Bromine",
    group: 17, period: 4, block: "p", category: "ฮาโลเจน",
    atomicMass: 79.904, stateAtSTP: "ของเหลว",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5", nobleGasConfiguration: "[Ar] 3d10 4s2 4p5",
    shellDistribution: [2, 8, 18, 7], valenceElectrons: 7, commonOxidationStates: ["-1", "+1", "+3", "+5"]
  },
  {
    atomicNumber: 36, symbol: "Kr", thaiName: "คริปทอน", englishName: "Krypton",
    group: 18, period: 4, block: "p", category: "แก๊สมีตระกูล",
    atomicMass: 83.798, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6", nobleGasConfiguration: "[Ar] 3d10 4s2 4p6",
    shellDistribution: [2, 8, 18, 8], valenceElectrons: 8, commonOxidationStates: ["0"]
  },
  {
    atomicNumber: 37, symbol: "Rb", thaiName: "รูบิเดียม", englishName: "Rubidium",
    group: 1, period: 5, block: "s", category: "โลหะอัลคาไล",
    atomicMass: 85.468, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1", nobleGasConfiguration: "[Kr] 5s1",
    shellDistribution: [2, 8, 18, 8, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 38, symbol: "Sr", thaiName: "สทรอนเทียม", englishName: "Strontium",
    group: 2, period: 5, block: "s", category: "โลหะอัลคาไลน์เอิร์ท",
    atomicMass: 87.62, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2", nobleGasConfiguration: "[Kr] 5s2",
    shellDistribution: [2, 8, 18, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 39, symbol: "Y", thaiName: "อิตเทรียม", englishName: "Yttrium",
    group: 3, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 88.906, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1", nobleGasConfiguration: "[Kr] 4d1 5s2",
    shellDistribution: [2, 8, 18, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 40, symbol: "Zr", thaiName: "เซอร์โคเนียม", englishName: "Zirconium",
    group: 4, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 91.224, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2", nobleGasConfiguration: "[Kr] 4d2 5s2",
    shellDistribution: [2, 8, 18, 10, 2], valenceElectrons: 2, commonOxidationStates: ["+4"]
  },
  {
    atomicNumber: 41, symbol: "Nb", thaiName: "ไนโอเบียม", englishName: "Niobium",
    group: 5, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 92.906, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4", nobleGasConfiguration: "[Kr] 4d4 5s1",
    shellDistribution: [2, 8, 18, 12, 1], valenceElectrons: 1, commonOxidationStates: ["+5", "+3"]
  },
  {
    atomicNumber: 42, symbol: "Mo", thaiName: "โมลิบดีนัม", englishName: "Molybdenum",
    group: 6, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 95.96, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5", nobleGasConfiguration: "[Kr] 4d5 5s1",
    shellDistribution: [2, 8, 18, 13, 1], valenceElectrons: 1, commonOxidationStates: ["+6", "+4", "+2"]
  },
  {
    atomicNumber: 43, symbol: "Tc", thaiName: "เทคนีเทียม", englishName: "Technetium",
    group: 7, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 98, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5", nobleGasConfiguration: "[Kr] 4d5 5s2",
    shellDistribution: [2, 8, 18, 13, 2], valenceElectrons: 2, commonOxidationStates: ["+7", "+4"]
  },
  {
    atomicNumber: 44, symbol: "Ru", thaiName: "รูทีเนียม", englishName: "Ruthenium",
    group: 8, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 101.07, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7", nobleGasConfiguration: "[Kr] 4d7 5s1",
    shellDistribution: [2, 8, 18, 15, 1], valenceElectrons: 1, commonOxidationStates: ["+4", "+3", "+2"]
  },
  {
    atomicNumber: 45, symbol: "Rh", thaiName: "โรเดียม", englishName: "Rhodium",
    group: 9, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 102.906, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8", nobleGasConfiguration: "[Kr] 4d8 5s1",
    shellDistribution: [2, 8, 18, 16, 1], valenceElectrons: 1, commonOxidationStates: ["+3", "+2"]
  },
  {
    atomicNumber: 46, symbol: "Pd", thaiName: "แพลเลเดียม", englishName: "Palladium",
    group: 10, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 106.42, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10", nobleGasConfiguration: "[Kr] 4d10",
    shellDistribution: [2, 8, 18, 18], valenceElectrons: 0, commonOxidationStates: ["+4", "+2"]
  },
  {
    atomicNumber: 47, symbol: "Ag", thaiName: "เงิน", englishName: "Silver",
    group: 11, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 107.868, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10", nobleGasConfiguration: "[Kr] 4d10 5s1",
    shellDistribution: [2, 8, 18, 18, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 48, symbol: "Cd", thaiName: "แคดเมียม", englishName: "Cadmium",
    group: 12, period: 5, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 112.414, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10", nobleGasConfiguration: "[Kr] 4d10 5s2",
    shellDistribution: [2, 8, 18, 18, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 49, symbol: "In", thaiName: "อินเดียม", englishName: "Indium",
    group: 13, period: 5, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 114.818, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1", nobleGasConfiguration: "[Kr] 4d10 5s2 5p1",
    shellDistribution: [2, 8, 18, 18, 3], valenceElectrons: 3, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 50, symbol: "Sn", thaiName: "ดีบุก", englishName: "Tin",
    group: 14, period: 5, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 118.710, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2", nobleGasConfiguration: "[Kr] 4d10 5s2 5p2",
    shellDistribution: [2, 8, 18, 18, 4], valenceElectrons: 4, commonOxidationStates: ["+4", "+2"]
  },
  {
    atomicNumber: 51, symbol: "Sb", thaiName: "พลวง", englishName: "Antimony",
    group: 15, period: 5, block: "p", category: "กึ่งโลหะ",
    atomicMass: 121.760, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3", nobleGasConfiguration: "[Kr] 4d10 5s2 5p3",
    shellDistribution: [2, 8, 18, 18, 5], valenceElectrons: 5, commonOxidationStates: ["-3", "+3", "+5"]
  },
  {
    atomicNumber: 52, symbol: "Te", thaiName: "เทลลูเรียม", englishName: "Tellurium",
    group: 16, period: 5, block: "p", category: "กึ่งโลหะ",
    atomicMass: 127.60, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4", nobleGasConfiguration: "[Kr] 4d10 5s2 5p4",
    shellDistribution: [2, 8, 18, 18, 6], valenceElectrons: 6, commonOxidationStates: ["-2", "+4", "+6"]
  },
  {
    atomicNumber: 53, symbol: "I", thaiName: "ไอโอดีน", englishName: "Iodine",
    group: 17, period: 5, block: "p", category: "ฮาโลเจน",
    atomicMass: 126.904, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5", nobleGasConfiguration: "[Kr] 4d10 5s2 5p5",
    shellDistribution: [2, 8, 18, 18, 7], valenceElectrons: 7, commonOxidationStates: ["-1", "+1", "+5", "+7"]
  },
  {
    atomicNumber: 54, symbol: "Xe", thaiName: "ซีนอน", englishName: "Xenon",
    group: 18, period: 5, block: "p", category: "แก๊สมีตระกูล",
    atomicMass: 131.293, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6", nobleGasConfiguration: "[Kr] 4d10 5s2 5p6",
    shellDistribution: [2, 8, 18, 18, 8], valenceElectrons: 8, commonOxidationStates: ["0"]
  },
  {
    atomicNumber: 55, symbol: "Cs", thaiName: "ซีเซียม", englishName: "Cesium",
    group: 1, period: 6, block: "s", category: "โลหะอัลคาไล",
    atomicMass: 132.905, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1", nobleGasConfiguration: "[Xe] 6s1",
    shellDistribution: [2, 8, 18, 18, 8, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 56, symbol: "Ba", thaiName: "แบเรียม", englishName: "Barium",
    group: 2, period: 6, block: "s", category: "โลหะอัลคาไลน์เอิร์ท",
    atomicMass: 137.327, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2", nobleGasConfiguration: "[Xe] 6s2",
    shellDistribution: [2, 8, 18, 18, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 57, symbol: "La", thaiName: "แลนทานัม", englishName: "Lanthanum",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 138.905, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1", nobleGasConfiguration: "[Xe] 5d1 6s2",
    shellDistribution: [2, 8, 18, 18, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 58, symbol: "Ce", thaiName: "ซีเรียม", englishName: "Cerium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 140.116, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1 5d1", nobleGasConfiguration: "[Xe] 4f1 5d1 6s2",
    shellDistribution: [2, 8, 18, 19, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+4", "+3"]
  },
  {
    atomicNumber: 59, symbol: "Pr", thaiName: "เพรซิโอดิเมียม", englishName: "Praseodymium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 140.908, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3", nobleGasConfiguration: "[Xe] 4f3 6s2",
    shellDistribution: [2, 8, 18, 21, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 60, symbol: "Nd", thaiName: "นีโอดิเมียม", englishName: "Neodymium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 144.242, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4", nobleGasConfiguration: "[Xe] 4f4 6s2",
    shellDistribution: [2, 8, 18, 22, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 61, symbol: "Pm", thaiName: "โพรมีเทียม", englishName: "Promethium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 145, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5", nobleGasConfiguration: "[Xe] 4f5 6s2",
    shellDistribution: [2, 8, 18, 23, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 62, symbol: "Sm", thaiName: "ซาแมเรียม", englishName: "Samarium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 150.36, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6", nobleGasConfiguration: "[Xe] 4f6 6s2",
    shellDistribution: [2, 8, 18, 24, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3", "+2"]
  },
  {
    atomicNumber: 63, symbol: "Eu", thaiName: "ยูโรเพียม", englishName: "Europium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 151.964, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7", nobleGasConfiguration: "[Xe] 4f7 6s2",
    shellDistribution: [2, 8, 18, 25, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3", "+2"]
  },
  {
    atomicNumber: 64, symbol: "Gd", thaiName: "แกโดลิเนียม", englishName: "Gadolinium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 157.25, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1", nobleGasConfiguration: "[Xe] 4f7 5d1 6s2",
    shellDistribution: [2, 8, 18, 25, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 65, symbol: "Tb", thaiName: "เทอร์เบียม", englishName: "Terbium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 158.925, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9", nobleGasConfiguration: "[Xe] 4f9 6s2",
    shellDistribution: [2, 8, 18, 27, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 66, symbol: "Dy", thaiName: "ดิสโพรเซียม", englishName: "Dysprosium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 162.500, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10", nobleGasConfiguration: "[Xe] 4f10 6s2",
    shellDistribution: [2, 8, 18, 28, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 67, symbol: "Ho", thaiName: "โฮลเมียม", englishName: "Holmium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 164.930, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11", nobleGasConfiguration: "[Xe] 4f11 6s2",
    shellDistribution: [2, 8, 18, 29, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 68, symbol: "Er", thaiName: "เออร์เบียม", englishName: "Erbium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 167.259, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12", nobleGasConfiguration: "[Xe] 4f12 6s2",
    shellDistribution: [2, 8, 18, 30, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 69, symbol: "Tm", thaiName: "ทูเลียม", englishName: "Thulium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 168.934, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13", nobleGasConfiguration: "[Xe] 4f13 6s2",
    shellDistribution: [2, 8, 18, 31, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 70, symbol: "Yb", thaiName: "อิตเทอร์เบียม", englishName: "Ytterbium",
    group: null, period: 6, block: "f", category: "แลนทาไนด์",
    atomicMass: 173.04, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14", nobleGasConfiguration: "[Xe] 4f14 6s2",
    shellDistribution: [2, 8, 18, 32, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3", "+2"]
  },
  {
    atomicNumber: 71, symbol: "Lu", thaiName: "ลูทีเทียม", englishName: "Lutetium",
    group: 3, period: 6, block: "d", category: "แลนทาไนด์",
    atomicMass: 174.967, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1", nobleGasConfiguration: "[Xe] 4f14 5d1 6s2",
    shellDistribution: [2, 8, 18, 32, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 72, symbol: "Hf", thaiName: "แฮฟเนียม", englishName: "Hafnium",
    group: 4, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 178.49, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2", nobleGasConfiguration: "[Xe] 4f14 5d2 6s2",
    shellDistribution: [2, 8, 18, 32, 10, 2], valenceElectrons: 2, commonOxidationStates: ["+4"]
  },
  {
    atomicNumber: 73, symbol: "Ta", thaiName: "แทนทาลัม", englishName: "Tantalum",
    group: 5, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 180.948, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3", nobleGasConfiguration: "[Xe] 4f14 5d3 6s2",
    shellDistribution: [2, 8, 18, 32, 11, 2], valenceElectrons: 2, commonOxidationStates: ["+5"]
  },
  {
    atomicNumber: 74, symbol: "W", thaiName: "ทังสเตน", englishName: "Tungsten",
    group: 6, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 183.84, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4", nobleGasConfiguration: "[Xe] 4f14 5d4 6s2",
    shellDistribution: [2, 8, 18, 32, 12, 2], valenceElectrons: 2, commonOxidationStates: ["+6", "+4"]
  },
  {
    atomicNumber: 75, symbol: "Re", thaiName: "รีเนียม", englishName: "Rhenium",
    group: 7, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 186.207, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5", nobleGasConfiguration: "[Xe] 4f14 5d5 6s2",
    shellDistribution: [2, 8, 18, 32, 13, 2], valenceElectrons: 2, commonOxidationStates: ["+7", "+4"]
  },
  {
    atomicNumber: 76, symbol: "Os", thaiName: "ออสเมียม", englishName: "Osmium",
    group: 8, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 190.23, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6", nobleGasConfiguration: "[Xe] 4f14 5d6 6s2",
    shellDistribution: [2, 8, 18, 32, 14, 2], valenceElectrons: 2, commonOxidationStates: ["+4", "+3"]
  },
  {
    atomicNumber: 77, symbol: "Ir", thaiName: "อิริเดียม", englishName: "Iridium",
    group: 9, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 192.217, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7", nobleGasConfiguration: "[Xe] 4f14 5d7 6s2",
    shellDistribution: [2, 8, 18, 32, 15, 2], valenceElectrons: 2, commonOxidationStates: ["+4", "+3"]
  },
  {
    atomicNumber: 78, symbol: "Pt", thaiName: "แพลทินัม", englishName: "Platinum",
    group: 10, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 195.084, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9", nobleGasConfiguration: "[Xe] 4f14 5d9 6s1",
    shellDistribution: [2, 8, 18, 32, 17, 1], valenceElectrons: 1, commonOxidationStates: ["+4", "+2"]
  },
  {
    atomicNumber: 79, symbol: "Au", thaiName: "ทอง", englishName: "Gold",
    group: 11, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 196.967, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10", nobleGasConfiguration: "[Xe] 4f14 5d10 6s1",
    shellDistribution: [2, 8, 18, 32, 18, 1], valenceElectrons: 1, commonOxidationStates: ["+3", "+1"]
  },
  {
    atomicNumber: 80, symbol: "Hg", thaiName: "ปรอท", englishName: "Mercury",
    group: 12, period: 6, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 200.592, stateAtSTP: "ของเหลว",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2",
    shellDistribution: [2, 8, 18, 32, 18, 2], valenceElectrons: 2, commonOxidationStates: ["+2", "+1"]
  },
  {
    atomicNumber: 81, symbol: "Tl", thaiName: "แทลเลียม", englishName: "Thallium",
    group: 13, period: 6, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 204.383, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2 6p1",
    shellDistribution: [2, 8, 18, 32, 18, 3], valenceElectrons: 3, commonOxidationStates: ["+3", "+1"]
  },
  {
    atomicNumber: 82, symbol: "Pb", thaiName: "ตะกั่ว", englishName: "Lead",
    group: 14, period: 6, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 207.2, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2 6p2",
    shellDistribution: [2, 8, 18, 32, 18, 4], valenceElectrons: 4, commonOxidationStates: ["+4", "+2"]
  },
  {
    atomicNumber: 83, symbol: "Bi", thaiName: "บิสมัท", englishName: "Bismuth",
    group: 15, period: 6, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 208.980, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2 6p3",
    shellDistribution: [2, 8, 18, 32, 18, 5], valenceElectrons: 5, commonOxidationStates: ["+5", "+3"]
  },
  {
    atomicNumber: 84, symbol: "Po", thaiName: "โพโลเนียม", englishName: "Polonium",
    group: 16, period: 6, block: "p", category: "กึ่งโลหะ",
    atomicMass: 209, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2 6p4",
    shellDistribution: [2, 8, 18, 32, 18, 6], valenceElectrons: 6, commonOxidationStates: ["+4", "+2"]
  },
  {
    atomicNumber: 85, symbol: "At", thaiName: "แอสทาทีน", englishName: "Astatine",
    group: 17, period: 6, block: "p", category: "ฮาโลเจน",
    atomicMass: 210, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2 6p5",
    shellDistribution: [2, 8, 18, 32, 18, 7], valenceElectrons: 7, commonOxidationStates: ["-1", "+1"]
  },
  {
    atomicNumber: 86, symbol: "Rn", thaiName: "เรดอน", englishName: "Radon",
    group: 18, period: 6, block: "p", category: "แก๊สมีตระกูล",
    atomicMass: 222, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6", nobleGasConfiguration: "[Xe] 4f14 5d10 6s2 6p6",
    shellDistribution: [2, 8, 18, 32, 18, 8], valenceElectrons: 8, commonOxidationStates: ["0"]
  },
  {
    atomicNumber: 87, symbol: "Fr", thaiName: "แฟรนเซียม", englishName: "Francium",
    group: 1, period: 7, block: "s", category: "โลหะอัลคาไล",
    atomicMass: 223, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1", nobleGasConfiguration: "[Rn] 7s1",
    shellDistribution: [2, 8, 18, 32, 18, 8, 1], valenceElectrons: 1, commonOxidationStates: ["+1"]
  },
  {
    atomicNumber: 88, symbol: "Ra", thaiName: "เรเดียม", englishName: "Radium",
    group: 2, period: 7, block: "s", category: "โลหะอัลคาไลน์เอิร์ท",
    atomicMass: 226, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2", nobleGasConfiguration: "[Rn] 7s2",
    shellDistribution: [2, 8, 18, 32, 18, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 89, symbol: "Ac", thaiName: "แอกทิเนียม", englishName: "Actinium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 227, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1", nobleGasConfiguration: "[Rn] 6d1 7s2",
    shellDistribution: [2, 8, 18, 32, 18, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 90, symbol: "Th", thaiName: "ทอเรียม", englishName: "Thorium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 232.038, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2", nobleGasConfiguration: "[Rn] 6d2 7s2",
    shellDistribution: [2, 8, 18, 32, 18, 10, 2], valenceElectrons: 2, commonOxidationStates: ["+4"]
  },
  {
    atomicNumber: 91, symbol: "Pa", thaiName: "โพรแทกทิเนียม", englishName: "Protactinium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 231.036, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1", nobleGasConfiguration: "[Rn] 5f2 6d1 7s2",
    shellDistribution: [2, 8, 18, 32, 20, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+5", "+4"]
  },
  {
    atomicNumber: 92, symbol: "U", thaiName: "ยูเรเนียม", englishName: "Uranium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 238.029, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1", nobleGasConfiguration: "[Rn] 5f3 6d1 7s2",
    shellDistribution: [2, 8, 18, 32, 21, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+6", "+4", "+3"]
  },
  {
    atomicNumber: 93, symbol: "Np", thaiName: "เนปทูเนียม", englishName: "Neptunium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 237, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1", nobleGasConfiguration: "[Rn] 5f4 6d1 7s2",
    shellDistribution: [2, 8, 18, 32, 22, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+5", "+4", "+3"]
  },
  {
    atomicNumber: 94, symbol: "Pu", thaiName: "พลูโทเนียม", englishName: "Plutonium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 244, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6", nobleGasConfiguration: "[Rn] 5f6 7s2",
    shellDistribution: [2, 8, 18, 32, 24, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+4", "+3", "+6"]
  },
  {
    atomicNumber: 95, symbol: "Am", thaiName: "อเมริเซียม", englishName: "Americium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 243, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7", nobleGasConfiguration: "[Rn] 5f7 7s2",
    shellDistribution: [2, 8, 18, 32, 25, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 96, symbol: "Cm", thaiName: "คูเรียม", englishName: "Curium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 247, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1", nobleGasConfiguration: "[Rn] 5f7 6d1 7s2",
    shellDistribution: [2, 8, 18, 32, 25, 9, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 97, symbol: "Bk", thaiName: "เบอร์คีเลียม", englishName: "Berkelium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 247, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9", nobleGasConfiguration: "[Rn] 5f9 7s2",
    shellDistribution: [2, 8, 18, 32, 27, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 98, symbol: "Cf", thaiName: "แคลิฟอร์เนียม", englishName: "Californium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 251, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10", nobleGasConfiguration: "[Rn] 5f10 7s2",
    shellDistribution: [2, 8, 18, 32, 28, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 99, symbol: "Es", thaiName: "ไอน์สไตเนียม", englishName: "Einsteinium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 252, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11", nobleGasConfiguration: "[Rn] 5f11 7s2",
    shellDistribution: [2, 8, 18, 32, 29, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 100, symbol: "Fm", thaiName: "เฟอร์เมียม", englishName: "Fermium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 257, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12", nobleGasConfiguration: "[Rn] 5f12 7s2",
    shellDistribution: [2, 8, 18, 32, 30, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 101, symbol: "Md", thaiName: "เมนเดเลเวียม", englishName: "Mendelevium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 258, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13", nobleGasConfiguration: "[Rn] 5f13 7s2",
    shellDistribution: [2, 8, 18, 32, 31, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 102, symbol: "No", thaiName: "โนเบเลียม", englishName: "Nobelium",
    group: null, period: 7, block: "f", category: "แอกทิไนด์",
    atomicMass: 259, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14", nobleGasConfiguration: "[Rn] 5f14 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 8, 2], valenceElectrons: 2, commonOxidationStates: ["+2", "+3"]
  },
  {
    atomicNumber: 103, symbol: "Lr", thaiName: "ลอว์เรนเซียม", englishName: "Lawrencium",
    group: 3, period: 7, block: "d", category: "แอกทิไนด์",
    atomicMass: 266, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1", nobleGasConfiguration: "[Rn] 5f14 7s2 7p1",
    shellDistribution: [2, 8, 18, 32, 32, 8, 3], valenceElectrons: 3, commonOxidationStates: ["+3"]
  },
  {
    atomicNumber: 104, symbol: "Rf", thaiName: "รัทเทอร์ฟอร์เดียม", englishName: "Rutherfordium",
    group: 4, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 267, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2", nobleGasConfiguration: "[Rn] 5f14 6d2 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 10, 2], valenceElectrons: 2, commonOxidationStates: ["+4"]
  },
  {
    atomicNumber: 105, symbol: "Db", thaiName: "ดูบเนียม", englishName: "Dubnium",
    group: 5, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 268, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3", nobleGasConfiguration: "[Rn] 5f14 6d3 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 11, 2], valenceElectrons: 2, commonOxidationStates: ["+5"]
  },
  {
    atomicNumber: 106, symbol: "Sg", thaiName: "ซีบอร์เกียม", englishName: "Seaborgium",
    group: 6, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 269, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4", nobleGasConfiguration: "[Rn] 5f14 6d4 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 12, 2], valenceElectrons: 2, commonOxidationStates: ["+6"]
  },
  {
    atomicNumber: 107, symbol: "Bh", thaiName: "โบห์เรียม", englishName: "Bohrium",
    group: 7, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 270, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5", nobleGasConfiguration: "[Rn] 5f14 6d5 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 13, 2], valenceElectrons: 2, commonOxidationStates: ["+7"]
  },
  {
    atomicNumber: 108, symbol: "Hs", thaiName: "ฮัสเซียม", englishName: "Hassium",
    group: 8, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 277, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6", nobleGasConfiguration: "[Rn] 5f14 6d6 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 14, 2], valenceElectrons: 2, commonOxidationStates: ["+8"]
  },
  {
    atomicNumber: 109, symbol: "Mt", thaiName: "ไมต์เนเรียม", englishName: "Meitnerium",
    group: 9, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 278, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7", nobleGasConfiguration: "[Rn] 5f14 6d7 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 15, 2], valenceElectrons: 2, commonOxidationStates: ["+6"]
  },
  {
    atomicNumber: 110, symbol: "Ds", thaiName: "ดาร์มชตัดเทียม", englishName: "Darmstadtium",
    group: 10, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 281, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8", nobleGasConfiguration: "[Rn] 5f14 6d8 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 16, 2], valenceElectrons: 2, commonOxidationStates: ["+6"]
  },
  {
    atomicNumber: 111, symbol: "Rg", thaiName: "เรินต์เกเนียม", englishName: "Roentgenium",
    group: 11, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 282, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9", nobleGasConfiguration: "[Rn] 5f14 6d9 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 17, 2], valenceElectrons: 2, commonOxidationStates: ["+3", "+1"]
  },
  {
    atomicNumber: 112, symbol: "Cn", thaiName: "โคเปอร์นิเซียม", englishName: "Copernicium",
    group: 12, period: 7, block: "d", category: "โลหะทรานซิชัน",
    atomicMass: 285, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2",
    shellDistribution: [2, 8, 18, 32, 32, 18, 2], valenceElectrons: 2, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 113, symbol: "Nh", thaiName: "นิฮอนเนียม", englishName: "Nihonium",
    group: 13, period: 7, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 286, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2 7p1",
    shellDistribution: [2, 8, 18, 32, 32, 18, 3], valenceElectrons: 3, commonOxidationStates: ["+1", "+3"]
  },
  {
    atomicNumber: 114, symbol: "Fl", thaiName: "ฟลีโรเวียม", englishName: "Flerovium",
    group: 14, period: 7, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 289, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2 7p2",
    shellDistribution: [2, 8, 18, 32, 32, 18, 4], valenceElectrons: 4, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 115, symbol: "Mc", thaiName: "มอสโคเวียม", englishName: "Moscovium",
    group: 15, period: 7, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 290, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2 7p3",
    shellDistribution: [2, 8, 18, 32, 32, 18, 5], valenceElectrons: 5, commonOxidationStates: ["+1", "+3"]
  },
  {
    atomicNumber: 116, symbol: "Lv", thaiName: "ลิเวอร์มอเรียม", englishName: "Livermorium",
    group: 16, period: 7, block: "p", category: "โลหะหลังทรานซิชัน",
    atomicMass: 293, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2 7p4",
    shellDistribution: [2, 8, 18, 32, 32, 18, 6], valenceElectrons: 6, commonOxidationStates: ["+2"]
  },
  {
    atomicNumber: 117, symbol: "Ts", thaiName: "เทนเนสซีน", englishName: "Tennessine",
    group: 17, period: 7, block: "p", category: "ฮาโลเจน",
    atomicMass: 294, stateAtSTP: "ของแข็ง",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2 7p5",
    shellDistribution: [2, 8, 18, 32, 32, 18, 7], valenceElectrons: 7, commonOxidationStates: ["-1", "+1", "+3", "+5"]
  },
  {
    atomicNumber: 118, symbol: "Og", thaiName: "โอกาเนสซอน", englishName: "Oganesson",
    group: 18, period: 7, block: "p", category: "แก๊สมีตระกูล",
    atomicMass: 294, stateAtSTP: "แก๊ส",
    electronConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6", nobleGasConfiguration: "[Rn] 5f14 6d10 7s2 7p6",
    shellDistribution: [2, 8, 18, 32, 32, 18, 8], valenceElectrons: 8, commonOxidationStates: ["0"]
  }
];

// ── Helper functions ──────────────────────────────────────────────────────────

function getElementByAtomicNumber(number) {
  return ELEMENTS_DATA.find(el => el.atomicNumber === number) || null;
}

function getElementBySymbol(symbol) {
  return ELEMENTS_DATA.find(el => el.symbol.toLowerCase() === symbol.toLowerCase()) || null;
}

function searchElements(keyword) {
  if (!keyword) return ELEMENTS_DATA;
  const q = keyword.toString().toLowerCase().trim();
  return ELEMENTS_DATA.filter(el =>
    el.thaiName.toLowerCase().includes(q) ||
    el.englishName.toLowerCase().includes(q) ||
    el.symbol.toLowerCase().includes(q) ||
    el.atomicNumber.toString() === q
  );
}

const CATEGORY_COLORS = {
  "โลหะอัลคาไล":          { bg: "#ff6b6b", text: "#fff" },
  "โลหะอัลคาไลน์เอิร์ท":  { bg: "#ffa94d", text: "#fff" },
  "โลหะทรานซิชัน":        { bg: "#74c0fc", text: "#1c1c2e" },
  "โลหะหลังทรานซิชัน":    { bg: "#63e6be", text: "#1c1c2e" },
  "กึ่งโลหะ":              { bg: "#8ce99a", text: "#1c1c2e" },
  "อโลหะ":                { bg: "#ffd43b", text: "#1c1c2e" },
  "ฮาโลเจน":              { bg: "#da77f2", text: "#fff" },
  "แก๊สมีตระกูล":          { bg: "#f783ac", text: "#fff" },
  "แลนทาไนด์":            { bg: "#a9e34b", text: "#1c1c2e" },
  "แอกทิไนด์":            { bg: "#69db7c", text: "#1c1c2e" }
};

const SHELL_NAMES = ["K", "L", "M", "N", "O", "P", "Q"];

const SHELL_COLORS = {
  1: "#4dabf7", 2: "#69db7c", 3: "#ff922b",
  4: "#da77f2", 5: "#f783ac", 6: "#74c0fc", 7: "#ced4da"
};

function parseElectronConfiguration(configStr) {
  if (!configStr) return [];
  const parts = configStr.trim().split(/\s+/);
  return parts.map(part => {
    const match = part.match(/^(\d+)([spdf])(\d+)$/);
    if (!match) return null;
    return { n: parseInt(match[1]), type: match[2], count: parseInt(match[3]), label: part };
  }).filter(Boolean);
}

function calculateShellDistribution(configStr) {
  const subshells = parseElectronConfiguration(configStr);
  const shells = {};
  let maxN = 0;
  subshells.forEach(sub => {
    if (!shells[sub.n]) shells[sub.n] = 0;
    shells[sub.n] += sub.count;
    if (sub.n > maxN) maxN = sub.n;
  });
  const result = [];
  for (let i = 1; i <= maxN; i++) result.push(shells[i] || 0);
  return result;
}

function buildOrbitalBoxes(type, count) {
  const numOrbitals = { s: 1, p: 3, d: 5, f: 7 }[type] || 1;
  const boxes = new Array(numOrbitals).fill(0);
  const singles = Math.min(count, numOrbitals);
  for (let i = 0; i < singles; i++) boxes[i] = 1;
  for (let i = 0; i < count - numOrbitals; i++) { if (i < numOrbitals) boxes[i] = 2; }
  return boxes;
}

function boxToArrow(state) {
  if (state === 0) return "";
  if (state === 1) return "↑";
  return "↑↓";
}

function generateFillingSteps(configStr) {
  const subshells = parseElectronConfiguration(configStr);
  const steps = [];
  const currentShells = {};

  subshells.forEach(sub => {
    const numOrbitals = { s: 1, p: 3, d: 5, f: 7 }[sub.type] || 1;
    const singles = Math.min(sub.count, numOrbitals);
    const pairs = sub.count - singles;

    for (let i = 0; i < singles; i++) {
      if (!currentShells[sub.n]) currentShells[sub.n] = 0;
      currentShells[sub.n]++;
      steps.push({
        electronNum: steps.length + 1,
        subshellLabel: `${sub.n}${sub.type}`,
        spin: "↑", shellN: sub.n,
        shellSnapshot: { ...currentShells }
      });
    }
    for (let i = 0; i < pairs; i++) {
      if (!currentShells[sub.n]) currentShells[sub.n] = 0;
      currentShells[sub.n]++;
      steps.push({
        electronNum: steps.length + 1,
        subshellLabel: `${sub.n}${sub.type}`,
        spin: "↓", shellN: sub.n,
        shellSnapshot: { ...currentShells }
      });
    }
  });
  return steps;
}

function generateExplanation(element) {
  const { thaiName, atomicNumber, electronConfiguration, shellDistribution, valenceElectrons, group, period, block, category } = element;
  const shellStr = shellDistribution.join(', ');
  const shellCount = shellDistribution.length;
  let blockDesc = '';
  if (block === 's') blockDesc = 'เป็นธาตุ s-block อิเล็กตรอนนอกสุดอยู่ใน s orbital';
  else if (block === 'p') blockDesc = 'เป็นธาตุ p-block อิเล็กตรอนนอกสุดอยู่ใน p orbital';
  else if (block === 'd') blockDesc = 'เป็นธาตุ d-block (โลหะทรานซิชัน) มีการเติมอิเล็กตรอนใน d orbital';
  else if (block === 'f') blockDesc = 'เป็นธาตุ f-block มีการเติมอิเล็กตรอนใน f orbital';
  return `${thaiName}มีเลขอะตอม ${atomicNumber} จึงมีอิเล็กตรอน ${atomicNumber} ตัว เมื่อเติมตามกฎ Aufbau จะได้ ${electronConfiguration} เมื่อนับตาม Shell จะได้ ${shellStr} อยู่คาบที่ ${period} หมู่ที่ ${group || '-'} ${blockDesc} มีเวเลนซ์อิเล็กตรอน ${valenceElectrons} ตัว จัดเป็น${category}`;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ELEMENTS_DATA, CATEGORY_COLORS, SHELL_NAMES, SHELL_COLORS,
    getElementByAtomicNumber, getElementBySymbol, searchElements,
    parseElectronConfiguration, calculateShellDistribution,
    buildOrbitalBoxes, boxToArrow, generateFillingSteps, generateExplanation
  };
}
