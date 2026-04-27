// ============================================
// 视觉艺术效果参考数据 - 跨工具共享
// 适用于 UI/UX Pro Max 与 ArchBoard Pro
// ============================================

const artEffects = [
  {
    id: 1,
    name: "波普艺术 · Pop Art",
    nameEn: "Pop Art",
    category: "印刷艺术",
    overlayMode: "soak",
    description: "源自1950s英国/美国，将大众文化符号转化为高雅艺术。丝网印刷质感、硬边勾线、Ben-Day网点、高饱和原色并置、重复拼贴、漫画气泡对话框",
    vibe: "大众、戏谑、高饱和、消费主义",
    keywords: "丝网印刷, 硬边勾线, Ben-Day网点, 高饱和, 原色, 重复拼贴, 漫画气泡, 大众文化, 消费主义, Andy Warhol, Roy Lichtenstein",
    visualFeatures: [
      "大面积平涂高饱和原色（品红、柠檬黄、钴蓝）",
      "硬边黑色轮廓线勾勒形体",
      "Ben-Day dots 本戴网点模拟印刷渐变",
      "重复排列的相同图像（如Warhol的罐头汤）",
      "漫画风格的对话气泡和拟声词",
      "故意露出的套印错位效果"
    ],
    bestFor: "品牌海报, 活动视觉, 潮牌UI, 文化展览, 社交媒体Campaign",
    tools: "Adobe Illustrator, Photoshop halftone pattern, Procreate, 真实丝网印刷",
    prompt: "Pop Art style, screen-printed aesthetic, bold black outlines, flat areas of saturated primary colors (magenta, cyan, yellow, red), Ben-Day dots halftone patterns, repeated iconic imagery, comic book speech bubbles, Roy Lichtenstein inspired, mass culture imagery, high contrast, graphic and punchy",
    colorPalette: ["#FF006E", "#FB5607", "#FFBE0B", "#8338EC", "#3A86FF", "#000000"],
    uiApplication: "按钮用硬边粗框+偏移阴影，卡片用纯色平涂+网点背景，图标用漫画线条风格",
    parameters: [
      { id: "intensity", name: "网点密度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "saturation", name: "色彩饱和度", min: 50, max: 150, default: 100, unit: "%" }
    ],
    fonts: {
      en: { name: "Bebas Neue", url: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap", css: "'Bebas Neue','Impact','Arial Black',sans-serif" },
      cn: { name: "狸叶黑体", css: "'LeeeafHeiLocal','MiSans','PingFang SC',sans-serif" }
    }
  },
  {
    id: 2,
    name: "野兽派 · Fauvism",
    nameEn: "Fauvism",
    category: "绘画艺术",
    overlayMode: "bleed",
    description: "1905年巴黎沙龙诞生的激进色彩运动。摒弃写实色彩，以纯粹主观情感驱动配色。粗犷笔触、并置互补色、简化轮廓、平面化处理",
    vibe: "狂野、情感爆发、反自然色彩、原始张力",
    keywords: "粗犷笔触, 并置纯色, 互补色, 主观色彩, 简化轮廓, 平面化, 情感驱动, Matisse, Derain, 钴蓝翠绿朱红铬黄",
    visualFeatures: [
      "非自然主义的高饱和色彩（翠绿天空、鲜红阴影）",
      "短促粗犷的笔触纹理清晰可见",
      "大面积纯色平涂区域之间无渐变过渡",
      "互补色直接并置产生振动效果",
      "轮廓线简化甚至省略",
      "平面化空间，摒弃透视"
    ],
    bestFor: "艺术展览视觉, 文化活动, 情感化品牌, 插画风格UI, 概念海报",
    tools: "Procreate, Photoshop笔刷引擎, 真实油画/丙烯, Fresco",
    prompt: "Fauvism painting style, wild brushstrokes, non-naturalistic bold colors (cobalt blue, emerald green, vermilion red, chrome yellow), complementary colors juxtaposed for vibration, simplified outlines, flattened space, emotional rather than descriptive color, Matisse and Derain inspired, raw texture, expressive and untamed",
    colorPalette: ["#006BA6", "#0496FF", "#FFBC42", "#D81159", "#8F2D56", "#218380"],
    uiApplication: "背景用粗笔触纹理，按钮用互补色对撞，插画用简化色块+可见笔触",
    parameters: [
      { id: "saturation", name: "饱和度Boost", min: 0, max: 100, default: 60, unit: "%" },
      { id: "texture", name: "笔触纹理强度", min: 0, max: 100, default: 40, unit: "%" }
    ],
    fonts: {
      en: { name: "Caveat", url: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap", css: "'Caveat','LXGW WenKai',cursive" },
      cn: { name: "霞鹜文楷", css: "'LXGW WenKai','Kaiti SC','STKaiti',serif" }
    }
  },
  {
    id: 3,
    name: "RISO印刷 · RISO Print",
    nameEn: "RISO Print",
    category: "印刷艺术",
    overlayMode: "soak",
    description: "日本理想科学工业(Riso Kagaku)发明的油印速印技术。专色套印、半调网屏、轻微错位、荧光色大豆油墨、糙面纸张纹理",
    vibe: "手工感、独立出版、荧光、温暖瑕疵",
    keywords: "专色套印, 半调网屏, 轻微错位, 荧光色, 大豆油墨, 糙面纸, 独立出版, zine, 套色不准, 颗粒感",
    visualFeatures: [
      "专色分层印刷（荧光粉、荧光绿、亮蓝、黄）",
      "半调网屏(halftone)产生的网点渐变",
      "两层专色之间的轻微套印错位",
      "糙面纸张的纤维纹理隐约可见",
      "大豆油墨特有的半透明叠印效果",
      "边缘的轻度油墨晕染"
    ],
    bestFor: "独立杂志, 艺术书, 海报, 活动视觉, 小众品牌, zine文化",
    tools: "真实RISO印刷机, Photoshop专色通道, Procreate, 专门RISO滤镜插件",
    prompt: "RISO print aesthetic, spot color overprinting, halftone dot patterns, slight misregistration between color layers, fluorescent soy-based inks (fluorescent pink, green, bright blue, yellow), textured uncoated paper grain, independent publishing feel, imperfect registration charm, grainy and tactile, zine culture aesthetic",
    colorPalette: ["#FF48C4", "#2DE2E6", "#F9C80E", "#540D6E", "#F86624", "#EA3546"],
    colorPalettes: [
      { name: "荧光派对", palette: ["#FF48C4", "#2DE2E6", "#F9C80E", "#540D6E", "#F86624", "#EA3546"] },
      { name: "复古蓝调", palette: ["#1A659E", "#F7931E", "#F5F0E6", "#2C3E50", "#E74C3C", "#3498DB"] },
      { name: "森林印刷", palette: ["#2D5016", "#D4A574", "#F5F5DC", "#1B4332", "#A98467", "#52796F"] },
      { name: "霓虹之夜", palette: ["#B829DD", "#FF006E", "#00F5D4", "#3A0CA3", "#FB5607", "#8338EC"] },
      { name: "经典Zine", palette: ["#1A1A1A", "#FF3B30", "#F5F5F5", "#333333", "#FF6B6B", "#000000"] }
    ],
    uiApplication: "用专色分层作为背景，文字用粗体无衬线，点缀荧光色按钮，整体带轻微噪点纹理",
    parameters: [
      { id: "misregistration", name: "套印错位", min: 0, max: 100, default: 30, unit: "%" },
      { id: "grain", name: "纸张颗粒感", min: 0, max: 100, default: 50, unit: "%" },
      { id: "colorShift", name: "专色偏移", min: 0, max: 360, default: 0, unit: "deg" }
    ],
    fonts: {
      en: { name: "Space Mono", url: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap", css: "'Space Mono','JetBrains Mono',monospace" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 4,
    name: "新丑风 · Neo-Brutalism",
    nameEn: "Neo-Brutalism / New Ugly",
    category: "数字艺术",
    overlayMode: "mist",
    description: "2010年代末兴起的反精致设计运动。故意使用系统默认字体、高对比色、无装饰、裸露的HTML结构、默认表单样式、粗糙对齐",
    vibe: "反设计、粗糙、原始、真诚、反精致",
    keywords: "系统默认字体, 高对比, 无装饰, 裸露HTML, 粗糙对齐, 反精致, 反设计, 真诚, raw, 未修饰",
    visualFeatures: [
      "系统默认字体（Times New Roman、Arial、Courier）",
      "高对比配色（纯黑文字+纯白背景，或反色）",
      "无圆角、无阴影、无边框装饰",
      "裸露的原始HTML元素样式",
      "刻意的不完美对齐和间距",
      "未处理的原始图像（不裁剪、不滤镜）"
    ],
    bestFor: "个人网站, 艺术项目, 反主流品牌, 实验性UI, 独立音乐人/艺术家页面",
    tools: "纯HTML/CSS, 系统自带字体, 无设计工具, 记事本写代码",
    prompt: "Neo-Brutalist web design, system default fonts only (Times, Arial, Courier), high contrast black and white, no decorative elements, raw exposed HTML structure, unstyled form inputs, rough alignment, anti-design aesthetic, intentionally unpolished, raw and honest, default browser styles, no rounded corners no shadows",
    colorPalette: ["#000000", "#FFFFFF", "#FF0000", "#0000FF", "#FFFF00", "#00FF00"],
    uiApplication: "纯黑白高对比，系统字体，无圆角，粗黑边框，未处理的原始图片",
    parameters: [
      { id: "rawness", name: "粗糙度", min: 0, max: 100, default: 80, unit: "%" }
    ],
    fonts: {
      en: { name: "Times New Roman", url: null, css: "'Times New Roman',Times,serif" },
      cn: { name: "宋体", css: "'SimSun','Songti SC','STSong',serif" }
    }
  },
  {
    id: 5,
    name: "像素风 · Pixel Art",
    nameEn: "Pixel Art",
    category: "数字艺术",
    overlayMode: "soak",
    description: "以像素为基本单位的数字绘画形式。8-bit/16-bit复古游戏美学、有限调色板、锯齿边缘、逐像素绘制、精灵图动画",
    vibe: "复古游戏、怀旧、精确、数字原始",
    keywords: "8-bit, 16-bit, 有限调色板, 锯齿边缘, 精灵图, 逐像素, 复古游戏, NES, SNES, 点阵",
    visualFeatures: [
      "可见的方形像素网格",
      "有限的调色板（8-32色常见）",
      "锯齿状边缘代替平滑曲线",
      "1-4像素宽的轮廓线",
      "等距或正交视角",
      "精灵图(sprites)化的角色和物体"
    ],
    bestFor: "独立游戏, 复古主题UI, 像素图标, 表情包, 怀旧品牌, 8-bit音乐封面",
    tools: "Aseprite, Pixaki, Photoshop（铅笔工具+ nearest neighbor）, GraphicsGale",
    prompt: "Pixel art style, visible square pixel grid, limited color palette (8-16 colors), jagged edges instead of smooth curves, 1-2 pixel wide outlines, isometric or orthogonal perspective, retro 8-bit / 16-bit video game aesthetic, sprite-based characters, dithering patterns for gradients, crisp and nostalgic, NES/SNES inspired",
    colorPalette: ["#FF004D", "#00E436", "#29ADFF", "#FFA300", "#83769C", "#FF77A8"],
    uiApplication: "像素字体，8-bit图标，有限色板，可见像素边缘，游戏化交互反馈",
    parameters: [
      { id: "grid", name: "网格可见度", min: 0, max: 100, default: 30, unit: "%" }
    ],
    fonts: {
      en: { name: "Press Start 2P", url: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap", css: "'Press Start 2P','Courier New',monospace" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 6,
    name: "故障艺术 · Glitch Art",
    nameEn: "Glitch Art",
    category: "数字艺术",
    overlayMode: "soak",
    description: "数字信号错误与数据损坏的美学化表达。RGB通道错位、扫描线干扰、VHS追踪错误、数字马赛克、信号丢失条纹。将技术故障转化为视觉语言，体现数字时代的脆弱与美感",
    vibe: "数字故障、RGB错位、扫描线、数据损坏、VHS怀旧",
    keywords: "RGB分离, 通道错位, 扫描线, 数据马赛克, 信号丢失, VHS追踪, 数字腐败, 故障美学, 数据损坏, 像素错位, 条纹干扰",
    visualFeatures: [
      "红绿蓝三通道的错位分离条纹",
      "水平扫描线的间歇性干扰",
      "随机分布的数据马赛克色块",
      "VHS录像带的追踪错误色带",
      "局部反色与数字腐败块",
      "信号撕裂的边缘装饰"
    ],
    bestFor: "实验性UI, 音乐视觉, 独立游戏, 科技艺术, 海报设计, 专辑封面",
    tools: "CSS gradients, Processing, After Effects, 真实VHS设备, 数据损坏脚本",
    prompt: "Glitch art aesthetic, RGB channel separation with red green blue misalignment, horizontal scan line interference, VHS tracking errors, digital corruption blocks, signal loss stripes, data mosaic fragments, retro digital distortion, corrupted pixel patterns, chromatic aberration, analog video artifacts, cyberpunk lo-fi",
    colorPalette: ["#FF0032", "#00FF50", "#0064FF", "#000000", "#FFFFFF", "#FF00C8"],
    uiApplication: "RGB分离边框与阴影，信号撕裂边缘装饰，等宽字体，扫描线overlay，错位色块",
    parameters: [
      { id: "density", name: "故障密度", min: 10, max: 100, default: 50, unit: "%" }
    ],
    fonts: {
      en: { name: "Courier Prime", url: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap", css: "'Courier Prime','Courier New',monospace" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 7,
    name: "酸性设计 · Acid Design",
    nameEn: "Acid Design",
    category: "数字艺术",
    overlayMode: "edge",
    description: "源自2020年代初的数字美学运动。铬金属质感、液态流体、高饱和霓虹渐变、迷幻几何。受Y2K、赛博朋克和锐舞文化影响",
    vibe: "迷幻、未来、金属、流体、高能量",
    keywords: "铬金属, 液态流体, 霓虹渐变, 迷幻几何, Y2K, 锐舞文化, 高饱和, 反光, 未来主义, Web3, 酸性设计",
    visualFeatures: [
      "铬金属质感的渐变边框和文字描边",
      "液态流体状的背景动画",
      "高饱和霓虹紫/绿/粉配色",
      "迷幻的几何扭曲和波纹效果",
      "反光高光和镜面反射",
      "黑色背景上的荧光点缀"
    ],
    bestFor: "Web3产品, 音乐平台, 潮牌电商, NFT项目, 夜生活品牌, 科技发布会",
    tools: "CSS conic-gradient, SVG filters, WebGL shaders, After Effects, Blender",
    prompt: "Acid design aesthetic, chrome metallic gradients, liquid fluid backgrounds, high-saturation neon purple green pink, psychedelic geometric distortions, mirror reflections and specular highlights, black background with fluorescent accents, Y2K influenced, rave culture energy, futuristic and hypnotic, Web3 visual language",
    colorPalette: ["#B829DD", "#00F5D4", "#FF006E", "#7928CA", "#FF0080", "#00DFD8"],
    uiApplication: "铬金属渐变边框按钮，液态流体背景，霓虹发光文字，黑色主题高对比",
    parameters: [
      { id: "density", name: "荧光密度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "gloss", name: "铬面光泽", min: 0, max: 100, default: 50, unit: "%" }
    ],
    fonts: {
      en: { name: "Orbitron", url: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap", css: "'Orbitron','Exo 2',sans-serif" },
      cn: { name: "得意黑", css: "'Smiley Sans Oblique','MiSans','PingFang SC',sans-serif" }
    }
  },
  {
    id: 8,
    name: "瑞士国际主义 · Swiss International Style",
    nameEn: "Swiss International Style",
    category: "版式设计",
    overlayMode: "mist",
    description: "1950年代起源于瑞士的理性主义设计运动。以严格网格系统、不对称排版、大号粗体无衬线字体、黑/白/红三色为标志。功能优先，装饰极少，追求信息的清晰传达与视觉秩序",
    vibe: "理性、秩序、精确、极简、功能主义",
    keywords: "严格网格, 不对称排版, 无衬线字体, Helvetica, 黑/白/红, 功能优先, 理性主义, 信息设计, 留白, 字号对比",
    visualFeatures: [
      "严格水平与垂直网格线作为结构骨架",
      "极端的字号对比（巨型标题 + 微型正文）",
      "不对称但平衡的版面构图",
      "黑、白、红三色的高度克制使用",
      "大量留白作为积极的设计元素",
      "无衬线粗体字作为视觉锚点"
    ],
    bestFor: "文化海报, 信息图表, 品牌系统, 杂志排版, 数据产品, 现代主义UI",
    tools: "InDesign, Figma, Illustrator, CSS Grid, 真实印刷",
    prompt: "Swiss International Style design, strict grid system with horizontal and vertical black lines, asymmetric but balanced layout, extreme typographic scale contrast, bold sans-serif typography, black white and red color palette only, generous whitespace as active design element, functional and rational, minimal decoration, Helvetica or Arial bold, clean and precise, Josef Müller-Brockmann inspired",
    colorPalette: ["#000000", "#FFFFFF", "#E10600", "#333333", "#CCCCCC", "#FF0000"],
    uiApplication: "直角卡片+细黑边框+大量留白，严格矩形无圆角按钮，黑/白/红三色系统，超大标题负margin溢出",
    parameters: [
      { id: "grid", name: "网格密度", min: 0, max: 100, default: 40, unit: "%" }
    ],
    fonts: {
      en: { name: "Helvetica Neue", url: null, css: "'Helvetica Neue','Arial','Inter',sans-serif" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 9,
    name: "达达主义反叛 · Dadaism / Anti-Swiss",
    nameEn: "Dadaism / Anti-Swiss",
    category: "版式设计",
    overlayMode: "bleed",
    description: "在瑞士国际主义严格网格系统基础上的达达主义式反叛。打破网格、重叠层级、非常规排版、玩味留白、系统性混乱",
    vibe: "反叛、 playful、打破规则、系统性混乱、达达主义",
    keywords: "达达主义, 打破网格, 重叠层级, 非常规排版, 玩味留白, 系统性混乱, 反叛, 后瑞士, 解构, 实验排版",
    visualFeatures: [
      "在严格网格上故意偏离对齐",
      "文字与图像的重叠和交叉",
      "极大的字号对比（巨型标题+微小正文）",
      "负空间的非常规使用",
      "多种字重、字族、方向的混合",
      "规则的破坏仍然保持某种隐性秩序"
    ],
    bestFor: "文化海报, 实验性杂志, 先锋品牌, 艺术展览, 概念排版, 先锋UI",
    tools: "InDesign, Figma, Illustrator, 真实印刷实验, 手工拼贴",
    prompt: "Dadaism anti-design typography, intentional rebellion against grid systems, overlapping text and image layers, unconventional type alignment, playful use of negative space, extreme scale contrasts (giant headlines + tiny body), mixing multiple typefaces and weights, systematic chaos, rules are broken but underlying structure remains felt, experimental and bold, David Carson inspired, dadaist aesthetic",
    colorPalette: ["#000000", "#FFFFFF", "#FF3300", "#FFCC00", "#0066FF", "#00CC66"],
    uiApplication: "打破网格的文字排版，重叠元素，超大标题，多种字体混排，留白作为活跃元素",
    parameters: [
      { id: "rebellion", name: "反叛强度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "distortion", name: "文字畸变度", min: 0, max: 100, default: 30, unit: "%" }
    ],
    fonts: {
      en: { name: "Inter", url: null, css: "'Inter','Helvetica Neue',sans-serif" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 10,
    name: "脏插件美学 · Dirty Plugin / Grunge",
    nameEn: "Dirty Plugin / Grunge Collage",
    category: "混合媒介",
    overlayMode: "bleed",
    description: "模拟老旧纸张、咖啡渍、划痕、胶带和褶皱等瑕疵美学。将摄影、手绘、扫描纹理等多种来源素材以粗犷方式重组，呈现一种经过时间侵蚀和数字腐败后的复古质感",
    vibe: "粗犷、复古、瑕疵美学、手工痕迹、数字噪音",
    keywords: "脏插件, 咖啡渍, 划痕, 褶皱, 胶带, 泛黄, 老旧纸张, 混合媒介, 手工感, 复古, 拼贴",
    visualFeatures: [
      "泛黄纸张基底上的咖啡渍与墨水渍",
      "倾斜的划痕和细线纹理",
      "半透明胶带条和褶皱折痕",
      "扫描纸张的老化质感和色斑",
      "不同媒介的粗犷并置碰撞",
      "倾斜卡片与撕痕边缘装饰"
    ],
    bestFor: "文化海报, 专辑封面, 杂志内页, 独立品牌, 情绪板, 复古UI",
    tools: "真实剪刀+胶水+杂志, Photoshop图层混合模式, 扫描仪, Procreate, 真实材料拼贴",
    prompt: "Dirty plugin grunge aesthetic, aged paper textures, coffee stains and ink splatters, visible scratches and creases, yellowed vintage paper, masking tape marks, torn edges, mixed media collage with analog imperfections, rough and tactile, digital decay meets handmade craft, nostalgic worn-out quality, grunge design elements",
    colorPalette: ["#D4A373", "#E9EDC9", "#FEFAE0", "#FAEDCD", "#CCD5AE", "#6B705C"],
    uiApplication: "泛黄纸张背景，咖啡渍和划痕纹理，胶带装饰，倾斜卡片，手工感边框，老旧质感",
    parameters: [
      { id: "messiness", name: "凌乱度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "aging", name: "纸张老化度", min: 0, max: 100, default: 30, unit: "%" }
    ],
    fonts: {
      en: { name: "Indie Flower", url: "https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap", css: "'Indie Flower','Caveat','LXGW WenKai',cursive" },
      cn: { name: "小赖体", css: "'Xiaolai','LXGW WenKai','MiSans',sans-serif" }
    }
  },
  {
    id: 11,
    name: "液态铬 · Liquid Chrome",
    nameEn: "Liquid Chrome",
    category: "数字艺术",
    overlayMode: "edge",
    description: "源自2020年代初的数字美学运动，专注于铬金属质感和液态流体反射。流动的银色 blob、镜面高光、金属拉丝纹理在深色背景上形成强烈的未来主义视觉冲击。高端科技与奢华感的完美结合",
    vibe: "未来、金属、流体、高端、冷峻、科技",
    keywords: "液态铬, 金属, 镜面反射, 铬面光泽, 流体动画, 未来主义, 高端科技, 拉丝纹理, 3D渲染, 冷色调",
    visualFeatures: [
      "流动的液态 blob 形状变化动画",
      "铬金属表面的镜面反射高光",
      "金属拉丝交叉纹理",
      "银白灰冷色调在深色背景上的对比",
      "渐变铬色边框和卡片发光",
      "尖刺状铬面装饰伸出边界"
    ],
    bestFor: "科技产品, 奢侈品品牌, 音乐平台, 潮牌电商, 汽车展示, 高端发布会",
    tools: "CSS gradients, WebGL shaders, After Effects, Blender, Cinema 4D",
    prompt: "Liquid chrome aesthetic, flowing metallic silver blobs with mirror reflections, chrome surface sheen and specular highlights, brushed metal cross-hatch textures, fluid morphing animation, dark background with cool silver gray tones, futuristic and premium, high-end technology visual, 3D rendered chrome elements, sleek and cold, luxury digital design",
    colorPalette: ["#E8E8F0", "#C8C8D5", "#A0A0B0", "#787888", "#505060", "#0B0B0F"],
    uiApplication: "铬金属渐变边框卡片，液态 blob 背景动画，镜面高光，深色主题，银白灰冷色调，发光阴影",
    parameters: [
      { id: "flowSpeed", name: "液态流速", min: 0, max: 100, default: 50, unit: "%" },
      { id: "chrome", name: "铬金属反光", min: 0, max: 100, default: 70, unit: "%" }
    ],
    fonts: {
      en: { name: "Orbitron", url: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap", css: "'Orbitron','Exo 2',sans-serif" },
      cn: { name: "得意黑", css: "'Smiley Sans Oblique','MiSans','PingFang SC',sans-serif" }
    }
  },
  {
    id: 12,
    name: "蒸汽波 · Vaporwave",
    nameEn: "Vaporwave",
    category: "数字艺术",
    overlayMode: "edge",
    description: "2010年代初兴起的网络美学。90年代消费文化、希腊雕像、夕阳渐变、CRT显示器、商场音乐、早期互联网的怀旧重构",
    vibe: "怀旧、超现实、消费主义批判、数字田园",
    keywords: "希腊雕像, 夕阳渐变, CRT扫描线, 商场音乐, 90年代, 消费主义, 怀旧, 超现实, 数字田园, 粉紫青",
    visualFeatures: [
      "粉紫青色的夕阳渐变天空",
      "古典希腊罗马白色雕像",
      "CRT显示器的扫描线和曲屏畸变",
      "90年代电脑窗口化UI元素",
      "棕榈树、海豚、日文假名的拼贴",
      "低保真、低像素的数字质感"
    ],
    bestFor: "音乐播放器, 复古游戏, 艺术项目, 独立品牌, 播客封面, 社交媒体",
    tools: "Photoshop, After Effects, 真实CRT显示器拍摄, 90年代电脑截图",
    prompt: "Vaporwave aesthetic, pink purple cyan sunset gradients, classical Greek white marble statues, CRT scan lines and screen curvature distortion, 90s computer window UI elements, palm trees and dolphins collage, Japanese katakana text, mallsoft music visual, nostalgic and surreal, consumerism critique, digital pastoral, lo-fi pixelated quality",
    colorPalette: ["#FF71CE", "#01CDFE", "#05FFA1", "#B967FF", "#2D1B4E", "#F0F0F5"],
    uiApplication: "夕阳渐变背景，CRT扫描线overlay，窗口化卡片，终端字体，粉紫青配色",
    parameters: [
      { id: "scanlines", name: "CRT扫描线密度", min: 0, max: 100, default: 40, unit: "%" },
      { id: "saturation", name: "日落饱和度", min: 50, max: 150, default: 100, unit: "%" }
    ],
    fonts: {
      en: { name: "Courier Prime", url: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap", css: "'Courier Prime','Courier New',monospace" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 13,
    name: "孟菲斯 · Memphis Design",
    nameEn: "Memphis Design",
    category: "混合媒介",
    overlayMode: "corner",
    description: "1981年米兰诞生的后现代设计运动。Ettore Sottsass 创立，以高饱和色彩、几何图案、黑色粗圆点、波浪线和反功能主义著称",
    vibe: " playful、高饱和、几何、反叛、80年代",
    keywords: "高饱和, 几何图案, 黑色圆点, 波浪线, 反功能主义, Ettore Sottsass, 80年代, 后现代, 塑料质感, 装饰性",
    visualFeatures: [
      "高饱和的原色和荧光色并置",
      "黑色粗圆点和波浪线装饰",
      "几何图案（三角、半圆、网格）",
      "不对称的排版和构图",
      "塑料质感的纹理和光泽",
      "刻意的不协调和视觉噪音"
    ],
    bestFor: "儿童产品, 创意工具, 品牌展示, 活动视觉, 家具设计, 生活方式品牌",
    tools: "Illustrator, 彩色塑料板材, 真实几何道具摄影, 丝网印刷",
    prompt: "Memphis design style, high-saturation primary and neon colors, black bold dots and squiggly lines, geometric patterns (triangles, semicircles, grids), asymmetrical composition, plastic texture and gloss, intentional visual noise and discord, Ettore Sottsass inspired, 1980s postmodern, playful and decorative, anti-functionalism",
    colorPalette: ["#FFBE0B", "#FF006E", "#3A86FF", "#8338EC", "#FB5607", "#000000"],
    uiApplication: "高饱和几何图案背景，黑色粗圆点边框，波浪线装饰，不对称卡片布局",
    parameters: [
      { id: "patternDensity", name: "图案密度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "vibrancy", name: "色彩鲜艳度", min: 50, max: 150, default: 100, unit: "%" }
    ],
    fonts: {
      en: { name: "Fredoka", url: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap", css: "'Fredoka','Nunito',sans-serif" },
      cn: { name: "悠哉", css: "'Yozai','MiSans','PingFang SC',sans-serif" }
    }
  },
  {
    id: 14,
    name: "构成主义 · Constructivism",
    nameEn: "Constructivism",
    category: "版式设计",
    overlayMode: "edge",
    description: "1910s-1920s俄罗斯先锋艺术运动。Rodchenko、Lissitzky、Tatlin 领衔，以几何抽象、动态对角线构图、工业材料感、摄影蒙太奇和革命性排版著称。强调艺术为生产与社会服务",
    vibe: "革命性、工业、动态几何、propaganda海报",
    keywords: "几何抽象, 对角线, 工业, 摄影蒙太奇, propaganda, 红黑黄蓝, 动态, 先锋派, Rodchenko, Lissitzky, Tatlin, 构成主义, 机械, 结构, 粗体无衬线, 不对称, 革命, 海报, 拼贴, 金属, 玻璃, 混凝土",
    visualFeatures: [
      "大胆的几何形状（圆、三角、矩形、线条）作为结构元素",
      "动态对角线构图和倾斜排版",
      "高对比原色（红、黑、白、黄、蓝）",
      "摄影蒙太奇和拼贴式图像处理",
      "工业材料纹理（金属、玻璃、混凝土）",
      "粗体无衬线字体作为建筑性元素"
    ],
    bestFor: "文化海报, 先锋品牌, 艺术展览, 政治运动视觉, 实验性杂志, 概念排版",
    tools: "Illustrator, Photoshop, 真实印刷实验, 摄影蒙太奇拼贴, 丝网印刷",
    prompt: "Constructivism art style, bold geometric shapes (circles, triangles, rectangles, lines) as structural elements, dynamic diagonal compositions and angled layouts, primary colors with strong contrast (red, black, white, yellow, blue), photomontage and collage-style image treatments, industrial material textures (metal, glass, concrete), asymmetrical grid systems with intentional breaks, bold sans-serif typography used as architectural element, propaganda poster aesthetic with dramatic scale contrasts, constructivist collage layering, mechanical and structural visual language, sharp edges with no soft shadows, Rodchenko and Lissitzky inspired, revolutionary and industrial",
    colorPalette: ["#E10600", "#000000", "#FFFFFF", "#FFCD00", "#0055A4", "#333333"],
    uiApplication: "几何切割卡片+粗黑边框+硬阴影，全大写粗体标题，红色强调标签，摄影蒙太奇图像处理，不对称网格",
    parameters: [
      { id: "dynamism", name: "动态感", min: 0, max: 100, default: 50, unit: "%" },
      { id: "contrast", name: "对比度", min: 0, max: 100, default: 70, unit: "%" },
      { id: "montage", name: "蒙太奇错位", min: 0, max: 100, default: 40, unit: "%" }
    ],
    fonts: {
      en: { name: "Oswald", url: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap", css: "'Oswald','Impact','Arial Black',sans-serif" },
      cn: { name: "得意黑", css: "'Smiley Sans Oblique','MiSans','PingFang SC',sans-serif" }
    }
  },
  {
    id: 15,
    name: "山水墨韵 · Ink Landscape",
    nameEn: "Ink Landscape",
    category: "绘画艺术",
    overlayMode: "mist",
    description: `中国传统山水画的数字演绎。以水墨晕染、远山近景的层次感、云雾留白和笔墨气韵为核心。追求"远山无皴，远水无痕"的空灵意境，融合高远、深远、平远的三远法构图`,
    vibe: "空灵、淡雅、气韵生动、留白、水墨",
    keywords: "水墨, 山水, 晕染, 留白, 三远法, 高远, 深远, 平远, 笔墨, 皴法, 云雾, 空灵, 淡雅, 国画, 文人画, 写意, 泼墨, 宣纸, 朱砂, 花青, 赭石",
    visualFeatures: [
      "淡墨远山的朦胧轮廓与留白",
      "中景山峦的层次递进",
      "云雾水汽的氤氲弥漫",
      "近景浓墨的笔墨点缀",
      "宣纸质感与墨色晕染",
      "印章朱红的点睛对比"
    ],
    bestFor: "文化产品, 茶品牌, 书院, 中式酒店, 文博展览, 国风APP, 诗词文学",
    tools: "Photoshop笔刷引擎, Procreate水墨笔刷, 真实宣纸水墨, Fresco",
    prompt: "Chinese traditional ink landscape painting style, shanshui aesthetic, misty mountains fading into white void, distant peaks with no texture (远山无皴), water with no ripples (远水无痕), three-distance composition (三远法: high/level/deep distance), ink wash gradation from wet to dry, blank space as active design element (留白), subtle xuan paper texture, calligraphic brush strokes, seal stamp red accents (朱砂印章), muted earth tones with ink blacks, ethereal and contemplative atmosphere, Song and Yuan dynasty painting influence",
    colorPalette: ["#2B2B2B", "#5A5A5A", "#8C8C8C", "#A0522D", "#4A6741", "#C4A35A", "#F5F0E8", "#B42828"],
    uiApplication: "极淡的墨色边框与柔和晕染阴影，宣纸米白背景，书法字体，印章红按钮，大量留白呼吸空间",
    parameters: [
      { id: "depth", name: "景深层次", min: 0, max: 100, default: 50, unit: "%" },
      { id: "wash", name: "晕染强度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "mist", name: "云雾浓度", min: 0, max: 100, default: 40, unit: "%" }
    ],
    fonts: {
      en: { name: "Cormorant", url: "https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&display=swap", css: "'Cormorant','Times New Roman',serif" },
      cn: { name: "霞鹜文楷", css: "'LXGW WenKai','Kaiti SC','STKaiti',serif" }
    }
  },
  {
    id: 16,
    name: "千里江山 · A Thousand Li",
    nameEn: "A Thousand Li of Rivers and Mountains",
    category: "绘画艺术",
    overlayMode: "mist",
    description: `北宋王希孟《千里江山图》的数字演绎。以石青、石绿矿物颜料的宝石般璀璨为核心，层峦叠嶂的青绿山水、泥金勾勒的轮廓、蜿蜒江河的S形走势。追求"咫尺有千里之趣"的宏大气象，融合青绿山水的浓艳与金碧辉煌的华贵`,
    vibe: "华贵、宏阔、璀璨、青绿、泥金、层峦",
    keywords: "青绿山水, 石青, 石绿, 泥金, 千里江山, 王希孟, 矿物颜料, 层峦叠嶂, 金碧山水, 汁绿, 花青, 绢本, 宏阔, 璀璨",
    visualFeatures: [
      "石青石绿的宝石般浓艳色调",
      "泥金勾勒山体轮廓与皴纹",
      "层峦叠嶂的深远层次",
      "蜿蜒江河的S形走势",
      "暖赭石与泥金的点缀对比",
      "绢本质感的温润底色"
    ],
    bestFor: "文博展览, 国风 luxury 品牌, 高端茶酒, 中式酒店, 文化APP, 国潮视觉",
    tools: "Procreate, Photoshop, 真实矿物颜料, 泥金工艺",
    prompt: "Qinggreen shanshui landscape style, azurite blue and malachite green mineral pigments, gold-outline mountain contours, layered peaks in jade green and cobalt blue, winding river in S-curve composition, warm silk texture background, luxurious and brilliant coloration, Song dynasty blue-green landscape painting influence, gem-like saturated colors, golden accent details, majestic and expansive atmosphere",
    colorPalette: ["#0E6BA8", "#2BA86C", "#3AC982", "#1B3A5C", "#D4AF37", "#B87333", "#7FB069", "#F5F0E0"],
    uiApplication: "渐变青绿边框卡片，泥金渐变文字标题，宝石光泽按钮，暖绢色背景，层叠山峦装饰",
    parameters: [
      { id: "depth", name: "山层次", min: 0, max: 100, default: 60, unit: "%" },
      { id: "brilliance", name: "泥金光泽", min: 0, max: 100, default: 50, unit: "%" },
      { id: "mist", name: "水汽氤氲", min: 0, max: 100, default: 30, unit: "%" }
    ],
    fonts: {
      en: { name: "Cormorant", url: "https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&display=swap", css: "'Cormorant','Times New Roman',serif" },
      cn: { name: "霞鹜文楷", css: "'LXGW WenKai','Kaiti SC','STKaiti',serif" }
    }
  },
  {
    id: 17,
    name: "蒙德里安 · Mondrian",
    nameEn: "Mondrian / De Stijl",
    category: "版式设计",
    overlayMode: "soak",
    description: `荷兰风格派（De Stijl）的数字演绎。以皮特·蒙德里安的新造型主义为核心：严格水平与垂直的黑色粗线分割画面，红、黄、蓝三原色矩形色块嵌于白色空间之中。追求"纯粹的抽象"与"普遍的和谐"，摒弃一切曲线、装饰与自然形态`,
    vibe: "理性、秩序、纯粹、三原色、网格、不对称平衡",
    keywords: "新造型主义, De Stijl, 三原色, 红, 黄, 蓝, 黑线, 网格, 垂直, 水平, 纯粹抽象, 不对称, 构图, 几何, 理性秩序",
    visualFeatures: [
      "严格水平与垂直的黑色粗线分割",
      "红、黄、蓝三原色矩形色块",
      "大面积的白色留白空间",
      "不对称但平衡的构图",
      "无曲线、无渐变、无装饰",
      "黑线的粗细变化与节奏感"
    ],
    bestFor: "现代艺术展览, 设计博物馆, 极简品牌, 建筑相关UI, 理性主义产品",
    tools: "Adobe Illustrator, Figma, CSS Grid, 真实丙烯/油画",
    prompt: "Mondrian De Stijl neoplasticism style, strict horizontal and vertical black grid lines, rectangles of primary colors (red, yellow, blue) on white background, asymmetric balanced composition, no curves no gradients no decoration, pure geometric abstraction, bold black outlines of varying thickness, rational and ordered, Piet Mondrian inspired, flat areas of pure color",
    colorPalette: ["#E30022", "#FFD700", "#0047AB", "#000000", "#FFFFFF"],
    uiApplication: "直角粗黑边框卡片，三原色按钮，无圆角，严格网格布局，黑白灰+红黄蓝",
    parameters: [
      { id: "gridDensity", name: "网格密度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "colorRatio", name: "色块比例", min: 0, max: 100, default: 40, unit: "%" },
      { id: "asymmetry", name: "不对称度", min: 0, max: 100, default: 60, unit: "%" }
    ],
    fonts: {
      en: { name: "Space Grotesk", url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap", css: "'Space Grotesk','Inter',sans-serif" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 18,
    name: "三星堆·现代 · Sanxingdui Modern",
    nameEn: "Sanxingdui Modern",
    category: "混合媒介",
    overlayMode: "soak",
    description: "古蜀文明的当代视觉转译。以三星堆青铜器氧化铜绿、黄金面具的金箔光泽为核心，融合神秘的几何回纹与纵目大耳的夸张面部轮廓。深褐底色上斑驳的铜绿如时间侵蚀，金色线条勾勒出现代极简的边框与分割，形成三千年前的神秘与未来感的碰撞",
    vibe: "神秘、铜绿、金箔、古蜀、纵目、时间侵蚀、未来考古",
    keywords: "三星堆, 古蜀文明, 青铜器, 铜绿, 金箔面具, 氧化斑驳, 回纹, 纵目, 大耳, 神秘几何, 时间侵蚀, 考古未来主义",
    visualFeatures: [
      "深褐底色上的青铜器氧化铜绿斑驳纹理",
      "金箔面具边缘的高光线条与几何分割",
      "神秘回纹与云雷纹的细线纹样",
      "纵目大耳轮廓的半透明剪影冲出画面",
      "铜锈蓝绿与朱砂红的点缀色块",
      "时间侵蚀般的渐变斑驳与不规则边缘"
    ],
    bestFor: "文化展览, 博物馆数字展, 国潮品牌, 文创产品, 神秘主义UI, 考古主题",
    tools: "Procreate, Photoshop, Illustrator, Substance Painter, 真实青铜铸造",
    prompt: "Sanxingdui Modern style, ancient bronze patina textures in deep olive-green and turquoise, gold leaf mask highlights with geometric borders, mysterious spiral cloud-thunder patterns, exaggerated eye and ear silhouettes, deep brown background with oxidized copper spots, vermillion red accents, time-weathered surfaces, ancient Shu civilization meets modern minimalism, archaeological futurism, patina gradients, irregular corroded edges",
    colorPalette: ["#4A6741", "#C9A227", "#2F6B5E", "#1A1410", "#9B2D1B", "#D4AF37"],
    colorPalettes: [
      { name: "古朴青铜", palette: ["#4A6741", "#C9A227", "#2F6B5E", "#1A1410", "#9B2D1B", "#D4AF37"] },
      { name: "现代明亮", palette: ["#5A9A50", "#E8C84A", "#4A9B85", "#3A3028", "#C04A30", "#F0D060"] }
    ],
    uiApplication: "深褐卡片配铜绿边框，金色高亮按钮，纵目轮廓装饰角标，回纹分割线，铜锈斑驳背景",
    parameters: [
      { id: "patina", name: "铜绿斑驳", min: 0, max: 100, default: 55, unit: "%" },
      { id: "goldLeaf", name: "金箔光泽", min: 0, max: 100, default: 45, unit: "%" },
      { id: "mystery", name: "纵目显隐", min: 0, max: 100, default: 35, unit: "%" }
    ],
    fonts: {
      en: { name: "Cinzel", url: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap", css: "'Cinzel','Cormorant','Times New Roman',serif" },
      cn: { name: "思源宋体", css: "'Noto Serif SC','Source Han Serif SC','SimSun',serif" }
    }
  }
];

// 艺术效果分类
const artEffectCategories = [
  { id: "all", name: "全部" },
  { id: "印刷艺术", name: "印刷艺术" },
  { id: "绘画艺术", name: "绘画艺术" },
  { id: "数字艺术", name: "数字艺术" },
  { id: "3D/数字艺术", name: "3D/数字艺术" },
  { id: "信息设计", name: "信息设计" },
  { id: "版式设计", name: "版式设计" },
  { id: "混合媒介", name: "混合媒介" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { artEffects, artEffectCategories };
}
