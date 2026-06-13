const ASSET_BASE =
  "https://raw.githubusercontent.com/sendou-ink/sendou.ink/main/public/static-assets/img/main-weapons";
const SUB_ASSET_BASE =
  "https://raw.githubusercontent.com/sendou-ink/sendou.ink/main/public/static-assets/img/sub-weapons";
const SPECIAL_ASSET_BASE =
  "https://raw.githubusercontent.com/sendou-ink/sendou.ink/main/public/static-assets/img/special-weapons";

const categories = [
  {
    name: "SHOOTERS",
    label: "射击枪",
    color: "#d7ff42",
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
    color: "#39b8ff",
    ids: [1000, 1001, 1002, 1010, 1011, 1015, 1020, 1021, 1022, 1030, 1031, 1040, 1041, 1042],
  },
  {
    name: "BRUSHES",
    label: "画笔",
    color: "#ffc247",
    ids: [1100, 1101, 1110, 1111, 1112, 1115, 1120, 1121, 1122],
  },
  {
    name: "CHARGERS",
    label: "蓄力狙击",
    color: "#6ff3c1",
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
    color: "#7a8cff",
    ids: [4000, 4001, 4002, 4010, 4011, 4015, 4020, 4021, 4022, 4030, 4031, 4040, 4041, 4050, 4051],
  },
  {
    name: "DUALIES",
    label: "双枪",
    color: "#ff6f95",
    ids: [5000, 5001, 5002, 5010, 5015, 5011, 5012, 5020, 5021, 5030, 5031, 5032, 5040, 5041, 5050, 5051],
  },
  {
    name: "BRELLAS",
    label: "防空伞",
    color: "#45d9f4",
    ids: [6000, 6001, 6005, 6010, 6011, 6012, 6020, 6021, 6022, 6030, 6031],
  },
  {
    name: "STRINGERS",
    label: "弓",
    color: "#44e69d",
    ids: [7010, 7011, 7012, 7015, 7020, 7021, 7022, 7030, 7031],
  },
  {
    name: "SPLATANAS",
    label: "刮水刀",
    color: "#ffe25f",
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

const zhNames = {
  0: "广域标记枪",
  1: "广域标记枪 新型",
  10: "新叶射击枪",
  11: "枫叶射击枪",
  20: "窄域标记枪",
  21: "窄域标记枪 新型",
  22: "窄域标记枪GECK",
  30: "专业模型枪MG",
  31: "专业模型枪RG",
  32: "专业模型枪 彩",
  40: "斯普拉射击枪",
  41: "斯普拉射击枪 联名",
  42: "斯普拉射击枪 煌",
  45: "英雄射击枪 复制",
  46: "章鱼射击枪 复制",
  47: "秩序射击枪 复制",
  50: ".52加仑",
  51: ".52加仑 装饰",
  60: "N-ZAP85",
  61: "N-ZAP89",
  70: "顶尖射击枪",
  71: "顶尖射击枪 联名",
  72: "顶尖射击枪FRZN",
  80: ".96加仑",
  81: ".96加仑 装饰",
  82: ".96加仑 爪",
  90: "喷射清洁枪",
  91: "喷射清洁枪 改装",
  92: "喷射清洁枪COBR",
  100: "太空射击枪",
  101: "太空射击枪 联名",
  200: "新星爆破枪",
  201: "新星爆破枪 新型",
  205: "秩序爆破枪 复制",
  210: "火热爆破枪",
  211: "火热爆破枪 改装",
  212: "火热爆破枪 艳",
  220: "远距爆破枪",
  221: "远距爆破枪 改装",
  230: "冲涂爆破枪",
  231: "冲涂爆破枪 新型",
  240: "快速爆破枪",
  241: "快速爆破枪 装饰",
  250: "快速爆破枪 精英",
  251: "快速爆破枪 精英装饰",
  252: "快速爆破枪 精英WNTR",
  260: "S-BLAST92",
  261: "S-BLAST91",
  300: "L3卷管枪",
  301: "L3卷管枪D",
  302: "L3卷管枪 箔",
  310: "H3卷管枪",
  311: "H3卷管枪D",
  312: "H3卷管枪SNAK",
  400: "开瓶喷泉枪",
  401: "开瓶喷泉枪 金属箔",
  1000: "碳纤维滚筒",
  1001: "碳纤维滚筒 装饰",
  1002: "碳纤维滚筒ANGL",
  1010: "斯普拉滚筒",
  1011: "斯普拉滚筒 联名",
  1015: "秩序滚筒 复制",
  1020: "电动马达滚筒",
  1021: "电动马达滚筒 高磁波",
  1022: "电动马达滚筒 冥",
  1030: "可变式滚筒",
  1031: "可变式滚筒 金属箔",
  1040: "宽滚筒",
  1041: "宽滚筒 联名",
  1042: "宽滚筒 惑",
  1100: "巴勃罗",
  1101: "巴勃罗·新艺术",
  1110: "北斋",
  1111: "北斋·新艺术",
  1112: "北斋 彗",
  1115: "秩序排刷 复制",
  1120: "文森",
  1121: "文森·新艺术",
  1122: "文森BRNZ",
  2000: "鱿快洁α",
  2001: "鱿快洁β",
  2010: "斯普拉蓄力狙击枪",
  2011: "斯普拉蓄力狙击枪 联名",
  2012: "斯普拉蓄力狙击枪FRST",
  2015: "秩序蓄力狙击枪 复制",
  2020: "斯普拉准星枪",
  2021: "斯普拉准星枪 联名",
  2022: "斯普拉准星枪FRST",
  2030: "公升4K",
  2031: "公升4K 改装",
  2040: "4K准星枪",
  2041: "4K准星枪 改装",
  2050: "14式竹筒枪·甲",
  2051: "14式竹筒枪·乙",
  2060: "高压油管枪",
  2061: "高压油管枪 改装",
  2070: "R-PEN/5H",
  2071: "R-PEN/5B",
  3000: "飞溅泼桶",
  3001: "飞溅泼桶 装饰",
  3005: "秩序泼桶 复制",
  3010: "洗笔桶",
  3011: "洗笔桶·新艺术",
  3012: "洗笔桶ASH",
  3020: "回旋泼桶",
  3021: "回旋泼桶 新型",
  3030: "满溢泡澡泼桶",
  3031: "满溢泡澡泼桶 装饰",
  3040: "爆炸泼桶",
  3041: "爆炸泼桶 改装",
  3050: "墨瀑淋",
  3051: "墨瀑淋D",
  3052: "墨瀑淋 角",
  4000: "斯普拉旋转枪",
  4001: "斯普拉旋转枪 联名",
  4002: "斯普拉旋转枪PYTN",
  4010: "桶装旋转枪",
  4011: "桶装旋转枪 装饰",
  4015: "秩序旋转枪 复制",
  4020: "消防栓旋转枪",
  4021: "消防栓旋转枪 改装",
  4022: "消防栓旋转枪 压",
  4030: "圆珠笔",
  4031: "圆珠笔·新艺术",
  4040: "鹦鹉螺号47",
  4041: "鹦鹉螺号79",
  4050: "审查者",
  4051: "审查者·新艺术",
  5000: "溅镀枪",
  5001: "溅镀枪·新艺术",
  5002: "溅镀枪OWL",
  5010: "斯普拉机动枪",
  5011: "斯普拉机动枪 联名",
  5012: "斯普拉机动枪 耀",
  5015: "秩序机动枪 复制",
  5020: "开尔文525",
  5021: "开尔文525 装饰",
  5030: "双重清洁枪",
  5031: "双重清洁枪 改装",
  5032: "双重清洁枪 蹄",
  5040: "四重弹跳手枪 黑",
  5041: "四重弹跳手枪 白",
  5050: "灭熄FF",
  5051: "灭熄FF 改装",
  6000: "遮阳防空伞",
  6001: "遮阳防空伞 姐妹",
  6005: "秩序防空伞 复制",
  6010: "露营防空伞",
  6011: "露营防空伞 姐妹",
  6012: "露营防空伞CREM",
  6020: "特工配件",
  6021: "特工配件 姐妹",
  6022: "特工配件 缭",
  6030: "24式可替换伞·甲",
  6031: "24式可替换伞·乙",
  7010: "三发猎鱼弓",
  7011: "三发猎鱼弓 联名",
  7012: "三发猎鱼弓 灯",
  7015: "秩序猎鱼弓 复制",
  7020: "LACT-450",
  7021: "LACT-450 装饰",
  7022: "LACT-450MILK",
  7030: "邦普V",
  7031: "邦普V 改装",
  8000: "工作刮水刀",
  8001: "工作刮水刀·新艺术",
  8002: "工作刮水刀 封",
  8005: "秩序刮水刀 复制",
  8010: "雨刷刮水刀",
  8011: "雨刷刮水刀 装饰",
  8012: "雨刷刮水刀RUST",
  8020: "巨齿刮水刀 薄荷",
  8021: "巨齿刮水刀 墨黑",
};

const subWeapons = {
  0: "Splat Bomb",
  1: "Suction Bomb",
  2: "Burst Bomb",
  3: "Sprinkler",
  4: "Splash Wall",
  5: "Fizzy Bomb",
  6: "Curling Bomb",
  7: "Autobomb",
  8: "Squid Beakon",
  9: "Point Sensor",
  10: "Ink Mine",
  11: "Toxic Mist",
  12: "Angle Shooter",
  13: "Torpedo",
};

const zhSubWeapons = {
  0: "斯普拉炸弹",
  1: "吸盘炸弹",
  2: "快速炸弹",
  3: "洒墨器",
  4: "斯普拉防护墙",
  5: "碳酸炸弹",
  6: "冰壶炸弹",
  7: "机器人炸弹",
  8: "跳跃信标",
  9: "定点侦测器",
  10: "墨汁陷阱",
  11: "毒雾",
  12: "标线器",
  13: "鱼雷",
};

const specialWeapons = {
  1: "Trizooka",
  2: "Big Bubbler",
  3: "Zipcaster",
  4: "Tenta Missiles",
  5: "Ink Storm",
  6: "Booyah Bomb",
  7: "Wave Breaker",
  8: "Ink Vac",
  9: "Killer Wail 5.1",
  10: "Inkjet",
  11: "Ultra Stamp",
  12: "Crab Tank",
  13: "Reefslider",
  14: "Triple Inkstrike",
  15: "Tacticooler",
  16: "Super Chump",
  17: "Kraken Royale",
  18: "Triple Splashdown",
  19: "Splattercolor Screen",
};

const zhSpecialWeapons = {
  1: "终极发射",
  2: "巨大防护罩",
  3: "触手喷射",
  4: "多重导弹",
  5: "墨雨云",
  6: "赞气弹",
  7: "弹跳声呐",
  8: "吸墨机",
  9: "喇叭镭射5.1ch",
  10: "喷射背包",
  11: "终极印章",
  12: "螃蟹坦克",
  13: "鲨鱼坐骑",
  14: "三重龙卷风",
  15: "能量站",
  16: "诱饵烟花",
  17: "帝王鱿鱼",
  18: "终极着陆",
  19: "浮墨幕墙",
};

const knownKits = {
  0: { sub: 6, special: 11 },
  1: { sub: 8, special: 9 },
  10: { sub: 0, special: 2 },
  11: { sub: 13, special: 7 },
  20: { sub: 2, special: 12 },
  21: { sub: 1, special: 14 },
  30: { sub: 5, special: 13 },
  31: { sub: 3, special: 6 },
  40: { sub: 1, special: 1 },
  41: { sub: 0, special: 14 },
  45: { sub: 1, special: 1 },
  46: { sub: 0, special: 14 },
  47: { sub: 1, special: 1 },
  50: { sub: 4, special: 9 },
  51: { sub: 6, special: 19 },
  60: { sub: 1, special: 15 },
  61: { sub: 7, special: 16 },
  70: { sub: 12, special: 12 },
  71: { sub: 1, special: 6 },
  80: { sub: 3, special: 8 },
  81: { sub: 4, special: 17 },
  90: { sub: 12, special: 8 },
  91: { sub: 2, special: 5 },
  100: { sub: 9, special: 9 },
  101: { sub: 10, special: 14 },
  200: { sub: 0, special: 3 },
  201: { sub: 5, special: 11 },
  205: { sub: 0, special: 3 },
  210: { sub: 7, special: 2 },
  211: { sub: 9, special: 18 },
  220: { sub: 1, special: 7 },
  221: { sub: 0, special: 17 },
  230: { sub: 0, special: 1 },
  231: { sub: 6, special: 16 },
  240: { sub: 10, special: 14 },
  241: { sub: 13, special: 10 },
  250: { sub: 11, special: 10 },
  251: { sub: 12, special: 9 },
  260: { sub: 3, special: 17 },
  261: { sub: 2, special: 6 },
  300: { sub: 6, special: 12 },
  301: { sub: 2, special: 11 },
  310: { sub: 9, special: 15 },
  311: { sub: 4, special: 2 },
  400: { sub: 4, special: 1 },
  401: { sub: 7, special: 19 },
  1000: { sub: 7, special: 3 },
  1001: { sub: 2, special: 14 },
  1010: { sub: 6, special: 2 },
  1011: { sub: 8, special: 17 },
  1015: { sub: 6, special: 2 },
  1020: { sub: 3, special: 15 },
  1021: { sub: 0, special: 16 },
  1030: { sub: 10, special: 4 },
  1031: { sub: 1, special: 19 },
  1040: { sub: 4, special: 8 },
  1041: { sub: 12, special: 5 },
  1100: { sub: 0, special: 9 },
  1101: { sub: 10, special: 11 },
  1110: { sub: 1, special: 3 },
  1111: { sub: 8, special: 5 },
  1115: { sub: 1, special: 3 },
  1120: { sub: 6, special: 7 },
  1121: { sub: 9, special: 4 },
  2000: { sub: 9, special: 2 },
  2001: { sub: 7, special: 3 },
  2010: { sub: 0, special: 8 },
  2011: { sub: 4, special: 14 },
  2015: { sub: 0, special: 8 },
  2020: { sub: 0, special: 8 },
  2021: { sub: 4, special: 14 },
  2030: { sub: 10, special: 7 },
  2031: { sub: 8, special: 17 },
  2040: { sub: 10, special: 7 },
  2041: { sub: 8, special: 17 },
  2050: { sub: 7, special: 9 },
  2051: { sub: 11, special: 16 },
  2060: { sub: 13, special: 4 },
  2061: { sub: 5, special: 11 },
  2070: { sub: 3, special: 15 },
  2071: { sub: 4, special: 8 },
  3000: { sub: 0, special: 14 },
  3001: { sub: 12, special: 3 },
  3005: { sub: 0, special: 14 },
  3010: { sub: 11, special: 10 },
  3011: { sub: 5, special: 15 },
  3020: { sub: 5, special: 6 },
  3021: { sub: 9, special: 1 },
  3030: { sub: 3, special: 5 },
  3031: { sub: 12, special: 17 },
  3040: { sub: 9, special: 5 },
  3041: { sub: 4, special: 11 },
  3050: { sub: 1, special: 13 },
  3051: { sub: 8, special: 9 },
  4000: { sub: 2, special: 11 },
  4001: { sub: 11, special: 2 },
  4010: { sub: 3, special: 7 },
  4011: { sub: 9, special: 17 },
  4015: { sub: 3, special: 7 },
  4020: { sub: 7, special: 6 },
  4021: { sub: 10, special: 19 },
  4030: { sub: 5, special: 10 },
  4031: { sub: 9, special: 5 },
  4040: { sub: 9, special: 5 },
  4041: { sub: 1, special: 14 },
  4050: { sub: 6, special: 15 },
  4051: { sub: 0, special: 12 },
  5000: { sub: 8, special: 15 },
  5001: { sub: 13, special: 13 },
  5010: { sub: 1, special: 12 },
  5011: { sub: 6, special: 14 },
  5015: { sub: 1, special: 12 },
  5020: { sub: 4, special: 6 },
  5021: { sub: 9, special: 1 },
  5030: { sub: 0, special: 7 },
  5031: { sub: 8, special: 16 },
  5040: { sub: 7, special: 13 },
  5041: { sub: 3, special: 11 },
  5050: { sub: 10, special: 9 },
  5051: { sub: 2, special: 14 },
  6000: { sub: 3, special: 14 },
  6001: { sub: 7, special: 10 },
  6005: { sub: 3, special: 14 },
  6010: { sub: 8, special: 8 },
  6011: { sub: 10, special: 14 },
  6020: { sub: 10, special: 13 },
  6021: { sub: 13, special: 19 },
  6030: { sub: 12, special: 2 },
  6031: { sub: 11, special: 6 },
  7010: { sub: 11, special: 9 },
  7011: { sub: 3, special: 16 },
  7015: { sub: 11, special: 9 },
  7020: { sub: 6, special: 4 },
  7021: { sub: 2, special: 13 },
  7030: { sub: 9, special: 11 },
  7031: { sub: 1, special: 7 },
  8000: { sub: 2, special: 3 },
  8001: { sub: 11, special: 12 },
  8005: { sub: 2, special: 3 },
  8010: { sub: 13, special: 11 },
  8011: { sub: 8, special: 4 },
  8020: { sub: 1, special: 2 },
  8021: { sub: 3, special: 10 },
};

const state = {
  selectedCategories: new Set(categories.map((category) => category.name)),
  enabledWeapons: new Set(Object.keys(names).map(Number)),
  hideBrandedWeapons: false,
  avoidRepeat: true,
  soundEnabled: true,
  search: "",
  rotation: 0,
  spinning: false,
  highlightId: null,
  currentWeapon: null,
  history: [],
  audioContext: null,
  lastTickIndex: null,
};

const wheel = document.querySelector("#wheel");
const ctx = wheel.getContext("2d");
const spinButton = document.querySelector("#spinButton");
const resultImage = document.querySelector("#resultImage");
const imageFallback = document.querySelector("#imageFallback");
const resultName = document.querySelector("#resultName");
const resultMeta = document.querySelector("#resultMeta");
const kitDisplay = document.querySelector("#kitDisplay");
const categoryFilters = document.querySelector("#categoryFilters");
const historyEl = document.querySelector("#history");
const hideBrandedWeapons = document.querySelector("#hideBrandedWeapons");
const soundEnabled = document.querySelector("#soundEnabled");
const avoidRepeat = document.querySelector("#avoidRepeat");
const weaponSearch = document.querySelector("#weaponSearch");
const allWeapons = Object.keys(names).map(Number).map(weaponFromId);

function weaponFromId(id) {
  const category = categories.find((item) => item.ids.includes(id));
  return {
    id,
    name: names[id] ?? `Weapon ${id}`,
    zhName: zhNames[id] ?? names[id] ?? `Weapon ${id}`,
    category: category.name,
    categoryLabel: category.label,
    color: category.color,
    image: `${ASSET_BASE}/${id}.avif`,
    kit: knownKits[id] ?? null,
  };
}

function pool() {
  return categories
    .filter((category) => state.selectedCategories.has(category.name))
    .flatMap((category) => category.ids)
    .filter((id) => !state.hideBrandedWeapons || id % 10 === 0)
    .filter((id) => state.enabledWeapons.has(id))
    .map(weaponFromId);
}

function renderFilters() {
  const openCategories = new Set(
    [...categoryFilters.querySelectorAll(".category-panel[open]")].map((panel) => panel.dataset.category),
  );
  const openFamilies = new Set(
    [...categoryFilters.querySelectorAll(".weapon-family[open]")].map((panel) => panel.dataset.family),
  );
  categoryFilters.innerHTML = "";
  const query = normalizeText(state.search);
  for (const category of categories) {
    const categoryWeapons = category.ids.map(weaponFromId);
    const visibleWeapons = categoryWeapons.filter((weapon) => weaponMatches(weapon, query));
    const enabledCategoryCount = categoryWeapons.filter((weapon) => state.enabledWeapons.has(weapon.id)).length;
    const details = document.createElement("details");
    details.className = "category-panel";
    details.dataset.category = category.name;
    details.open = Boolean(query) || openCategories.has(category.name);
    details.hidden = query && visibleWeapons.length === 0;
    details.innerHTML = `
      <summary>
        <span class="category-toggle">
          <input type="checkbox" value="${category.name}" ${state.selectedCategories.has(category.name) ? "checked" : ""} />
          <strong>${category.label}</strong>
        </span>
        <span>${enabledCategoryCount}/${category.ids.length}</span>
      </summary>
      <div class="weapon-list" aria-label="${category.label}武器"></div>
    `;
    const input = details.querySelector("summary input");
    input.indeterminate = enabledCategoryCount > 0 && enabledCategoryCount < category.ids.length;
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("change", () => {
      setCategoryEnabled(category, input.checked);
      refreshControls();
    });
    const list = details.querySelector(".weapon-list");
    for (const family of weaponFamilies(visibleWeapons)) list.append(weaponFamily(category, family, query, openFamilies));
    if (query) {
      const enabledVisibleCount = visibleWeapons.filter((weapon) => state.enabledWeapons.has(weapon.id)).length;
      details.querySelector("summary span:last-child").textContent = `${enabledVisibleCount}/${visibleWeapons.length}`;
    }
    categoryFilters.append(details);
  }
}

function setCategoryEnabled(category, enabled) {
  if (enabled) {
    state.selectedCategories.add(category.name);
    for (const id of category.ids) state.enabledWeapons.add(id);
  } else {
    state.selectedCategories.delete(category.name);
    for (const id of category.ids) state.enabledWeapons.delete(id);
  }
}

function updateMeta() {
  const weapons = pool();
  resultMeta.textContent = state.currentWeapon
    ? `${state.currentWeapon.categoryLabel} · ID ${state.currentWeapon.id} · 当前池子 ${weapons.length} 把`
    : `当前池子包含 ${weapons.length} 把武器`;
  spinButton.disabled = weapons.length === 0 || state.spinning;
}

function weaponOption(weapon) {
  const label = document.createElement("label");
  label.className = "weapon-option";
  label.dataset.weaponId = String(weapon.id);
  label.innerHTML = `
    <input type="checkbox" ${state.enabledWeapons.has(weapon.id) ? "checked" : ""} />
    <img src="${weapon.image}" alt="" loading="lazy" />
    <span>
      <strong>${weapon.zhName}</strong>
      <span>${weapon.name}</span>
    </span>
  `;
  const input = label.querySelector("input");
  input.addEventListener("change", () => {
    if (input.checked) state.enabledWeapons.add(weapon.id);
    else state.enabledWeapons.delete(weapon.id);
    syncCategorySelection(categories.find((item) => item.name === weapon.category));
    refreshControls();
  });
  return label;
}

function weaponFamily(category, weapons, query, openFamilies) {
  const base = weapons.find((weapon) => weapon.id % 10 === 0) ?? weapons[0];
  const enabledCount = weapons.filter((weapon) => state.enabledWeapons.has(weapon.id)).length;
  const familyId = `${category.name}:${base.id - (base.id % 10)}`;
  const details = document.createElement("details");
  details.className = "weapon-family";
  details.dataset.family = familyId;
  details.open = Boolean(query) || openFamilies.has(familyId);
  details.innerHTML = `
    <summary>
      <span class="family-title">
        <input type="checkbox" ${enabledCount === weapons.length ? "checked" : ""} />
        <img src="${base.image}" alt="" loading="lazy" />
        <span>
          <strong>${baseFamilyName(base.zhName)}</strong>
          <span>${baseFamilyName(base.name)} · ${weapons.length} 把</span>
        </span>
      </span>
      <span>${enabledCount}/${weapons.length}</span>
    </summary>
    <div class="family-weapons"></div>
  `;
  const input = details.querySelector("summary input");
  input.indeterminate = enabledCount > 0 && enabledCount < weapons.length;
  input.addEventListener("click", (event) => event.stopPropagation());
  input.addEventListener("change", () => {
    for (const weapon of weapons) {
      if (input.checked) state.enabledWeapons.add(weapon.id);
      else state.enabledWeapons.delete(weapon.id);
    }
    syncCategorySelection(category);
    refreshControls();
  });
  const list = details.querySelector(".family-weapons");
  for (const weapon of weapons) list.append(weaponOption(weapon));
  return details;
}

function weaponFamilies(weapons) {
  const groups = new Map();
  for (const weapon of weapons) {
    const baseId = weapon.id - (weapon.id % 10);
    if (!groups.has(baseId)) groups.set(baseId, []);
    groups.get(baseId).push(weapon);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, group]) => group.sort((a, b) => a.id - b.id));
}

function syncCategorySelection(category) {
  const enabledCount = category.ids.filter((id) => state.enabledWeapons.has(id)).length;
  if (enabledCount > 0) state.selectedCategories.add(category.name);
  else state.selectedCategories.delete(category.name);
}

function weaponMatches(weapon, query) {
  return (
    (!query ||
      normalizeText(
        `${weapon.name} ${weapon.zhName} ${weapon.categoryLabel} ${baseFamilyName(weapon.name)} ${baseFamilyName(weapon.zhName)}`,
      ).includes(query)) &&
    (!state.hideBrandedWeapons || weapon.id % 10 === 0)
  );
}

function normalizeText(value) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function baseFamilyName(name) {
  return name
    .replace(/^(Custom|Neo|Forge|Foil|Zink|Annaki|Enperry|Sorella|Tenta Sorella|Inkline|Gold|Light|Dark)\s+/i, "")
    .replace(/\s+(Deco|Nouveau|Replica|Express|D|Mk I|Mk II)$/i, "")
    .replace(/^(Z\+F|Krak-On)\s+/i, "")
    .trim();
}

function visibleWeaponIds() {
  return [...categoryFilters.querySelectorAll(".category-panel:not([hidden]) .weapon-option")].map((item) =>
    Number(item.dataset.weaponId),
  );
}

function refreshControls() {
  renderFilters();
  refreshWheel();
}

function refreshWheel() {
  drawWheel(pool());
  updateMeta();
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
    if (weapon.id === state.highlightId) {
      ctx.save();
      ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
      ctx.shadowBlur = 24;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 8;
      ctx.stroke();
      ctx.restore();
    }

    ctx.save();
    ctx.rotate(start + slice / 2);
    ctx.fillStyle = "#081014";
    ctx.font = wheelLabelFont(weapons.length);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(shortName(weapon.zhName, weapons.length), radius - 18, 0);
    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.lineWidth = 12;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.24)";
  ctx.stroke();
  ctx.restore();
}

function wheelLabelFont(count) {
  if (count > 130) return "800 8px sans-serif";
  if (count > 90) return "800 9px sans-serif";
  if (count > 60) return "800 11px sans-serif";
  if (count > 36) return "800 13px sans-serif";
  return "850 16px sans-serif";
}

function shortName(name, count = 0) {
  const maxLength = count > 130 ? 15 : count > 90 ? 17 : count > 60 ? 20 : 24;
  return name.length > maxLength ? `${name.slice(0, maxLength - 2)}...` : name;
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

  ensureAudio();
  state.highlightId = null;
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
  state.lastTickIndex = null;
  spinButton.disabled = true;
  spinButton.textContent = "转动中";

  function frame(now) {
    const t = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    state.rotation = start + (end - start) * eased;
    tickIfNeeded(weapons.length);
    drawWheel(weapons);
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      state.rotation = normalizeRadians(end);
      state.spinning = false;
      state.highlightId = winner.id;
      spinButton.textContent = "再抽";
      showResult(winner);
      playWin();
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
  resultName.innerHTML = `${weapon.zhName}<span>${weapon.name}</span>`;
  resultMeta.textContent = `${weapon.categoryLabel} · ID ${weapon.id} · 当前池子 ${pool().length} 把`;
  renderKit(weapon);
  imageFallback.textContent = weapon.zhName.slice(0, 1);
  resultImage.src = weapon.image;
  resultImage.alt = weapon.zhName;
  state.history.unshift(weapon);
  state.history = state.history.slice(0, 8);
  renderHistory();
  flashResult();
}

function renderKit(weapon) {
  kitDisplay.innerHTML = "";
  if (!weapon.kit) {
    kitDisplay.innerHTML = `<span class="kit-chip missing">套装数据待补全</span>`;
    return;
  }
  kitDisplay.append(
    kitChip("副武器", zhSubWeapons[weapon.kit.sub], subWeapons[weapon.kit.sub], `${SUB_ASSET_BASE}/${weapon.kit.sub}.avif`),
  );
  kitDisplay.append(
    kitChip(
      "大招",
      zhSpecialWeapons[weapon.kit.special],
      specialWeapons[weapon.kit.special],
      `${SPECIAL_ASSET_BASE}/${weapon.kit.special}.avif`,
    ),
  );
}

function kitChip(label, zhName, enName, src) {
  const chip = document.createElement("span");
  chip.className = "kit-chip";
  chip.innerHTML = `<img src="${src}" alt="" /><span><strong>${label}: ${zhName}</strong><span>${enName}</span></span>`;
  return chip;
}

function flashResult() {
  const panel = document.querySelector(".wheel-panel");
  const result = document.querySelector(".result");
  panel.classList.remove("flash");
  result.classList.remove("hit");
  void panel.offsetWidth;
  panel.classList.add("flash");
  result.classList.add("hit");
}

function ensureAudio() {
  if (!state.soundEnabled) return;
  if (!state.audioContext) {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audioContext.state === "suspended") state.audioContext.resume();
}

function playTone(frequency, duration, volume = 0.035, type = "square") {
  if (!state.soundEnabled || !state.audioContext) return;
  const now = state.audioContext.currentTime;
  const oscillator = state.audioContext.createOscillator();
  const gain = state.audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(state.audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function tickIfNeeded(weaponCount) {
  if (!state.soundEnabled || weaponCount === 0) return;
  const slice = (Math.PI * 2) / weaponCount;
  const pointerAngle = normalizeRadians(Math.PI * 2 - normalizeRadians(state.rotation));
  const index = Math.floor(pointerAngle / slice);
  if (index !== state.lastTickIndex) {
    state.lastTickIndex = index;
    playTone(420 + Math.min(260, weaponCount), 0.028, 0.018);
  }
}

function playWin() {
  playTone(660, 0.08, 0.045, "triangle");
  window.setTimeout(() => playTone(990, 0.13, 0.04, "triangle"), 82);
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
    const kit = weapon.kit
      ? ` · ${zhSubWeapons[weapon.kit.sub]} + ${zhSpecialWeapons[weapon.kit.special]}`
      : "";
    item.innerHTML = `<strong>${weapon.zhName}</strong> <span>${weapon.name}${kit}</span>`;
    historyEl.append(item);
  }
}

document.querySelector("#selectAll").addEventListener("click", () => {
  const allSelected = state.selectedCategories.size === categories.length;
  state.selectedCategories = new Set(allSelected ? [] : categories.map((category) => category.name));
  refreshControls();
});

document.querySelector("#clearHistory").addEventListener("click", () => {
  state.history = [];
  renderHistory();
});

hideBrandedWeapons.addEventListener("change", () => {
  state.hideBrandedWeapons = hideBrandedWeapons.checked;
  refreshControls();
});

soundEnabled.addEventListener("change", () => {
  state.soundEnabled = soundEnabled.checked;
});

avoidRepeat.addEventListener("change", () => {
  state.avoidRepeat = avoidRepeat.checked;
});

weaponSearch.addEventListener("input", () => {
  state.search = weaponSearch.value;
  renderFilters();
});

document.querySelector("#includeVisible").addEventListener("click", () => {
  state.enabledWeapons = new Set([...state.enabledWeapons, ...visibleWeaponIds()]);
  refreshControls();
});

document.querySelector("#excludeVisible").addEventListener("click", () => {
  for (const id of visibleWeaponIds()) state.enabledWeapons.delete(id);
  refreshControls();
});

resultImage.addEventListener("error", () => {
  resultImage.removeAttribute("src");
});

spinButton.addEventListener("click", spin);

renderFilters();
renderHistory();
drawWheel(pool());
updateMeta();
