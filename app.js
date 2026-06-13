const ASSET_BASE =
  "https://raw.githubusercontent.com/sendou-ink/sendou.ink/main/public/static-assets/img/main-weapons";

const categories = [
  {
    name: "SHOOTERS",
    label: "射击枪",
    color: "#b9ff38",
    ids: [
      0, 1, 10, 11, 20, 21, 22, 30, 31, 32, 40, 41, 42, 45, 46, 47, 50,
      51, 60, 61, 70, 71, 72, 80, 81, 82, 90, 91, 92, 100, 101, 300,
      301, 302, 310, 311, 312, 400, 401,
    ],
  },
  {
    name: "BLASTERS",
    label: "爆破枪",
    color: "#ff4fad",
    ids: [200, 201, 205, 210, 211, 212, 220, 221, 230, 231, 240, 241, 250, 251, 252, 260, 261],
  },
  {
    name: "ROLLERS",
    label: "滚筒",
    color: "#31e7ff",
    ids: [1000, 1001, 1002, 1010, 1011, 1015, 1020, 1021, 1022, 1030, 1031, 1040, 1041, 1042],
  },
  {
    name: "BRUSHES",
    label: "画笔",
    color: "#ffd84a",
    ids: [1100, 1101, 1110, 1111, 1112, 1115, 1120, 1121, 1122],
  },
  {
    name: "CHARGERS",
    label: "蓄力狙击",
    color: "#7ef58f",
    ids: [2000, 2001, 2010, 2011, 2012, 2015, 2020, 2021, 2022, 2030, 2031, 2040, 2041, 2050, 2051, 2060, 2061, 2070, 2071],
  },
  {
    name: "SLOSHERS",
    label: "泼桶",
    color: "#ff8a3d",
    ids: [3000, 3001, 3005, 3010, 3011, 3012, 3020, 3021, 3030, 3031, 3040, 3041, 3050, 3051, 3052],
  },
  {
    name: "SPLATLINGS",
    label: "旋转枪",
    color: "#5fb7ff",
    ids: [4000, 4001, 4002, 4010, 4011, 4015, 4020, 4021, 4022, 4030, 4031, 4040, 4041, 4050, 4051],
  },
  {
    name: "DUALIES",
    label: "双枪",
    color: "#ff6fcb",
    ids: [5000, 5001, 5002, 5010, 5015, 5011, 5012, 5020, 5021, 5030, 5031, 5032, 5040, 5041, 5050, 5051],
  },
  {
    name: "BRELLAS",
    label: "防空伞",
    color: "#92f0ff",
    ids: [6000, 6001, 6005, 6010, 6011, 6012, 6020, 6021, 6022, 6030, 6031],
  },
  {
    name: "STRINGERS",
    label: "弓",
    color: "#c8ff57",
    ids: [7010, 7011, 7012, 7015, 7020, 7021, 7022, 7030, 7031],
  },
  {
    name: "SPLATANAS",
    label: "刮水刀",
    color: "#ffeb70",
    ids: [8000, 8001, 8002, 8005, 8010, 8011, 8012, 8020, 8021],
  },
];

const names = {
  0: "Sploosh-o-matic",
  1: "Neo Sploosh-o-matic",
  10: "Splattershot Jr.",
  11: "Custom Splattershot Jr.",
  20: "Splash-o-matic",
  21: "Neo Splash-o-matic",
  22: "Splash-o-matic GCK-O",
  30: "Aerospray MG",
  31: "Aerospray RG",
  32: "Colorz Aerospray",
  40: "Splattershot",
  41: "Tentatek Splattershot",
  42: "Glamorz Splattershot",
  45: "Hero Shot Replica",
  46: "Octo Shot Replica",
  47: "Order Shot Replica",
  50: ".52 Gal",
  51: ".52 Gal Deco",
  60: "N-ZAP '85",
  61: "N-ZAP '89",
  70: "Splattershot Pro",
  71: "Forge Splattershot Pro",
  72: "Splattershot Pro FRZ-N",
  80: ".96 Gal",
  81: ".96 Gal Deco",
  82: "Clawz .96 Gal",
  90: "Jet Squelcher",
  91: "Custom Jet Squelcher",
  92: "Jet Squelcher COB-R",
  100: "Splattershot Nova",
  101: "Annaki Splattershot Nova",
  200: "Luna Blaster",
  201: "Luna Blaster Neo",
  205: "Order Blaster Replica",
  210: "Blaster",
  211: "Custom Blaster",
  212: "Gleamz Blaster",
  220: "Range Blaster",
  221: "Custom Range Blaster",
  230: "Clash Blaster",
  231: "Clash Blaster Neo",
  240: "Rapid Blaster",
  241: "Rapid Blaster Deco",
  250: "Rapid Blaster Pro",
  251: "Rapid Blaster Pro Deco",
  252: "Rapid Blaster Pro WNT-R",
  260: "S-BLAST '92",
  261: "S-BLAST '91",
  300: "L-3 Nozzlenose",
  301: "L-3 Nozzlenose D",
  302: "Glitterz L-3 Nozzlenose",
  310: "H-3 Nozzlenose",
  311: "H-3 Nozzlenose D",
  312: "H-3 Nozzlenose VIP-R",
  400: "Squeezer",
  401: "Foil Squeezer",
  1000: "Carbon Roller",
  1001: "Carbon Roller Deco",
  1002: "Carbon Roller ANG-L",
  1010: "Splat Roller",
  1011: "Krak-On Splat Roller",
  1015: "Order Roller Replica",
  1020: "Dynamo Roller",
  1021: "Gold Dynamo Roller",
  1022: "Starz Dynamo Roller",
  1030: "Flingza Roller",
  1031: "Foil Flingza Roller",
  1040: "Big Swig Roller",
  1041: "Big Swig Roller Express",
  1042: "Planetz Big Swig Roller",
  1100: "Inkbrush",
  1101: "Inkbrush Nouveau",
  1110: "Octobrush",
  1111: "Octobrush Nouveau",
  1112: "Cometz Octobrush",
  1115: "Orderbrush Replica",
  1120: "Painbrush",
  1121: "Painbrush Nouveau",
  1122: "Painbrush BRN-Z",
  2000: "Classic Squiffer",
  2001: "New Squiffer",
  2010: "Splat Charger",
  2011: "Z+F Splat Charger",
  2012: "Splat Charger CAM-O",
  2015: "Order Charger Replica",
  2020: "Splatterscope",
  2021: "Z+F Splatterscope",
  2022: "Splatterscope CAM-O",
  2030: "E-liter 4K",
  2031: "Custom E-liter 4K",
  2040: "E-liter 4K Scope",
  2041: "Custom E-liter 4K Scope",
  2050: "Bamboozler 14 Mk I",
  2051: "Bamboozler 14 Mk II",
  2060: "Goo Tuber",
  2061: "Custom Goo Tuber",
  2070: "Snipewriter 5H",
  2071: "Snipewriter 5B",
  3000: "Slosher",
  3001: "Slosher Deco",
  3005: "Order Slosher Replica",
  3010: "Tri-Slosher",
  3011: "Tri-Slosher Nouveau",
  3012: "Tri-Slosher ASH-N",
  3020: "Sloshing Machine",
  3021: "Sloshing Machine Neo",
  3030: "Bloblobber",
  3031: "Bloblobber Deco",
  3040: "Explosher",
  3041: "Custom Explosher",
  3050: "Dread Wringer",
  3051: "Dread Wringer D",
  3052: "Hornz Dread Wringer",
  4000: "Mini Splatling",
  4001: "Zink Mini Splatling",
  4002: "Mini Splatling RTL-R",
  4010: "Heavy Splatling",
  4011: "Heavy Splatling Deco",
  4015: "Order Splatling Replica",
  4020: "Hydra Splatling",
  4021: "Custom Hydra Splatling",
  4022: "Torrentz Hydra Splatling",
  4030: "Ballpoint Splatling",
  4031: "Ballpoint Splatling Nouveau",
  4040: "Nautilus 47",
  4041: "Nautilus 79",
  4050: "Heavy Edit Splatling",
  4051: "Heavy Edit Splatling Nouveau",
  5000: "Dapple Dualies",
  5001: "Dapple Dualies Nouveau",
  5002: "Dapple Dualies NOC-T",
  5010: "Splat Dualies",
  5011: "Enperry Splat Dualies",
  5012: "Twinklez Splat Dualies",
  5015: "Order Dualie Replicas",
  5020: "Glooga Dualies",
  5021: "Glooga Dualies Deco",
  5030: "Dualie Squelchers",
  5031: "Custom Dualie Squelchers",
  5032: "Hoofz Dualie Squelchers",
  5040: "Dark Tetra Dualies",
  5041: "Light Tetra Dualies",
  5050: "Douser Dualies FF",
  5051: "Custom Douser Dualies FF",
  6000: "Splat Brella",
  6001: "Sorella Brella",
  6005: "Order Brella Replica",
  6010: "Tenta Brella",
  6011: "Tenta Sorella Brella",
  6012: "Tenta Brella CRE-M",
  6020: "Undercover Brella",
  6021: "Undercover Sorella Brella",
  6022: "Patternz Undercover Brella",
  6030: "Recycled Brella 24 Mk I",
  6031: "Recycled Brella 24 Mk II",
  7010: "Tri-Stringer",
  7011: "Inkline Tri-Stringer",
  7012: "Bulbz Tri-Stringer",
  7015: "Order Stringer Replica",
  7020: "REEF-LUX 450",
  7021: "REEF-LUX 450 Deco",
  7022: "REEF-LUX 450 MIL-K",
  7030: "Wellstring V",
  7031: "Custom Wellstring V",
  8000: "Splatana Stamper",
  8001: "Splatana Stamper Nouveau",
  8002: "Stickerz Splatana Stamper",
  8005: "Order Splatana Replica",
  8010: "Splatana Wiper",
  8011: "Splatana Wiper Deco",
  8012: "Splatana Wiper RUS-T",
  8020: "Mint Decavitator",
  8021: "Charcoal Decavitator",
};

const state = {
  selectedCategories: new Set(categories.map((category) => category.name)),
  hideBrandedWeapons: false,
  avoidRepeat: true,
  rotation: 0,
  spinning: false,
  currentWeapon: null,
  history: [],
};

const wheel = document.querySelector("#wheel");
const ctx = wheel.getContext("2d");
const spinButton = document.querySelector("#spinButton");
const resultImage = document.querySelector("#resultImage");
const imageFallback = document.querySelector("#imageFallback");
const resultName = document.querySelector("#resultName");
const resultMeta = document.querySelector("#resultMeta");
const categoryFilters = document.querySelector("#categoryFilters");
const historyEl = document.querySelector("#history");
const hideBrandedWeapons = document.querySelector("#hideBrandedWeapons");
const avoidRepeat = document.querySelector("#avoidRepeat");

function weaponFromId(id) {
  const category = categories.find((item) => item.ids.includes(id));
  return {
    id,
    name: names[id] ?? `Weapon ${id}`,
    category: category.name,
    categoryLabel: category.label,
    color: category.color,
    image: `${ASSET_BASE}/${id}.avif`,
  };
}

function pool() {
  return categories
    .filter((category) => state.selectedCategories.has(category.name))
    .flatMap((category) => category.ids)
    .filter((id) => !state.hideBrandedWeapons || id % 10 === 0)
    .map(weaponFromId);
}

function renderFilters() {
  categoryFilters.innerHTML = "";
  for (const category of categories) {
    const label = document.createElement("label");
    label.className = "category";
    label.innerHTML = `
      <input type="checkbox" value="${category.name}" checked />
      <strong>${category.label}</strong>
      <span>${category.ids.length}</span>
    `;
    const input = label.querySelector("input");
    input.addEventListener("change", () => {
      if (input.checked) state.selectedCategories.add(category.name);
      else state.selectedCategories.delete(category.name);
      drawWheel(pool());
      updateMeta();
    });
    categoryFilters.append(label);
  }
}

function updateMeta() {
  const weapons = pool();
  resultMeta.textContent = `当前池子包含 ${weapons.length} 把武器`;
  spinButton.disabled = weapons.length === 0 || state.spinning;
}

function drawWheel(weapons) {
  const size = wheel.width;
  const center = size / 2;
  const radius = center - 22;
  ctx.clearRect(0, 0, size, size);

  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(state.rotation - Math.PI / 2);

  if (weapons.length === 0) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#20262e";
    ctx.fill();
    ctx.fillStyle = "#f7fbff";
    ctx.font = "700 36px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("请选择武器类别", 0, 12);
    ctx.restore();
    return;
  }

  const slice = (Math.PI * 2) / weapons.length;
  weapons.forEach((weapon, index) => {
    const start = index * slice;
    const end = start + slice;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = index % 2 === 0 ? weapon.color : shade(weapon.color, -20);
    ctx.fill();
    ctx.strokeStyle = "rgba(8, 16, 20, 0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (weapons.length <= 80) {
      ctx.save();
      ctx.rotate(start + slice / 2);
      ctx.fillStyle = "#081014";
      ctx.font = weapons.length > 45 ? "700 13px sans-serif" : "800 16px sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(shortName(weapon.name), radius - 18, 0);
      ctx.restore();
    }
  });

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.lineWidth = 12;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.24)";
  ctx.stroke();
  ctx.restore();
}

function shortName(name) {
  return name.length > 22 ? `${name.slice(0, 20)}...` : name;
}

function shade(hex, amount) {
  const number = Number.parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (number >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((number >> 8) & 0xff) + amount));
  const b = Math.max(0, Math.min(255, (number & 0xff) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

function pickWeapon(weapons) {
  const candidates =
    state.avoidRepeat && state.currentWeapon && weapons.length > 1
      ? weapons.filter((weapon) => weapon.id !== state.currentWeapon.id)
      : weapons;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function spin() {
  const weapons = pool();
  if (state.spinning || weapons.length === 0) return;

  const winner = pickWeapon(weapons);
  const winnerIndex = weapons.findIndex((weapon) => weapon.id === winner.id);
  const slice = (Math.PI * 2) / weapons.length;
  const sliceCenter = winnerIndex * slice + slice / 2;
  const current = normalizeRadians(state.rotation);
  const target = Math.PI * 2 * 6 + (Math.PI * 2 - sliceCenter);
  const start = state.rotation;
  const end = state.rotation + target - current;
  const duration = 3600;
  const started = performance.now();

  state.spinning = true;
  spinButton.disabled = true;
  spinButton.textContent = "转动中";

  function frame(now) {
    const t = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    state.rotation = start + (end - start) * eased;
    drawWheel(weapons);
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      state.rotation = normalizeRadians(end);
      state.spinning = false;
      spinButton.textContent = "再抽";
      showResult(winner);
      updateMeta();
      drawWheel(pool());
    }
  }

  requestAnimationFrame(frame);
}

function normalizeRadians(value) {
  return ((value % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
}

function showResult(weapon) {
  state.currentWeapon = weapon;
  resultName.textContent = weapon.name;
  resultMeta.textContent = `${weapon.categoryLabel} · ID ${weapon.id}`;
  imageFallback.textContent = weapon.name.slice(0, 1);
  resultImage.src = weapon.image;
  resultImage.alt = weapon.name;
  state.history.unshift(weapon);
  state.history = state.history.slice(0, 8);
  renderHistory();
}

function renderHistory() {
  historyEl.innerHTML = "";
  if (state.history.length === 0) {
    const item = document.createElement("li");
    item.textContent = "还没有结果";
    historyEl.append(item);
    return;
  }
  for (const weapon of state.history) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${weapon.name}</strong> <span>${weapon.categoryLabel}</span>`;
    historyEl.append(item);
  }
}

document.querySelector("#selectAll").addEventListener("click", () => {
  const allSelected = state.selectedCategories.size === categories.length;
  state.selectedCategories = new Set(allSelected ? [] : categories.map((category) => category.name));
  categoryFilters.querySelectorAll("input").forEach((input) => {
    input.checked = !allSelected;
  });
  drawWheel(pool());
  updateMeta();
});

document.querySelector("#clearHistory").addEventListener("click", () => {
  state.history = [];
  renderHistory();
});

hideBrandedWeapons.addEventListener("change", () => {
  state.hideBrandedWeapons = hideBrandedWeapons.checked;
  drawWheel(pool());
  updateMeta();
});

avoidRepeat.addEventListener("change", () => {
  state.avoidRepeat = avoidRepeat.checked;
});

resultImage.addEventListener("error", () => {
  resultImage.removeAttribute("src");
});

spinButton.addEventListener("click", spin);

renderFilters();
renderHistory();
drawWheel(pool());
updateMeta();
