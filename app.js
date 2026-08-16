const COUNTY_DATA = [
  {
    name: "臺北市",
    center: { lon: 121.5654, lat: 25.033 },
    districts: [
      "中正區",
      "大同區",
      "中山區",
      "松山區",
      "大安區",
      "萬華區",
      "信義區",
      "士林區",
      "北投區",
      "內湖區",
      "南港區",
      "文山區",
    ],
  },
  {
    name: "新北市",
    center: { lon: 121.469, lat: 25.012 },
    districts: [
      "板橋區",
      "三重區",
      "中和區",
      "永和區",
      "新莊區",
      "新店區",
      "土城區",
      "蘆洲區",
      "汐止區",
      "樹林區",
      "淡水區",
      "鶯歌區",
      "三峽區",
      "林口區",
      "五股區",
      "泰山區",
      "金山區",
      "萬里區",
      "八里區",
      "深坑區",
      "石碇區",
      "坪林區",
      "三芝區",
      "石門區",
      "瑞芳區",
      "平溪區",
      "雙溪區",
      "貢寮區",
      "烏來區",
    ],
  },
  {
    name: "桃園市",
    center: { lon: 121.3009, lat: 24.993 },
    districts: [
      "桃園區",
      "中壢區",
      "平鎮區",
      "八德區",
      "楊梅區",
      "蘆竹區",
      "大溪區",
      "龍潭區",
      "龜山區",
      "大園區",
      "觀音區",
      "新屋區",
      "復興區",
    ],
  },
  {
    name: "臺中市",
    center: { lon: 120.6736, lat: 24.1477 },
    districts: [
      "中區",
      "東區",
      "南區",
      "西區",
      "北區",
      "西屯區",
      "南屯區",
      "北屯區",
      "豐原區",
      "東勢區",
      "大甲區",
      "清水區",
      "沙鹿區",
      "梧棲區",
      "后里區",
      "神岡區",
      "潭子區",
      "大雅區",
      "新社區",
      "石岡區",
      "外埔區",
      "大安區",
      "烏日區",
      "大肚區",
      "龍井區",
      "霧峰區",
      "太平區",
      "大里區",
      "和平區",
    ],
  },
  {
    name: "臺南市",
    center: { lon: 120.227, lat: 22.999 },
    districts: [
      "中西區",
      "東區",
      "南區",
      "北區",
      "安平區",
      "安南區",
      "永康區",
      "歸仁區",
      "新化區",
      "左鎮區",
      "玉井區",
      "楠西區",
      "南化區",
      "仁德區",
      "關廟區",
      "龍崎區",
      "官田區",
      "麻豆區",
      "佳里區",
      "西港區",
      "七股區",
      "將軍區",
      "學甲區",
      "北門區",
      "新營區",
      "後壁區",
      "白河區",
      "東山區",
      "六甲區",
      "下營區",
      "柳營區",
      "鹽水區",
      "善化區",
      "大內區",
      "山上區",
      "新市區",
      "安定區",
    ],
  },
  {
    name: "高雄市",
    center: { lon: 120.3014, lat: 22.6273 },
    districts: [
      "新興區",
      "前金區",
      "苓雅區",
      "鹽埕區",
      "鼓山區",
      "旗津區",
      "前鎮區",
      "三民區",
      "楠梓區",
      "小港區",
      "左營區",
      "仁武區",
      "大社區",
      "岡山區",
      "路竹區",
      "阿蓮區",
      "田寮區",
      "燕巢區",
      "橋頭區",
      "梓官區",
      "彌陀區",
      "永安區",
      "湖內區",
      "鳳山區",
      "大寮區",
      "林園區",
      "鳥松區",
      "大樹區",
      "旗山區",
      "美濃區",
      "六龜區",
      "內門區",
      "杉林區",
      "甲仙區",
      "桃源區",
      "那瑪夏區",
      "茂林區",
      "茄萣區",
    ],
  },
  {
    name: "基隆市",
    center: { lon: 121.7463, lat: 25.1301 },
    districts: ["中正區", "七堵區", "暖暖區", "仁愛區", "中山區", "安樂區", "信義區"],
  },
  {
    name: "新竹市",
    center: { lon: 120.9688, lat: 24.8038 },
    districts: ["東區", "北區", "香山區"],
  },
  {
    name: "嘉義市",
    center: { lon: 120.4473, lat: 23.4801 },
    districts: ["東區", "西區"],
  },
  {
    name: "新竹縣",
    center: { lon: 121.0192, lat: 24.838 },
    districts: [
      "竹北市",
      "湖口鄉",
      "新豐鄉",
      "新埔鎮",
      "關西鎮",
      "芎林鄉",
      "寶山鄉",
      "竹東鎮",
      "五峰鄉",
      "橫山鄉",
      "尖石鄉",
      "北埔鄉",
      "峨眉鄉",
    ],
  },
  {
    name: "苗栗縣",
    center: { lon: 120.8229, lat: 24.5651 },
    districts: [
      "竹南鎮",
      "頭份市",
      "三灣鄉",
      "南庄鄉",
      "獅潭鄉",
      "後龍鎮",
      "通霄鎮",
      "苑裡鎮",
      "苗栗市",
      "造橋鄉",
      "頭屋鄉",
      "公館鄉",
      "大湖鄉",
      "泰安鄉",
      "銅鑼鄉",
      "三義鄉",
      "西湖鄉",
      "卓蘭鎮",
    ],
  },
  {
    name: "彰化縣",
    center: { lon: 120.5579, lat: 24.0683 },
    districts: [
      "彰化市",
      "鹿港鎮",
      "和美鎮",
      "線西鄉",
      "伸港鄉",
      "福興鄉",
      "秀水鄉",
      "花壇鄉",
      "芬園鄉",
      "員林市",
      "溪湖鎮",
      "田中鎮",
      "大村鄉",
      "埔心鄉",
      "北斗鎮",
      "田尾鄉",
      "埤頭鄉",
      "溪州鄉",
      "竹塘鄉",
      "二林鎮",
      "大城鄉",
      "芳苑鄉",
      "二水鄉",
      "社頭鄉",
      "埔鹽鄉",
      "永靖鄉",
    ],
  },
  {
    name: "南投縣",
    center: { lon: 120.9715, lat: 23.915 },
    districts: [
      "南投市",
      "中寮鄉",
      "草屯鎮",
      "國姓鄉",
      "埔里鎮",
      "仁愛鄉",
      "名間鄉",
      "集集鎮",
      "水里鄉",
      "魚池鄉",
      "信義鄉",
      "竹山鎮",
      "鹿谷鄉",
    ],
  },
  {
    name: "雲林縣",
    center: { lon: 120.3895, lat: 23.7092 },
    districts: [
      "斗南鎮",
      "大埤鄉",
      "虎尾鎮",
      "土庫鎮",
      "褒忠鄉",
      "東勢鄉",
      "臺西鄉",
      "崙背鄉",
      "麥寮鄉",
      "斗六市",
      "林內鄉",
      "古坑鄉",
      "莿桐鄉",
      "西螺鎮",
      "二崙鄉",
      "北港鎮",
      "水林鄉",
      "口湖鄉",
      "四湖鄉",
      "元長鄉",
    ],
  },
  {
    name: "嘉義縣",
    center: { lon: 120.332, lat: 23.458 },
    districts: [
      "太保市",
      "朴子市",
      "布袋鎮",
      "大林鎮",
      "民雄鄉",
      "溪口鄉",
      "新港鄉",
      "六腳鄉",
      "東石鄉",
      "義竹鄉",
      "鹿草鄉",
      "水上鄉",
      "中埔鄉",
      "竹崎鄉",
      "梅山鄉",
      "番路鄉",
      "大埔鄉",
      "阿里山鄉",
    ],
  },
  {
    name: "屏東縣",
    center: { lon: 120.488, lat: 22.5519 },
    districts: [
      "屏東市",
      "潮州鎮",
      "東港鎮",
      "恆春鎮",
      "萬丹鄉",
      "長治鄉",
      "麟洛鄉",
      "九如鄉",
      "里港鄉",
      "鹽埔鄉",
      "高樹鄉",
      "萬巒鄉",
      "內埔鄉",
      "竹田鄉",
      "新埤鄉",
      "枋寮鄉",
      "新園鄉",
      "崁頂鄉",
      "林邊鄉",
      "南州鄉",
      "佳冬鄉",
      "琉球鄉",
      "車城鄉",
      "滿州鄉",
      "枋山鄉",
      "三地門鄉",
      "霧臺鄉",
      "瑪家鄉",
      "泰武鄉",
      "來義鄉",
      "春日鄉",
      "獅子鄉",
      "牡丹鄉",
    ],
  },
  {
    name: "宜蘭縣",
    center: { lon: 121.753, lat: 24.757 },
    districts: [
      "宜蘭市",
      "頭城鎮",
      "礁溪鄉",
      "壯圍鄉",
      "員山鄉",
      "羅東鎮",
      "三星鄉",
      "大同鄉",
      "五結鄉",
      "冬山鄉",
      "蘇澳鎮",
      "南澳鄉",
    ],
  },
  {
    name: "花蓮縣",
    center: { lon: 121.601, lat: 23.991 },
    districts: [
      "花蓮市",
      "新城鄉",
      "秀林鄉",
      "吉安鄉",
      "壽豐鄉",
      "鳳林鎮",
      "光復鄉",
      "豐濱鄉",
      "瑞穗鄉",
      "萬榮鄉",
      "玉里鎮",
      "卓溪鄉",
      "富里鄉",
    ],
  },
  {
    name: "臺東縣",
    center: { lon: 121.144, lat: 22.758 },
    districts: [
      "臺東市",
      "成功鎮",
      "關山鎮",
      "長濱鄉",
      "海端鄉",
      "池上鄉",
      "東河鄉",
      "鹿野鄉",
      "延平鄉",
      "卑南鄉",
      "金峰鄉",
      "大武鄉",
      "達仁鄉",
      "綠島鄉",
      "蘭嶼鄉",
      "太麻里鄉",
    ],
  },
  {
    name: "澎湖縣",
    center: { lon: 119.566, lat: 23.565 },
    districts: ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
  },
  {
    name: "金門縣",
    center: { lon: 118.318, lat: 24.436 },
    districts: ["金城鎮", "金湖鎮", "金沙鎮", "金寧鄉", "烈嶼鄉", "烏坵鄉"],
  },
  {
    name: "連江縣",
    center: { lon: 119.949, lat: 26.160 },
    districts: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"],
  },
];

const COUNTY_MAP = new Map(COUNTY_DATA.map((county) => [county.name, county]));

const EARTHQUAKE_PRESETS = {
  // 震央座標採中央氣象署地震測報中心發布值（lat, lon）。
  "chi-chi-1999": { coordinates: { lat: 23.853, lon: 120.816 }, magnitude: 7.3, depth: 8 },
  "meinong-2016": { coordinates: { lat: 22.92, lon: 120.54 }, magnitude: 6.6, depth: 14 },
  "hualien-2018": { coordinates: { lat: 24.1, lon: 121.73 }, magnitude: 6.2, depth: 6 },
  "hualien-2024": { coordinates: { lat: 23.88, lon: 121.57 }, magnitude: 7.1, depth: 19 },
};

const STRUCTURE_PROFILES = {
  rc: { capacity: 1, damping: 1, label: "RC 鋼筋混凝土" },
  src: { capacity: 1.2, damping: 1.08, label: "SRC 鋼骨鋼筋混凝土" },
  steel: { capacity: 1.12, damping: 0.94, label: "鋼骨結構" },
  masonry: { capacity: 0.62, damping: 0.86, label: "加強磚造" },
};

const CODE_ERA_PROFILES = {
  pre1999: { capacity: 0.68, label: "1999 年以前" },
  1999: { capacity: 0.84, label: "1999 年後" },
  2011: { capacity: 1, label: "2011 年後" },
  2024: { capacity: 1.16, label: "2024 年後" },
};

const FEATURE_PROFILES = {
  standard: { capacity: 1, damping: 1, label: "標準結構" },
  "soft-story": { capacity: 0.64, damping: 0.82, label: "軟弱底層" },
  "short-column": { capacity: 0.75, damping: 0.88, label: "短柱效應" },
  damper: { capacity: 1.17, damping: 1.58, label: "制震阻尼器" },
  "base-isolation": { capacity: 1.34, damping: 1.82, label: "基礎隔震" },
};

const state = {
  siteCounty: "臺北市",
  siteDistrict: "信義區",
  siteCoordinates: null,
  epicenterCounty: "臺北市",
  epicenterDistrict: "信義區",
  epicenterCoordinates: null,
  magnitude: 6.5,
  depth: 15,
  shakeDuration: 12,
  ground: "混合地層",
  floors: 101,
  basementFloors: 0,
  pileDepth: 0,
  structureType: "rc",
  codeEra: "2011",
  structureFeature: "standard",
  activePreset: null,
  linkEpicenter: false,
  running: false,
  collapseProgress: 0,
  shake: 0,
  pulse: 0,
  wavePhase: "idle",
  groundMotion: { x: 0, y: 0, z: 0 },
  structure: {
    displacements: [],
    velocities: [],
    damage: [],
    maxDrift: 0,
  },
  particles: [],
  particleAccumulator: 0,
  collapseImpactTriggered: false,
  damageAssessment: { peak: 0, final: null },
  aftershockCount: 0,
  waveform: { ew: [], ns: [], ud: [] },
  waveformAccumulator: 0,
  simulationStartAt: null,
  rotationX: -0.52,
  rotationY: 0.72,
  dragging: false,
  lastPointer: { x: 0, y: 0 },
  lastFrame: performance.now(),
};

const els = {
  siteCounty: document.getElementById("siteCounty"),
  siteDistrict: document.getElementById("siteDistrict"),
  siteCountyLabel: document.getElementById("siteCountyLabel"),
  siteDistrictLabel: document.getElementById("siteDistrictLabel"),
  siteLatitude: document.getElementById("siteLatitude"),
  siteLongitude: document.getElementById("siteLongitude"),
  epicenterCounty: document.getElementById("epicenterCounty"),
  epicenterDistrict: document.getElementById("epicenterDistrict"),
  epicenterCountyLabel: document.getElementById("epicenterCountyLabel"),
  epicenterDistrictLabel: document.getElementById("epicenterDistrictLabel"),
  epicenterLatitude: document.getElementById("epicenterLatitude"),
  epicenterLongitude: document.getElementById("epicenterLongitude"),
  mapPickerButtons: [...document.querySelectorAll("[data-map-target]")],
  mapPickerDialog: document.getElementById("mapPickerDialog"),
  mapPickerTitle: document.getElementById("mapPickerTitle"),
  mapPickerCoordinates: document.getElementById("mapPickerCoordinates"),
  confirmMapLocation: document.getElementById("confirmMapLocation"),
  mapLayerButtons: [...document.querySelectorAll("[data-map-layer]")],
  linkEpicenter: document.getElementById("linkEpicenter"),
  magnitude: document.getElementById("magnitude"),
  magnitudeValue: document.getElementById("magnitudeValue"),
  depth: document.getElementById("depth"),
  depthValue: document.getElementById("depthValue"),
  shakeDuration: document.getElementById("shakeDuration"),
  shakeDurationValue: document.getElementById("shakeDurationValue"),
  ground: document.getElementById("ground"),
  buildingFloors: document.getElementById("buildingFloors"),
  buildingFloorsValue: document.getElementById("buildingFloorsValue"),
  basementFloors: document.getElementById("basementFloors"),
  basementFloorsValue: document.getElementById("basementFloorsValue"),
  pileDepth: document.getElementById("pileDepth"),
  pileDepthValue: document.getElementById("pileDepthValue"),
  structureType: document.getElementById("structureType"),
  codeEra: document.getElementById("codeEra"),
  structureFeature: document.getElementById("structureFeature"),
  presetButtons: [...document.querySelectorAll("[data-quake-preset]")],
  startSim: document.getElementById("startSim"),
  resetSim: document.getElementById("resetSim"),
  continueSim: document.getElementById("continueSim"),
  scene: document.getElementById("scene"),
  scenePanel: document.querySelector(".scene-panel"),
  sceneStateBadge: document.getElementById("sceneStateBadge"),
  damagePercent: document.getElementById("damagePercent"),
  repairabilityText: document.getElementById("repairabilityText"),
  collapseFormText: document.getElementById("collapseFormText"),
  damageMeterFill: document.getElementById("damageMeterFill"),
  damageMonitor: document.getElementById("damageMonitor"),
  phasePrepare: document.getElementById("phasePrepare"),
  phaseP: document.getElementById("phaseP"),
  phaseS: document.getElementById("phaseS"),
  phaseDamage: document.getElementById("phaseDamage"),
  siteSummary: document.getElementById("siteSummary"),
  epicenterSummary: document.getElementById("epicenterSummary"),
  metricIntensity: document.getElementById("metricIntensity"),
  metricDistance: document.getElementById("metricDistance"),
  metricCollapse: document.getElementById("metricCollapse"),
  intensityText: document.getElementById("intensityText"),
  intensityDetail: document.getElementById("intensityDetail"),
  towerHeightText: document.getElementById("towerHeightText"),
  basementDepthText: document.getElementById("basementDepthText"),
  structureInfoText: document.getElementById("structureInfoText"),
  collapseText: document.getElementById("collapseText"),
  collapseDetail: document.getElementById("collapseDetail"),
  pWaveText: document.getElementById("pWaveText"),
  sWaveText: document.getElementById("sWaveText"),
  waveDetail: document.getElementById("waveDetail"),
  taiwanMapShadow: document.getElementById("taiwanMapShadow"),
  taiwanCountyShapes: document.getElementById("taiwanCountyShapes"),
  pWaveFront: document.getElementById("pWaveFront"),
  sWaveFront: document.getElementById("sWaveFront"),
  siteMapMarker: document.getElementById("siteMapMarker"),
  epicenterMapMarker: document.getElementById("epicenterMapMarker"),
  siteMapLabel: document.getElementById("siteMapLabel"),
  epicenterMapLabel: document.getElementById("epicenterMapLabel"),
  mapConnection: document.getElementById("mapConnection"),
  mapPStatus: document.getElementById("mapPStatus"),
  mapSStatus: document.getElementById("mapSStatus"),
  mapPProgress: document.getElementById("mapPProgress"),
  mapSProgress: document.getElementById("mapSProgress"),
  mapPhaseText: document.getElementById("mapPhaseText"),
  mapDistanceText: document.getElementById("mapDistanceText"),
  seismograph: document.getElementById("seismograph"),
  seismoDistance: document.getElementById("seismoDistance"),
  seismoDuration: document.getElementById("seismoDuration"),
  seismoEnergy: document.getElementById("seismoEnergy"),
  seismoStatus: document.getElementById("seismoStatus"),
};

const ctx = els.scene.getContext("2d");
const DPR = Math.max(1, window.devicePixelRatio || 1);
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const MAP_FRAME = { left: 17, right: 233, top: 12, bottom: 407 };
const COLLAPSE_IMPACT_AT = 0.72;
const MAP_DATA = window.TAIWAN_MAP_DATA || {
  bounds: { minLon: 119.937, maxLon: 122.0675, minLat: 21.8556, maxLat: 25.34 },
  counties: [],
};
const LOCATION_DATA = window.TAIWAN_LOCATION_DATA?.locations || {};
const seismographCtx = els.seismograph.getContext("2d");

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smoothstep(edge0, edge1, value) {
  const t = clamp((value - edge0) / Math.max(0.0001, edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function degToRad(value) {
  return (value * Math.PI) / 180;
}

function getCounty(countyName) {
  return COUNTY_MAP.get(countyName) || COUNTY_DATA[0];
}

function getDistrictOptions(countyName) {
  return getCounty(countyName).districts;
}

function getCoordinates(countyName, districtName) {
  const official = LOCATION_DATA[`${countyName}|${districtName}`];
  if (official) {
    return { lon: official.lon, lat: official.lat };
  }
  const county = getCounty(countyName);
  const seed = hashString(`${countyName}:${districtName}`);
  const lonOffset = (((seed & 0xff) / 255) - 0.5) * 0.18;
  const latOffset = ((((seed >> 8) & 0xff) / 255) - 0.5) * 0.14;
  return {
    lon: county.center.lon + lonOffset,
    lat: county.center.lat + latOffset,
  };
}

function getLocationCoordinates(target) {
  const coordinates = state[`${target}Coordinates`];
  return coordinates || getCoordinates(state[`${target}County`], state[`${target}District`]);
}

function formatCoordinates(coordinates) {
  return `${coordinates.lat.toFixed(6)}, ${coordinates.lon.toFixed(6)}`;
}

function formatTargetLocation(target) {
  const coordinates = state[`${target}Coordinates`];
  return coordinates ? formatCoordinates(coordinates) : formatLocation(state[`${target}County`], state[`${target}District`]);
}

function distanceKm(a, b) {
  const lat1 = degToRad(a.lat);
  const lat2 = degToRad(b.lat);
  const dLat = lat2 - lat1;
  const dLon = degToRad(b.lon - a.lon);
  const x = dLon * Math.cos((lat1 + lat2) / 2);
  const y = dLat;
  return Math.sqrt(x * x + y * y) * 6371;
}

function formatLocation(county, district) {
  return `${county}${district}`;
}

function populateCountySelect(select, value) {
  select.innerHTML = COUNTY_DATA.map(
    (county) => `<option value="${county.name}">${county.name}</option>`,
  ).join("");
  select.value = value;
}

function populateDistrictSelect(select, countyName, value) {
  const districts = getDistrictOptions(countyName);
  select.innerHTML = districts.map((district) => `<option value="${district}">${district}</option>`).join("");
  select.value = value && districts.includes(value) ? value : districts[0];
}

function syncEpicenterFromSite() {
  if (!state.linkEpicenter) {
    return;
  }
  state.epicenterCounty = state.siteCounty;
  state.epicenterDistrict = state.siteDistrict;
  state.epicenterCoordinates = state.siteCoordinates ? { ...state.siteCoordinates } : null;
  els.epicenterCounty.value = state.epicenterCounty;
  populateDistrictSelect(els.epicenterDistrict, state.epicenterCounty, state.epicenterDistrict);
  updateEpicenterLockState();
  updateCoordinateControls("epicenter");
}

function updateEpicenterLockState() {
  const locked = state.linkEpicenter;
  els.epicenterCounty.disabled = locked;
  els.epicenterDistrict.disabled = locked;
  els.epicenterLatitude.disabled = locked;
  els.epicenterLongitude.disabled = locked;
  els.mapPickerButtons.find((button) => button.dataset.mapTarget === "epicenter").disabled = locked;
  els.linkEpicenter.checked = locked;
}

function updateLocationControls() {
  populateCountySelect(els.siteCounty, state.siteCounty);
  populateDistrictSelect(els.siteDistrict, state.siteCounty, state.siteDistrict);
  populateCountySelect(els.epicenterCounty, state.epicenterCounty);
  populateDistrictSelect(els.epicenterDistrict, state.epicenterCounty, state.epicenterDistrict);
  updateEpicenterLockState();
  updateCoordinateControls("site");
  updateCoordinateControls("epicenter");
}

function updateCoordinateControls(target) {
  const coordinates = state[`${target}Coordinates`];
  const county = els[`${target}County`];
  const district = els[`${target}District`];
  const latitude = els[`${target}Latitude`];
  const longitude = els[`${target}Longitude`];
  els[`${target}CountyLabel`].textContent = coordinates ? "緯度" : "縣市";
  els[`${target}DistrictLabel`].textContent = coordinates ? "經度" : "行政區";
  county.hidden = Boolean(coordinates);
  district.hidden = Boolean(coordinates);
  latitude.hidden = !coordinates;
  longitude.hidden = !coordinates;
  if (coordinates) {
    latitude.value = coordinates.lat.toFixed(6);
    longitude.value = coordinates.lon.toFixed(6);
  }
}

function computeMetrics() {
  const site = getLocationCoordinates("site");
  const epicenter = getLocationCoordinates("epicenter");
  const distance = distanceKm(site, epicenter);
  const travelDistance = Math.sqrt(distance * distance + state.depth * state.depth);
  const soilFactor = {
    硬岩: 0.88,
    混合地層: 1,
    軟弱土層: 1.18,
  }[state.ground];
  const magnitudeFactor = clamp((state.magnitude - 4) / 4.5, 0, 1);
  // Use hypocentral distance and a curved attenuation law. The previous linear
  // distance factor discarded too much long-period energy across Taiwan and
  // severely underestimated large, shallow events at regional distances.
  const magnitudeEnergy = Math.pow(10, (state.magnitude - 5) / 2.7);
  const distanceAttenuation = 1 / (1 + Math.pow(travelDistance / 65, 1.1));
  const shakeRaw = magnitudeEnergy * distanceAttenuation * soilFactor * 0.27;
  const shake = clamp(shakeRaw, 0, 1.25);
  const intensityLevel = intensityLevelFromShake(shakeRaw);
  const towerHeight = (508 / 101) * clamp(state.floors, 1, 101);
  const basementDepth = state.basementFloors * 3;
  const structureProfile = STRUCTURE_PROFILES[state.structureType];
  const codeProfile = CODE_ERA_PROFILES[state.codeEra];
  const featureProfile = FEATURE_PROFILES[state.structureFeature];
  const basementRatio = clamp(state.basementFloors / 60, 0, 1);
  const embedmentRatio = clamp(basementDepth / Math.max(18, towerHeight * 0.35), 0, 1);
  const soilEmbedment = {
    硬岩: { capacity: 0.56, inputReduction: 0.58, damping: 0.54 },
    混合地層: { capacity: 0.48, inputReduction: 0.5, damping: 0.5 },
    軟弱土層: { capacity: 0.32, inputReduction: 0.34, damping: 0.38 },
  }[state.ground];
  const soilPile = {
    硬岩: { capacity: 0.2, inputReduction: 0.18, damping: 0.15 },
    混合地層: { capacity: 0.32, inputReduction: 0.25, damping: 0.22 },
    軟弱土層: { capacity: 0.46, inputReduction: 0.34, damping: 0.3 },
  }[state.ground];
  const pileRatio = clamp(state.pileDepth / 200, 0, 1);
  const pileEngagement = Math.pow(pileRatio, 0.78);
  const basementFoundationFactor = 1 + embedmentRatio * soilEmbedment.capacity;
  const basementMassFactor = 1 + basementRatio * 0.06;
  const pileCapacityFactor = 1 + pileEngagement * soilPile.capacity;
  const basementInputFactor = 1
    - Math.pow(embedmentRatio, 0.72) * soilEmbedment.inputReduction;
  const pileInputFactor = 1 - pileEngagement * soilPile.inputReduction;
  const foundationInputFactor = clamp(basementInputFactor * pileInputFactor, 0.25, 1);
  const retainedDamage = state.aftershockCount > 0
    ? clamp(state.damageAssessment.peak, 0, 1)
    : 0;
  const residualCapacityFactor = 1 - retainedDamage * 0.48;
  const structureCapacity = structureProfile.capacity
    * codeProfile.capacity
    * featureProfile.capacity
    * basementFoundationFactor
    * pileCapacityFactor
    * residualCapacityFactor
    / basementMassFactor;
  const dampingMultiplier = structureProfile.damping
    * featureProfile.damping
    * (1 + embedmentRatio * soilEmbedment.damping)
    * (1 + pileEngagement * soilPile.damping);
  const baseCollapseRisk =
    (state.magnitude - 5) * 0.16 + shake * 0.56 + (state.ground === "軟弱土層" ? 0.1 : 0) - state.depth / 140;
  const collapseRisk = clamp(
    (baseCollapseRisk * foundationInputFactor) / Math.max(0.46, structureCapacity),
    0,
    1,
  );
  const pArrival = travelDistance / 6.2;
  const sArrival = travelDistance / 3.6;
  const elapsed = state.running && state.simulationStartAt ? (performance.now() - state.simulationStartAt) / 1000 : 0;
  const pCountdown = Math.max(0, pArrival - elapsed);
  const sCountdown = Math.max(0, sArrival - elapsed);
  const pDuration = clamp(1.5 + magnitudeFactor * 1.8, 1.5, 3.3);
  const shakingDuration = clamp(state.shakeDuration, 3, 120);
  const pElapsed = elapsed - pArrival;
  const sElapsed = elapsed - sArrival;
  const pActive = state.running && pElapsed >= 0 && pElapsed < pDuration;
  const sActive = state.running && sElapsed >= 0 && sElapsed < shakingDuration;
  const pEnvelope = pActive
    ? Math.sin(clamp(pElapsed / pDuration, 0, 1) * Math.PI) ** 0.62
    : 0;
  const sAttack = clamp(sElapsed / 0.7, 0, 1);
  const sSustain = 1.1 + magnitudeFactor * 1.2;
  const sDecayProgress = clamp((sElapsed - sSustain) / Math.max(0.5, shakingDuration - sSustain), 0, 1);
  const sEnvelope = sActive ? sAttack * Math.pow(1 - sDecayProgress, 2.15) : 0;
  const eventEnd = sArrival + shakingDuration;
  const settlingDuration = clamp(4.2 / dampingMultiplier, 1.8, 5.2);
  const settleEnd = eventEnd + settlingDuration;
  const damageStart = sArrival + 1.35;
  const damageEligible = intensityLevel >= 6 && collapseRisk >= 0.58;
  let wavePhase = "idle";

  if (state.running && elapsed < pArrival) wavePhase = "approaching";
  if (pActive) wavePhase = "p";
  if (sActive) wavePhase = "s";
  if (sActive && damageEligible && elapsed >= damageStart && sEnvelope > 0.18) wavePhase = "damage";
  if (state.running && elapsed >= eventEnd && elapsed < settleEnd) wavePhase = "settling";
  if (state.running && sElapsed > 1 && sEnvelope < 0.02 && elapsed < settleEnd) wavePhase = "settling";
  if (state.running && elapsed >= settleEnd) wavePhase = "complete";

  const pWaveStrength = shake * 0.52 * pEnvelope;
  const sWaveStrength = shake * sEnvelope;
  const waveEnergy = clamp((pWaveStrength + sWaveStrength) / 1.25, 0, 1);

  return {
    site,
    epicenter,
    distance,
    travelDistance,
    shake,
    intensityLevel,
    collapseRisk,
    towerHeight,
    basementDepth,
    embedmentRatio,
    pileRatio,
    pArrival,
    sArrival,
    pCountdown,
    sCountdown,
    elapsed,
    wavePhase,
    pWaveStrength,
    sWaveStrength,
    damageStart,
    damageEligible,
    pDuration,
    shakingDuration,
    eventEnd,
    settleEnd,
    waveEnergy,
    structureCapacity,
    dampingMultiplier,
    foundationInputFactor,
  };
}

function intensityLevelFromShake(shakeValue) {
  const thresholds = [0.12, 0.22, 0.34, 0.5, 0.78, 0.92, 1.06, 1.22, 1.6];
  const index = thresholds.findIndex((threshold) => shakeValue < threshold);
  return index < 0 ? 9 : index;
}

function intensityLabel(level) {
  return ["0級", "1級", "2級", "3級", "4級", "5弱", "5強", "6弱", "6強", "7級"][
    clamp(Math.round(level), 0, 9)
  ];
}

function collapseLabel(risk, progress) {
  if (progress >= 0.96) return "嚴重倒塌";
  if (progress >= 0.72) return "大幅損毀";
  if (progress >= 0.42) return "結構失穩";
  if (risk >= 0.52) return "高風險";
  if (risk >= 0.28) return "中風險";
  return "低風險";
}

function phaseLabel(phase) {
  return {
    idle: "待命",
    approaching: "震波傳遞中",
    p: "P 波｜上下震動",
    s: "S 波｜水平搖晃",
    damage: "結構失穩",
    settling: "能量衰減中",
    complete: "震動停止",
  }[phase] || "待命";
}

function updatePhaseUI(phase) {
  const active = phase === "idle" || phase === "complete"
    ? "approaching"
    : phase === "settling" ? "s" : phase;
  const steps = {
    approaching: els.phasePrepare,
    p: els.phaseP,
    s: els.phaseS,
    damage: els.phaseDamage,
  };
  Object.values(steps).forEach((step) => step.classList.remove("active"));
  steps[active]?.classList.add("active");
  els.scenePanel.dataset.phase = phase;
  els.sceneStateBadge.textContent = phaseLabel(phase);
}

function mapCoordinatesToSvg(coordinates) {
  const { minLon, maxLon, minLat, maxLat } = MAP_DATA.bounds;
  const longitudeProgress = (coordinates.lon - minLon) / (maxLon - minLon);
  const latitudeProgress = (maxLat - coordinates.lat) / (maxLat - minLat);
  return {
    x: clamp(lerp(MAP_FRAME.left, MAP_FRAME.right, longitudeProgress), MAP_FRAME.left, MAP_FRAME.right),
    y: clamp(lerp(MAP_FRAME.top, MAP_FRAME.bottom, latitudeProgress), MAP_FRAME.top, MAP_FRAME.bottom),
  };
}

function mapRingToSvgPath(ring) {
  return ring.map(([lon, lat], index) => {
    const point = mapCoordinatesToSvg({ lon, lat });
    return `${index === 0 ? "M" : "L"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
  }).join(" ") + " Z";
}

function renderOfficialTaiwanMap() {
  if (!MAP_DATA.counties.length) {
    console.warn("Taiwan county boundary data is unavailable.");
    return;
  }

  const countyFragment = document.createDocumentFragment();
  const shadowFragment = document.createDocumentFragment();

  MAP_DATA.counties.forEach((county) => {
    const pathData = county.rings.map(mapRingToSvgPath).join(" ");
    const countyPath = document.createElementNS(SVG_NAMESPACE, "path");
    countyPath.setAttribute("d", pathData);
    countyPath.setAttribute("data-county", county.name);
    countyPath.setAttribute("fill-rule", "evenodd");
    countyFragment.appendChild(countyPath);

    const shadowPath = document.createElementNS(SVG_NAMESPACE, "path");
    shadowPath.setAttribute("d", pathData);
    shadowPath.setAttribute("fill-rule", "evenodd");
    shadowFragment.appendChild(shadowPath);
  });

  els.taiwanCountyShapes.replaceChildren(countyFragment);
  els.taiwanMapShadow.replaceChildren(shadowFragment);
}

function setSvgPosition(element, point) {
  element.setAttribute("transform", `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})`);
}

function updateWaveMap(metrics) {
  const sitePoint = mapCoordinatesToSvg(metrics.site);
  const epicenterPoint = mapCoordinatesToSvg(metrics.epicenter);
  setSvgPosition(els.siteMapMarker, sitePoint);
  setSvgPosition(els.epicenterMapMarker, epicenterPoint);

  els.siteMapLabel.setAttribute("x", String(clamp(sitePoint.x + 10, 12, 205)));
  els.siteMapLabel.setAttribute("y", String(clamp(sitePoint.y - 11, 16, 410)));
  els.epicenterMapLabel.setAttribute("x", String(clamp(epicenterPoint.x + 10, 12, 205)));
  els.epicenterMapLabel.setAttribute("y", String(clamp(epicenterPoint.y + 23, 16, 412)));
  els.mapConnection.setAttribute("x1", String(epicenterPoint.x));
  els.mapConnection.setAttribute("y1", String(epicenterPoint.y));
  els.mapConnection.setAttribute("x2", String(sitePoint.x));
  els.mapConnection.setAttribute("y2", String(sitePoint.y));

  const pDistanceFromSource = metrics.elapsed * 6.2;
  const sDistanceFromSource = metrics.elapsed * 3.6;
  const pSurfaceRadiusKm = Math.sqrt(Math.max(0, pDistanceFromSource ** 2 - state.depth ** 2));
  const sSurfaceRadiusKm = Math.sqrt(Math.max(0, sDistanceFromSource ** 2 - state.depth ** 2));
  const { minLon, maxLon, minLat, maxLat } = MAP_DATA.bounds;
  const centerLatitude = degToRad((minLat + maxLat) / 2);
  const pixelsPerKmX = (MAP_FRAME.right - MAP_FRAME.left) / ((maxLon - minLon) * 111.32 * Math.cos(centerLatitude));
  const pixelsPerKmY = (MAP_FRAME.bottom - MAP_FRAME.top) / ((maxLat - minLat) * 110.57);
  const pRadiusX = clamp(pSurfaceRadiusKm * pixelsPerKmX, 0, 300);
  const pRadiusY = clamp(pSurfaceRadiusKm * pixelsPerKmY, 0, 300);
  const sRadiusX = clamp(sSurfaceRadiusKm * pixelsPerKmX, 0, 300);
  const sRadiusY = clamp(sSurfaceRadiusKm * pixelsPerKmY, 0, 300);

  [els.pWaveFront, els.sWaveFront].forEach((front) => {
    front.setAttribute("cx", String(epicenterPoint.x));
    front.setAttribute("cy", String(epicenterPoint.y));
  });
  els.pWaveFront.setAttribute("rx", String(pRadiusX));
  els.pWaveFront.setAttribute("ry", String(pRadiusY));
  els.sWaveFront.setAttribute("rx", String(sRadiusX));
  els.sWaveFront.setAttribute("ry", String(sRadiusY));
  const frontsVisible = state.running && !["settling", "complete"].includes(metrics.wavePhase);
  els.pWaveFront.style.opacity = frontsVisible && pRadiusX > 0.5 ? "0.92" : "0";
  els.sWaveFront.style.opacity = frontsVisible && sRadiusX > 0.5 ? "0.92" : "0";

  const pProgress = state.running ? clamp(metrics.elapsed / Math.max(metrics.pArrival, 0.01), 0, 1) : 0;
  const sProgress = state.running ? clamp(metrics.elapsed / Math.max(metrics.sArrival, 0.01), 0, 1) : 0;
  els.mapPProgress.style.width = `${(pProgress * 100).toFixed(1)}%`;
  els.mapSProgress.style.width = `${(sProgress * 100).toFixed(1)}%`;

  if (!state.running) {
    els.mapPStatus.textContent = `預計 ${metrics.pArrival.toFixed(1)} 秒`;
    els.mapSStatus.textContent = `預計 ${metrics.sArrival.toFixed(1)} 秒`;
  } else if (metrics.wavePhase === "complete") {
    els.mapPStatus.textContent = "能量已通過";
    els.mapSStatus.textContent = "震動已停止";
  } else {
    els.mapPStatus.textContent = metrics.pCountdown > 0
      ? `還有 ${metrics.pCountdown.toFixed(1)} 秒`
      : `已抵達 +${Math.max(0, metrics.elapsed - metrics.pArrival).toFixed(1)} 秒`;
    els.mapSStatus.textContent = metrics.sCountdown > 0
      ? `還有 ${metrics.sCountdown.toFixed(1)} 秒`
      : `已抵達 +${Math.max(0, metrics.elapsed - metrics.sArrival).toFixed(1)} 秒`;
  }

  els.mapPhaseText.textContent = phaseLabel(metrics.wavePhase);
  els.mapDistanceText.textContent = metrics.distance < 1
    ? "同一位置"
    : `距離 ${metrics.distance.toFixed(1)} km`;
}

function resetWaveform() {
  state.waveform = {
    ew: new Array(260).fill(0),
    ns: new Array(260).fill(0),
    ud: new Array(260).fill(0),
  };
  state.waveformAccumulator = 0;
}

function updateWaveform(metrics, delta, now) {
  state.waveformAccumulator += delta;
  const interval = 1 / 32;
  while (state.waveformAccumulator >= interval) {
    const activeNoise = metrics.waveEnergy > 0.002 ? (Math.random() - 0.5) * metrics.waveEnergy * 0.12 : 0;
    const time = now / 1000;
    const ew = clamp(state.groundMotion.x / 24 + activeNoise, -1, 1);
    const ns = clamp(state.groundMotion.z / 11 + Math.sin(time * 17) * activeNoise, -1, 1);
    const ud = clamp(state.groundMotion.y / 9 + Math.cos(time * 23) * activeNoise * 0.6, -1, 1);
    [["ew", ew], ["ns", ns], ["ud", ud]].forEach(([axis, value]) => {
      state.waveform[axis].push(value);
      if (state.waveform[axis].length > 260) state.waveform[axis].shift();
    });
    state.waveformAccumulator -= interval;
  }
}

function drawSeismograph(metrics) {
  const rect = els.seismograph.getBoundingClientRect();
  const width = Math.max(320, rect.width);
  const height = Math.max(150, rect.height);
  const pixelWidth = Math.floor(width * DPR);
  const pixelHeight = Math.floor(height * DPR);
  if (els.seismograph.width !== pixelWidth || els.seismograph.height !== pixelHeight) {
    els.seismograph.width = pixelWidth;
    els.seismograph.height = pixelHeight;
  }
  seismographCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
  seismographCtx.clearRect(0, 0, width, height);
  seismographCtx.fillStyle = "rgba(2, 10, 17, 0.96)";
  seismographCtx.fillRect(0, 0, width, height);

  seismographCtx.lineWidth = 1;
  for (let x = 0; x <= width; x += 36) {
    seismographCtx.strokeStyle = "rgba(105, 157, 184, 0.09)";
    seismographCtx.beginPath();
    seismographCtx.moveTo(x, 0);
    seismographCtx.lineTo(x, height);
    seismographCtx.stroke();
  }

  const axes = [
    { key: "ew", center: height * 0.18, color: "#ffb13b", label: "EW" },
    { key: "ns", center: height * 0.5, color: "#62dbff", label: "NS" },
    { key: "ud", center: height * 0.82, color: "#8ee6a8", label: "UD" },
  ];
  axes.forEach((axis) => {
    seismographCtx.strokeStyle = "rgba(151, 191, 210, 0.16)";
    seismographCtx.beginPath();
    seismographCtx.moveTo(0, axis.center);
    seismographCtx.lineTo(width, axis.center);
    seismographCtx.stroke();
    seismographCtx.fillStyle = axis.color;
    seismographCtx.font = "700 10px Noto Sans TC, sans-serif";
    seismographCtx.fillText(axis.label, 8, axis.center - 8);
    const values = state.waveform[axis.key];
    seismographCtx.strokeStyle = axis.color;
    seismographCtx.lineWidth = 1.45;
    seismographCtx.beginPath();
    values.forEach((value, index) => {
      const x = (index / Math.max(1, values.length - 1)) * width;
      const y = axis.center - value * height * 0.125;
      if (index === 0) seismographCtx.moveTo(x, y);
      else seismographCtx.lineTo(x, y);
    });
    seismographCtx.stroke();
  });

  els.seismoDistance.textContent = `${metrics.distance.toFixed(1)} km`;
  const remainingShake = Math.max(0, metrics.eventEnd - metrics.elapsed);
  els.seismoDuration.textContent = state.running && ["s", "damage"].includes(metrics.wavePhase)
    ? `剩 ${remainingShake.toFixed(1)} s`
    : `${metrics.shakingDuration.toFixed(1)} s`;
  els.seismoEnergy.textContent = `${Math.round(metrics.waveEnergy * 100)}%`;
  els.seismoStatus.textContent = phaseLabel(metrics.wavePhase);
}

function computeDamageRatio() {
  const structuralDamage = state.structure.damage.reduce(
    (maximum, value) => Math.max(maximum, value),
    0,
  );
  const driftDamage = clamp((state.structure.maxDrift - 0.0015) / 0.022, 0, 1);
  const impactDamage = state.collapseImpactTriggered ? 1 : 0;
  return clamp(
    Math.max(state.collapseProgress, structuralDamage * 0.82, driftDamage * 0.68, impactDamage),
    0,
    1,
  );
}

function updateDamageMonitor(metrics) {
  const currentDamage = computeDamageRatio();
  state.damageAssessment.peak = Math.max(state.damageAssessment.peak, currentDamage);

  const assessmentComplete = state.running && metrics.wavePhase === "complete";
  if (assessmentComplete && state.damageAssessment.final === null) {
    state.damageAssessment.final = state.damageAssessment.peak;
  }

  if (state.damageAssessment.final === null) {
    const evaluating = state.running;
    els.damagePercent.textContent = "--";
    els.repairabilityText.textContent = evaluating ? "評估中" : "待評估";
    els.collapseFormText.textContent = evaluating ? "震動進行中" : "尚未模擬";
    els.damageMeterFill.style.width = "0%";
    els.damageMonitor.dataset.level = "safe";
    els.continueSim.disabled = true;
    return;
  }

  const damageRatio = state.damageAssessment.final;
  const damagePercent = Math.round(damageRatio * 100);
  const repairability = damagePercent < 20
    ? "可修繕"
    : damagePercent < 60
      ? "補強後使用"
      : "拆除重建";
  const collapseForm = damagePercent < 35
    ? "無倒塌"
    : damagePercent < 85
      ? "半倒"
      : "全倒";
  const level = damagePercent < 20 ? "safe" : damagePercent < 60 ? "repair" : "rebuild";

  els.damagePercent.textContent = `${damagePercent}%`;
  els.repairabilityText.textContent = repairability;
  els.collapseFormText.textContent = collapseForm;
  els.damageMeterFill.style.width = `${damagePercent}%`;
  els.damageMonitor.dataset.level = level;
  els.continueSim.disabled = false;
  els.continueSim.textContent = `依現況繼續模擬（第 ${state.aftershockCount + 1} 次餘震）`;
}

function updateSummaryUI(metrics) {
  const { distance, intensityLevel, collapseRisk, pArrival, sArrival, pCountdown, sCountdown, wavePhase } = metrics;
  els.siteSummary.textContent = formatTargetLocation("site");
  els.epicenterSummary.textContent = formatTargetLocation("epicenter");
  els.magnitudeValue.textContent = state.magnitude.toFixed(1);
  els.depthValue.textContent = `${state.depth} km`;
  els.shakeDurationValue.textContent = `${state.shakeDuration} 秒`;
  els.buildingFloorsValue.textContent = `${state.floors} 層`;
  els.basementFloorsValue.textContent = `${state.basementFloors} 層`;
  els.pileDepthValue.textContent = `${state.pileDepth} m`;
  els.towerHeightText.textContent = `${Math.round(metrics.towerHeight)} m`;
  els.basementDepthText.textContent = `${Math.round(metrics.basementDepth)}m`;
  els.structureInfoText.textContent = `地上 ${state.floors} 層／地下 ${state.basementFloors} 層，基樁 ${state.pileDepth} m，${STRUCTURE_PROFILES[state.structureType].label}，${FEATURE_PROFILES[state.structureFeature].label}。`;

  const distanceText = distance < 1 ? "近乎重疊" : `${distance.toFixed(1)} km`;
  els.metricDistance.textContent = distanceText;
  els.metricIntensity.textContent = intensityLabel(intensityLevel);
  els.metricCollapse.textContent = `${Math.round(collapseRisk * 100)}%`;

  els.intensityText.textContent = `震度 ${intensityLabel(intensityLevel)}`;
  els.intensityDetail.textContent =
    `所在地位於 ${formatTargetLocation("site")}，震央在 ${formatTargetLocation("epicenter")}，距離約 ${distanceText}。`;

  els.collapseText.textContent = collapseLabel(collapseRisk, state.collapseProgress);
  els.collapseDetail.textContent =
    state.collapseProgress > 0
      ? `倒塌進度 ${Math.round(state.collapseProgress * 100)}%，最大層間位移角 ${(state.structure.maxDrift * 100).toFixed(2)}%，目前有 ${state.particles.length} 個動態粒子。`
      : `${STRUCTURE_PROFILES[state.structureType].label}／${CODE_ERA_PROFILES[state.codeEra].label}／${FEATURE_PROFILES[state.structureFeature].label}，地下嵌固與基樁降低 ${Math.round((1 - metrics.foundationInputFactor) * 100)}% 結構輸入，耐震容量係數 ${metrics.structureCapacity.toFixed(2)}。`;

  els.pWaveText.textContent = `${pCountdown.toFixed(1)} s`;
  els.sWaveText.textContent = `${sCountdown.toFixed(1)} s`;
  if (!state.running) {
    els.waveDetail.textContent = `預估 P 波 ${pArrival.toFixed(1)} 秒、S 波 ${sArrival.toFixed(1)} 秒，按下開始模擬後會依序呈現。`;
  } else if (wavePhase === "approaching") {
    els.waveDetail.textContent = `地底能量正在傳遞，P 波還有 ${pCountdown.toFixed(1)} 秒到達。`;
  } else if (wavePhase === "p") {
    els.waveDetail.textContent = `P 波已到達：建築先出現短促的上下震動；S 波還有 ${sCountdown.toFixed(1)} 秒。`;
  } else if (wavePhase === "s") {
    els.waveDetail.textContent = `S 波已到達：能量將在約 ${metrics.shakingDuration.toFixed(1)} 秒內逐步衰減。`;
  } else if (wavePhase === "damage") {
    els.waveDetail.textContent = "強烈 S 波超過結構承受能力，樓體開始失穩、屈曲並倒塌。";
  } else if (wavePhase === "settling") {
    els.waveDetail.textContent = "主要震波已通過，殘餘振動正在受阻尼作用快速減弱。";
  } else if (wavePhase === "complete") {
    els.waveDetail.textContent = "震波能量已離開測站，地表與未倒塌結構恢復靜止。";
  }

  updatePhaseUI(wavePhase);
  updateWaveMap(metrics);
  updateDamageMonitor(metrics);
}

function updateControlsFromState() {
  els.magnitude.value = String(state.magnitude);
  els.depth.value = String(state.depth);
  els.shakeDuration.value = String(state.shakeDuration);
  els.ground.value = state.ground;
  els.buildingFloors.value = String(state.floors);
  els.basementFloors.value = String(state.basementFloors);
  els.pileDepth.value = String(state.pileDepth);
  els.structureType.value = state.structureType;
  els.codeEra.value = state.codeEra;
  els.structureFeature.value = state.structureFeature;
  els.presetButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.quakePreset === state.activePreset);
  });
  els.linkEpicenter.checked = state.linkEpicenter;
  updateLocationControls();
}

function applyEarthquakePreset(presetId) {
  const preset = EARTHQUAKE_PRESETS[presetId];
  if (!preset) return;
  state.activePreset = presetId;
  state.linkEpicenter = false;
  state.epicenterCoordinates = { ...preset.coordinates };
  state.magnitude = preset.magnitude;
  state.depth = preset.depth;
  updateControlsFromState();
  els.magnitudeValue.textContent = state.magnitude.toFixed(1);
  els.depthValue.textContent = `${state.depth} km`;
  updateSummaryUI(computeMetrics());
}

function clearActivePreset() {
  state.activePreset = null;
  els.presetButtons.forEach((button) => button.classList.remove("active"));
}

function setSiteLocation(countyName, districtName) {
  state.siteCounty = countyName;
  state.siteDistrict = districtName;
  state.siteCoordinates = null;
  populateDistrictSelect(els.siteDistrict, countyName, districtName);
  if (state.linkEpicenter) {
    state.epicenterCounty = countyName;
    state.epicenterDistrict = districtName;
    populateDistrictSelect(els.epicenterDistrict, countyName, districtName);
  }
  updateSummaryUI(computeMetrics());
}

function setEpicenterLocation(countyName, districtName) {
  state.epicenterCounty = countyName;
  state.epicenterDistrict = districtName;
  state.epicenterCoordinates = null;
  populateDistrictSelect(els.epicenterDistrict, countyName, districtName);
  updateSummaryUI(computeMetrics());
}

function randomizeView() {
  state.rotationX = -0.46 + (Math.random() - 0.5) * 0.12;
  state.rotationY = 0.75 + (Math.random() - 0.5) * 0.28;
}

function startSimulation() {
  state.running = true;
  state.collapseProgress = 0;
  state.shake = 0;
  state.pulse = 0;
  state.wavePhase = "approaching";
  resetStructuralModel();
  state.particles.length = 0;
  state.particleAccumulator = 0;
  state.collapseImpactTriggered = false;
  state.damageAssessment = { peak: 0, final: null };
  state.aftershockCount = 0;
  resetWaveform();
  state.simulationStartAt = performance.now();
  els.startSim.textContent = "重新模擬";
  els.continueSim.textContent = "依現況繼續模擬（餘震）";
  updateSummaryUI(computeMetrics());
}

function continueSimulation() {
  if (state.damageAssessment.final === null) return;

  const retainedDamage = Math.max(state.damageAssessment.final, computeDamageRatio());
  state.running = true;
  state.shake = 0;
  state.pulse = 0;
  state.wavePhase = "approaching";
  state.groundMotion = { x: 0, y: 0, z: 0 };
  state.structure.velocities.fill(0);
  state.particleAccumulator = 0;
  state.damageAssessment = { peak: retainedDamage, final: null };
  state.aftershockCount += 1;
  resetWaveform();
  state.simulationStartAt = performance.now();
  els.continueSim.textContent = `第 ${state.aftershockCount} 次餘震模擬中`;
  updateSummaryUI(computeMetrics());
}

function resetSimulation() {
  state.running = false;
  state.collapseProgress = 0;
  state.shake = 0;
  state.pulse = 0;
  state.wavePhase = "idle";
  state.groundMotion = { x: 0, y: 0, z: 0 };
  resetStructuralModel();
  state.particles.length = 0;
  state.particleAccumulator = 0;
  state.collapseImpactTriggered = false;
  state.damageAssessment = { peak: 0, final: null };
  state.aftershockCount = 0;
  resetWaveform();
  state.simulationStartAt = null;
  els.startSim.textContent = "開始模擬";
  els.continueSim.textContent = "依現況繼續模擬（餘震）";
  updateSummaryUI(computeMetrics());
}

function structuralNodeCount() {
  return Math.max(6, Math.min(18, Math.ceil(state.floors / 6)));
}

function resetStructuralModel() {
  const count = structuralNodeCount();
  state.structure.displacements = new Array(count).fill(0);
  state.structure.velocities = new Array(count).fill(0);
  state.structure.damage = new Array(count).fill(0);
  state.structure.maxDrift = 0;
  state.structure.lastCollapse = 0;
}

function ensureStructuralModel() {
  if (state.structure.displacements.length !== structuralNodeCount()) {
    resetStructuralModel();
  }
}

function updateStructuralDynamics(metrics, delta, now) {
  ensureStructuralModel();
  const seconds = now / 1000;
  const count = state.structure.displacements.length;
  const x = state.structure.displacements;
  const v = state.structure.velocities;
  const damage = state.structure.damage;
  const nextAcceleration = new Array(count).fill(0);
  const soilAmplification = { 硬岩: 0.86, 混合地層: 1, 軟弱土層: 1.22 }[state.ground];
  const dampingRatio = { 硬岩: 0.055, 混合地層: 0.045, 軟弱土層: 0.035 }[state.ground]
    * metrics.dampingMultiplier;
  const fundamentalPeriod = clamp(0.11 * Math.pow(state.floors, 0.9), 0.55, 7.2);
  const omega = (Math.PI * 2) / fundamentalPeriod;
  const coupling = 18 + 34 / Math.sqrt(fundamentalPeriod);
  const pCarrier = Math.sin(seconds * Math.PI * 2 * 7.2) + Math.sin(seconds * Math.PI * 2 * 11.4) * 0.28;
  const sCarrier = Math.sin(seconds * Math.PI * 2 * 1.15) + Math.sin(seconds * Math.PI * 2 * 2.35 + 0.7) * 0.34;
  const transverseCarrier = Math.sin(seconds * Math.PI * 2 * 0.83 + 1.2);

  state.groundMotion.x = metrics.sWaveStrength * soilAmplification * sCarrier * 17;
  state.groundMotion.y = metrics.pWaveStrength * soilAmplification * pCarrier * 7.5;
  state.groundMotion.z = metrics.sWaveStrength * soilAmplification * transverseCarrier * 6;

  for (let i = 0; i < count; i += 1) {
    const heightRatio = (i + 1) / count;
    const below = i === 0 ? 0 : x[i - 1];
    const above = i === count - 1 ? x[i] : x[i + 1];
    const modalParticipation = 0.28 + Math.pow(heightRatio, 1.32) * 1.12;
    const responseStrength = metrics.sWaveStrength
      * metrics.foundationInputFactor
      / Math.sqrt(metrics.dampingMultiplier);
    const forcing = -responseStrength * soilAmplification * sCarrier * modalParticipation * 72;
    const restoring = -(omega * omega) * x[i];
    const interstory = coupling * (below + above - 2 * x[i]);
    const damping = -2 * dampingRatio * omega * v[i] - v[i] * 0.12;
    nextAcceleration[i] = forcing + restoring + interstory + damping;
  }

  for (let i = 0; i < count; i += 1) {
    v[i] += nextAcceleration[i] * delta;
    v[i] *= Math.exp(-delta * 0.16);
    x[i] += v[i] * delta;
    x[i] = clamp(x[i], -76, 76);

    const below = i === 0 ? 0 : x[i - 1];
    const storyHeight = Math.max(18, metrics.towerHeight / count);
    const driftRatio = Math.abs(x[i] - below) / storyHeight;
    state.structure.maxDrift = Math.max(state.structure.maxDrift * 0.996, driftRatio);
    const yieldDrift = (0.012 - metrics.collapseRisk * 0.004) * clamp(metrics.structureCapacity, 0.62, 1.35);
    if (metrics.wavePhase === "damage" && driftRatio > yieldDrift) {
      damage[i] = clamp(
        damage[i] + (driftRatio - yieldDrift) * delta * (4.5 + metrics.collapseRisk * 6),
        0,
        1,
      );
    }
  }
}

function pushParticle(type, position, velocity, life, size, color, options = {}) {
  if (state.particles.length >= 900) return;
  state.particles.push({
    type,
    x: position.x,
    y: position.y,
    z: position.z,
    vx: velocity.x,
    vy: velocity.y,
    vz: velocity.z,
    life,
    maxLife: life,
    size,
    color,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 9,
    restY: options.restY ?? 1,
    settled: false,
  });
}

function spawnCollapseImpact(metrics) {
  if (state.collapseImpactTriggered) return;
  state.collapseImpactTriggered = true;

  const towerHeight = metrics.towerHeight;
  const baseX = 88;
  const baseZ = 54;
  const available = Math.max(0, 900 - state.particles.length);
  const burstCount = Math.min(760, available);

  for (let i = 0; i < burstCount; i += 1) {
    const along = Math.pow(Math.random(), 0.82);
    const lateral = (Math.random() - 0.5) * (76 + along * 38);
    const roll = Math.random();
    const type = roll < 0.2 ? "dust" : roll < 0.66 ? "concrete" : roll < 0.88 ? "glass" : "steel";
    const position = {
      x: baseX + along * towerHeight * 0.94 + (Math.random() - 0.5) * 46,
      y: 8 + Math.random() * (18 + (1 - along) * 18),
      z: baseZ + lateral,
    };
    const velocity = {
      x: 12 + Math.random() * (55 + along * 70),
      y: 24 + Math.random() * (70 + along * 58),
      z: (Math.random() - 0.5) * (90 + along * 65),
    };
    const moundHeight = 1 + Math.random() * (5 + 15 * Math.sin(along * Math.PI));

    if (type === "dust") {
      pushParticle(type, position, velocity, 3.2 + Math.random() * 3.6, 12 + Math.random() * 28, "188, 169, 143");
    } else if (type === "glass") {
      pushParticle(type, position, velocity, 18 + Math.random() * 10, 1.5 + Math.random() * 3.7, "157, 222, 255", { restY: moundHeight });
    } else if (type === "steel") {
      pushParticle(type, position, velocity, 24 + Math.random() * 12, 3 + Math.random() * 6, "116, 126, 148", { restY: moundHeight });
    } else {
      pushParticle(type, position, velocity, 24 + Math.random() * 12, 3.5 + Math.random() * 8.5, "176, 181, 194", { restY: moundHeight });
    }
  }
}

function spawnDamageParticle(metrics) {
  const collapse = state.collapseProgress;
  const breakY = metrics.towerHeight * (0.32 + Math.random() * 0.32);
  const structureIndex = Math.min(
    state.structure.displacements.length - 1,
    Math.floor((breakY / metrics.towerHeight) * state.structure.displacements.length),
  );
  const structureOffset = state.structure.displacements[structureIndex] || 0;
  const position = {
    x: 88 + structureOffset + collapse * 90 + (Math.random() - 0.5) * 76,
    y: Math.max(10, breakY - collapse * metrics.towerHeight * 0.22),
    z: 54 + (Math.random() - 0.5) * 70,
  };
  const roll = Math.random();
  const type = roll < 0.46 ? "dust" : roll < 0.78 ? "concrete" : "glass";
  const velocity = {
    x: (Math.random() - 0.35) * (28 + collapse * 72),
    y: 18 + Math.random() * (42 + collapse * 75),
    z: (Math.random() - 0.5) * (34 + collapse * 56),
  };

  if (type === "dust") {
    pushParticle(type, position, velocity, 1.3 + Math.random() * 1.7, 7 + Math.random() * 16, "194, 177, 153");
  } else if (type === "glass") {
    pushParticle(type, position, velocity, 1.4 + Math.random() * 1.8, 1.5 + Math.random() * 3, "166, 224, 255");
  } else {
    pushParticle(type, position, velocity, 1.8 + Math.random() * 2.2, 2.5 + Math.random() * 5, "190, 196, 210");
  }
}

function updateParticleSystem(metrics, delta) {
  if (state.collapseProgress >= COLLAPSE_IMPACT_AT && !state.collapseImpactTriggered) {
    spawnCollapseImpact(metrics);
  }

  if (metrics.wavePhase === "damage" && !state.collapseImpactTriggered) {
    const damageRate = 5 + state.collapseProgress * 34 + state.structure.maxDrift * 260;
    state.particleAccumulator += damageRate * delta;
    while (state.particleAccumulator >= 1) {
      spawnDamageParticle(metrics);
      state.particleAccumulator -= 1;
    }
  }

  for (let i = state.particles.length - 1; i >= 0; i -= 1) {
    const particle = state.particles[i];
    particle.life -= delta * (particle.settled ? 0.018 : 1);
    if (particle.life <= 0) {
      state.particles.splice(i, 1);
      continue;
    }

    const drag = particle.type === "dust" ? 1.9 : 0.34;
    particle.vx *= Math.exp(-drag * delta);
    particle.vz *= Math.exp(-drag * delta);
    particle.vy -= (particle.type === "dust" ? 18 : 155) * delta;
    particle.x += particle.vx * delta;
    particle.y += particle.vy * delta;
    particle.z += particle.vz * delta;
    particle.rotation += particle.spin * delta;

    const restY = particle.restY ?? 1;
    if (particle.y < restY && particle.type !== "dust") {
      particle.y = restY;
      if (Math.abs(particle.vy) < 16) {
        particle.vy = 0;
        particle.vx *= 0.38;
        particle.vz *= 0.38;
        particle.spin *= 0.25;
        particle.settled = true;
      } else {
        particle.vy *= -0.24;
        particle.vx *= 0.68;
        particle.vz *= 0.68;
      }
    }
  }
}

function resizeCanvas() {
  const rect = els.scene.getBoundingClientRect();
  els.scene.width = Math.max(1, Math.floor(rect.width * DPR));
  els.scene.height = Math.max(1, Math.floor(rect.height * DPR));
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

function fillRoundedRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function rotateX(point, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  };
}

function rotateY(point, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos + point.z * sin,
    y: point.y,
    z: -point.x * sin + point.z * cos,
  };
}

function rotateZ(point, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos,
    z: point.z,
  };
}

function transformWorld(point) {
  const yShift = -18;
  const shifted = { x: point.x, y: point.y + yShift, z: point.z };
  const rotatedY = rotateY(shifted, state.rotationY);
  return rotateX(rotatedY, state.rotationX);
}

function project(point, width, height) {
  const transformed = transformWorld(point);
  const cameraDistance = 980;
  const perspective = cameraDistance / (cameraDistance - transformed.z);
  const scale = 1.08;
  return {
    x: width / 2 + transformed.x * perspective * scale,
    y: height * 0.82 - transformed.y * perspective * scale,
    scale: perspective,
    depth: transformed.z,
  };
}

function drawPolygon(points, fill, stroke, lineWidth = 1) {
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function drawPrism(center, size, colors, extra = {}) {
  const { x, y, z } = center;
  const { w, d, h } = size;
  const collapse = extra.collapse || 0;
  const tiltX = extra.tiltX || 0;
  const tiltY = extra.tiltY || 0;
  const tiltZ = extra.tiltZ || 0;
  const offsetY = extra.offsetY || 0;
  const swayX = extra.swayX || 0;
  const swayZ = extra.swayZ || 0;

  const localVertices = [
    { x: -w / 2, y: 0, z: -d / 2 },
    { x: w / 2, y: 0, z: -d / 2 },
    { x: w / 2, y: 0, z: d / 2 },
    { x: -w / 2, y: 0, z: d / 2 },
    { x: -w / 2, y: h, z: -d / 2 },
    { x: w / 2, y: h, z: -d / 2 },
    { x: w / 2, y: h, z: d / 2 },
    { x: -w / 2, y: h, z: d / 2 },
  ];

  const transformed = localVertices.map((vertex) => {
    let point = {
      x: vertex.x,
      y: vertex.y + offsetY,
      z: vertex.z,
    };
    point = rotateY(point, tiltY);
    point = rotateX(point, tiltX);
    point = rotateZ(point, tiltZ);
    point.x += x + swayX * collapse;
    point.y += y;
    point.z += z + swayZ * collapse;
    return point;
  });

  const faces = [
    { name: "top", indices: [4, 5, 6, 7], color: colors.top || "#f3f7ff" },
    { name: "front", indices: [0, 1, 5, 4], color: colors.front || "#9c9fc0" },
    { name: "right", indices: [1, 2, 6, 5], color: colors.right || "#7b7fa2" },
    { name: "back", indices: [2, 3, 7, 6], color: colors.back || "#646b8a" },
    { name: "left", indices: [3, 0, 4, 7], color: colors.left || "#59607a" },
  ]
    .map((face) => ({
      ...face,
      depth:
        face.indices.reduce((sum, index) => sum + transformed[index].z, 0) / face.indices.length,
    }))
    .sort((a, b) => a.depth - b.depth);

  faces.forEach((face) => {
    const points = face.indices.map((index) => {
      const projected = project(transformed[index], canvasBounds.width, canvasBounds.height);
      return { x: projected.x, y: projected.y };
    });
    const signedArea = points.reduce((area, point, index) => {
      const next = points[(index + 1) % points.length];
      return area + point.x * next.y - next.x * point.y;
    }, 0) / 2;
    if (signedArea >= 0) return;
    drawPolygon(points, face.color, "rgba(255,255,255,0.05)", 1);
  });

  return transformed;
}

function drawSky(width, height, metrics) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#0d1a33");
  gradient.addColorStop(0.52, "#132542");
  gradient.addColorStop(1, "#05070d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const haze = ctx.createRadialGradient(width * 0.58, height * 0.2, 10, width * 0.58, height * 0.2, width * 0.75);
  haze.addColorStop(0, "rgba(255,138,61,0.18)");
  haze.addColorStop(0.45, "rgba(79,209,255,0.08)");
  haze.addColorStop(1, "rgba(79,209,255,0)");
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, width, height);

  const activeWave = metrics.pWaveStrength + metrics.sWaveStrength;
  const flash = activeWave > 0.7 ? activeWave - 0.7 : 0;
  if (flash > 0) {
    ctx.fillStyle = `rgba(255,255,255,${flash * 0.13})`;
    ctx.fillRect(0, 0, width, height);
  }
}

function drawGround(width, height, metrics) {
  const groundY = height * 0.82;
  const grad = ctx.createLinearGradient(0, groundY - 120, 0, height);
  grad.addColorStop(0, "rgba(18, 29, 48, 0.08)");
  grad.addColorStop(1, "rgba(8, 11, 18, 1)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, groundY - 130, width, height - (groundY - 130));

  const center = { x: 0, y: 0, z: 0 };
  const ringBase = metrics.epicenter;
  const ringWorld = { x: 0, y: 0, z: 0 };
  const epicenterX = clamp((ringBase.lon - 120.7) * 1000, -260, 260);
  const epicenterZ = clamp((ringBase.lat - 23.7) * -1150, -300, 300);
  ringWorld.x = epicenterX;
  ringWorld.z = epicenterZ;

  const waveEnergy = metrics.pWaveStrength + metrics.sWaveStrength;
  const waveColor = metrics.wavePhase === "p" ? "79, 209, 255" : "255, 112, 70";
  for (let i = 0; i < 6; i += 1) {
    const progress = (i * 0.2 + state.pulse) % 1;
    if (progress < 0.02) continue;
    const size = 30 + progress * 320;
    const projected = project(
      { x: ringWorld.x, y: 2, z: ringWorld.z },
      width,
      height,
    );
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${waveColor}, ${waveEnergy * 0.34 * (1 - progress)})`;
    ctx.lineWidth = metrics.wavePhase === "s" || metrics.wavePhase === "damage" ? 3 : 2;
    ctx.ellipse(projected.x, projected.y, size * projected.scale, size * 0.52 * projected.scale, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  const lines = 14;
  const depth = 920;
  for (let i = 0; i <= lines; i += 1) {
    const z = (i / lines) * depth;
    const p1 = project({ x: -640, y: 0, z }, width, height);
    const p2 = project({ x: 640, y: 0, z }, width, height);
    ctx.strokeStyle = `rgba(90, 130, 190, ${0.04 + (1 - i / lines) * 0.08})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }

  for (let i = -8; i <= 8; i += 1) {
    const x = i * 88;
    const p1 = project({ x, y: 0, z: 0 }, width, height);
    const p2 = project({ x: x * 0.48, y: 0, z: depth }, width, height);
    ctx.strokeStyle = `rgba(90, 130, 190, ${0.04 + Math.abs(i) * 0.005})`;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.fillRect(0, groundY, width, 2);

  if (state.collapseProgress > 0.18) {
    const crackOrigin = project({ x: 88, y: 1, z: 54 }, width, height);
    const crackProgress = clamp((state.collapseProgress - 0.18) / 0.82, 0, 1);
    ctx.strokeStyle = `rgba(255, 165, 96, ${0.28 + crackProgress * 0.42})`;
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 9; i += 1) {
      const angle = i * 2.399 + 0.35;
      const length = (38 + (i % 4) * 22) * crackProgress;
      ctx.beginPath();
      ctx.moveTo(crackOrigin.x, crackOrigin.y);
      ctx.lineTo(
        crackOrigin.x + Math.cos(angle) * length,
        crackOrigin.y + Math.sin(angle) * length * 0.36,
      );
      ctx.stroke();
    }
  }
}

function drawWaveParticleField(metrics, width, height) {
  const activeEnergy = metrics.pWaveStrength + metrics.sWaveStrength;
  if (activeEnergy < 0.01) return;

  const time = performance.now() / 1000;
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  for (let row = 0; row < 9; row += 1) {
    for (let column = -7; column <= 7; column += 1) {
      const baseX = column * 72;
      const baseZ = row * 92 + 4;
      const distance = Math.sqrt(baseX * baseX + baseZ * baseZ);
      const pPhase = time * Math.PI * 2 * 6.4 - distance * 0.055;
      const sPhase = time * Math.PI * 2 * 1.25 - distance * 0.021;
      const displacementX = Math.sin(sPhase) * metrics.sWaveStrength * (5 + row * 0.4);
      const displacementY = Math.sin(pPhase) * metrics.pWaveStrength * 5.5;
      const point = project(
        { x: baseX + displacementX, y: 2 + displacementY, z: baseZ },
        width,
        height,
      );
      const alpha = clamp(0.05 + activeEnergy * 0.3 - row * 0.012, 0.03, 0.42);
      ctx.fillStyle = metrics.wavePhase === "p"
        ? `rgba(99, 220, 255, ${alpha})`
        : `rgba(255, 128, 78, ${alpha})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 1.2 + activeEnergy * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function generateSkyline(seedBase) {
  const seed = hashString(seedBase);
  const buildings = [];
  const startX = -420;
  const gap = 78;
  for (let i = 0; i < 12; i += 1) {
    const localSeed = (seed + i * 1709) >>> 0;
    const width = 34 + (localSeed % 28);
    const depth = 34 + ((localSeed >> 5) % 24);
    const height = 72 + ((localSeed >> 9) % 180);
    const x = startX + i * gap + (((localSeed >> 14) % 100) - 50) * 0.22;
    const z = 38 + ((localSeed >> 18) % 96);
    buildings.push({
      x,
      z,
      width,
      depth,
      height,
      hue: (localSeed % 20) * 3,
    });
  }
  return buildings;
}

function drawSkyline(metrics, width, height) {
  const citySeed = `${state.siteCounty}:${state.siteDistrict}:${state.epicenterCounty}:${state.epicenterDistrict}`;
  const buildings = generateSkyline(citySeed);
  buildings.forEach((building, index) => {
    const intensity = metrics.shake;
    const sway = Math.sin(performance.now() * 0.002 + index) * intensity * 0.12;
    drawPrism(
      { x: building.x, y: 0, z: building.z },
      { w: building.width, d: building.depth, h: building.height * (0.88 + intensity * 0.2) },
      {
        top: `hsl(${220 + building.hue}, 20%, 78%)`,
        front: `hsl(${220 + building.hue}, 28%, 58%)`,
        right: `hsl(${220 + building.hue}, 26%, 46%)`,
        left: `hsl(${220 + building.hue}, 24%, 38%)`,
        back: `hsl(${220 + building.hue}, 24%, 34%)`,
        bottom: "rgba(22, 28, 40, 1)",
      },
      {
        tiltX: sway * 0.24,
        tiltY: sway * 0.08,
        swayX: sway * 26,
        swayZ: sway * 14,
      },
    );
  });
}

function drawBasement(metrics, width, height) {
  if (state.basementFloors <= 0) return;

  const towerWidth = 104;
  const towerDepth = 92;
  const basementRatio = state.basementFloors / 60;
  const basementHeight = 12 + 72 * Math.pow(basementRatio, 0.72);
  const foundationShiftX = state.groundMotion.x * metrics.foundationInputFactor;
  const foundationShiftY = Math.max(0, state.groundMotion.y * metrics.foundationInputFactor);
  const foundationShiftZ = state.groundMotion.z * metrics.foundationInputFactor;
  const baseX = 88 + foundationShiftX;
  const baseZ = 54 + foundationShiftZ;

  drawPrism(
    { x: baseX, y: -basementHeight + foundationShiftY, z: baseZ },
    { w: towerWidth * 1.08, d: towerDepth * 1.08, h: basementHeight },
    {
      top: "#6bf0d0",
      front: "#18858a",
      right: "#12606d",
      left: "#0d4b5c",
      back: "#093845",
      bottom: "#062b35",
    },
  );

  drawPrism(
    { x: baseX, y: -basementHeight - 6 + foundationShiftY, z: baseZ },
    { w: towerWidth * 1.34, d: towerDepth * 1.34, h: 6 },
    {
      top: "#ffc75f",
      front: "#d78a32",
      right: "#a75e26",
      left: "#81451f",
      back: "#62351d",
      bottom: "#3c2419",
    },
  );

  const visibleLines = Math.min(state.basementFloors, 36);
  ctx.strokeStyle = "rgba(169, 255, 237, 0.58)";
  ctx.lineWidth = 1;
  for (let i = 1; i < visibleLines; i += 1) {
    const floorY = -basementHeight + foundationShiftY + (basementHeight / visibleLines) * i;
    const left = project({ x: baseX - towerWidth * 0.54, y: floorY, z: baseZ - towerDepth * 0.54 }, width, height);
    const right = project({ x: baseX + towerWidth * 0.54, y: floorY, z: baseZ - towerDepth * 0.54 }, width, height);
    ctx.beginPath();
    ctx.moveTo(left.x, left.y);
    ctx.lineTo(right.x, right.y);
    ctx.stroke();
  }

  const labelPoint = project(
    { x: baseX + towerWidth * 0.7, y: -basementHeight * 0.52 + foundationShiftY, z: baseZ - towerDepth * 0.52 },
    width,
    height,
  );
  ctx.fillStyle = "rgba(126, 255, 226, 0.95)";
  ctx.font = "700 12px Noto Sans TC, sans-serif";
  ctx.fillText(`地下 B${state.basementFloors}・${Math.round(metrics.basementDepth)} m`, labelPoint.x, labelPoint.y);
}

function drawTower(metrics, width, height) {
  if (state.collapseImpactTriggered) return;

  const towerHeight = metrics.towerHeight;
  const towerWidth = 104;
  const towerDepth = 92;
  const collapse = state.collapseProgress;
  const toppleLinear = clamp((collapse - 0.05) / (COLLAPSE_IMPACT_AT - 0.05), 0, 1);
  const topple = Math.pow(smoothstep(0, 1, toppleLinear), 1.28);
  const fallAngle = topple * 1.545;
  const now = performance.now();
  const topStructuralOffset = state.structure.displacements.at(-1) || 0;
  const quakeSway = metrics.sWaveStrength
    * (Math.sin(now * 0.0062) + Math.sin(now * 0.013) * 0.34)
    * 0.075;
  const elasticLean = clamp(topStructuralOffset / Math.max(80, towerHeight), -0.12, 0.12);
  const tiltZ = -fallAngle + quakeSway + elasticLean * (1 - topple);
  const twist = collapse * 0.16 + metrics.sWaveStrength * Math.sin(now * 0.009) * 0.025;
  const base = {
    x: 88 + state.groundMotion.x * metrics.foundationInputFactor,
    y: Math.max(0, state.groundMotion.y * metrics.foundationInputFactor * (1 - topple)),
    z: 54 + state.groundMotion.z * metrics.foundationInputFactor,
  };

  const transformTowerPoint = (point) => {
    let transformed = rotateY(point, twist);
    transformed = rotateZ(transformed, tiltZ);
    return {
      x: transformed.x + base.x,
      y: transformed.y + base.y,
      z: transformed.z + base.z,
    };
  };

  drawPrism(
    base,
    { w: towerWidth, d: towerDepth, h: towerHeight },
    {
      top: collapse > 0.4 ? "#ddd3cf" : "#f5f7ff",
      front: collapse > 0.5 ? "#837b82" : "#a8afd0",
      right: collapse > 0.5 ? "#6d666e" : "#8189b0",
      left: collapse > 0.5 ? "#5b555d" : "#70799f",
      back: collapse > 0.5 ? "#4a454c" : "#5c6487",
      bottom: "#20293e",
    },
    { tiltY: twist, tiltZ },
  );

  const capBase = transformTowerPoint({ x: 0, y: towerHeight + 4, z: 0 });
  drawPrism(
    capBase,
    { w: towerWidth * 0.34, d: towerDepth * 0.34, h: 16 },
    {
      top: "#fff6db",
      front: "#d6bf66",
      right: "#b29b4f",
      left: "#957f40",
      back: "#7d6832",
      bottom: "#4b3a1a",
    },
    { tiltY: twist, tiltZ },
  );

  const stripes = Math.max(10, Math.min(state.floors, 101));
  ctx.strokeStyle = `rgba(255,255,255,${Math.max(0.1, 0.24 - collapse * 0.1)})`;
  ctx.lineWidth = 1;
  for (let i = 1; i <= stripes; i += 1) {
    const floorY = (towerHeight / stripes) * i;
    const leftWorld = transformTowerPoint({ x: -towerWidth / 2, y: floorY, z: -towerDepth / 2 });
    const rightWorld = transformTowerPoint({ x: towerWidth / 2, y: floorY, z: -towerDepth / 2 });
    const left = project(leftWorld, width, height);
    const right = project(rightWorld, width, height);
    ctx.beginPath();
    ctx.moveTo(left.x, left.y);
    ctx.lineTo(right.x, right.y);
    ctx.stroke();
  }

  const antennaBottom = project(transformTowerPoint({ x: 0, y: towerHeight + 18, z: 0 }), width, height);
  const antennaTop = project(transformTowerPoint({ x: 0, y: towerHeight + 42, z: 0 }), width, height);
  ctx.strokeStyle = "rgba(255, 210, 130, 0.95)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(antennaBottom.x, antennaBottom.y);
  ctx.lineTo(antennaTop.x, antennaTop.y);
  ctx.stroke();
}

function drawTowerLegacy(metrics, width, height) {
  const heightUnits = metrics.towerHeight;
  const towerBase = { x: 88, y: 0, z: 54 };
  const towerWidth = 104;
  const towerDepth = 92;
  const breakHeight = heightUnits * 0.38;
  const collapse = state.collapseProgress;
  const now = performance.now();
  const pBounce = state.groundMotion.y;
  const groundShiftX = state.groundMotion.x;
  const sOscillation = Math.sin(now * 0.0062) + Math.sin(now * 0.013) * 0.34;
  const sway = metrics.sWaveStrength * sOscillation * 0.08;
  const lean = collapse * 1.22 + sway;
  const twist = collapse * 0.34 + metrics.sWaveStrength * Math.sin(now * 0.009) * 0.035;

  drawPrism(
    { ...towerBase, x: towerBase.x + groundShiftX, y: towerBase.y + pBounce },
    { w: towerWidth, d: towerDepth, h: breakHeight },
    {
      top: "#f2f5ff",
      front: "#99a1c8",
      right: "#727aa3",
      left: "#60698f",
      back: "#515a7d",
      bottom: "#20293e",
    },
    {
      tiltX: sway * 0.16 + collapse * 0.08,
      tiltY: twist * 0.05,
    },
  );

  const upperParts = Math.max(4, Math.min(state.floors, 18));
  const upperHeight = heightUnits - breakHeight;
  const partHeight = upperHeight / upperParts;

  for (let i = 0; i < upperParts; i += 1) {
    const partProgress = (i + 1) / upperParts;
    const nodeIndex = Math.min(
      state.structure.displacements.length - 1,
      Math.floor(partProgress * state.structure.displacements.length),
    );
    const structuralOffset = state.structure.displacements[nodeIndex] || 0;
    const nodeDamage = state.structure.damage[nodeIndex] || 0;
    const partCollapse = Math.max(0, collapse - 0.12) * partProgress + nodeDamage * 0.14;
    const partTiltX = lean * (0.9 + i * 0.06) + nodeDamage * 0.18;
    const partTiltY = twist * (0.7 + i * 0.04);
    const offsetY = breakHeight + i * partHeight;
    const fall = Math.pow(collapse, 1.35) * partProgress;
    const offsetX = fall * 172;
    const offsetZ = fall * 54;
    const dropY = fall * heightUnits * 0.46;
    drawPrism(
      {
        x: towerBase.x + groundShiftX + structuralOffset + offsetX,
        y: offsetY + pBounce - dropY,
        z: towerBase.z + state.groundMotion.z + offsetZ,
      },
      { w: towerWidth * 0.97, d: towerDepth * 0.94, h: partHeight },
      {
        top: nodeDamage > 0.28 ? "#d8c8be" : "#f6f8ff",
        front: nodeDamage > 0.52 ? "#756f79" : "#acb2d2",
        right: nodeDamage > 0.38 ? "#706a73" : "#8890b5",
        left: nodeDamage > 0.38 ? "#5f5962" : "#767ea6",
        back: nodeDamage > 0.38 ? "#504a52" : "#626a8c",
        bottom: "#20293e",
      },
      {
        collapse: partCollapse,
        tiltX: partTiltX,
        tiltY: partTiltY,
        swayX: 14,
        swayZ: 7,
      },
    );
  }

  const towerCenter = { x: towerBase.x, y: breakHeight + upperHeight * 0.5, z: towerBase.z };
  const topStructuralOffset = state.structure.displacements.at(-1) || 0;
  const capHeight = 16;
  drawPrism(
    {
      x: towerCenter.x + groundShiftX + topStructuralOffset + Math.pow(collapse, 1.35) * 184,
      y: heightUnits + 5 + pBounce - Math.pow(collapse, 1.35) * heightUnits * 0.48,
      z: towerCenter.z + Math.pow(collapse, 1.35) * 58,
    },
    { w: towerWidth * 0.34, d: towerDepth * 0.34, h: capHeight },
    {
      top: "#fff6db",
      front: "#d6bf66",
      right: "#b29b4f",
      left: "#957f40",
      back: "#7d6832",
      bottom: "#4b3a1a",
    },
    { tiltX: lean * 0.6, tiltY: twist * 0.4 },
  );

  const stripes = Math.max(10, Math.min(state.floors, 101));
  for (let i = 1; i <= stripes; i += 1) {
    const floorY = (heightUnits / stripes) * i;
    const collapseRatio = floorY > breakHeight ? (floorY - breakHeight) / upperHeight : 0;
    const localFall = Math.pow(collapse, 1.35) * collapseRatio;
    const stripeNodeIndex = Math.min(
      state.structure.displacements.length - 1,
      Math.floor((floorY / heightUnits) * state.structure.displacements.length),
    );
    const stripeOffset = state.structure.displacements[stripeNodeIndex] || 0;
    const localOffsetX = localFall * 172;
    const localOffsetZ = localFall * 54;
    const localDropY = localFall * heightUnits * 0.46;
    const left = project(
      {
        x: towerBase.x + groundShiftX + stripeOffset - towerWidth / 2 + localOffsetX,
        y: floorY + pBounce - localDropY,
        z: towerBase.z - towerDepth / 2 + localOffsetZ,
      },
      width,
      height,
    );
    const right = project(
      {
        x: towerBase.x + groundShiftX + stripeOffset + towerWidth / 2 + localOffsetX,
        y: floorY + pBounce - localDropY,
        z: towerBase.z - towerDepth / 2 + localOffsetZ,
      },
      width,
      height,
    );

    const stripeAlpha = floorY > breakHeight ? 0.24 - collapse * 0.1 : 0.16;
    ctx.strokeStyle = `rgba(255,255,255,${Math.max(0.08, stripeAlpha)})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left.x, left.y);
    ctx.lineTo(right.x, right.y);
    ctx.stroke();
  }

  const antennaTop = project(
    {
      x: towerBase.x + groundShiftX + topStructuralOffset + Math.pow(collapse, 1.35) * 194,
      y: heightUnits + 25 + pBounce - Math.pow(collapse, 1.35) * heightUnits * 0.5,
      z: towerBase.z + Math.pow(collapse, 1.35) * 62,
    },
    width,
    height,
  );
  const antennaBottom = project(
    {
      x: towerBase.x + groundShiftX + topStructuralOffset + Math.pow(collapse, 1.35) * 181,
      y: heightUnits + 10 + pBounce - Math.pow(collapse, 1.35) * heightUnits * 0.48,
      z: towerBase.z + Math.pow(collapse, 1.35) * 58,
    },
    width,
    height,
  );
  ctx.strokeStyle = "rgba(255, 210, 130, 0.95)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(antennaBottom.x, antennaBottom.y);
  ctx.lineTo(antennaTop.x, antennaTop.y);
  ctx.stroke();
}

function drawDamageEffects(metrics, width, height) {
  if (state.particles.length === 0) return;
  ctx.save();

  const sortedParticles = [...state.particles].sort((a, b) => a.z - b.z);
  sortedParticles.forEach((particle) => {
    const point = project(particle, width, height);
    const normalizedLife = clamp(particle.life / particle.maxLife, 0, 1);
    const age = 1 - normalizedLife;

    if (particle.type === "dust") {
      const radius = Math.max(0.5, particle.size * (0.65 + age * 1.8) * point.scale);
      const cloud = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
      cloud.addColorStop(0, `rgba(${particle.color}, ${normalizedLife * 0.22})`);
      cloud.addColorStop(0.55, `rgba(${particle.color}, ${normalizedLife * 0.11})`);
      cloud.addColorStop(1, `rgba(${particle.color}, 0)`);
      ctx.fillStyle = cloud;
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    ctx.save();
    ctx.translate(point.x, point.y);
    ctx.rotate(particle.rotation);
    if (particle.type === "glass") {
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `rgba(${particle.color}, ${normalizedLife * 0.86})`;
      ctx.lineWidth = Math.max(0.7, particle.size * 0.42 * point.scale);
      ctx.beginPath();
      ctx.moveTo(-particle.size * 2.2, 0);
      ctx.lineTo(particle.size * 2.2, 0);
      ctx.stroke();
    } else if (particle.type === "steel") {
      ctx.strokeStyle = `rgba(${particle.color}, ${0.45 + normalizedLife * 0.5})`;
      ctx.lineWidth = Math.max(1, particle.size * 0.34 * point.scale);
      ctx.beginPath();
      ctx.moveTo(-particle.size * 2.7, 0);
      ctx.lineTo(particle.size * 2.7, 0);
      ctx.moveTo(particle.size * 0.7, -particle.size * 0.9);
      ctx.lineTo(-particle.size * 0.7, particle.size * 0.9);
      ctx.stroke();
    } else {
      const size = Math.max(1, particle.size * point.scale);
      ctx.fillStyle = `rgba(${particle.color}, ${0.3 + normalizedLife * 0.65})`;
      ctx.fillRect(-size, -size * 0.55, size * 2, size * 1.1);
      ctx.strokeStyle = `rgba(255,255,255,${normalizedLife * 0.2})`;
      ctx.strokeRect(-size, -size * 0.55, size * 2, size * 1.1);
    }
    ctx.restore();
  });

  ctx.restore();
}

function drawHUD(metrics, width, height) {
  const pad = 14;
  const panelW = Math.min(242, width - pad * 2);
  const panelH = 176;
  const panelX = width - panelW - pad;
  ctx.save();
  ctx.fillStyle = "rgba(6, 12, 22, 0.44)";
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  fillRoundedRect(ctx, panelX, pad, panelW, panelH, 18);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#f7fbff";
  ctx.font = "700 15px Noto Sans TC, sans-serif";
  ctx.fillText("模擬狀態", panelX + 14, pad + 25);
  ctx.font = "600 12px Noto Sans TC, sans-serif";
  ctx.fillStyle = metrics.wavePhase === "p" ? "#63dcff" : metrics.wavePhase === "s" || metrics.wavePhase === "damage" ? "#ff9b4d" : "rgba(233,239,255,0.82)";
  ctx.fillText(`目前：${phaseLabel(metrics.wavePhase)}`, panelX + 14, pad + 48);
  ctx.fillStyle = "rgba(233,239,255,0.82)";
  ctx.fillText(`M${state.magnitude.toFixed(1)} / 深度 ${state.depth} km`, panelX + 14, pad + 72);
  ctx.fillText(`地上 ${state.floors}／地下 ${state.basementFloors} 層`, panelX + 14, pad + 94);
  ctx.fillText(`震度 ${intensityLabel(metrics.intensityLevel)} / 漂移 ${(state.structure.maxDrift * 100).toFixed(2)}%`, panelX + 14, pad + 116);
  ctx.fillText(`損傷 ${Math.round(state.collapseProgress * 100)}% / 粒子 ${state.particles.length}`, panelX + 14, pad + 138);

  const barY = pad + 151;
  const barW = (panelW - 38) / 2;
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  fillRoundedRect(ctx, panelX + 14, barY, barW, 7, 4);
  ctx.fill();
  fillRoundedRect(ctx, panelX + 24 + barW, barY, barW, 7, 4);
  ctx.fill();
  ctx.fillStyle = "rgba(79,209,255,0.9)";
  fillRoundedRect(ctx, panelX + 14, barY, barW * clamp(metrics.pWaveStrength, 0, 1), 7, 4);
  ctx.fill();
  ctx.fillStyle = "rgba(255,112,70,0.92)";
  fillRoundedRect(ctx, panelX + 24 + barW, barY, barW * clamp(metrics.sWaveStrength, 0, 1), 7, 4);
  ctx.fill();
  ctx.restore();
}

function renderFrame(now) {
  const delta = Math.min(0.033, (now - state.lastFrame) / 1000);
  state.lastFrame = now;

  const metrics = computeMetrics();
  state.wavePhase = metrics.wavePhase;
  const activeShake = metrics.pWaveStrength + metrics.sWaveStrength;
  state.shake = lerp(state.shake, activeShake, 0.12);
  updateStructuralDynamics(metrics, delta, now);
  updateWaveform(metrics, delta, now);
  if (state.running) {
    const damageActive = metrics.wavePhase === "damage" && metrics.damageEligible;
    const structuralDamage = state.structure.damage.reduce((max, value) => Math.max(max, value), 0);
    const driftDrive = Math.max(0, state.structure.maxDrift - 0.007) * 4.8;
    const drive = damageActive
      ? Math.max(0, metrics.sWaveStrength - 0.12) * 0.42
        + Math.max(0, metrics.collapseRisk - 0.24) * 0.34
        + structuralDamage * 0.3
        + driftDrive
      : 0;
    state.collapseProgress = clamp(state.collapseProgress + delta * drive, 0, 1);
    state.pulse = (state.pulse + delta * (metrics.wavePhase === "p" ? 1.6 : 0.72)) % 1;
  } else {
    state.collapseProgress = lerp(state.collapseProgress, 0, 0.02);
    state.pulse = lerp(state.pulse, 0, 0.04);
  }
  updateParticleSystem(metrics, delta);

  const width = els.scene.width / DPR;
  const height = els.scene.height / DPR;
  canvasBounds.width = width;
  canvasBounds.height = height;

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, width, height);
  const renderMetrics = { ...metrics, waveShake: state.shake };
  drawSky(width, height, renderMetrics);
  drawGround(width, height, renderMetrics);
  drawWaveParticleField(renderMetrics, width, height);
  drawBasement(renderMetrics, width, height);
  drawTower(renderMetrics, width, height);
  drawDamageEffects(renderMetrics, width, height);
  drawHUD(renderMetrics, width, height);
  drawSeismograph(renderMetrics);

  updateSummaryUI(metrics);
  requestAnimationFrame(renderFrame);
}

const canvasBounds = { width: 0, height: 0 };

let locationPickerMap;
let locationPickerMarker;
let locationPickerLayers;
let mapPickerTarget = "site";
let pickedMapCoordinates = null;

function setPickedMapCoordinates(latlng) {
  pickedMapCoordinates = { lat: latlng.lat, lon: latlng.lng };
  if (locationPickerMarker) {
    locationPickerMarker.setLatLng(latlng);
  } else {
    locationPickerMarker = window.L.marker(latlng, { draggable: true }).addTo(locationPickerMap);
    locationPickerMarker.on("dragend", () => setPickedMapCoordinates(locationPickerMarker.getLatLng()));
  }
  els.mapPickerCoordinates.textContent = `緯度 ${pickedMapCoordinates.lat.toFixed(6)}，經度 ${pickedMapCoordinates.lon.toFixed(6)}`;
  els.confirmMapLocation.disabled = false;
}

function initializeLocationPickerMap() {
  if (locationPickerMap || !window.L) return;
  locationPickerMap = window.L.map("locationPickerMap").setView([23.7, 121], 7);
  locationPickerLayers = {
    osm: window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }),
    google: window.L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "© Google",
    }),
    googleSatellite: window.L.tileLayer("https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
      attribution: "© Google",
    }),
  };
  locationPickerLayers.osm.addTo(locationPickerMap);
  locationPickerMap.on("click", (event) => setPickedMapCoordinates(event.latlng));
}

function openMapPicker(target) {
  if (!window.L) {
    els.mapPickerCoordinates.textContent = "地圖元件尚未載入，請確認網路連線後再試。";
    return;
  }
  mapPickerTarget = target;
  const targetName = target === "site" ? "所在地" : "震央";
  els.mapPickerTitle.textContent = `選擇${targetName}座標`;
  els.mapPickerDialog.hidden = false;
  initializeLocationPickerMap();
  const coordinates = getLocationCoordinates(target);
  setPickedMapCoordinates({ lat: coordinates.lat, lng: coordinates.lon });
  locationPickerMap.setView([coordinates.lat, coordinates.lon], 10);
  requestAnimationFrame(() => locationPickerMap.invalidateSize());
}

function closeMapPicker() {
  els.mapPickerDialog.hidden = true;
}

function applyMapLocation() {
  if (!pickedMapCoordinates) return;
  state[`${mapPickerTarget}Coordinates`] = { ...pickedMapCoordinates };
  if (mapPickerTarget === "site" && state.linkEpicenter) {
    state.epicenterCoordinates = { ...pickedMapCoordinates };
  }
  if (mapPickerTarget === "epicenter") clearActivePreset();
  updateCoordinateControls(mapPickerTarget);
  if (mapPickerTarget === "site" && state.linkEpicenter) updateCoordinateControls("epicenter");
  updateSummaryUI(computeMetrics());
  closeMapPicker();
}

function updateCoordinatesFromInput(target) {
  if (target === "epicenter" && state.linkEpicenter) return;
  const lat = Number(els[`${target}Latitude`].value);
  const lon = Number(els[`${target}Longitude`].value);
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) return;
  state[`${target}Coordinates`] = { lat, lon };
  if (target === "site" && state.linkEpicenter) {
    state.epicenterCoordinates = { lat, lon };
    updateCoordinateControls("epicenter");
  }
  if (target === "epicenter") clearActivePreset();
  updateSummaryUI(computeMetrics());
}

function attachEvents() {
  els.mapPickerButtons.forEach((button) => {
    button.addEventListener("click", () => openMapPicker(button.dataset.mapTarget));
  });
  document.querySelectorAll("[data-close-map-picker]").forEach((element) => {
    element.addEventListener("click", closeMapPicker);
  });
  els.confirmMapLocation.addEventListener("click", applyMapLocation);
  els.mapLayerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const layerName = button.dataset.mapLayer;
      Object.values(locationPickerLayers).forEach((layer) => locationPickerMap.removeLayer(layer));
      locationPickerLayers[layerName].addTo(locationPickerMap);
      els.mapLayerButtons.forEach((item) => item.classList.toggle("active", item === button));
    });
  });
  ["site", "epicenter"].forEach((target) => {
    els[`${target}Latitude`].addEventListener("change", () => updateCoordinatesFromInput(target));
    els[`${target}Longitude`].addEventListener("change", () => updateCoordinatesFromInput(target));
  });
  els.siteCounty.addEventListener("change", () => {
    state.siteCoordinates = null;
    state.siteCounty = els.siteCounty.value;
    const districts = getDistrictOptions(state.siteCounty);
    state.siteDistrict = districts.includes(state.siteDistrict) ? state.siteDistrict : districts[0];
    populateDistrictSelect(els.siteDistrict, state.siteCounty, state.siteDistrict);
    updateCoordinateControls("site");
    syncEpicenterFromSite();
    updateSummaryUI(computeMetrics());
  });

  els.siteDistrict.addEventListener("change", () => {
    state.siteCoordinates = null;
    state.siteDistrict = els.siteDistrict.value;
    syncEpicenterFromSite();
    updateCoordinateControls("site");
    updateSummaryUI(computeMetrics());
  });

  els.epicenterCounty.addEventListener("change", () => {
    if (state.linkEpicenter) return;
    clearActivePreset();
    state.epicenterCoordinates = null;
    state.epicenterCounty = els.epicenterCounty.value;
    const districts = getDistrictOptions(state.epicenterCounty);
    state.epicenterDistrict = districts.includes(state.epicenterDistrict)
      ? state.epicenterDistrict
      : districts[0];
    populateDistrictSelect(els.epicenterDistrict, state.epicenterCounty, state.epicenterDistrict);
    updateCoordinateControls("epicenter");
    updateSummaryUI(computeMetrics());
  });

  els.epicenterDistrict.addEventListener("change", () => {
    if (state.linkEpicenter) return;
    clearActivePreset();
    state.epicenterCoordinates = null;
    state.epicenterDistrict = els.epicenterDistrict.value;
    updateCoordinateControls("epicenter");
    updateSummaryUI(computeMetrics());
  });

  els.linkEpicenter.addEventListener("change", () => {
    state.linkEpicenter = els.linkEpicenter.checked;
    if (state.linkEpicenter) {
      syncEpicenterFromSite();
    } else {
      updateEpicenterLockState();
    }
    updateSummaryUI(computeMetrics());
  });

  els.magnitude.addEventListener("input", () => {
    clearActivePreset();
    state.magnitude = Number(els.magnitude.value);
    els.magnitudeValue.textContent = state.magnitude.toFixed(1);
    updateSummaryUI(computeMetrics());
  });

  els.depth.addEventListener("input", () => {
    clearActivePreset();
    state.depth = Number(els.depth.value);
    els.depthValue.textContent = `${state.depth} km`;
    updateSummaryUI(computeMetrics());
  });

  els.shakeDuration.addEventListener("input", () => {
    state.shakeDuration = Number(els.shakeDuration.value);
    els.shakeDurationValue.textContent = `${state.shakeDuration} 秒`;
    updateSummaryUI(computeMetrics());
  });

  els.ground.addEventListener("change", () => {
    state.ground = els.ground.value;
    updateSummaryUI(computeMetrics());
  });

  els.buildingFloors.addEventListener("input", () => {
    state.floors = Number(els.buildingFloors.value);
    els.buildingFloorsValue.textContent = `${state.floors} 層`;
    resetStructuralModel();
    updateSummaryUI(computeMetrics());
  });

  els.basementFloors.addEventListener("input", () => {
    state.basementFloors = Number(els.basementFloors.value);
    els.basementFloorsValue.textContent = `${state.basementFloors} 層`;
    resetStructuralModel();
    updateSummaryUI(computeMetrics());
  });

  els.pileDepth.addEventListener("input", () => {
    state.pileDepth = Number(els.pileDepth.value);
    els.pileDepthValue.textContent = `${state.pileDepth} m`;
    resetStructuralModel();
    updateSummaryUI(computeMetrics());
  });

  els.structureType.addEventListener("change", () => {
    state.structureType = els.structureType.value;
    resetStructuralModel();
    updateSummaryUI(computeMetrics());
  });

  els.codeEra.addEventListener("change", () => {
    state.codeEra = els.codeEra.value;
    updateSummaryUI(computeMetrics());
  });

  els.structureFeature.addEventListener("change", () => {
    state.structureFeature = els.structureFeature.value;
    resetStructuralModel();
    updateSummaryUI(computeMetrics());
  });

  els.presetButtons.forEach((button) => {
    button.addEventListener("click", () => applyEarthquakePreset(button.dataset.quakePreset));
  });

  els.startSim.addEventListener("click", () => {
    randomizeView();
    startSimulation();
  });

  els.resetSim.addEventListener("click", () => {
    resetSimulation();
  });

  els.continueSim.addEventListener("click", () => {
    randomizeView();
    continueSimulation();
  });

  const pointerState = {
    active: false,
  };

  els.scene.addEventListener("pointerdown", (event) => {
    pointerState.active = true;
    state.dragging = true;
    state.lastPointer.x = event.clientX;
    state.lastPointer.y = event.clientY;
    els.scene.setPointerCapture(event.pointerId);
  });

  els.scene.addEventListener("pointermove", (event) => {
    if (!pointerState.active) return;
    const dx = event.clientX - state.lastPointer.x;
    const dy = event.clientY - state.lastPointer.y;
    state.rotationY += dx * 0.006;
    state.rotationX = clamp(state.rotationX + dy * 0.004, -1.2, -0.12);
    state.lastPointer.x = event.clientX;
    state.lastPointer.y = event.clientY;
  });

  const endPointer = () => {
    pointerState.active = false;
    state.dragging = false;
  };

  els.scene.addEventListener("pointerup", endPointer);
  els.scene.addEventListener("pointercancel", endPointer);

  window.addEventListener("resize", () => {
    resizeCanvas();
  });
}

function initialize() {
  renderOfficialTaiwanMap();
  resetWaveform();
  updateControlsFromState();
  els.magnitudeValue.textContent = state.magnitude.toFixed(1);
  els.depthValue.textContent = `${state.depth} km`;
  els.buildingFloorsValue.textContent = `${state.floors} 層`;
  els.basementFloorsValue.textContent = `${state.basementFloors} 層`;
  els.pileDepthValue.textContent = `${state.pileDepth} m`;
  resizeCanvas();
  attachEvents();
  updateSummaryUI(computeMetrics());
  requestAnimationFrame(renderFrame);
}

initialize();
