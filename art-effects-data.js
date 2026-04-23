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
    name: "点阵风 · Dither / Halftone",
    nameEn: "Dither / Halftone",
    category: "数字艺术",
    overlayMode: "soak",
    description: "通过疏密不同的点阵来模拟灰度和色彩渐变。源于印刷技术，在数字时代成为独特的视觉风格。 ordered dither、Floyd-Steinberg error diffusion、圆形/菱形/线形半调网屏",
    vibe: "印刷质感、数字复古、颗粒、低保真",
    keywords: "半调网屏, 点阵渐变, ordered dither, error diffusion, 印刷质感, 颗粒, 低保真, 灰度模拟, 网点",
    visualFeatures: [
      "由疏密不同的圆点构成的图像",
      "Ordered dithering 的棋盘格图案",
      "Floyd-Steinberg error diffusion 的随机点分布",
      "仅使用黑白两色但通过点密度表现层次",
      "明显的网屏角度（15°、45°、75°）",
      "放大的网点在边缘形成锯齿"
    ],
    bestFor: "海报设计, 专辑封面, 独立杂志, 复古UI, 印刷品模拟, 低保真艺术",
    tools: "Photoshop Bitmap mode, Illustrator halftone pattern, 专门dither工具(dithr.it), Shader编程",
    prompt: "Halftone / dither aesthetic, image composed of varying density dots, ordered dithering checkerboard patterns, Floyd-Steinberg error diffusion, black and white only with dot density creating tonal gradation, visible screen angles, printed newspaper quality, retro digital lo-fi, grainy and textured, dot matrix printer feel",
    colorPalette: ["#000000", "#FFFFFF", "#333333", "#666666", "#999999", "#CCCCCC"],
    uiApplication: "图片用半调处理，背景用网点纹理，文字叠加在点阵图案上，单色+点密度层次",
    parameters: [
      { id: "density", name: "网点密度", min: 10, max: 100, default: 50, unit: "%" }
    ],
    fonts: {
      en: { name: "Courier Prime", url: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap", css: "'Courier Prime','Courier New',monospace" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 7,
    name: "低多边形 · Low Poly",
    nameEn: "Low Poly",
    category: "3D/数字艺术",
    overlayMode: "edge",
    description: "使用少量多边形（三角形、四边形）构建的三维模型风格。刻意保留多边形边缘、平面着色、无平滑过渡、几何抽象化",
    vibe: "几何、抽象、数字建构、极简3D",
    keywords: "低面, 三角形, 平面着色, 无平滑, 几何抽象, 3D建构, 刻意棱角, faceted, 网格拓扑",
    visualFeatures: [
      "可见的三角形/四边形网格边缘",
      "每个多边形使用单一平面颜色（无渐变）",
      "刻意的不平滑表面，保留几何棱角",
      "简化的拓扑结构（低面数）",
      "正面光照产生清晰的明暗分界",
      "常使用鲜艳或单色的配色方案"
    ],
    bestFor: "3D插画, 游戏资产, 抽象海报, 科技品牌, 地形可视化, 头像生成",
    tools: "Blender（Decimate modifier）, Cinema 4D, Unity/UE4低模, Processing, Three.js",
    prompt: "Low poly 3D style, visible polygon edges (triangles and quads), flat shading per face, no smooth gradients, geometric abstraction, simplified topology, sharp faceted surfaces, front-lit with clear light-dark boundaries, vibrant or monochrome color schemes, digital constructivist aesthetic, wireframe undertone",
    colorPalette: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD"],
    uiApplication: "3D低多边形插画作为视觉主体，界面元素用几何切割形状，平面着色无渐变",
    parameters: [
      { id: "density", name: "晶格密度", min: 0, max: 100, default: 50, unit: "%" },
      { id: "gloss", name: "面片光泽度", min: 0, max: 100, default: 50, unit: "%" }
    ],
    fonts: {
      en: { name: "Exo 2", url: "https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap", css: "'Exo 2','Inter',sans-serif" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 8,
    name: "数据可视化 · Data Visualization",
    nameEn: "Data Visualization",
    category: "信息设计",
    overlayMode: "mist",
    description: "将抽象数据转化为视觉图形的艺术。折线图、散点图、热力图、力导向图、桑基图、树状图、等值线图等",
    vibe: "理性、信息密集、科学美感、发现洞察",
    keywords: "折线图, 散点图, 热力图, 力导向图, 桑基图, 信息图表, 科学可视化, 统计图形, Tufte, 信息美学",
    visualFeatures: [
      "精确的几何图形代表数据维度",
      "颜色编码表示数值大小或类别",
      "坐标轴、网格线、刻度标签",
      "数据密度决定视觉复杂度",
      "负空间(留白)与数据墨水的平衡",
      "动态交互（悬停提示、筛选、缩放）"
    ],
    bestFor: "数据产品, BI仪表盘, 科学出版, 新闻信息图, 智慧城市, 金融分析",
    tools: "D3.js, ECharts, Tableau, Observable Plot, R ggplot2, Python matplotlib/seaborn",
    prompt: "Data visualization aesthetic, precise geometric forms representing data dimensions, color-coded values, coordinate axes and grid lines, information-dense yet legible, Edward Tufte inspired data-ink ratio, scientific beauty, scatter plots, heat maps, force-directed graphs, Sankey diagrams, analytical and rational, discovery-oriented",
    colorPalette: ["#1A5276", "#2874A6", "#5DADE2", "#AED6F1", "#F39C12", "#E74C3C"],
    uiApplication: "图表即界面，数据驱动色彩，信息密度高，坐标轴和网格线作为装饰元素",
    parameters: [
      { id: "grid", name: "网格线浓度", min: 0, max: 100, default: 40, unit: "%" }
    ],
    fonts: {
      en: { name: "JetBrains Mono", url: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap", css: "'JetBrains Mono','Space Mono',monospace" },
      cn: { name: "MiSans", css: "'MiSans','PingFang SC','Microsoft YaHei',sans-serif" }
    }
  },
  {
    id: 9,
    name: "瑞士国际主义反叛 · Anti-Swiss",
    nameEn: "Anti-Swiss / Post-Swiss",
    category: "版式设计",
    overlayMode: "bleed",
    description: "在瑞士国际主义严格网格系统基础上的有意识反叛。打破网格、重叠层级、非常规排版、玩味留白、系统性混乱",
    vibe: "反叛、 playful、打破规则、系统性混乱",
    keywords: "打破网格, 重叠层级, 非常规排版, 玩味留白, 系统性混乱, 反叛, 后瑞士, 解构, 实验排版",
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
    prompt: "Anti-Swiss / Post-Swiss typography, intentional rebellion against grid systems, overlapping text and image layers, unconventional type alignment, playful use of negative space, extreme scale contrasts (giant headlines + tiny body), mixing multiple typefaces and weights, systematic chaos, rules are broken but underlying structure remains felt, experimental and bold, David Carson inspired",
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
    name: "实验拼贴 · Experimental Collage",
    nameEn: "Experimental Collage",
    category: "混合媒介",
    overlayMode: "bleed",
    description: "将摄影、手绘、扫描纹理、数字图形、文字片段等多种来源素材剪贴重组。撕裂边缘、胶带痕迹、不同媒介的质感碰撞",
    vibe: "手工、混合媒介、意外之美、解构重组",
    keywords: "剪贴, 撕裂边缘, 胶带痕迹, 混合媒介, 扫描纹理, 意外之美, 解构重组, 手工感, 层叠",
    visualFeatures: [
      "不同来源图像的手工剪贴边缘",
      "可见的胶带、订书钉、回形针痕迹",
      "手绘线条与摄影图像的叠加",
      "扫描纸张的纹理和褶皱",
      "不同分辨率/质感的并置碰撞",
      "非逻辑的图像组合产生新意义"
    ],
    bestFor: "文化海报, 专辑封面, 杂志内页, 艺术书, 概念品牌, 情绪板",
    tools: "真实剪刀+胶水+杂志, Photoshop图层混合模式, 扫描仪, Procreate, 真实材料拼贴",
    prompt: "Experimental collage art, mixed media cut-and-paste, torn paper edges visible, tape and staple marks, hand-drawn lines overlaid on photography, scanned paper textures and creases, juxtaposition of different resolutions and media qualities, illogical image combinations creating new meanings, handmade and tactile, layered and textured, analog meets digital, unexpected beauty",
    colorPalette: ["#D4A373", "#E9EDC9", "#FEFAE0", "#FAEDCD", "#CCD5AE", "#6B705C"],
    uiApplication: "背景用扫描纸张纹理，图片带撕裂边缘，手绘涂鸦点缀，胶带和回形针作为装饰元素",
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
    name: "酸性设计 · Acid Design",
    nameEn: "Acid Design",
    category: "数字艺术",
    overlayMode: "edge",
    description: "源自2020年代初的数字美学运动。铬金属质感、液态流体、高饱和霓虹渐变、迷幻几何。受Y2K、赛博朋克和锐舞文化影响",
    vibe: "迷幻、未来、金属、流体、高能量",
    keywords: "铬金属, 液态流体, 霓虹渐变, 迷幻几何, Y2K, 锐舞文化, 高饱和, 反光, 未来主义, Web3",
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
