// ============================================
// 主题合集（Collections）数据
// 按场景/情绪/工作流组织的风格组合
// ============================================

const collections = [
  {
    id: 1,
    name: "国风特辑",
    nameEn: "Guofeng Collection",
    description: "从故宫红墙到千里江山，将中国传统美学融入数字界面。庄重、典雅、意境深远。",
    emoji: "🏮",
    tags: ["国风", "文化", "典雅"],
    config: {
      styleId: 20,         // Japanese Zen / Wabi-Sabi（最接近东方禅意）
      colorSchemeId: 101,  // 故宫红墙
      fontPairingId: 7,    // Retro Vintage (Cormorant)
      chineseFontPairingId: 4, // 霞鹜文楷
      artEffectId: 15,     // 山水墨韵
      effectEnabled: true
    }
  },
  {
    id: 2,
    name: "赛博朋克之夜",
    nameEn: "Cyberpunk Night",
    description: "霓虹闪烁、数据流淌。高对比霓虹色在 OLED 纯黑背景上的极致张力。",
    emoji: "🌃",
    tags: ["科幻", "霓虹", "未来"],
    config: {
      styleId: 9,          // Cyberpunk
      colorSchemeId: 11,   // Neon Night
      fontPairingId: 3,    // Tech Startup (Space Grotesk)
      chineseFontPairingId: 2, // 得意黑
      artEffectId: 7,      // 酸性设计
      effectEnabled: true
    }
  },
  {
    id: 3,
    name: "极简工作流",
    nameEn: "Minimalist Workflow",
    description: "少即是多。极致留白、清晰层级、无干扰的阅读与操作体验。",
    emoji: "🍃",
    tags: ["极简", "效率", "专业"],
    config: {
      styleId: 8,          // Minimalist / White Space
      colorSchemeId: 1,    // SaaS (General)
      fontPairingId: 4,    // Minimal Swiss (Inter)
      chineseFontPairingId: 7, // MiSans Light
      artEffectId: 15,     // 山水墨韵（轻强度）
      effectEnabled: false
    }
  },
  {
    id: 4,
    name: "Z 世代潮牌",
    nameEn: "Gen Z Street",
    description: "大胆、 playful、高能量。新粗野主义与波普艺术的碰撞，拒绝无聊。",
    emoji: "🔥",
    tags: ["潮牌", "活力", "年轻"],
    config: {
      styleId: 15,         // Neo-Brutalism
      colorSchemeId: 12,   // Street Sport
      fontPairingId: 5,    // Playful Creative (Fredoka)
      chineseFontPairingId: 2, // 得意黑
      artEffectId: 1,      // 波普艺术
      effectEnabled: true
    }
  },
  {
    id: 5,
    name: "深夜编辑器",
    nameEn: "Midnight Code",
    description: "为开发者打造的沉浸式深色主题。终端绿、霓虹紫、精确排版。",
    emoji: "🌙",
    tags: ["开发", "深色", "技术"],
    config: {
      styleId: 4,          // Dark Mode
      colorSchemeId: 4,    // Fintech/Crypto
      fontPairingId: 6,    // Developer Mono
      chineseFontPairingId: 5, // MiSans
      artEffectId: 6,      // 故障艺术
      effectEnabled: true
    }
  },
  {
    id: 6,
    name: "孟菲斯派对",
    nameEn: "Memphis Party",
    description: "80 年代的后现代狂欢。高饱和几何、黑色圆点、波浪线，拒绝严肃。",
    emoji: "🎉",
    tags: [" playful", "几何", "复古"],
    config: {
      styleId: 6,          // Bauhaus
      colorSchemeId: 9,    // Candy Pop
      fontPairingId: 5,    // Playful Creative
      chineseFontPairingId: 8, // 悠哉
      artEffectId: 13,     // 孟菲斯
      effectEnabled: true
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { collections };
}
