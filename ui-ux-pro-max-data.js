const uiStyles = [
  {
    id: 1,
    name: "Neubrutalism",
    description: "Bold borders, high contrast, raw aesthetics",
    vibe: "Bold, unpolished, anti-design",
    keywords: "Bold, raw, high-contrast, thick borders, unpolished, anti-design, sticker-like, boxy, chunky, flat colors, drop shadows, 90s web, brutalist, expressive, loud, zine culture, punk, unrefined, oversized typography, primary colors, harsh edges, no gradients, no blur, solid fills, aggressive spacing, utilitarian, accessible, loud",
    prompt: "Use thick solid black borders (3-4px), high contrast primary colors (red #E11D48, blue #2563EB, yellow #F59E0B), flat fills with no gradients, large solid drop shadows offset 4-6px, bold uppercase typography with tight tracking, boxy card layouts with visible bounding boxes, sticker-like buttons with sharp corners, no border radius or subtle 2px radius, raw utilitarian aesthetic, white space as design element, no subtle shadows, no glassmorphism, no soft UI",
    fonts: {
      heading: "Inter",
      body: "Inter",
      chineseHeading: "得意黑",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "得意黑的几何斜切感呼应粗野主义的大胆边框，MiSans保证中文正文清晰可读"
    },
    walkthrough: {
      origin: "Neubrutalism（新粗野主义）源自 1990 年代早期网页设计的反美学运动。当时网页技术简陋，设计师用粗黑表格边框、默认系统字体和纯色块构建页面。2020 年代初，设计师 Ksenia Semirova、Pascal Deville 等人重新发掘这种「未经修饰」的美学，将其从「技术限制」提升为「设计宣言」。",
      features: [
        { label: "粗黑边框", desc: "3–4px solid black，无圆角或仅 2px，形成强烈的「贴纸感」轮廓" },
        { label: "高对比原色", desc: "红 #E11D48、蓝 #2563EB、黄 #F59E0B 直接平涂，无渐变、无透明度" },
        { label: "大偏移阴影", desc: "4–6px 的纯色投影（多为黑色），制造「浮起」的错觉而非柔和深度" },
        { label: "全大写粗体字", desc: "tight tracking（紧凑字距）的大写标题，传递 loud & unapologetic 的态度" },
        { label: "可见边界框", desc: "卡片、按钮、输入框都有明确的「盒子」感，拒绝无缝融合" }
      ],
      useCases: [
        { name: "独立杂志与 Zine", example: "《Brutalist Websites》收录了大量不加修饰的个人网站，用粗边框和系统字体传递朋克态度" },
        { name: "反主流品牌", example: "街头潮牌和独立音乐人常用此风格表达反叛精神，与主流 SaaS 的精致感形成鲜明对比" },
        { name: "创意作品集", example: "设计师和开发者的个人主页，用粗野主义展示「我不需要讨好你」的自信" }
      ],
      relatedStyles: [15],
      relatedEffects: [1, 14]
    }
  },
  {
    id: 2,
    name: "Glassmorphism",
    description: "Translucent layers, frosted glass, depth through blur",
    vibe: "Ethereal, modern, layered depth",
    keywords: "Translucent, frosted glass, blur, layered, depth, ethereal, modern, premium, subtle, light, airy, floating, depth-of-field, background reveal, soft shadows, subtle borders, thin 1px borders, light theme, soft gradients, minimal, floating cards, see-through, delicate, elegant, subtle glow, premium feel, iOS, macOS, depth hierarchy",
    prompt: "Use semi-transparent backgrounds (rgba white 10-20% opacity), backdrop-filter blur (12-20px), thin 1px borders with slight opacity (rgba white 30-50%), subtle soft shadows (0 8px 32px rgba(0,0,0,0.1)), floating card layers with visible depth, light airy backgrounds with subtle gradients, delicate inner glows, premium translucent panels, layered hierarchy with z-depth, avoid solid fills, emphasize depth-of-field and background visibility through layers",
    fonts: {
      heading: "Inter",
      body: "Inter Light",
      chineseHeading: "MiSans",
      chineseBody: "MiSans Light",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "MiSans的简洁现代感与玻璃拟态的通透轻盈完美契合"
    },
    walkthrough: {
      origin: "Glassmorphism（玻璃拟态）在 2020 年代初随 Apple macOS Big Sur 和 Microsoft Fluent Design 的推进而流行。其根源可追溯至 2000 年代初的 macOS Aqua 界面（半透明标题栏）和 2013 年的 iOS 7 毛玻璃效果。设计师们提取了「物理玻璃」的核心特质——透光、折射、边缘高光——将其抽象为数字界面语言。",
      features: [
        { label: "半透明背景", desc: "rgba 白色 10–20% 不透明度，让底层内容隐约透出，创造层级深度" },
        { label: "背景模糊", desc: "backdrop-filter: blur(12–20px)，模拟磨砂玻璃的失真折射效果" },
        { label: "1px 细边框", desc: "带有微弱不透明度（rgba 白 30–50%），勾勒玻璃边缘的厚度感" },
        { label: "柔和阴影", desc: "0 8px 32px rgba(0,0,0,0.1)，让玻璃层「浮」在背景之上" },
        { label: "层级深度", desc: "多层半透明卡片叠加，通过模糊强度和透明度差异建立 z-depth" }
      ],
      useCases: [
        { name: "仪表盘与后台", example: "数据密集型后台用玻璃面板覆盖在实时图表之上，既保持上下文又不遮挡数据" },
        { name: "音乐播放器", example: "Apple Music 和 Spotify 的「现在播放」界面用专辑封面作为动态背景，玻璃控制栏浮于其上" },
        { name: "高端 SaaS", example: "金融科技和 AI 产品常用玻璃拟态传递「轻盈、智能、未来感」的品牌印象" }
      ],
      relatedStyles: [12, 13],
      relatedEffects: [11, 15]
    }
  },
  {
    id: 3,
    name: "Neomorphism (Soft UI)",
    description: "Soft extruded shapes, subtle shadows, tactile plastic feel",
    vibe: "Soft, tactile, gentle, physical",
    keywords: "Soft, extruded, shadows, tactile, plastic, gentle, subtle, physical, embossed, debossed, monochromatic, light gray, minimal, rounded, soft UI, button press, real-world, 3D light effect, shadow play, highlight and shadow pairs, low contrast, pastel, gentle gradients, ceramic, clay, soft edges, pill shapes, no harsh lines",
    prompt: "Use monochromatic light gray palette (#E0E5EC base), soft extruded shapes with dual shadows (light highlight upper-left, dark shadow lower-right), subtle 8-16px border radius, soft pressed states with inset shadows, minimal color usage, low contrast between elements, gentle gradients, tactile button feel, ceramic/clay aesthetic, pill-shaped buttons, no harsh borders, rely entirely on shadow play for depth, soft background gradients",
    fonts: {
      heading: "Poppins",
      body: "Open Sans",
      chineseHeading: "霞鹜文楷",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "文楷的温润人文感呼应拟物光影，MiSans提供清晰正文阅读体验"
    },
    walkthrough: {
      origin: "Neomorphism（新拟态/Soft UI）于 2019 年由乌克兰设计师 Alexander Plyuto 在 Dribbble 上发布的一组概念作品引爆设计社区。它是对 2010 年代早期 Skeuomorphism（拟物主义）的极简回应——保留了「物理光影」但去掉了皮革、金属等具象纹理。灵感来源包括 1980–90 年代的索尼/博朗电子产品外壳、陶瓷器皿的柔和光影。",
      features: [
        { label: "双阴影系统", desc: "左上高光（#FFFFFF）+ 右下暗部（#A3B1C6），模拟单一光源照射的挤出感" },
        { label: "单色调浅灰", desc: "以 #E0E5EC 为基底，所有元素在相近明度中靠阴影区分" },
        { label: "凹陷状态", desc: "按钮按下时阴影反转为 inset，制造「按入」的触觉反馈" },
        { label: "柔和圆角", desc: "8–16px 的 border-radius，与粗野主义的直角形成鲜明对比" },
        { label: "低对比度", desc: "前景与背景色差极小，依赖阴影而非颜色建立层次" }
      ],
      useCases: [
        { name: "智能家居控制", example: "灯光、温度调节面板用 neomorphism 模拟实体旋钮和开关的触感" },
        { name: "音乐播放器", example: "播放/暂停按钮的 soft press 反馈让数字交互有了「物理按键」的满足感" },
        { name: "极简工具", example: "计算器、计时器等单功能应用，用 neomorphism 的克制美学避免视觉噪音" }
      ],
      relatedStyles: [16, 17],
      relatedEffects: [15]
    }
  },
  {
    id: 4,
    name: "Dark Mode (Midnight)",
    description: "OLED black, high contrast, neon accents, futuristic",
    vibe: "Mysterious, futuristic, premium, technical",
    keywords: "Dark, OLED, black, high contrast, neon, futuristic, premium, technical, midnight, deep blue, purple, cyan, magenta, glow, electric, cyber, space, void, starlight, minimal light, energy efficient, reduced eye strain, code editor, terminal, hacker, sci-fi, dashboard, data visualization, night mode, sophisticated",
    prompt: "Use pure or near-pure black backgrounds (#0A0A0F, #050508), high contrast neon accent colors (cyan #00FFFF, magenta #FF00FF, electric blue #3B82F6), subtle glow effects on active elements, OLED-optimized deep blacks, minimal UI chrome, futuristic technical aesthetic, space/cyber theme, dark card surfaces (#1A1A2E), thin subtle borders, data visualization optimized, terminal/code editor feel, no pure white text (use soft grays #E2E8F0), subtle gradient accents",
    fonts: {
      heading: "Orbitron",
      body: "Exo 2",
      chineseHeading: "得意黑",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "得意黑的科技感粗体与Orbitron的赛博未来感共振，MiSans深色可读"
    },
    walkthrough: {
      origin: "Dark Mode（深色模式）的界面历史远比智能手机更久。1970–80 年代的 CRT 终端（如 DEC VT100）只能显示绿色或琥珀色磷光在黑色背景上。现代意义上的 Dark Mode 复兴始于 2016 年的设计社区探索，2019 年 Android 10 和 iOS 13 将其纳入系统级支持。OLED 屏幕的普及让「纯黑省电」成为技术驱动力。",
      features: [
        { label: "OLED 纯黑", desc: "#0A0A0F 或 #050508 的极深背景，让像素完全关闭，节省电量并消除视觉疲劳" },
        { label: "霓虹强调色", desc: "青 #00FFFF、洋红 #FF00FF、电蓝 #3B82F6，在黑暗背景上产生发光幻觉" },
        { label: "微妙 glow", desc: "text-shadow 和 box-shadow 模拟霓虹灯管的辉光溢出，增强未来感" },
        { label: "数据可视化优化", desc: "深色背景让图表线条和高亮数据点更加醒目，适合监控仪表盘" },
        { label: "避免纯白文字", desc: "使用柔和灰 #E2E8F0 替代纯白，减少极端对比带来的阅读疲劳" }
      ],
      useCases: [
        { name: "代码编辑器", example: "VS Code、Sublime Text 的深色主题让开发者长时间编码时眼睛更舒适" },
        { name: "加密货币与金融科技", example: "Coinbase、Binance 等交易所用深色模式传递「高端、技术、全天候交易」的品牌认知" },
        { name: "游戏与娱乐", example: "Steam、Epic Games Launcher 等游戏平台用深色界面让玩家沉浸式浏览" }
      ],
      relatedStyles: [9, 11],
      relatedEffects: [7, 11, 12]
    }
  },
  {
    id: 5,
    name: "Gradient Mesh",
    description: "Fluid gradients, vibrant color transitions, organic shapes",
    vibe: "Vibrant, fluid, organic, energetic",
    keywords: "Fluid gradients, vibrant, organic shapes, color transitions, energetic, alive, dynamic, smooth, flowing, mesh gradients, blob shapes, iridescent, holographic, rainbow, spectrum, colorful, youthful, playful, modern, artistic, sunset, aurora, wave, blend modes, overlay, soft shapes, dreamy, ethereal, colorful backgrounds",
    prompt: "Use fluid gradient backgrounds with 3-5 color stops (vibrant blues, pinks, purples, oranges), organic blob shapes and curved paths, smooth color transitions with blur and blend modes, iridescent/holographic effects, soft gradient orbs floating in background, vibrant but harmonious palette, sunset/aurora color schemes, overlay elements with subtle transparency, dreamy ethereal atmosphere, avoid flat colors, embrace color complexity and flow, use CSS blur and blend modes for depth",
    fonts: {
      heading: "Poppins",
      body: "Open Sans",
      chineseHeading: "悠哉",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "悠哉的圆润活泼与渐变网格的有机流动形成呼应"
    },
    walkthrough: {
      origin: "Gradient Mesh（渐变网格）的数字形态源自 Adobe Illustrator 的 Gradient Mesh 工具（1990 年代末），但作为一种 UI 风格，它更多受到 1960–70 年代 Psychedelic Art（迷幻艺术）和 1980 年代 Memphis Design 色彩实验的影响。2020 年后，随着 CSS conic-gradient 和 backdrop-filter 的普及，流体渐变从平面设计进入界面设计领域。",
      features: [
        { label: "流体渐变", desc: "3–5 个颜色停靠点之间平滑过渡，拒绝生硬的线性分割" },
        { label: "有机 Blob 形状", desc: "无规则边界的柔和色块，模仿液体、细胞或星云的自然形态" },
        { label: "混合模式", desc: "multiply、screen、overlay 等 blend-mode 让重叠色块产生新的色彩" },
        { label: "极光/日落色板", desc: "紫、粉、蓝、橙的梦幻组合，唤起黄昏天空和北极光的情绪" },
        { label: "动态呼吸", desc: "渐变位置缓慢漂移，让界面产生「活着」的有机感" }
      ],
      useCases: [
        { name: "创意工具", example: "Figma、Canva 等设计工具的欢迎页用渐变网格传递「无限创意可能」" },
        { name: "青年品牌", example: "TikTok、Snapchat 等面向 Z 世代的产品用高饱和渐变表达活力与 playful" },
        { name: "艺术展览", example: "数字美术馆和虚拟展厅用渐变网格作为沉浸式背景，打破矩形屏幕的边界感" }
      ],
      relatedStyles: [5, 16],
      relatedEffects: [2, 13]
    }
  },
  {
    id: 6,
    name: "Bauhaus",
    description: "Geometric shapes, primary colors, functional simplicity",
    vibe: "Geometric, functional, artistic, structured",
    keywords: "Geometric, primary colors, functional, artistic, structured, circles, triangles, squares, red blue yellow, black, white, grid, asymmetry, modernist, 1920s, constructivist, bold shapes, minimal decoration, form follows function, art school, gallery, museum, architectural, clean lines, block colors, no gradients, no photos, graphic design, poster, Swiss design, grid system",
    prompt: "Use primary colors (red #DC2626, blue #2563EB, yellow #F59E0B) with black and white, geometric shapes (circles, triangles, rectangles) as design elements, asymmetrical grid layouts, bold solid color blocks, clean sans-serif typography, minimal decoration, form follows function, architectural grid systems, no gradients, no photos (use illustrations), poster-like compositions, high contrast between elements, functional simplicity, 1920s modernist aesthetic",
    fonts: {
      heading: "Poppins",
      body: "Inter",
      chineseHeading: "得意黑",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "得意黑的几何构成呼应包豪斯的几何原则"
    }
  },
  {
    id: 7,
    name: "Swiss / International Typographic Style",
    description: "Grid-based, Helvetica, objective clarity, asymmetric layouts",
    vibe: "Objective, rational, highly legible, structured",
    keywords: "Grid, Helvetica, objective, rational, legible, structured, asymmetric, sans-serif, typography-led, mathematical, systematic, white space, left-aligned, flush left ragged right, photography, clean, order, clarity, information design, poster, signage, objective photography, no decoration, black and white with accent, museum, gallery, editorial",
    prompt: "Use strict grid systems (8px or 12px base grid), Helvetica/Inter/Arial typography, asymmetric layouts with flush left ragged right text, generous white space, objective photography (no filters/effects), black text on white with single accent color, left-aligned everything, systematic information hierarchy, mathematical proportions, no decoration, clarity above all, editorial magazine feel, no gradients, solid colors only, photography as factual element not decoration",
    fonts: {
      heading: "Inter",
      body: "Inter",
      chineseHeading: "MiSans",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "MiSans的理性清晰完美契合国际主义排版的客观理性"
    }
  },
  {
    id: 8,
    name: "Minimalist / White Space",
    description: "Extreme reduction, essential elements only, serene",
    vibe: "Calm, serene, essential, refined",
    keywords: "Minimal, white space, reduction, essential, serene, calm, refined, pure, simple, stripped back, bare, essentialism, zen, Japanese, wabi-sabi, emptiness, breathing room, delicate, subtle, whisper, quiet, uncluttered, focused, single element, isolation, gallery, museum, luxury through restraint, Apple aesthetic, Dieter Rams",
    prompt: "Use extreme white space (generous margins 80-120px), essential elements only (remove everything non-essential), serene calm aesthetic, delicate subtle typography, single focal point per screen, Japanese zen influence, wabi-sabi imperfection, gallery-like presentation, luxury through restraint not excess, Apple-style minimalism, Dieter Rams principles, isolated elements with breathing room, subtle shadows only, whisper-quiet color palette, focus on one action at a time",
    fonts: {
      heading: "Cormorant",
      body: "Montserrat",
      chineseHeading: "霞鹜文楷 Light",
      chineseBody: "MiSans Light",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "文楷的优雅留白感与极简主义的呼吸空间完美契合"
    }
  },
  {
    id: 9,
    name: "Cyberpunk",
    description: "Neon glow, dark city, high tech low life, glitch effects",
    vibe: "Edgy, futuristic, dystopian, electric",
    keywords: "Neon, glow, dark, city, cyber, futuristic, dystopian, electric, glitch, hacker, matrix, rain, night, neon signs, pink, cyan, purple, black, grid lines, terminal, code, HUD, sci-fi, retro-future, 80s, blade runner, synthwave, distorted, static, chromatic aberration, scan lines, terminal font, monospace, tech-noir",
    prompt: "Use dark backgrounds (#0A0A0F) with neon accents (hot pink #FF00FF, cyan #00FFFF, electric purple #8B5CF6), neon glow effects (text-shadow, box-shadow), glitch and distortion effects, terminal/monospace fonts, HUD-like interface elements, grid lines and technical overlays, night city aesthetic, chromatic aberration on images, scan lines, synthwave color palette, rain and reflection effects, retro-future 80s tech aesthetic, high-tech low-life vibe, data streams and code elements",
    fonts: {
      heading: "Orbitron",
      body: "JetBrains Mono",
      chineseHeading: "得意黑",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "简洁无衬线在霓虹光效下保持清晰，科技感十足"
    }
  },
  {
    id: 10,
    name: "Art Deco",
    description: "Geometric luxury, gold and black, sunbursts, elegance",
    vibe: "Luxurious, glamorous, 1920s, geometric elegance",
    keywords: "Geometric, luxury, gold, black, sunburst, elegance, 1920s, Gatsby, glamour, sophisticated, ornate, decorative, fan shapes, chevrons, zigzags, stepped forms, metallic, chrome, glass, velvet, rich, opulent, theater, cinema, jazz age, vintage, retro glamour, high contrast, symmetrical, streamlined, modern vintage",
    prompt: "Use geometric decorative patterns (sunbursts, chevrons, fan shapes), gold and black color scheme with cream accents, stepped forms and zigzag patterns, metallic gradients (gold, chrome), symmetrical layouts, ornate borders and frames, Art Deco typography (geometric sans-serif), 1920s Gatsby glamour, rich opulent feel, theater/cinema aesthetic, high contrast between light and dark, streamlined modern vintage, glass and chrome textures, velvet-like deep colors",
    fonts: {
      heading: "Cormorant",
      body: "Montserrat",
      chineseHeading: "思源宋体",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "宋体的古典优雅与Art Deco的复古奢华气质完美匹配"
    }
  },
  {
    id: 11,
    name: "Material Design 3",
    description: "Google's latest design system, tonal palettes, rounded shapes",
    vibe: "Friendly, accessible, modern, systematic",
    keywords: "Material, Google, tonal, rounded, friendly, accessible, systematic, elevation, surfaces, adaptive, dynamic color, responsive, mobile-first, cards, FAB, bottom sheet, snackbar, chips, tokens, design system, Android, cross-platform, consistent",
    prompt: "Use Google's Material Design 3 principles, tonal color palettes with dynamic theming, rounded corners (12px for cards, 16px for dialogs, full rounded for FAB), elevation shadows (ambient + penumbra + umbra), surface hierarchy with tonal variation, adaptive layouts, responsive grids, consistent spacing tokens (4dp base grid), material motion with shared axis transitions, haptic feedback indicators, accessible contrast ratios (WCAG AA minimum)",
    fonts: {
      heading: "Poppins",
      body: "Inter",
      chineseHeading: "MiSans",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "系统化的MiSans与Material Design的系统化设计原则一致"
    }
  },
  {
    id: 12,
    name: "iOS Design System",
    description: "Apple's Human Interface Guidelines, clean, premium feel",
    vibe: "Premium, refined, intuitive, polished",
    keywords: "iOS, Apple, Human Interface, premium, refined, intuitive, polished, SF Pro, San Francisco, blur, vibrancy, depth, layers, translucency, spring animations, haptic, retina, crisp, native, Cupertino, segmented control, tab bar, navigation bar, action sheet, context menu",
    prompt: "Use Apple's Human Interface Guidelines, SF Pro typography, system colors with semantic naming, blur and vibrancy effects, layered interfaces with depth, translucent navigation bars, crisp 1px hairlines on retina displays, spring physics animations, generous padding (16pt minimum), rounded corners consistent with iOS (8-20pt), native component styling, haptic feedback patterns, premium feel through restraint, no custom shadows prefer system elevation",
    fonts: {
      heading: "Inter",
      body: "Inter",
      chineseHeading: "MiSans",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "精致清晰的无衬线，契合iOS的Human Interface精致感"
    }
  },
  {
    id: 13,
    name: "Fluent Design (Microsoft)",
    description: "Microsoft's design system, acrylic, reveal, connected animations",
    vibe: "Modern, connected, fluid, responsive",
    keywords: "Fluent, Microsoft, acrylic, reveal, connected, light, depth, motion, material, Windows, Xbox, Office, Mica, smoke, parallax, acrylic material, connected animations, responsive, adaptive, acrylic brush, reveal highlight, depth effects, motion design, scale, responsive layouts",
    prompt: "Use Microsoft's Fluent Design System, acrylic material backgrounds (tint + noise + blur + exclusion blend), reveal highlight on interactive elements (ambient light + border light), connected animations for page transitions, Mica material for windows (tinted wallpaper blur), depth layering with z-axis motion, responsive scaling across devices, light mode focus with subtle shadows, motion design with purposeful animations, context menus with reveal effect, command bar with acrylic background",
    fonts: {
      heading: "Poppins",
      body: "Inter",
      chineseHeading: "MiSans",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "现代通用的无衬线，与Fluent Design的现代连接感呼应"
    }
  },
  {
    id: 14,
    name: "Atomic Design",
    description: "Component-based design system, atoms to organisms",
    vibe: "Systematic, scalable, modular, organized",
    keywords: "Atomic, components, atoms, molecules, organisms, templates, pages, systematic, scalable, modular, organized, design tokens, pattern library, reusable, consistent, hierarchy, Brad Frost, component-driven, Storybook, design system, documentation, variants, states",
    prompt: "Use atomic design methodology (atoms > molecules > organisms > templates > pages), systematic component hierarchy, design tokens for colors/typography/spacing, reusable component patterns, consistent naming conventions, documented component states (default, hover, active, disabled), variant-driven design, organized pattern library, component-driven development, Storybook-style documentation, systematic spacing scale, consistent border radius tokens, button size variants",
    fonts: {
      heading: "Inter",
      body: "Inter",
      chineseHeading: "MiSans",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "规范化的无衬线，与原子化设计系统的系统化、模块化特征一致"
    }
  },
  {
    id: 15,
    name: "Neo-Brutalism",
    description: "Modern brutalism with a twist, bold but refined",
    vibe: "Bold, contemporary, refined chaos",
    keywords: "Neo-brutalism, modern brutalism, bold, refined, contemporary, thick borders, vibrant colors, soft touches, playful, modern, high contrast, rounded corners mixed with sharp, colorful shadows, Memphis influence, pop art, graphic design, editorial, magazine, Gen Z, TikTok aesthetic",
    prompt: "Use thick solid borders (2-3px) with vibrant colors, mix of rounded and sharp corners, colorful drop shadows (offset 4px in brand colors), bold typography with playful sizing, high contrast color blocks, editorial magazine layouts, Memphis design influence, pop art color combinations, graphic poster aesthetic, Gen Z friendly, TikTok-style visual energy, combine brutalist rawness with modern polish, use white space strategically, asymmetric layouts",
    fonts: {
      heading: "Poppins",
      body: "Inter",
      chineseHeading: "得意黑",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "得意黑的粗体几何感与新粗野主义的活力边框形成张力"
    }
  },
  {
    id: 16,
    name: "Claymorphism",
    description: "Soft 3D inflated shapes, bouncy, playful depth",
    vibe: "Playful, bouncy, soft, inflated",
    keywords: "Claymorphism, clay, 3D, inflated, soft, bouncy, playful, rounded, bulbous, soft UI, cartoon, playful, bubbly, smooth, gradients, soft shadows, elastic, spring physics, playful interactions, tactile, squishy, rounded corners, candy colors, youthful",
    prompt: "Use soft inflated 3D shapes with inner and outer shadows creating depth, bulbous rounded corners (20-30px), soft pastel color gradients, bouncy spring physics on interactions, playful cartoon-like aesthetic, smooth transitions with elastic easing, candy color palette (pastel pinks, blues, yellows), soft drop shadows with spread, tactile button feel with press states, squishy card effects, youthful energy, rounded pill shapes, avoid sharp corners entirely",
    fonts: {
      heading: "Fredoka",
      body: "Nunito",
      chineseHeading: "悠哉",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "圆润 bubbly 的字形完美呼应粘土拟态的膨胀柔软感"
    }
  },
  {
    id: 17,
    name: "Skeuomorphism (Classic)",
    description: "Real-world textures, leather, metal, wood, glossy",
    vibe: "Realistic, tactile, textured, rich",
    keywords: "Skeuomorphism, realistic, textures, leather, metal, wood, glossy, rich, tactile, realistic, iOS 6, Aqua, realistic buttons, stitched leather, linen, brushed metal, physical metaphors, depth, shine, reflections, gradients for depth, realistic shadows, embossed text",
    prompt: "Use realistic textures (leather, metal, wood, linen), glossy reflections on surfaces, realistic button styling with depth and shine, stitched leather patterns, brushed metal gradients, physical metaphors for all UI elements, rich gradients for 3D depth, realistic drop shadows, embossed/debossed text effects, Aqua-style reflections, iOS 6-era aesthetics, rich detailed textures, photorealistic icons, warm color tones",
    fonts: {
      heading: "Poppins",
      body: "Open Sans",
      chineseHeading: "霞鹜文楷",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "文楷的人文质感与拟物风格的皮革金属等真实材质纹理相得益彰"
    }
  },
  {
    id: 18,
    name: "Flat Design 2.0",
    description: "Flat with subtle depth, modern, clean",
    vibe: "Clean, modern, functional, approachable",
    keywords: "Flat 2.0, modern flat, subtle depth, shadows, clean, modern, functional, approachable, long shadows, material, cards, elevation, minimal gradients, micro-interactions, simple illustrations, bold colors, geometric, friendly, approachable, readable, content-first",
    prompt: "Use mostly flat colors with subtle depth cues, long shadows (45-degree angle), minimal gradients, card-based layouts with subtle elevation, simple geometric illustrations, bold friendly colors, content-first hierarchy, micro-interactions for feedback, approachable typography, clean sans-serif fonts, generous whitespace, functional simplicity with modern polish, subtle border-radius (4-8px), no heavy textures or realistic effects",
    fonts: {
      heading: "Inter",
      body: "Inter",
      chineseHeading: "MiSans",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "干净现代的无衬线，与扁平设计2.0的简洁现代感一致"
    }
  },
  {
    id: 19,
    name: "Line Art / Illustrative",
    description: "Hand-drawn lines, sketch style, friendly illustrations",
    vibe: "Handmade, friendly, artistic, approachable",
    keywords: "Line art, illustrative, hand-drawn, sketch, friendly, artistic, approachable, doodle, cartoon, playful, organic, imperfect, ink, pencil, watercolor, illustrations, icons, sketchy, rough edges, human, warm, creative, imaginative",
    prompt: "Use hand-drawn line art style, sketchy borders with slight imperfection, doodle-style illustrations, organic irregular shapes, ink/pencil line aesthetics, watercolor wash backgrounds, playful sketch-style icons, rough edges on UI elements, warm approachable feel, creative imaginative layouts, imperfect geometric shapes, hand-lettered typography feel, human touch in every element, avoid perfect geometric precision",
    fonts: {
      heading: "Patrick Hand",
      body: "Kalam",
      chineseHeading: "小赖体",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "小赖体的手写不完美感与线描插画的素描风格完美呼应"
    }
  },
  {
    id: 20,
    name: "Japanese Zen / Wabi-Sabi",
    description: "Imperfection, natural materials, muted tones",
    vibe: "Serene, natural, imperfect, timeless",
    keywords: "Japanese, zen, wabi-sabi, imperfection, natural, muted, serene, timeless, minimal, organic, handmade, paper, ink, stone, bamboo, earth tones, asymmetry, simplicity, breathing room, contemplative, quiet, restrained, elegant, traditional",
    prompt: "Use muted earth tones (beige, stone, bamboo, ink), embrace imperfection and organic asymmetry, natural material textures (paper, stone, bamboo), generous breathing room between elements, contemplative quiet layouts, restrained color palette (max 3 colors), traditional Japanese typography influence, ink wash aesthetics, stone garden-inspired spacing, imperfect handcrafted feel, simple asymmetrical compositions, natural light and shadow, quiet elegance over loud statements",
    fonts: {
      heading: "Cormorant",
      body: "Montserrat",
      chineseHeading: "霞鹜文楷",
      chineseBody: "MiSans",
      fallback: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif",
      note: "文楷与MiSans的组合，呼应侘寂美学对传统、自然与手写质感的追求"
    }
  }
];

const guofengColors = [
  {
    id: 101,
    name: "故宫红墙",
    category: "guofeng",
    description: "紫禁城经典配色",
    colors: {
      primary: "#C41E3A",
      onPrimary: "#FFFFFF",
      secondary: "#D4AF37",
      onSecondary: "#1A1A1A",
      accent: "#1A1A1A",
      onAccent: "#FFFFFF",
      background: "#F5F0E8",
      foreground: "#1A1A1A",
      card: "#FFFFFF",
      cardForeground: "#1A1A1A",
      muted: "#E8E0D0",
      mutedForeground: "#8B7355",
      border: "#D4C5B0",
      destructive: "#8B0000",
      onDestructive: "#FFFFFF",
      ring: "#C41E3A"
    },
    notes: "故宫红墙金瓦，庄重大气"
  },
  {
    id: 102,
    name: "敦煌飞天",
    category: "guofeng",
    description: "敦煌壁画经典配色",
    colors: {
      primary: "#7B68EE",
      onPrimary: "#FFFFFF",
      secondary: "#FF6B6B",
      onSecondary: "#FFFFFF",
      accent: "#FFD93D",
      onAccent: "#1A1A1A",
      background: "#1A0A2E",
      foreground: "#F0E6FF",
      card: "#2D1B4E",
      cardForeground: "#F0E6FF",
      muted: "#3D2B5E",
      mutedForeground: "#A890C0",
      border: "#4D3B6E",
      destructive: "#FF4444",
      onDestructive: "#FFFFFF",
      ring: "#7B68EE"
    },
    notes: "石青、朱砂、藤黄，神秘绚丽"
  },
  {
    id: 103,
    name: "水墨江南",
    category: "guofeng",
    description: "江南水乡淡雅配色",
    colors: {
      primary: "#4A6741",
      onPrimary: "#FFFFFF",
      secondary: "#8B7355",
      onSecondary: "#FFFFFF",
      accent: "#C4A77D",
      onAccent: "#1A1A1A",
      background: "#F8F4ED",
      foreground: "#2C3E2D",
      card: "#FFFFFF",
      cardForeground: "#2C3E2D",
      muted: "#E8E2D6",
      mutedForeground: "#7A8B7B",
      border: "#D4C9B9",
      destructive: "#8B4513",
      onDestructive: "#FFFFFF",
      ring: "#4A6741"
    },
    notes: "黛瓦青砖，烟雨朦胧"
  },
  {
    id: 104,
    name: "青花瓷韵",
    category: "guofeng",
    description: "青花瓷经典蓝白配色",
    colors: {
      primary: "#1E3A5F",
      onPrimary: "#FFFFFF",
      secondary: "#4A90A4",
      onSecondary: "#FFFFFF",
      accent: "#C41E3A",
      onAccent: "#FFFFFF",
      background: "#F0F4F8",
      foreground: "#1A1A2E",
      card: "#FFFFFF",
      cardForeground: "#1A1A2E",
      muted: "#E0E8F0",
      mutedForeground: "#6B8CAE",
      border: "#C8D6E5",
      destructive: "#8B0000",
      onDestructive: "#FFFFFF",
      ring: "#1E3A5F"
    },
    notes: "素胚勾勒出青花笔锋浓转淡"
  },
  {
    id: 105,
    name: "金秋桂香",
    category: "guofeng",
    description: "秋天暖色调配色",
    colors: {
      primary: "#D4A574",
      onPrimary: "#1A1A1A",
      secondary: "#8B6914",
      onSecondary: "#FFFFFF",
      accent: "#C04000",
      onAccent: "#FFFFFF",
      background: "#FFF8F0",
      foreground: "#4A3728",
      card: "#FFFFFF",
      cardForeground: "#4A3728",
      muted: "#F5E6D0",
      mutedForeground: "#8B7355",
      border: "#E8D5C0",
      destructive: "#8B0000",
      onDestructive: "#FFFFFF",
      ring: "#D4A574"
    },
    notes: "桂子月中落，天香云外飘"
  },
  {
    id: 106,
    name: "朱砂印章",
    category: "guofeng",
    description: "中国传统印章配色",
    colors: {
      primary: "#C73E3A",
      onPrimary: "#FFFFFF",
      secondary: "#8B0000",
      onSecondary: "#FFFFFF",
      accent: "#D4AF37",
      onAccent: "#1A1A1A",
      background: "#FFFBF0",
      foreground: "#3A1C1C",
      card: "#FFFFFF",
      cardForeground: "#3A1C1C",
      muted: "#F5E6DC",
      mutedForeground: "#8B5A5A",
      border: "#E0C8B8",
      destructive: "#660000",
      onDestructive: "#FFFFFF",
      ring: "#C73E3A"
    },
    notes: "朱红印泥，庄重典雅"
  },
  {
    id: 107,
    name: "竹林清风",
    category: "guofeng",
    description: "竹林清雅配色",
    colors: {
      primary: "#5B8C5A",
      onPrimary: "#FFFFFF",
      secondary: "#7BA05B",
      onSecondary: "#FFFFFF",
      accent: "#D4A574",
      onAccent: "#1A1A1A",
      background: "#F5F8F0",
      foreground: "#2D3B2D",
      card: "#FFFFFF",
      cardForeground: "#2D3B2D",
      muted: "#E8F0E0",
      mutedForeground: "#6B8E6B",
      border: "#D0E0C8",
      destructive: "#8B4513",
      onDestructive: "#FFFFFF",
      ring: "#5B8C5A"
    },
    notes: "独坐幽篁里，弹琴复长啸"
  },
  {
    id: 108,
    name: "牡丹富贵",
    category: "guofeng",
    description: "牡丹花艳丽配色",
    colors: {
      primary: "#E03C8A",
      onPrimary: "#FFFFFF",
      secondary: "#9B59B6",
      onSecondary: "#FFFFFF",
      accent: "#F1C40F",
      onAccent: "#1A1A1A",
      background: "#FFF5F8",
      foreground: "#4A1A3A",
      card: "#FFFFFF",
      cardForeground: "#4A1A3A",
      muted: "#F8E8F0",
      mutedForeground: "#A07090",
      border: "#F0D0E0",
      destructive: "#8B004B",
      onDestructive: "#FFFFFF",
      ring: "#E03C8A"
    },
    notes: "唯有牡丹真国色，花开时节动京城"
  },
  {
    id: 109,
    name: "三星堆青铜",
    category: "guofeng",
    description: "古蜀文明青铜器与黄金面具配色",
    colors: {
      primary: "#4A7C59",
      onPrimary: "#FFFFFF",
      secondary: "#B8860B",
      onSecondary: "#FFFFFF",
      accent: "#D4C5A9",
      onAccent: "#1A1A1A",
      background: "#0F0E0D",
      foreground: "#E8DDD0",
      card: "#1E2822",
      cardForeground: "#E8DDD0",
      muted: "#2A3830",
      mutedForeground: "#7A8E7E",
      border: "#3A4A40",
      destructive: "#8B0000",
      onDestructive: "#FFFFFF",
      ring: "#4A7C59"
    },
    notes: "沉睡三千年，一醒惊天下。青铜绿锈与黄金面具的神秘交响"
  },
  {
    id: 110,
    name: "桃李青春",
    category: "guofeng",
    description: "春日桃李，青春明丽配色",
    colors: {
      primary: "#F4A7B9",
      onPrimary: "#FFFFFF",
      secondary: "#87CEEB",
      onSecondary: "#1A1A1A",
      accent: "#98D8C8",
      onAccent: "#1A1A1A",
      background: "#FFF8F0",
      foreground: "#2D2D2D",
      card: "#FFFFFF",
      cardForeground: "#2D2D2D",
      muted: "#F0E6E0",
      mutedForeground: "#8A7A70",
      border: "#E8D8D0",
      destructive: "#E74C3C",
      onDestructive: "#FFFFFF",
      ring: "#F4A7B9"
    },
    notes: "桃之夭夭，灼灼其华。春日里最明媚的一抹青春"
  },
  {
    id: 111,
    name: "三星堆·现代",
    category: "guofeng",
    description: "三星堆青铜与黄金的现代活力演绎",
    colors: {
      primary: "#35A668",
      onPrimary: "#FFFFFF",
      secondary: "#FFD54F",
      onSecondary: "#1A1A1A",
      accent: "#FF8C42",
      onAccent: "#FFFFFF",
      background: "#FAFAF5",
      foreground: "#1E2A22",
      card: "#FFFFFF",
      cardForeground: "#1E2A22",
      muted: "#E8F0EB",
      mutedForeground: "#4A6B5A",
      border: "#B8C8C0",
      destructive: "#E63946",
      onDestructive: "#FFFFFF",
      ring: "#35A668"
    },
    notes: "青铜绿的现代新生，黄金面具的耀眼变奏。古蜀文明遇上当代活力。"
  },
  {
    id: 112,
    name: "千里江山",
    category: "guofeng",
    description: "北宋王希孟《千里江山图》经典青绿山水配色",
    colors: {
      primary: "#1B4D6B",
      onPrimary: "#FFFFFF",
      secondary: "#3A8B6E",
      onSecondary: "#FFFFFF",
      accent: "#C9A84C",
      onAccent: "#1A1A1A",
      background: "#F0E8D0",
      foreground: "#2C2C2C",
      card: "#FAF6EB",
      cardForeground: "#2C2C2C",
      muted: "#E8DCC8",
      mutedForeground: "#7A6B55",
      border: "#D4C9A8",
      destructive: "#B42828",
      onDestructive: "#FFFFFF",
      ring: "#1B4D6B"
    },
    notes: "石青石绿，泥金勾线，绢本底色。青绿山水之极致，上青下绿，金碧辉煌。"
  }
];

const colorSchemes = [
  {
    id: 1,
    name: "SaaS (General)",
    colors: {
      primary: "#2563EB",
      onPrimary: "#FFFFFF",
      secondary: "#3B82F6",
      onSecondary: "#FFFFFF",
      accent: "#EA580C",
      onAccent: "#FFFFFF",
      background: "#F8FAFC",
      foreground: "#1E293B",
      card: "#FFFFFF",
      cardForeground: "#1E293B",
      muted: "#E9EFF8",
      mutedForeground: "#64748B",
      border: "#E2E8F0",
      destructive: "#DC2626",
      onDestructive: "#FFFFFF",
      ring: "#2563EB"
    },
    notes: "Trust blue + orange CTA contrast"
  },
  {
    id: 2,
    name: "Micro SaaS",
    colors: {
      primary: "#6366F1",
      onPrimary: "#FFFFFF",
      secondary: "#818CF8",
      onSecondary: "#0F172A",
      accent: "#059669",
      onAccent: "#FFFFFF",
      background: "#F5F3FF",
      foreground: "#1E1B4B",
      card: "#FFFFFF",
      cardForeground: "#1E1B4B",
      muted: "#EBEFF9",
      mutedForeground: "#64748B",
      border: "#E0E7FF",
      destructive: "#DC2626",
      onDestructive: "#FFFFFF",
      ring: "#6366F1"
    },
    notes: "Indigo primary + emerald CTA"
  },
  {
    id: 3,
    name: "Healthcare",
    colors: {
      primary: "#0D9488",
      onPrimary: "#FFFFFF",
      secondary: "#14B8A6",
      onSecondary: "#FFFFFF",
      accent: "#F59E0B",
      onAccent: "#FFFFFF",
      background: "#F0FDFA",
      foreground: "#134E4A",
      card: "#FFFFFF",
      cardForeground: "#134E4A",
      muted: "#E0F2FE",
      mutedForeground: "#5F8A8A",
      border: "#CCFBF1",
      destructive: "#EF4444",
      onDestructive: "#FFFFFF",
      ring: "#0D9488"
    },
    notes: "Teal medical trust + amber urgency"
  },
  {
    id: 4,
    name: "Fintech/Crypto",
    colors: {
      primary: "#F59E0B",
      onPrimary: "#0F172A",
      secondary: "#FBBF24",
      onSecondary: "#0F172A",
      accent: "#8B5CF6",
      onAccent: "#FFFFFF",
      background: "#0F172A",
      foreground: "#F8FAFC",
      card: "#222735",
      cardForeground: "#F8FAFC",
      muted: "#272F42",
      mutedForeground: "#94A3B8",
      border: "#334155",
      destructive: "#EF4444",
      onDestructive: "#FFFFFF",
      ring: "#F59E0B"
    },
    notes: "Gold trust + purple tech"
  },
  {
    id: 5,
    name: "Social Media",
    colors: {
      primary: "#E11D48",
      onPrimary: "#FFFFFF",
      secondary: "#FB7185",
      onSecondary: "#0F172A",
      accent: "#2563EB",
      onAccent: "#FFFFFF",
      background: "#FFF1F2",
      foreground: "#881337",
      card: "#FFFFFF",
      cardForeground: "#881337",
      muted: "#F0ECF2",
      mutedForeground: "#64748B",
      border: "#FECDD3",
      destructive: "#DC2626",
      onDestructive: "#FFFFFF",
      ring: "#E11D48"
    },
    notes: "Vibrant rose + engagement blue"
  },
  {
    id: 6,
    name: "AI/Chatbot",
    colors: {
      primary: "#7C3AED",
      onPrimary: "#FFFFFF",
      secondary: "#A78BFA",
      onSecondary: "#0F172A",
      accent: "#0891B2",
      onAccent: "#FFFFFF",
      background: "#FAF5FF",
      foreground: "#1E1B4B",
      card: "#FFFFFF",
      cardForeground: "#1E1B4B",
      muted: "#ECEEF9",
      mutedForeground: "#64748B",
      border: "#DDD6FE",
      destructive: "#DC2626",
      onDestructive: "#FFFFFF",
      ring: "#7C3AED"
    },
    notes: "AI purple + cyan interactions"
  },
  {
    id: 7,
    name: "E-commerce",
    colors: {
      primary: "#059669",
      onPrimary: "#FFFFFF",
      secondary: "#10B981",
      onSecondary: "#FFFFFF",
      accent: "#F59E0B",
      onAccent: "#FFFFFF",
      background: "#F0FDF4",
      foreground: "#064E3B",
      card: "#FFFFFF",
      cardForeground: "#064E3B",
      muted: "#DCFCE7",
      mutedForeground: "#059669",
      border: "#BBF7D0",
      destructive: "#DC2626",
      onDestructive: "#FFFFFF",
      ring: "#059669"
    },
    notes: "Green conversion + gold urgency"
  },
  {
    id: 8,
    name: "Education",
    colors: {
      primary: "#0369A1",
      onPrimary: "#FFFFFF",
      secondary: "#38BDF8",
      onSecondary: "#0F172A",
      accent: "#F97316",
      onAccent: "#FFFFFF",
      background: "#F0F9FF",
      foreground: "#0C4A6E",
      card: "#FFFFFF",
      cardForeground: "#0C4A6E",
      muted: "#E0F2FE",
      mutedForeground: "#38BDF8",
      border: "#BAE6FD",
      destructive: "#DC2626",
      onDestructive: "#FFFFFF",
      ring: "#0369A1"
    },
    notes: "Blue knowledge + orange energy"
  },
  {
    id: 9,
    name: "Candy Pop",
    category: "creative",
    colors: {
      primary: "#FF6B9D",
      onPrimary: "#FFFFFF",
      secondary: "#4ECDC4",
      onSecondary: "#FFFFFF",
      accent: "#FFE66D",
      onAccent: "#1A1A1A",
      background: "#FFF5F7",
      foreground: "#2D2D2D",
      card: "#FFFFFF",
      cardForeground: "#2D2D2D",
      muted: "#F0E8F0",
      mutedForeground: "#8A7A8A",
      border: "#E8D8E0",
      destructive: "#E74C3C",
      onDestructive: "#FFFFFF",
      ring: "#FF6B9D"
    },
    notes: "Macaron pink + mint + lemon yellow, sweet and energetic youth vibe"
  },
  {
    id: 10,
    name: "Summer Vibes",
    category: "creative",
    colors: {
      primary: "#FF8C42",
      onPrimary: "#FFFFFF",
      secondary: "#00B4D8",
      onSecondary: "#FFFFFF",
      accent: "#FFBE0B",
      onAccent: "#1A1A1A",
      background: "#FFFDF5",
      foreground: "#1A1A1A",
      card: "#FFFFFF",
      cardForeground: "#1A1A1A",
      muted: "#F5F0E8",
      mutedForeground: "#7A7A6A",
      border: "#E8E0D0",
      destructive: "#D00000",
      onDestructive: "#FFFFFF",
      ring: "#FF8C42"
    },
    notes: "Tropical orange + ocean blue + sunshine yellow, beach party energy"
  },
  {
    id: 11,
    name: "Neon Night",
    category: "creative",
    colors: {
      primary: "#B829DD",
      onPrimary: "#FFFFFF",
      secondary: "#00F5D4",
      onSecondary: "#0F0F0F",
      accent: "#FF006E",
      onAccent: "#FFFFFF",
      background: "#0A0A0F",
      foreground: "#F0F0F5",
      card: "#141420",
      cardForeground: "#F0F0F5",
      muted: "#1E1E30",
      mutedForeground: "#7A7A8A",
      border: "#2A2A40",
      destructive: "#FF0040",
      onDestructive: "#FFFFFF",
      ring: "#B829DD"
    },
    notes: "Neon purple + cyan + hot pink on dark, party and nightlife energy"
  },
  {
    id: 12,
    name: "Street Sport",
    category: "creative",
    colors: {
      primary: "#E10600",
      onPrimary: "#FFFFFF",
      secondary: "#1A1A1A",
      onSecondary: "#FFFFFF",
      accent: "#FFD700",
      onAccent: "#1A1A1A",
      background: "#F5F5F5",
      foreground: "#1A1A1A",
      card: "#FFFFFF",
      cardForeground: "#1A1A1A",
      muted: "#E8E8E8",
      mutedForeground: "#6A6A6A",
      border: "#D0D0D0",
      destructive: "#FF0000",
      onDestructive: "#FFFFFF",
      ring: "#E10600"
    },
    notes: "Racing red + black + gold, bold athletic energy"
  }
];

const fontPairings = [
  {
    id: 1,
    name: "Classic Elegant",
    category: "Serif + Sans",
    heading: "Playfair Display",
    body: "Inter",
    mood: "elegant, luxury, sophisticated, timeless, premium, editorial",
    bestFor: "Luxury brands, fashion, spa, beauty, editorial, magazines, high-end e-commerce",
    googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }",
    notes: "High contrast between elegant heading and clean body. Perfect for luxury/premium."
  },
  {
    id: 2,
    name: "Modern Professional",
    category: "Sans + Sans",
    heading: "Poppins",
    body: "Open Sans",
    mood: "modern, professional, clean, corporate, friendly, approachable",
    bestFor: "SaaS, corporate sites, business apps, startups, professional services",
    googleFonts: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Open Sans', 'sans-serif'] }",
    notes: "Geometric Poppins for headings, humanist Open Sans for readability."
  },
  {
    id: 3,
    name: "Tech Startup",
    category: "Sans + Sans",
    heading: "Space Grotesk",
    body: "DM Sans",
    mood: "tech, startup, modern, innovative, bold, futuristic",
    bestFor: "Tech companies, startups, SaaS, developer tools, AI products",
    googleFonts: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { heading: ['Space Grotesk', 'sans-serif'], body: ['DM Sans', 'sans-serif'] }",
    notes: "Space Grotesk has unique character, DM Sans is highly readable."
  },
  {
    id: 4,
    name: "Minimal Swiss",
    category: "Sans + Sans",
    heading: "Inter",
    body: "Inter",
    mood: "minimal, clean, swiss, functional, neutral, professional",
    bestFor: "Dashboards, admin panels, documentation, enterprise apps, design systems",
    googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { sans: ['Inter', 'sans-serif'] }",
    notes: "Single font family with weight variations. Ultimate simplicity."
  },
  {
    id: 5,
    name: "Playful Creative",
    category: "Display + Sans",
    heading: "Fredoka",
    body: "Nunito",
    mood: "playful, friendly, fun, creative, warm, approachable",
    bestFor: "Children's apps, educational, gaming, creative tools, entertainment",
    googleFonts: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { heading: ['Fredoka', 'sans-serif'], body: ['Nunito', 'sans-serif'] }",
    notes: "Rounded, friendly fonts perfect for playful UIs."
  },
  {
    id: 6,
    name: "Developer Mono",
    category: "Mono + Sans",
    heading: "JetBrains Mono",
    body: "IBM Plex Sans",
    mood: "code, developer, technical, precise, functional, hacker",
    bestFor: "Developer tools, documentation, code editors, tech blogs, CLI apps",
    googleFonts: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { mono: ['JetBrains Mono', 'monospace'], sans: ['IBM Plex Sans', 'sans-serif'] }",
    notes: "JetBrains for code, IBM Plex for UI. Developer-focused."
  },
  {
    id: 7,
    name: "Retro Vintage",
    category: "Display + Serif",
    heading: "Abril Fatface",
    body: "Merriweather",
    mood: "retro, vintage, nostalgic, dramatic, decorative, bold",
    bestFor: "Vintage brands, breweries, restaurants, creative portfolios, posters",
    googleFonts: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:wght@300;400;700&display=swap",
    tailwindConfig: "fontFamily: { display: ['Abril Fatface', 'serif'], body: ['Merriweather', 'serif'] }",
    notes: "Abril Fatface for hero headlines only. High-impact vintage feel."
  },
  {
    id: 8,
    name: "Luxury Serif",
    category: "Serif + Sans",
    heading: "Cormorant",
    body: "Montserrat",
    mood: "luxury, high-end, fashion, elegant, refined, premium",
    bestFor: "Fashion brands, luxury e-commerce, jewelry, high-end services",
    googleFonts: "https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { serif: ['Cormorant', 'serif'], sans: ['Montserrat', 'sans-serif'] }",
    notes: "Cormorant's elegance with Montserrat's geometric precision."
  },
  {
    id: 9,
    name: "Crypto/Web3",
    category: "Sans + Sans",
    heading: "Orbitron",
    body: "Exo 2",
    mood: "crypto, web3, futuristic, tech, blockchain, digital",
    bestFor: "Crypto platforms, NFT, blockchain, web3, futuristic tech",
    googleFonts: "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { display: ['Orbitron', 'sans-serif'], body: ['Exo 2', 'sans-serif'] }",
    notes: "Orbitron for futuristic headers. Exo 2 for readable body."
  },
  {
    id: 10,
    name: "Chinese Traditional",
    category: "Serif + Sans",
    heading: "Noto Serif SC",
    body: "Noto Sans SC",
    mood: "chinese, traditional, elegant, cultural, multilingual, readable",
    bestFor: "Chinese sites, cultural content, traditional brands, calligraphy",
    googleFonts: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap",
    tailwindConfig: "fontFamily: { serif: ['Noto Serif SC', 'serif'], sans: ['Noto Sans SC', 'sans-serif'] }",
    notes: "Chinese traditional feel with excellent character support."
  }
];

const chineseFonts = [
  {
    id: 0,
    name: "MiSans",
    nameEn: "MiSans",
    category: "Sans-serif",
    style: "现代 / 简洁 / 小米",
    weights: [100, 200, 300, 400, 500, 600, 700],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://github.com/miui-misans/MiSans/blob/main/OFL.txt",
    source: "小米 / MIUI",
    cdn: "https://cdn.jsdelivr.net/npm/@chinese-fonts/misans@1.0.0/dist/MiSans/result.css",
    description: "小米公司开发的系统字体，专为屏幕显示优化。字形简洁现代，中宫舒展，可读性极佳。支持丰富的字重，适合各类UI场景。",
    bestFor: "系统UI、科技产品、现代网站、通用正文、移动端"
  },
  {
    id: 1,
    name: "Noto Sans SC",
    nameEn: "Noto Sans SC",
    category: "Sans-serif",
    style: "现代 / 通用 / 清晰",
    weights: [300, 400, 500, 700],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://scripts.sil.org/OFL",
    source: "Google Fonts / Adobe",
    googleFonts: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap",
    description: "思源黑体，Google与Adobe联合开发的开源泛中日韩字体。覆盖全面，字重丰富，是最通用的中文无衬线选择。",
    bestFor: "所有现代UI、系统界面、正文阅读、科技产品"
  },
  {
    id: 2,
    name: "Noto Serif SC",
    nameEn: "Noto Serif SC",
    category: "Serif",
    style: "传统 / 正式 / 优雅",
    weights: [400, 500, 600, 700],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://scripts.sil.org/OFL",
    source: "Google Fonts / Adobe",
    googleFonts: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap",
    description: "思源宋体，与思源黑体配套的开源宋体。笔画分明，结构严谨，适合传统、文化、正式场景。",
    bestFor: "文化内容、传统品牌、正式文档、编辑排版、国风设计"
  },
  {
    id: 3,
    name: "霞鹜文楷",
    nameEn: "LXGW WenKai",
    category: "Kai / Handwriting",
    style: "温润 / 人文 / 优雅",
    weights: [300, 400, 700],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://github.com/lxgw/LxgwWenKai/blob/main/LICENSE",
    source: "GitHub (lxgw)",
    cdn: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css",
    description: "基于Klee One改造的楷体风格开源字体。保留了手写楷书的温润质感，同时优化了屏幕显示效果。",
    bestFor: "阅读场景、文化产品、教育内容、极简设计、日式/禅意风格"
  },
  {
    id: 4,
    name: "得意黑",
    nameEn: "Smiley Sans",
    category: "Sans-serif / Geometric",
    style: "几何 / 现代 / 独特",
    weights: [400],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://github.com/atelier-anchor/smiley-sans/blob/main/LICENSE",
    source: "atelier-anchor",
    cdn: "https://cdn.jsdelivr.net/npm/@chinese-fonts/dyh@1.0.0/dist/SmileySans-Oblique/result.css",
    description: "一款几何感强烈的斜体无衬线中文字体。8°斜切角度，大弧度、窄字宽、高对比，极具现代感和辨识度。",
    bestFor: "标题展示、品牌设计、粗野主义、包豪斯、新粗野主义、科技感UI"
  },
  {
    id: 5,
    name: "悠哉",
    nameEn: "Yozai",
    category: "Rounded Sans",
    style: "圆润 / 活泼 / 友好",
    weights: [400],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://github.com/lxgw/yozai-font/blob/main/LICENSE",
    source: "GitHub (lxgw)",
    cdn: "https://cdn.jsdelivr.net/npm/@chinese-fonts/yzc@1.0.0/dist/Yozai-Regular/result.css",
    description: "基于Rounded MgenPlus的圆润中文字体。字形饱满圆润，给人亲切友好的感觉。",
    bestFor: "儿童产品、娱乐应用、粘土拟态、活泼风格、卡通UI"
  },
  {
    id: 6,
    name: "小赖体",
    nameEn: "Xiaolai",
    category: "Handwriting",
    style: "手写 / 可爱 / 不完美",
    weights: [400],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://github.com/lxgw/xiaolai-font/blob/main/LICENSE",
    source: "GitHub (lxgw)",
    cdn: "https://cdn.jsdelivr.net/npm/@chinese-fonts/xlx@1.0.0/dist/Xiaolai-Regular/result.css",
    description: "基于濑户字体补充的中文手写体。保留了手写的不完美感和随性气质。",
    bestFor: "线描插画、手绘风格、日记应用、创意产品、轻松氛围"
  },
  {
    id: 7,
    name: "钟齐志莽行书",
    nameEn: "Zongqi Zhimang Xingshu",
    category: "Calligraphy / Script",
    style: "行书 / 书法 / 古典",
    weights: [400],
    license: "SIL Open Font License 1.1",
    licenseUrl: "https://github.com/googlefonts/zong-qi-zhi-mang-xing-shu/blob/main/OFL.txt",
    source: "Google Fonts",
    googleFonts: "https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap",
    description: "基于书法家钟齐志莽的硬笔行书。流畅洒脱，带有传统书法的韵味。",
    bestFor: "国风设计、文化产品、装饰标题、传统节日、书法艺术展示"
  },
  {
    id: 8,
    name: "狸叶黑体",
    nameEn: "LeeeafHei",
    category: "Sans-serif",
    style: "现代 / 饱满 / 商业",
    weights: [400],
    license: "本地安装",
    source: "本地安装 / Windows Fonts",
    description: "一款现代感强烈的黑体字体，字面饱满，笔画简洁有力，适合标题展示和正文阅读。已安装于本机 Windows 字体目录。",
    bestFor: "品牌展示、标题设计、现代网站、商业海报、UI界面"
  }
];

const chineseFontPairings = [
  {
    id: 101,
    name: "现代通用",
    category: "无衬线 + 无衬线",
    heading: "MiSans",
    body: "MiSans",
    headingCss: "'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    bodyCss: "'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    mood: "现代、简洁、通用、清晰",
    bestFor: "系统UI、科技产品、通用网站、移动端、Dashboard",
    note: "同家族搭配，MiSans字重丰富，标题用Bold/Heavy，正文用Regular/Light"
  },
  {
    id: 102,
    name: "人文阅读",
    category: "楷体 + 无衬线",
    heading: "霞鹜文楷",
    body: "霞鹜文楷",
    headingCss: "'LXGW WenKai', 'Kaiti SC', 'STKaiti', serif",
    bodyCss: "'LXGW WenKai', 'Kaiti SC', 'STKaiti', serif",
    mood: "温润、人文、优雅、舒适",
    bestFor: "阅读类应用、博客、电子书、文化产品、教育平台",
    note: "全文使用霞鹜文楷，温润书卷气贯穿始终"
  },
  {
    id: 103,
    name: "展示强调",
    category: "几何展示 + 无衬线",
    heading: "得意黑",
    body: "得意黑",
    headingCss: "'Smiley Sans Oblique', 'MiSans', 'PingFang SC', sans-serif",
    bodyCss: "'Smiley Sans Oblique', 'MiSans', 'PingFang SC', sans-serif",
    mood: "几何、现代、独特、醒目",
    bestFor: "品牌展示、粗野主义、包豪斯、科技产品、海报",
    note: "得意黑8°斜切几何感极强，标题正文统一使用"
  },
  {
    id: 104,
    name: "国风典雅",
    category: "宋体 + 无衬线",
    heading: "思源宋体",
    body: "思源宋体",
    headingCss: "'Noto Serif SC', 'Songti SC', 'SimSun', serif",
    bodyCss: "'Noto Serif SC', 'Songti SC', 'SimSun', serif",
    mood: "典雅、传统、庄重、文化",
    bestFor: "国风网站、文化品牌、博物馆、编辑排版、传统节日",
    note: "思源宋体全文使用，古典庄重气质统一"
  },
  {
    id: 105,
    name: "圆润活泼",
    category: "圆体 + 无衬线",
    heading: "悠哉",
    body: "悠哉",
    headingCss: "'Yozai', 'MiSans', 'PingFang SC', sans-serif",
    bodyCss: "'Yozai', 'MiSans', 'PingFang SC', sans-serif",
    mood: "圆润、活泼、友好、童趣",
    bestFor: "儿童应用、游戏、娱乐、教育、创意工具",
    note: "悠哉全文使用，字形饱满圆润，亲切友好"
  },
  {
    id: 106,
    name: "手写创意",
    category: "手写 + 无衬线",
    heading: "小赖体",
    body: "小赖体",
    headingCss: "'Xiaolai', 'LXGW WenKai', 'MiSans', sans-serif",
    bodyCss: "'Xiaolai', 'LXGW WenKai', 'MiSans', sans-serif",
    mood: "手写、不完美、随性、温暖",
    bestFor: "日记应用、手绘插画、创意产品、轻松氛围、个人博客",
    note: "小赖体全文使用，保留手写的不完美感和温暖"
  },
  {
    id: 107,
    name: "极简留白",
    category: "细无衬线 + 细无衬线",
    heading: "MiSans Light",
    body: "MiSans Light",
    headingCss: "'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    bodyCss: "'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    mood: "极简、轻盈、呼吸、克制",
    bestFor: "极简主义设计、留白风格、Apple风格、画廊展示",
    note: "Light字重建构的克制美感，需要足够的字号和留白支撑"
  },
  {
    id: 108,
    name: "全人文传统",
    category: "楷体",
    heading: "霞鹜文楷",
    body: "霞鹜文楷",
    headingCss: "'LXGW WenKai', 'Kaiti SC', 'STKaiti', serif",
    bodyCss: "'LXGW WenKai', 'Kaiti SC', 'STKaiti', serif",
    mood: "传统、人文、书卷、古典",
    bestFor: "传统文化网站、古籍、书法、茶道、禅意、国风设计",
    note: "全文霞鹜文楷，纯粹传统人文气息"
  },
  {
    id: 109,
    name: "现代展示",
    category: "本地黑体 + 无衬线",
    heading: "狸叶黑体",
    body: "MiSans",
    headingCss: "'LeeeafHeiLocal', 'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    bodyCss: "'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    mood: "现代、饱满、醒目、商业",
    bestFor: "品牌官网、产品展示、商业海报、现代UI、标题设计",
    note: "狸叶黑体标题醒目饱满，MiSans正文清晰易读，适合现代商业场景"
  },
  {
    id: 110,
    name: "全狸叶黑体",
    category: "本地黑体",
    heading: "狸叶黑体",
    body: "狸叶黑体",
    headingCss: "'LeeeafHeiLocal', 'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    bodyCss: "'LeeeafHeiLocal', 'MiSans', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    mood: "统一、现代、饱满、简洁",
    bestFor: "海报设计、标题展示、品牌视觉、极简排版",
    note: "全文使用狸叶黑体，字面饱满统一，视觉冲击力强"
  }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { uiStyles, guofengColors, colorSchemes, fontPairings, chineseFonts, chineseFontPairings };
}

