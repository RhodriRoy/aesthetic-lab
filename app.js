        // ============================================
        // 统一配置注册表 - 单点注册，全局同步
        // ============================================
        const CONFIG_REGISTRY = {
            styles: {
                1:  { className: 'style-neubrutalism',  radius: '2px',  shadow: '4px 4px 0px 0px rgba(0,0,0,1)', border: '3px solid #000' },
                2:  { className: 'style-glassmorphism',   radius: '16px', shadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.1)' },
                3:  { className: 'style-neomorphism',     radius: '16px', shadow: '8px 8px 16px #b8b9be, -8px -8px 16px #ffffff', border: '0px solid' },
                4:  { className: 'style-dark-mode',       radius: '8px',  shadow: '0 4px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' },
                5:  { className: 'style-gradient-mesh',   radius: '24px', shadow: '0 20px 60px rgba(0,0,0,0.15)', border: '0px solid' },
                6:  { className: 'style-bauhaus',         radius: '0px',  shadow: 'none', border: '0px solid' },
                7:  { className: 'style-swiss',           radius: '0px',  shadow: 'none', border: '1px solid #000' },
                8:  { className: 'style-minimalist',      radius: '8px',  shadow: 'none', border: '0px solid' },
                9:  { className: 'style-cyberpunk',       radius: '0px',  shadow: '0 0 20px rgba(0,255,255,0.5)', border: '1px solid #0ff' },
                10: { className: 'style-art-deco',        radius: '0px',  shadow: 'none', border: '2px solid #000' },
                11: { className: 'style-material3',       radius: '16px', shadow: '0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)', border: '0px solid' },
                12: { className: 'style-ios',             radius: '12px', shadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' },
                13: { className: 'style-fluent',          radius: '8px',  shadow: '0 4px 12px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.08)' },
                14: { className: 'style-atomic',          radius: '4px',  shadow: 'none', border: '1px solid #e2e8f0' },
                15: { className: 'style-neo-brutalism',   radius: '4px',  shadow: '6px 6px 0px 0px #2563EB', border: '3px solid #000' },
                16: { className: 'style-claymorphism',    radius: '24px', shadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)', border: '0px solid' },
                17: { className: 'style-skeuomorphism',   radius: '8px',  shadow: '0 4px 6px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.1)' },
                18: { className: 'style-flat2',           radius: '6px',  shadow: '4px 4px 0px 0px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' },
                19: { className: 'style-line-art',        radius: '2px',  shadow: '2px 2px 0px 0px #1E293B', border: '2px solid #1E293B' },
                20: { className: 'style-zen',             radius: '2px',  shadow: 'none', border: '1px solid #d4c5b0' }
            },
            effects: {
                // fontMap 运行时从 artEffects 动态生成（CSS 中 body.art-effect-N 已硬编码字体栈并带 !important 覆盖，
                // 此处仅需同步 Google Fonts 加载 URL，消除与 art-effects-data.js 的重复维护）
                fontMap: (() => {
                    const map = {};
                    if (typeof artEffects !== 'undefined') {
                        artEffects.forEach(effect => {
                            map[effect.id] = {
                                url: effect.fonts?.en?.url || null,
                                heading: effect.fonts?.en?.css || "'Inter',sans-serif",
                                body: effect.fonts?.en?.css || "'Inter',sans-serif"
                            };
                        });
                    }
                    return map;
                })(),
                overlayVars: {
                    1:  { '--border-width': '3px', '--border-radius': '0px', '--shadow': '4px 4px 0px 0px #000' },
                    2:  { '--border-width': '2px', '--border-radius': '2px', '--shadow': 'none' },
                    3:  { '--border-width': '2px', '--border-radius': '4px', '--shadow': '2px 2px 0px 0px rgba(0,0,0,0.2)' },
                    4:  { '--border-width': '3px', '--border-radius': '0px', '--shadow': 'none' },
                    5:  { '--border-width': '2px', '--border-radius': '0px', '--shadow': 'none' },
                    6:  { '--border-width': '1px', '--border-radius': '0px', '--shadow': 'none' },
                    7:  { '--border-width': '1px', '--border-radius': '0px', '--shadow': '0 0 20px rgba(57,255,20,0.3)' },
                    8:  { '--border-width': '1px', '--border-radius': '0px', '--shadow': 'none' },
                    9:  { '--border-width': '1px', '--border-radius': '0px', '--shadow': 'none' },
                    10: { '--border-width': '1px', '--border-radius': '2px', '--shadow': '3px 3px 0px 0px rgba(0,0,0,0.15)' },
                    11: { '--border-width': '1px', '--border-radius': '8px', '--shadow': '0 0 20px rgba(184,41,221,0.3)' },
                    12: { '--border-width': '2px', '--border-radius': '0px', '--shadow': '4px 4px 0px rgba(1,205,254,0.3)' },
                    13: { '--border-width': '3px', '--border-radius': '0px', '--shadow': '6px 6px 0px #FFBE0B' },
                    14: { '--border-width': '3px', '--border-radius': '0px', '--shadow': '6px 6px 0px 0px #000' },
                    15: { '--border-width': '1px', '--border-radius': '2px', '--shadow': '0 8px 32px rgba(0,0,0,0.06)' },
                    16: { '--border-width': '1px', '--border-radius': '4px', '--shadow': '0 12px 40px rgba(14,107,168,0.15)' },
                    17: { '--border-width': '4px', '--border-radius': '0px', '--shadow': 'none' },
                    18: { '--border-width': '2px', '--border-radius': '0px', '--shadow': '0 0 20px rgba(201,162,39,0.15)' }
                },
                presets: {
                    1:  { intensity: 0.3, saturation: 0.8 },
                    2:  { saturation: 0.4, texture: 0.2 },
                    3:  { misregistration: 0.15, grain: 0.3, colorShift: 0 },
                    4:  { rawness: 0.5 },
                    5:  { grid: 0.15 },
                    6:  { density: 0.3 },
                    7:  { density: 0.5, gloss: 0.5 },
                    8:  { grid: 0.2 },
                    9:  { rebellion: 0.3, distortion: 0.15 },
                    10: { messiness: 0.3, aging: 0.15 },
                    11: { flowSpeed: 0.3, chrome: 0.4 },
                    12: { scanlines: 0.2, saturation: 0.8 },
                    13: { patternDensity: 0.3, vibrancy: 0.8 },
                    14: { dynamism: 0.5, contrast: 0.7, montage: 0.4 },
                    15: { depth: 0.5, wash: 0.5, mist: 0.4 },
                    16: { depth: 0.6, brilliance: 0.5, mist: 0.3 },
                    17: { gridDensity: 0.5, colorRatio: 0.4, asymmetry: 0.6 },
                    18: { patina: 0.55, goldLeaf: 0.45, mystery: 0.35 }
                }
            },
            previewModes: ['components', 'login', 'dashboard', 'landing', 'form', 'table', 'settings', 'empty', 'poster']
        };

        // ============================================
        // 主题管理器
        // ============================================
        const ThemeManager = {
            mode: 'auto', // 'light' | 'dark' | 'auto'
            init() {
                const saved = localStorage.getItem('uiuxProMaxTheme');
                if (saved && ['light','dark','auto'].includes(saved)) this.mode = saved;
                this.apply();
                // Real-time system theme listener for auto mode
                if (window.matchMedia) {
                    const mq = window.matchMedia('(prefers-color-scheme: dark)');
                    mq.addEventListener('change', () => {
                        if (this.mode === 'auto') this.apply();
                    });
                }
            },
            cycle() {
                const modes = ['auto', 'light', 'dark'];
                const idx = modes.indexOf(this.mode);
                this.mode = modes[(idx + 1) % modes.length];
                localStorage.setItem('uiuxProMaxTheme', this.mode);
                this.apply();
                showToast(`主题模式: ${this.mode === 'auto' ? '自动' : this.mode === 'light' ? '浅色' : '深色'}`);
            },
            apply() {
                const body = document.body;
                body.classList.remove('force-light', 'force-dark');
                if (this.mode === 'light') {
                    body.classList.add('force-light');
                    body.classList.remove('dark-mode-active');
                } else if (this.mode === 'dark') {
                    body.classList.add('force-dark');
                    body.classList.add('dark-mode-active');
                } else {
                    // auto: rely on applyColorScheme's luminance detection
                    const bg = currentColorScheme && currentColorScheme.colors ? currentColorScheme.colors.background : '#F8FAFC';
                    const lum = getLuminance ? getLuminance(bg) : 0.95;
                    if (lum < 0.35) body.classList.add('dark-mode-active');
                    else body.classList.remove('dark-mode-active');
                }
            },
            getIcon() {
                return this.mode === 'auto' ? '自动' : this.mode === 'light' ? '浅色' : '深色';
            }
        };

        // ============================================
        // 历史管理器
        // ============================================
        const HistoryManager = {
            stack: [],
            index: -1,
            maxSize: 20,
            canUndo() { return this.index > 0; },
            canRedo() { return this.index < this.stack.length - 1; },
            push(snapshot) {
                // Remove any redo entries
                if (this.index < this.stack.length - 1) {
                    this.stack = this.stack.slice(0, this.index + 1);
                }
                this.stack.push(JSON.parse(JSON.stringify(snapshot)));
                if (this.stack.length > this.maxSize) {
                    this.stack.shift();
                } else {
                    this.index++;
                }
                this.updateUI();
            },
            undo() {
                if (!this.canUndo()) return;
                this.index--;
                return this.stack[this.index];
            },
            redo() {
                if (!this.canRedo()) return;
                this.index++;
                return this.stack[this.index];
            },
            updateUI() {
                const undoBtn = document.getElementById('history-undo-btn');
                const redoBtn = document.getElementById('history-redo-btn');
                if (undoBtn) undoBtn.disabled = !this.canUndo();
                if (redoBtn) redoBtn.disabled = !this.canRedo();
            }
        };

        // ============================================
        // 导出模块
        // ============================================
        const Exporter = {
            tailwind() {
                const cssToJsArray = (cssFontStr) => {
                    return cssFontStr.split(',').map(s => {
                        const name = s.trim().replace(/^['"]|['"]$/g, '');
                        return `"${name}"`;
                    }).join(', ');
                };
                const c = currentColorScheme.colors;
                return `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: '${c.primary}',\n        secondary: '${c.secondary}',\n        accent: '${c.accent}',\n        background: '${c.background}',\n        foreground: '${c.foreground}',\n        card: '${c.card}',\n        'card-foreground': '${c.cardForeground}',\n        muted: '${c.muted}',\n        'muted-foreground': '${c.mutedForeground}',\n        border: '${c.border}',\n        destructive: '${c.destructive}',\n        ring: '${c.ring}',\n      },\n      fontFamily: {\n        heading: ['${currentFontPairing.heading}', 'sans-serif'],\n        body: ['${currentFontPairing.body}', 'sans-serif'],\n        mono: ['JetBrains Mono', 'monospace'],\n        'cn-heading': [${cssToJsArray(currentChineseFontPairing.headingCss)}],\n        'cn-body': [${cssToJsArray(currentChineseFontPairing.bodyCss)}],\n      },\n    },\n  },\n}`;
            },
            cssVariables() {
                const c = currentColorScheme.colors;
                return `:root {\n  --primary: ${c.primary};\n  --on-primary: ${c.onPrimary};\n  --secondary: ${c.secondary};\n  --on-secondary: ${c.onSecondary};\n  --accent: ${c.accent};\n  --on-accent: ${c.onAccent};\n  --background: ${c.background};\n  --foreground: ${c.foreground};\n  --card: ${c.card};\n  --card-foreground: ${c.cardForeground};\n  --muted: ${c.muted};\n  --muted-foreground: ${c.mutedForeground};\n  --border: ${c.border};\n  --destructive: ${c.destructive};\n  --on-destructive: ${c.onDestructive};\n  --ring: ${c.ring};\n  --font-heading: ${currentFontPairing.heading}, sans-serif;\n  --font-body: ${currentFontPairing.body}, sans-serif;\n}`;
            },
            figmaTokens() {
                const c = currentColorScheme.colors;
                return JSON.stringify({
                    "color": {
                        "primary": { "value": c.primary, "type": "color" },
                        "secondary": { "value": c.secondary, "type": "color" },
                        "accent": { "value": c.accent, "type": "color" },
                        "background": { "value": c.background, "type": "color" },
                        "foreground": { "value": c.foreground, "type": "color" },
                        "card": { "value": c.card, "type": "color" },
                        "muted": { "value": c.muted, "type": "color" },
                        "border": { "value": c.border, "type": "color" },
                        "destructive": { "value": c.destructive, "type": "color" },
                        "ring": { "value": c.ring, "type": "color" }
                    },
                    "font": {
                        "heading": { "value": currentFontPairing.heading, "type": "fontFamily" },
                        "body": { "value": currentFontPairing.body, "type": "fontFamily" }
                    }
                }, null, 2);
            },
            swiftUI() {
                const c = currentColorScheme.colors;
                return `import SwiftUI\n\nstruct AppColors {\n    static let primary = Color(hex: "${c.primary}")\n    static let secondary = Color(hex: "${c.secondary}")\n    static let accent = Color(hex: "${c.accent}")\n    static let background = Color(hex: "${c.background}")\n    static let foreground = Color(hex: "${c.foreground}")\n    static let card = Color(hex: "${c.card}")\n    static let muted = Color(hex: "${c.muted}")\n    static let border = Color(hex: "${c.border}")\n    static let destructive = Color(hex: "${c.destructive}")\n    static let ring = Color(hex: "${c.ring}")\n}`;
            },
            compose() {
                const c = currentColorScheme.colors;
                return `val AppColors = lightColorScheme(\n    primary = Color(0xFF${c.primary.slice(1)}),\n    secondary = Color(0xFF${c.secondary.slice(1)}),\n    background = Color(0xFF${c.background.slice(1)}),\n    surface = Color(0xFF${c.card.slice(1)}),\n    onPrimary = Color(0xFF${c.onPrimary.slice(1)}),\n    onSecondary = Color(0xFF${c.onSecondary.slice(1)}),\n    onBackground = Color(0xFF${c.foreground.slice(1)}),\n    onSurface = Color(0xFF${c.cardForeground.slice(1)}),\n    error = Color(0xFF${c.destructive.slice(1)}),\n)`;
            }
        };

        // ============================================
        // URL状态同步
        // ============================================
        const URLState = {
            encode() {
                const state = {
                    s: currentStyle.id,
                    c: currentColorScheme.id,
                    f: currentFontPairing.id,
                    cf: currentChineseFontPairing.id,
                    e: currentArtEffect.id,
                    en: effectEnabled ? 1 : 0,
                    pi: currentPaletteIndex,
                    p: currentPreviewMode,
                    t: activeTab
                };
                return btoa(JSON.stringify(state)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            },
            decode(hash) {
                try {
                    const json = atob(hash.replace(/-/g, '+').replace(/_/g, '/'));
                    return JSON.parse(json);
                } catch (e) { return null; }
            },
            push() {
                const hash = this.encode();
                history.replaceState(null, '', '#' + hash);
            },
            load() {
                const hash = location.hash.slice(1);
                if (!hash) return null;
                return this.decode(hash);
            }
        };

        // ============================================
        // 原始数据映射（向后兼容）
        // ============================================
        const stylePreviewVars = {};
        const styleClassMap = {};
        Object.entries(CONFIG_REGISTRY.styles).forEach(([id, cfg]) => {
            stylePreviewVars[id] = { radius: cfg.radius, shadow: cfg.shadow, border: cfg.border };
            styleClassMap[id] = cfg.className;
        });

        // State
        let currentStyle = uiStyles[0];
        let currentColorScheme = colorSchemes[0];
        let currentFontPairing = fontPairings[0];
        let currentChineseFontPairing = chineseFontPairings[0];
        let activeTab = 'styles';
        let currentPreviewMode = 'components';
        let favorites = [];
        let filterFavMode = { styles: false, colors: false, fonts: false };
        let currentArtEffect = artEffects[0];
        let effectEnabled = false;
        let artEffectOverrideActive = false;
        let currentPaletteIndex = 0;

        // Utility: debounce
        function debounce(fn, delay) {
            let timer = null;
            return function(...args) {
                clearTimeout(timer);
                timer = setTimeout(() => fn.apply(this, args), delay);
            };
        }

        // State persistence
        function saveState() {
            try {
            const state = {
                version: 1,
                baseline: {
                    styleId: currentStyle.id,
                    colorSchemeId: currentColorScheme.id,
                    fontPairingId: currentFontPairing.id,
                    chineseFontPairingId: currentChineseFontPairing.id,
                    previewMode: currentPreviewMode
                },
                effect: {
                    effectId: currentArtEffect.id,
                    params: currentArtEffect && currentArtEffect._paramValues ? currentArtEffect._paramValues : null,
                    enabled: effectEnabled,
                    paletteIndex: currentPaletteIndex
                },
                recipes: favorites,
                theme: ThemeManager.mode
            };
            localStorage.setItem('uiuxProMaxState', JSON.stringify(state));
            URLState.push();
            } catch (e) {
                if (e.name === 'QuotaExceededError') {
                    showToast('存储空间不足，无法保存状态');
                }
            }
        }

        function loadState() {
            try {
                // Try URL state first (for sharing)
                const urlState = URLState.load();
                if (urlState) {
                    if (urlState.s) { const s = uiStyles.find(x => x.id === urlState.s); if (s) currentStyle = s; }
                    if (urlState.c) { const c = colorSchemes.find(x => x.id === urlState.c) || guofengColors.find(x => x.id === urlState.c); if (c) currentColorScheme = c; }
                    if (urlState.f) { const f = fontPairings.find(x => x.id === urlState.f); if (f) currentFontPairing = f; }
                    if (urlState.cf) { const cf = chineseFontPairings.find(x => x.id === urlState.cf); if (cf) currentChineseFontPairing = cf; }
                    if (urlState.e) { const e = artEffects.find(x => x.id === urlState.e); if (e) currentArtEffect = e; }
                    if (urlState.en !== undefined) effectEnabled = !!urlState.en;
                    if (urlState.pi !== undefined) currentPaletteIndex = urlState.pi;
                    if (urlState.p && CONFIG_REGISTRY.previewModes.includes(urlState.p)) currentPreviewMode = urlState.p;
                    if (urlState.t) activeTab = urlState.t;
                    return true;
                }

                const raw = localStorage.getItem('uiuxProMaxState');
                if (!raw) return false;
                const state = JSON.parse(raw);
                // Version check: incompatible versions fall back to defaults
                if (state.version !== 1) return false;
                // New format with baseline/effect separation
                if (state.baseline) {
                    const b = state.baseline;
                    if (b.styleId) { const s = uiStyles.find(x => x.id === b.styleId); if (s) currentStyle = s; }
                    if (b.colorSchemeId) { const c = colorSchemes.find(x => x.id === b.colorSchemeId) || guofengColors.find(x => x.id === b.colorSchemeId); if (c) currentColorScheme = c; }
                    if (b.fontPairingId) { const f = fontPairings.find(x => x.id === b.fontPairingId); if (f) currentFontPairing = f; }
                    if (b.chineseFontPairingId) { const cf = chineseFontPairings.find(x => x.id === b.chineseFontPairingId); if (cf) currentChineseFontPairing = cf; }
                    if (b.previewMode) currentPreviewMode = b.previewMode;
                } else {
                    // Legacy format migration
                    if (state.styleId) { const s = uiStyles.find(x => x.id === state.styleId); if (s) currentStyle = s; }
                    if (state.colorSchemeId) { const c = colorSchemes.find(x => x.id === state.colorSchemeId) || guofengColors.find(x => x.id === state.colorSchemeId); if (c) currentColorScheme = c; }
                    if (state.fontPairingId) { const f = fontPairings.find(x => x.id === state.fontPairingId); if (f) currentFontPairing = f; }
                    if (state.chineseFontPairingId) { const cf = chineseFontPairings.find(x => x.id === state.chineseFontPairingId); if (cf) currentChineseFontPairing = cf; }
                    if (state.previewMode) currentPreviewMode = state.previewMode;
                }
                if (state.effect) {
                    if (state.effect.effectId) { const e = artEffects.find(x => x.id === state.effect.effectId); if (e) currentArtEffect = e; }
                    if (state.effect.params && currentArtEffect) currentArtEffect._paramValues = state.effect.params;
                    if (typeof state.effect.enabled === 'boolean') effectEnabled = state.effect.enabled;
                    if (typeof state.effect.paletteIndex === 'number') currentPaletteIndex = state.effect.paletteIndex;
                } else if (state.effectId) {
                    // Legacy effect state
                    const e = artEffects.find(x => x.id === state.effectId);
                    if (e) currentArtEffect = e;
                    if (state.effectParams && currentArtEffect) currentArtEffect._paramValues = state.effectParams;
                    if (typeof state.paletteIndex === 'number') currentPaletteIndex = state.paletteIndex;
                }
                if (Array.isArray(state.recipes)) favorites = state.recipes;
                else if (Array.isArray(state.favorites)) favorites = state.favorites;
                if (state.theme && typeof ThemeManager !== 'undefined') ThemeManager.mode = state.theme;
                return true;
            } catch (e) {
                return false;
            }
        }

        function resetState() {
            localStorage.removeItem('uiuxProMaxState');
            currentStyle = uiStyles[0];
            currentColorScheme = colorSchemes[0];
            currentFontPairing = fontPairings[0];
            currentChineseFontPairing = chineseFontPairings[0];
            currentArtEffect = artEffects[0];
            currentPreviewMode = 'components';
            favorites = [];
            artEffectOverrideActive = false;
            applyArtEffect(null);
            applyStyle(currentStyle.id);
            applyColorScheme(currentColorScheme);
            applyFontPairing(currentFontPairing.id);
            applyChineseFontPairing(currentChineseFontPairing.id);
            if (activeTab === 'preview') renderPreview();
            updateActiveCards();
            showToast('已重置为默认状态');
        }

        function resetToDefaults() {
            if (!confirm('确定要重置所有设置为默认状态吗？')) return;
            resetState();
            location.hash = '';
            saveState();
            renderStyles();
            renderColors();
            renderTypography();
            renderChineseTypography();
            renderFavorites();
            updateFavoriteBtn();
            HistoryManager.updateUI();
        }

        function copyShareLink() {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showToast('分享链接已复制！');
            }).catch(() => {
                showToast('复制失败，请手动复制地址栏链接');
            });
        }

        // Favorites
        function getComboKey() {
            return `${currentStyle.id}-${currentColorScheme.id}-${currentFontPairing.id}-${currentChineseFontPairing.id}-${currentArtEffect.id}`;
        }

        function isFavorite() {
            const key = getComboKey();
            return favorites.some(f => (typeof f === 'string' ? f : f.key) === key);
        }

        function toggleFavorite() {
            const key = getComboKey();
            const idx = favorites.findIndex(f => (typeof f === 'string' ? f : f.key) === key);
            if (idx >= 0) {
                favorites.splice(idx, 1);
                showToast('已取消收藏');
            } else {
                favorites.push({ key, name: `${currentStyle.name} + ${currentColorScheme.name}`, createdAt: Date.now() });
                showToast('已收藏当前组合，在「我的收藏」中可重命名');
            }
            saveState();
            updateFavoriteBtn();
            if (activeTab === 'favorites') renderFavorites();
        }

        function updateFavoriteBtn() {
            const btns = [document.getElementById('favorite-btn'), document.getElementById('global-favorite-btn')];
            btns.forEach(btn => {
                if (!btn) return;
                if (isFavorite()) {
                    btn.textContent = '★ 已收藏';
                    btn.classList.add('active');
                } else {
                    btn.textContent = btn.id === 'global-favorite-btn' ? '☆ 收藏' : '☆ 收藏组合';
                    btn.classList.remove('active');
                }
            });
        }

        // Random combo
        function randomCombo() {
            // Push current state to history before changing
            HistoryManager.push({ style: currentStyle.id, color: currentColorScheme.id, font: currentFontPairing.id, cnFont: currentChineseFontPairing.id, effect: currentArtEffect.id, effectEnabled, previewMode: currentPreviewMode });

            currentStyle = uiStyles[Math.floor(Math.random() * uiStyles.length)];
            const allColors = [...colorSchemes, ...guofengColors];
            currentColorScheme = allColors[Math.floor(Math.random() * allColors.length)];
            currentFontPairing = fontPairings[Math.floor(Math.random() * fontPairings.length)];
            currentChineseFontPairing = chineseFontPairings[Math.floor(Math.random() * chineseFontPairings.length)];
            currentArtEffect = artEffects[Math.floor(Math.random() * artEffects.length)];
            currentPaletteIndex = 0;
            // Respect user's previous effect toggle state instead of forcing it on
            applyStyle(currentStyle.id);
            applyColorScheme(currentColorScheme);
            applyFontPairing(currentFontPairing.id);
            applyChineseFontPairing(currentChineseFontPairing.id);
            applyArtEffect(currentArtEffect);
            if (activeTab === 'preview') renderPreview();
            updateActiveCards();
            updateFavoriteBtn();
            renderEffectStatusBar();
            saveState();
            showToast(`随机组合: ${currentStyle.name} + ${currentColorScheme.name}`);
        }

        function getFavIds(type) {
            const ids = new Set();
            favorites.forEach(item => {
                const key = typeof item === 'string' ? item : item.key;
                if (!key) return;
                const parts = key.split('-');
                if (parts.length >= 4) {
                    if (type === 'styles') ids.add(parseInt(parts[0]));
                    else if (type === 'colors') ids.add(parseInt(parts[1]));
                    else if (type === 'fonts') { ids.add(parseInt(parts[2])); ids.add(parseInt(parts[3])); }
                }
            });
            return ids;
        }

        function toggleFilterFav(type) {
            filterFavMode[type] = !filterFavMode[type];
            const btnId = type === 'styles' ? 'style-filter-fav' : type === 'colors' ? 'color-filter-fav' : 'font-filter-fav';
            const btn = document.getElementById(btnId);
            if (btn) {
                if (filterFavMode[type]) btn.classList.add('active');
                else btn.classList.remove('active');
            }
            if (type === 'styles') filterStyles();
            else if (type === 'colors') filterColors('all');
            else filterFonts();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            ThemeManager.init();
            const hasState = loadState();
            renderStyles();
            renderColors();
            renderTypography();
            renderChineseTypography();
            renderPreview();
            renderPrompts();
            renderFavorites();
            renderEffects();
            renderEffectCategoryFilters();
            applyStyle(currentStyle.id);
            applyColorScheme(currentColorScheme);
            applyFontPairing(currentFontPairing.id);
            applyChineseFontPairing(currentChineseFontPairing.id);
            if (hasState && effectEnabled && currentArtEffect) {
                applyArtEffect(currentArtEffect);
            } else {
                applyArtEffect(null);
            }
            updateEffectCurrentInfo();
            renderEffectFloatGrid();
            renderEffectFloatCategories();
            if (hasState && activeTab === 'preview') renderPreview();
            if (hasState && activeTab === 'effects') { renderEffects(); renderEffectCategoryFilters(); }
            setTimeout(updateFavoriteBtn, 0);
            HistoryManager.updateUI();
            // Update theme button icon
            const themeBtn = document.getElementById('theme-toggle-btn');
            if (themeBtn) themeBtn.textContent = ThemeManager.getIcon();
        });

        // Render functions
        function renderStyles(filter = '') {
            const grid = document.getElementById('styles-grid');
            let filtered = uiStyles;
            if (filter) {
                filtered = filtered.filter(s => 
                    s.name.toLowerCase().includes(filter.toLowerCase()) ||
                    s.keywords.toLowerCase().includes(filter.toLowerCase()) ||
                    s.description.toLowerCase().includes(filter.toLowerCase())
                );
            }
            if (filterFavMode.styles) {
                const favIds = getFavIds('styles');
                filtered = filtered.filter(s => favIds.has(s.id));
            }
            
            grid.innerHTML = filtered.map(style => {
                const pv = stylePreviewVars[style.id] || { radius: '8px', shadow: 'none', border: '1px solid var(--border)' };
                return `
                <div class="style-card card p-6 ${currentStyle.id === style.id ? 'active' : ''}" 
                     onclick="selectStyle(${style.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectStyle(${style.id});}" 
                     tabindex="0" role="button" aria-pressed="${currentStyle.id === style.id}" id="style-card-${style.id}">
                    <div class="mb-4 p-3 rounded-lg flex items-center justify-center gap-3" style="background-color: var(--muted);">
                        <div style="width: 28px; height: 28px; border-radius: ${pv.radius}; box-shadow: ${pv.shadow}; border: ${pv.border}; background-color: var(--card);"></div>
                        <div style="width: 40px; height: 20px; border-radius: ${pv.radius}; box-shadow: ${pv.shadow}; border: ${pv.border}; background-color: var(--primary);"></div>
                        <div style="width: 40px; height: 20px; border-radius: ${pv.radius}; box-shadow: ${pv.shadow}; border: ${pv.border}; background-color: var(--muted);"></div>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold">${style.name}</h3>
                        <span class="badge px-2 py-1 text-xs">#${style.id}</span>
                    </div>
                    <p class="text-sm mb-3" style="color: var(--muted-foreground);">${style.description}</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${style.keywords.split(', ').slice(0, 5).map(kw => 
                            `<span class="badge px-2 py-1 text-xs">${kw}</span>`
                        ).join('')}
                    </div>
                    <div class="text-sm" style="color: var(--muted-foreground);">
                        <span class="font-medium">氛围：</span>${style.vibe}
                    </div>
                </div>
                `;
            }).join('');
        }

        function renderColors(filter = 'all') {
            const grid = document.getElementById('colors-grid');
            const allSchemes = [...colorSchemes, ...guofengColors];
            
            let filtered = allSchemes;
            if (filter !== 'all') {
                const categoryMap = {
                    'tech': ['Fintech/Crypto', 'AI/Chatbot'],
                    'business': ['SaaS (General)', 'Micro SaaS', 'E-commerce'],
                    'creative': ['Social Media', 'Education', 'Healthcare', 'Candy Pop', 'Summer Vibes', 'Neon Night', 'Street Sport']
                };
                if (filter === 'guofeng') {
                    filtered = allSchemes.filter(s => s.category === 'guofeng');
                } else {
                    const names = categoryMap[filter] || [];
                    filtered = allSchemes.filter(s => names.includes(s.name));
                }
            }
            if (filterFavMode.colors) {
                const favIds = getFavIds('colors');
                filtered = filtered.filter(s => favIds.has(s.id));
            }
            
            grid.innerHTML = filtered.map(scheme => `
                <div class="style-card card p-6 ${currentColorScheme.id === scheme.id ? 'active' : ''}" 
                     onclick="selectColorScheme(${scheme.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectColorScheme(${scheme.id});}" 
                     tabindex="0" role="button" aria-pressed="${currentColorScheme.id === scheme.id}" id="color-card-${scheme.id}">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold">${scheme.name}</h3>
                        <span class="badge px-2 py-1 text-xs">${scheme.category === 'guofeng' ? '国风' : '#' + scheme.id}</span>
                    </div>
                    <p class="text-sm mb-3" style="color: var(--muted-foreground);">${scheme.description || scheme.notes}</p>
                    <div class="grid grid-cols-5 gap-2">
                        ${Object.entries(scheme.colors).map(([key, value]) => `
                            <div class="flex flex-col items-center">
                                <div class="color-swatch" style="background-color: ${value};" title="${key}: ${value}" aria-label="${key}: ${value}"></div>
                                <span class="text-xs mt-1 text-center" style="color: var(--muted-foreground);">${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        function renderTypography(filter = '') {
            const grid = document.getElementById('typography-grid');
            let filtered = fontPairings;
            if (filter) {
                filtered = filtered.filter(f => 
                    f.name.toLowerCase().includes(filter.toLowerCase()) ||
                    f.mood.toLowerCase().includes(filter.toLowerCase()) ||
                    f.bestFor.toLowerCase().includes(filter.toLowerCase())
                );
            }
            if (filterFavMode.fonts) {
                const favIds = getFavIds('fonts');
                filtered = filtered.filter(f => favIds.has(f.id));
            }
            
            grid.innerHTML = filtered.map(pairing => `
                <div class="style-card card p-6 ${currentFontPairing.id === pairing.id ? 'active' : ''}" 
                     onclick="selectFontPairing(${pairing.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectFontPairing(${pairing.id});}" 
                     tabindex="0" role="button" aria-pressed="${currentFontPairing.id === pairing.id}" id="font-card-${pairing.id}">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold">${pairing.name}</h3>
                        <span class="badge px-2 py-1 text-xs">${pairing.category}</span>
                    </div>
                    <div class="mb-4">
                        <div class="text-3xl mb-2" style="font-family: '${pairing.heading}', sans-serif;">
                            ${pairing.heading}
                        </div>
                        <div class="text-base" style="font-family: '${pairing.body}', sans-serif; color: var(--muted-foreground);">
                            ${pairing.body}
                        </div>
                    </div>
                    <div class="text-sm mb-3" style="color: var(--muted-foreground);">
                        <span class="font-medium">氛围：</span>${pairing.mood}
                    </div>
                    <div class="text-sm" style="color: var(--muted-foreground);">
                        <span class="font-medium">适用：</span>${pairing.bestFor}
                    </div>
                </div>
            `).join('');
        }

        function renderChineseTypography(filter = '') {
            const grid = document.getElementById('chinese-typography-grid');
            let filtered = chineseFontPairings;
            if (filter) {
                filtered = filtered.filter(f => 
                    f.name.toLowerCase().includes(filter.toLowerCase()) ||
                    f.mood.toLowerCase().includes(filter.toLowerCase()) ||
                    f.bestFor.toLowerCase().includes(filter.toLowerCase())
                );
            }
            if (filterFavMode.fonts) {
                const favIds = getFavIds('fonts');
                filtered = filtered.filter(f => favIds.has(f.id));
            }
            
            grid.innerHTML = filtered.map(pairing => `
                <div class="style-card card p-6 ${currentChineseFontPairing.id === pairing.id ? 'active' : ''}" 
                     onclick="selectChineseFontPairing(${pairing.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectChineseFontPairing(${pairing.id});}" 
                     tabindex="0" role="button" aria-pressed="${currentChineseFontPairing.id === pairing.id}" id="cn-font-card-${pairing.id}">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold">${pairing.name}</h3>
                        <span class="badge px-2 py-1 text-xs">${pairing.category}</span>
                    </div>
                    <div class="mb-4">
                        <div class="text-3xl mb-2" style="font-family: ${pairing.headingCss};">
                            ${pairing.heading}
                        </div>
                        <div class="text-base" style="font-family: ${pairing.bodyCss}; color: var(--muted-foreground);">
                            ${pairing.body}
                        </div>
                    </div>
                    <div class="text-sm mb-3" style="color: var(--muted-foreground);">
                        <span class="font-medium">氛围：</span>${pairing.mood}
                    </div>
                    <div class="text-sm" style="color: var(--muted-foreground);">
                        <span class="font-medium">适用：</span>${pairing.bestFor}
                    </div>
                    <div class="text-xs mt-3 pt-3" style="color: var(--muted-foreground); border-top: 1px solid var(--border);">
                        ${pairing.note}
                    </div>
                </div>
            `).join('');
        }

        function renderPreview() {
            if (currentPreviewMode === 'login') { renderLoginPreview(); return; }
            if (currentPreviewMode === 'dashboard') { renderDashboardPreview(); return; }
            if (currentPreviewMode === 'landing') { renderLandingPreview(); return; }
            if (currentPreviewMode === 'form') { renderFormPreview(); return; }
            if (currentPreviewMode === 'table') { renderTablePreview(); return; }
            if (currentPreviewMode === 'settings') { renderSettingsPreview(); return; }
            if (currentPreviewMode === 'empty') { renderEmptyPreview(); return; }
            if (currentPreviewMode === 'poster') { renderPosterPreview(); return; }
            renderComponentsPreview();
        }

        function renderComponentsPreview() {
            const container = document.getElementById('preview-container');
            const c = currentColorScheme.colors;
            const hexToRgba = (hex, alpha) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };
            
            container.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Left: Component Showcase -->
                    <div class="space-y-6">
                        <!-- 1. 基础交互组件 -->
                        <div class="card p-6">
                            <h3 class="text-2xl font-bold mb-4">基础交互组件</h3>
                            
                            <!-- Buttons -->
                            <div class="space-y-3 mb-6">
                                <h4 class="text-sm font-medium uppercase tracking-wider" style="color: var(--muted-foreground);">按钮矩阵</h4>
                                <div class="flex flex-wrap gap-3 items-center">
                                    <button class="btn-primary px-4 py-2 text-sm font-medium">主要</button>
                                    <button class="btn-secondary px-4 py-2 text-sm font-medium">次要</button>
                                    <button class="btn-accent px-4 py-2 text-sm font-medium">强调</button>
                                    <button class="btn-outline">边框</button>
                                    <button class="btn-ghost">幽灵</button>
                                    <button class="btn-primary btn-disabled px-4 py-2 text-sm font-medium" disabled>禁用</button>
                                </div>
                                <div class="flex flex-wrap gap-3 items-center">
                                    <button class="btn-primary px-3 py-1.5 text-xs font-medium">小尺寸</button>
                                    <button class="btn-primary px-4 py-2 text-sm font-medium">中尺寸</button>
                                    <button class="btn-primary px-6 py-3 text-base font-medium">大尺寸</button>
                                </div>
                            </div>

                            <!-- Form Controls -->
                            <div class="space-y-3 mb-6">
                                <h4 class="text-sm font-medium uppercase tracking-wider" style="color: var(--muted-foreground);">表单控件</h4>
                                <input type="text" class="input w-full px-4 py-2 text-sm" placeholder="请输入内容...">
                                <input type="text" class="input w-full px-4 py-2 text-sm" value="已输入的内容" style="border-color: var(--primary);">
                                <select class="select w-full">
                                    <option>下拉选择项一</option>
                                    <option>下拉选择项二</option>
                                    <option>下拉选择项三</option>
                                </select>
                                <div class="flex items-center gap-6 pt-2">
                                    <div class="flex items-center gap-2">
                                        <button type="button" class="toggle active" role="switch" aria-checked="true" tabindex="0" onclick="this.classList.toggle('active'); this.setAttribute('aria-checked', this.classList.contains('active'));"></button>
                                        <span class="text-sm">开关开启</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <button type="button" class="toggle" role="switch" aria-checked="false" tabindex="0" onclick="this.classList.toggle('active'); this.setAttribute('aria-checked', this.classList.contains('active'));"></button>
                                        <span class="text-sm">开关关闭</span>
                                    </div>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer">
                                        <input type="checkbox" checked class="w-4 h-4 accent-primary" style="accent-color: var(--primary);">
                                        复选框
                                    </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer">
                                        <input type="radio" name="preview-radio" checked class="w-4 h-4" style="accent-color: var(--primary);">
                                        单选
                                    </label>
                                </div>
                            </div>

                            <!-- Badges -->
                            <div class="space-y-3">
                                <h4 class="text-sm font-medium uppercase tracking-wider" style="color: var(--muted-foreground);">语义标签</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span class="badge px-3 py-1 text-sm">默认</span>
                                    <span class="badge px-3 py-1 text-sm" style="background-color: var(--primary); color: var(--on-primary);">主要</span>
                                    <span class="badge px-3 py-1 text-sm" style="background-color: var(--accent); color: var(--on-accent);">强调</span>
                                    <span class="badge px-3 py-1 text-sm" style="background-color: var(--destructive); color: var(--on-destructive);">危险</span>
                                    <span class="badge px-3 py-1 text-sm" style="background-color: ${c.secondary}; color: ${c.onSecondary};">信息</span>
                                    <span class="badge px-3 py-1 text-sm" style="background-color: ${hexToRgba(c.primary, 0.12)}; color: ${c.primary};">成功</span>
                                    <span class="badge px-3 py-1 text-sm" style="background-color: ${hexToRgba(c.accent, 0.12)}; color: ${c.accent};">警告</span>
                                </div>
                            </div>
                        </div>

                        <!-- 2. 数据与反馈 -->
                        <div class="card p-6">
                            <h3 class="text-2xl font-bold mb-4">数据与反馈</h3>
                            
                            <!-- Stat Cards -->
                            <div class="grid grid-cols-3 gap-4 mb-6">
                                <div class="p-4 rounded-lg" style="background-color: var(--muted);">
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">总收入</p>
                                    <p class="text-2xl font-bold" style="color: var(--foreground);">¥128,430</p>
                                    <p class="text-xs mt-1" style="color: var(--primary);">+12.5%</p>
                                </div>
                                <div class="p-4 rounded-lg" style="background-color: var(--muted);">
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">活跃用户</p>
                                    <p class="text-2xl font-bold" style="color: var(--foreground);">8,942</p>
                                    <p class="text-xs mt-1" style="color: var(--primary);">+5.2%</p>
                                </div>
                                <div class="p-4 rounded-lg" style="background-color: var(--muted);">
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">转化率</p>
                                    <p class="text-2xl font-bold" style="color: var(--foreground);">24.8%</p>
                                    <p class="text-xs mt-1" style="color: var(--destructive);">-1.3%</p>
                                </div>
                            </div>

                            <!-- Alerts -->
                            <div class="space-y-3 mb-6">
                                <h4 class="text-sm font-medium uppercase tracking-wider" style="color: var(--muted-foreground);">Alert 通知</h4>
                                <div class="alert" style="background-color: ${hexToRgba(c.secondary, 0.08)}; border-color: ${c.secondary}; color: ${c.secondary};">
                                    <strong>信息</strong> — 这是一条信息提示，用于展示次要颜色的应用效果。
                                </div>
                                <div class="alert" style="background-color: ${hexToRgba(c.primary, 0.08)}; border-color: ${c.primary}; color: ${c.primary};">
                                    <strong>成功</strong> — 操作已完成，数据已成功保存到服务器。
                                </div>
                                <div class="alert" style="background-color: ${hexToRgba(c.accent, 0.08)}; border-color: ${c.accent}; color: ${c.accent};">
                                    <strong>警告</strong> — 请注意，当前操作可能需要额外确认。
                                </div>
                                <div class="alert" style="background-color: ${hexToRgba(c.destructive, 0.08)}; border-color: ${c.destructive}; color: ${c.destructive};">
                                    <strong>错误</strong> — 连接超时，请检查网络设置后重试。
                                </div>
                            </div>

                            <!-- Progress & Steps -->
                            <div class="space-y-4">
                                <div>
                                    <div class="flex justify-between text-sm mb-2">
                                        <span style="color: var(--muted-foreground);">项目进度</span>
                                        <span class="font-medium">75%</span>
                                    </div>
                                    <div class="progress-track">
                                        <div class="progress-fill" style="width: 75%; background-color: var(--primary);"></div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="step-item">
                                        <div class="step-dot active"></div>
                                        <span class="text-xs" style="color: var(--foreground);">立项</span>
                                    </div>
                                    <div class="step-line active"></div>
                                    <div class="step-item">
                                        <div class="step-dot active"></div>
                                        <span class="text-xs" style="color: var(--foreground);">设计</span>
                                    </div>
                                    <div class="step-line active"></div>
                                    <div class="step-item">
                                        <div class="step-dot active"></div>
                                        <span class="text-xs" style="color: var(--foreground);">开发</span>
                                    </div>
                                    <div class="step-line"></div>
                                    <div class="step-item">
                                        <div class="step-dot"></div>
                                        <span class="text-xs" style="color: var(--muted-foreground);">上线</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 3. 排版长文本 -->
                        <div class="card p-6">
                            <h3 class="text-2xl font-bold mb-4">排版长文本</h3>
                            <div class="space-y-5">
                                <div>
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">Display</p>
                                    <p class="text-5xl font-bold" style="font-family: var(--font-heading);">Display 大标题</p>
                                </div>
                                <div>
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">H1 / Bold</p>
                                    <h1 class="text-4xl font-bold">H1 标题 Heading</h1>
                                </div>
                                <div>
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">H2 / SemiBold</p>
                                    <h2 class="text-3xl font-semibold">H2 副标题 Subheading</h2>
                                </div>
                                <div>
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">H3 / Medium</p>
                                    <h3 class="text-2xl font-medium">H3 小标题 Section Title</h3>
                                </div>
                                <div>
                                    <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">Body / Regular</p>
                                    <p class="text-base">正文文本 - 这是一段示例正文，展示了当前字体配对的正文效果。The quick brown fox jumps over the lazy dog. 良好的排版设计应该兼顾中英文混排时的字间距、行高与视觉节奏，确保长文本阅读体验的舒适度。</p>
                                </div>
                                <div class="flex gap-8">
                                    <div>
                                        <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">Small</p>
                                        <p class="text-sm">辅助说明文本，用于补充信息。</p>
                                    </div>
                                    <div>
                                        <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">Caption</p>
                                        <p class="text-xs">标注与图例文字，字号最小。</p>
                                    </div>
                                </div>
                                <div class="code-block p-4">
                                    <pre class="text-sm font-mono">// 代码块示例
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('UI/UX Pro Max'));</pre>
                                </div>
                                <div class="pt-4" style="border-top: 1px solid var(--border);">
                                    <h4 class="text-sm font-medium uppercase tracking-wider mb-3" style="color: var(--muted-foreground);">中文字体效果</h4>
                                    <p class="text-3xl font-bold mb-2" style="font-family: var(--font-cn-heading);">天地玄黄，宇宙洪荒</p>
                                    <p class="text-lg mb-3" style="font-family: var(--font-cn-heading);">日月盈昃，辰宿列张</p>
                                    <p class="text-base mb-3" style="font-family: var(--font-cn-body); line-height: 1.75;">落霞与孤鹜齐飞，秋水共长天一色。这是一段中文正文示例，展示当前中文字体在长文本阅读场景下的实际效果。好的中文字体应该具备清晰的可读性、舒适的字间距以及自然的笔画节奏。</p>
                                    <p class="text-sm" style="color: var(--muted-foreground);">当前中文字体: ${currentChineseFontPairing.name} — ${currentChineseFontPairing.heading}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Current Configuration -->
                    <div class="space-y-6">
                        <div class="card p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-2xl font-bold">当前配置</h3>
                                <div class="flex space-x-2">
                                    <button id="favorite-btn" onclick="toggleFavorite()" class="btn-outline px-3 py-1 text-sm">☆ 收藏组合</button>
                                    <button onclick="resetState()" class="btn-ghost px-3 py-1 text-sm">重置</button>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <div>
                                    <h4 class="text-sm font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">风格</h4>
                                    <div class="flex items-center space-x-3">
                                        <span class="text-lg font-bold">${currentStyle.name}</span>
                                        <span class="badge px-2 py-1 text-xs">#${currentStyle.id}</span>
                                    </div>
                                    <p class="text-sm mt-1" style="color: var(--muted-foreground);">${currentStyle.description}</p>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">配色方案</h4>
                                    <div class="flex items-center space-x-3">
                                        <span class="text-lg font-bold">${currentColorScheme.name}</span>
                                        <span class="badge px-2 py-1 text-xs">${currentColorScheme.category === 'guofeng' ? '国风' : '#' + currentColorScheme.id}</span>
                                    </div>
                                    <p class="text-sm mt-1" style="color: var(--muted-foreground);">${currentColorScheme.notes}</p>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">英文字体</h4>
                                    <div class="flex items-center space-x-3">
                                        <span class="text-lg font-bold">${currentFontPairing.name}</span>
                                        <span class="badge px-2 py-1 text-xs">${currentFontPairing.category}</span>
                                    </div>
                                    <p class="text-sm mt-1" style="color: var(--muted-foreground);">${currentFontPairing.heading} + ${currentFontPairing.body}</p>
                                </div>

                                <div>
                                    <h4 class="text-sm font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">中文字体</h4>
                                    <div class="flex items-center space-x-3">
                                        <span class="text-lg font-bold">${currentChineseFontPairing.name}</span>
                                        <span class="badge px-2 py-1 text-xs">${currentChineseFontPairing.category}</span>
                                    </div>
                                    <p class="text-sm mt-1" style="color: var(--muted-foreground);">${currentChineseFontPairing.heading}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Color Palette Grouped -->
                        <div class="card p-6">
                            <h3 class="text-2xl font-bold mb-4">调色板</h3>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="text-xs font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">Brand Colors</h4>
                                    <div class="grid grid-cols-4 gap-2">
                                        ${['primary','secondary','accent','ring'].map(key => `
                                            <div class="flex flex-col items-center p-2 rounded-lg" style="background-color: var(--muted);">
                                                <div class="w-10 h-10 rounded-lg mb-1" style="background-color: ${c[key]}; border: 2px solid var(--border);"></div>
                                                <span class="text-xs font-medium capitalize">${key}</span>
                                                <span class="text-xs font-mono" style="color: var(--muted-foreground);">${c[key]}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <div>
                                    <h4 class="text-xs font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">Surface Colors</h4>
                                    <div class="grid grid-cols-4 gap-2">
                                        ${['background','card','muted','border'].map(key => `
                                            <div class="flex flex-col items-center p-2 rounded-lg" style="background-color: var(--muted);">
                                                <div class="w-10 h-10 rounded-lg mb-1" style="background-color: ${c[key]}; border: 2px solid var(--border);"></div>
                                                <span class="text-xs font-medium capitalize">${key}</span>
                                                <span class="text-xs font-mono" style="color: var(--muted-foreground);">${c[key]}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <div>
                                    <h4 class="text-xs font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">Text Colors</h4>
                                    <div class="grid grid-cols-3 gap-2">
                                        ${['foreground','cardForeground','mutedForeground'].map(key => `
                                            <div class="flex flex-col items-center p-2 rounded-lg" style="background-color: var(--muted);">
                                                <div class="w-10 h-10 rounded-lg mb-1" style="background-color: ${c[key]}; border: 2px solid var(--border);"></div>
                                                <span class="text-xs font-medium capitalize">${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                <span class="text-xs font-mono" style="color: var(--muted-foreground);">${c[key]}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <div>
                                    <h4 class="text-xs font-medium uppercase tracking-wider mb-2" style="color: var(--muted-foreground);">Feedback</h4>
                                    <div class="grid grid-cols-2 gap-2">
                                        ${['destructive','onDestructive'].map(key => `
                                            <div class="flex flex-col items-center p-2 rounded-lg" style="background-color: var(--muted);">
                                                <div class="w-10 h-10 rounded-lg mb-1" style="background-color: ${c[key]}; border: 2px solid var(--border);"></div>
                                                <span class="text-xs font-medium capitalize">${key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                <span class="text-xs font-mono" style="color: var(--muted-foreground);">${c[key]}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Code Export -->
                        <div class="card p-6">
                            <h3 class="text-2xl font-bold mb-4">导出代码</h3>
                            <div class="flex gap-2 mb-3 flex-wrap" id="export-format-btns">
                                <button class="filter-btn active" id="export-btn-tailwind" onclick="switchExportFormat('tailwind')">Tailwind</button>
                                <button class="filter-btn" id="export-btn-css" onclick="switchExportFormat('css')">CSS Variables</button>
                                <button class="filter-btn" id="export-btn-figma" onclick="switchExportFormat('figma')">Figma Tokens</button>
                                <button class="filter-btn" id="export-btn-swift" onclick="switchExportFormat('swift')">SwiftUI</button>
                                <button class="filter-btn" id="export-btn-compose" onclick="switchExportFormat('compose')">Compose</button>
                            </div>
                            <div class="code-block p-4 overflow-x-auto" id="export-code-block">
                                <pre>${generateConfigCode()}</pre>
                            </div>
                            <button onclick="copyExportCode()" class="btn-primary mt-4 px-4 py-2 text-sm">复制代码</button>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderLoginPreview() {
            const container = document.getElementById('preview-container');
            container.innerHTML = `
                <div class="flex items-center justify-center py-12 px-4" style="min-height: 600px;">
                    <div class="card w-full max-w-md p-8">
                        <div class="text-center mb-8">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-lg" style="background-color: var(--primary);"></div>
                            <h2 class="text-2xl font-bold" style="color: var(--foreground);">欢迎回来</h2>
                            <p class="text-sm mt-2" style="color: var(--muted-foreground);">登录您的账户以继续</p>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">邮箱地址</label>
                                <input type="email" class="input w-full px-4 py-2 text-sm" placeholder="you@example.com">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">密码</label>
                                <input type="password" class="input w-full px-4 py-2 text-sm" placeholder="••••••••">
                            </div>
                            <div class="flex items-center justify-between">
                                <label class="flex items-center gap-2 text-sm cursor-pointer" style="color: var(--muted-foreground);">
                                    <input type="checkbox" class="w-4 h-4" style="accent-color: var(--primary);">
                                    记住我
                                </label>
                                <a href="#" class="text-sm" style="color: var(--primary);">忘记密码？</a>
                            </div>
                            <button class="btn-primary w-full px-4 py-2 text-sm font-medium">登录</button>
                            <div class="text-center text-sm" style="color: var(--muted-foreground);">
                                还没有账户？ <a href="#" style="color: var(--primary);">立即注册</a>
                            </div>
                        </div>
                        <div class="mt-6 pt-6" style="border-top: 1px solid var(--border);">
                            <p class="text-xs text-center mb-3" style="color: var(--muted-foreground);">或通过以下方式登录</p>
                            <div class="flex gap-3">
                                <button class="btn-outline flex-1 px-4 py-2 text-sm">Google</button>
                                <button class="btn-outline flex-1 px-4 py-2 text-sm">GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderDashboardPreview() {
            const container = document.getElementById('preview-container');
            container.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <!-- Mobile sidebar toggle -->
                    <div class="lg:hidden col-span-1">
                        <button type="button" class="btn-outline px-4 py-2 text-sm mb-2" onclick="this.nextElementSibling.classList.toggle('hidden')">☰ 菜单</button>
                        <div class="hidden card p-4 space-y-2">
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="background-color: var(--primary); color: var(--on-primary);">
                                <span class="text-sm font-medium">仪表盘</span>
                            </div>
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="color: var(--muted-foreground);">
                                <span class="text-sm">数据分析</span>
                            </div>
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="color: var(--muted-foreground);">
                                <span class="text-sm">用户管理</span>
                            </div>
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="color: var(--muted-foreground);">
                                <span class="text-sm">设置</span>
                            </div>
                        </div>
                    </div>
                    <!-- Sidebar -->
                    <div class="hidden lg:block lg:col-span-1">
                        <div class="card p-4 space-y-2">
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="background-color: var(--primary); color: var(--on-primary);">
                                <span class="text-sm font-medium">仪表盘</span>
                            </div>
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="color: var(--muted-foreground);">
                                <span class="text-sm">数据分析</span>
                            </div>
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="color: var(--muted-foreground);">
                                <span class="text-sm">用户管理</span>
                            </div>
                            <div class="flex items-center gap-3 px-3 py-2 rounded-lg" style="color: var(--muted-foreground);">
                                <span class="text-sm">设置</span>
                            </div>
                        </div>
                    </div>
                    <!-- Main -->
                    <div class="lg:col-span-4 space-y-6">
                        <!-- Stats -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="card p-4">
                                <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">总收入</p>
                                <p class="text-2xl font-bold" style="color: var(--foreground);">¥128,430</p>
                                <p class="text-xs mt-1" style="color: var(--primary);">+12.5%</p>
                            </div>
                            <div class="card p-4">
                                <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">订单</p>
                                <p class="text-2xl font-bold" style="color: var(--foreground);">2,845</p>
                                <p class="text-xs mt-1" style="color: var(--primary);">+8.2%</p>
                            </div>
                            <div class="card p-4">
                                <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">用户</p>
                                <p class="text-2xl font-bold" style="color: var(--foreground);">8,942</p>
                                <p class="text-xs mt-1" style="color: var(--destructive);">-1.3%</p>
                            </div>
                            <div class="card p-4">
                                <p class="text-xs uppercase tracking-wider mb-1" style="color: var(--muted-foreground);">转化率</p>
                                <p class="text-2xl font-bold" style="color: var(--foreground);">24.8%</p>
                                <p class="text-xs mt-1" style="color: var(--primary);">+3.1%</p>
                            </div>
                        </div>
                        <!-- Chart Placeholder -->
                        <div class="card p-6">
                            <h3 class="text-lg font-bold mb-4">收入趋势</h3>
                            <div class="flex items-end gap-2 h-48">
                                ${[45, 62, 55, 78, 65, 90, 85, 95, 88, 105, 98, 120].map(h => `
                                    <div class="flex-1 rounded-t" style="height: ${h}%; background-color: var(--primary); opacity: 0.7;"></div>
                                `).join('')}
                            </div>
                            <div class="flex justify-between mt-2 text-xs" style="color: var(--muted-foreground);">
                                <span>1月</span><span>3月</span><span>6月</span><span>9月</span><span>12月</span>
                            </div>
                        </div>
                        <!-- Recent Activity -->
                        <div class="card p-6">
                            <h3 class="text-lg font-bold mb-4">最近动态</h3>
                            <div class="space-y-3">
                                <div class="flex items-center justify-between py-2" style="border-bottom: 1px solid var(--border);">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full" style="background-color: var(--muted);"></div>
                                        <div>
                                            <p class="text-sm font-medium" style="color: var(--foreground);">新订单 #2845</p>
                                            <p class="text-xs" style="color: var(--muted-foreground);">来自用户 @designer</p>
                                        </div>
                                    </div>
                                    <span class="text-sm font-medium" style="color: var(--primary);">+¥299</span>
                                </div>
                                <div class="flex items-center justify-between py-2" style="border-bottom: 1px solid var(--border);">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full" style="background-color: var(--muted);"></div>
                                        <div>
                                            <p class="text-sm font-medium" style="color: var(--foreground);">用户注册</p>
                                            <p class="text-xs" style="color: var(--muted-foreground);">来自用户 @developer</p>
                                        </div>
                                    </div>
                                    <span class="badge px-2 py-1 text-xs">新用户</span>
                                </div>
                                <div class="flex items-center justify-between py-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full" style="background-color: var(--muted);"></div>
                                        <div>
                                            <p class="text-sm font-medium" style="color: var(--foreground);">退款申请</p>
                                            <p class="text-xs" style="color: var(--muted-foreground);">订单 #2801</p>
                                        </div>
                                    </div>
                                    <span class="text-sm font-medium" style="color: var(--destructive);">-¥129</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderLandingPreview() {
            const container = document.getElementById('preview-container');
            container.innerHTML = `
                <div class="space-y-12 py-8">
                    <!-- Hero -->
                    <div class="text-center max-w-3xl mx-auto">
                        <span class="badge px-3 py-1 text-sm mb-4 inline-block">全新发布 v2.0</span>
                        <h1 class="text-4xl md:text-5xl font-bold mb-6" style="color: var(--foreground);">打造令人惊叹的<br>数字体验</h1>
                        <p class="text-lg mb-8" style="color: var(--muted-foreground);">使用我们强大的设计系统，快速构建美观、一致且可扩展的用户界面。让设计回归创意本身。</p>
                        <div class="flex flex-wrap gap-4 justify-center">
                            <button class="btn-primary px-6 py-3 text-base font-medium">立即开始</button>
                            <button class="btn-outline px-6 py-3 text-base">了解更多</button>
                        </div>
                    </div>
                    <!-- Features -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div class="card p-6 text-center">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-lg" style="background-color: var(--primary);"></div>
                            <h3 class="text-lg font-bold mb-2" style="color: var(--foreground);">极速构建</h3>
                            <p class="text-sm" style="color: var(--muted-foreground);">预置20+种风格与22种配色，一键切换，即刻预览。</p>
                        </div>
                        <div class="card p-6 text-center">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-lg" style="background-color: var(--secondary);"></div>
                            <h3 class="text-lg font-bold mb-2" style="color: var(--foreground);">中英双字</h3>
                            <p class="text-sm" style="color: var(--muted-foreground);">独立配置英文字体与中文字体，完美适配多语言场景。</p>
                        </div>
                        <div class="card p-6 text-center">
                            <div class="w-12 h-12 mx-auto mb-4 rounded-lg" style="background-color: var(--accent);"></div>
                            <h3 class="text-lg font-bold mb-2" style="color: var(--foreground);">AI 就绪</h3>
                            <p class="text-sm" style="color: var(--muted-foreground);">一键生成精确的设计提示词，直接投喂给 AI 绘图工具。</p>
                        </div>
                    </div>
                    <!-- CTA -->
                    <div class="card p-8 text-center max-w-3xl mx-auto" style="background-color: var(--muted);">
                        <h2 class="text-2xl font-bold mb-3" style="color: var(--foreground);">准备好提升设计效率了吗？</h2>
                        <p class="text-base mb-6" style="color: var(--muted-foreground);">加入数千名设计师和开发者，使用 UI/UX Pro Max 加速你的创作流程。</p>
                        <button class="btn-primary px-6 py-3 text-base font-medium">免费试用</button>
                    </div>
                </div>
            `;
        }

        function renderFormPreview() {
            const container = document.getElementById('preview-container');
            const c = currentColorScheme.colors;
            container.innerHTML = `
                <div class="max-w-2xl mx-auto py-8">
                    <div class="card p-8">
                        <h2 class="text-2xl font-bold mb-6" style="color: var(--foreground);">个人信息登记</h2>
                        <div class="space-y-5">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">姓名</label>
                                    <input type="text" class="input w-full px-4 py-2 text-sm" placeholder="请输入姓名">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">手机号</label>
                                    <input type="tel" class="input w-full px-4 py-2 text-sm" placeholder="138xxxx">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">邮箱</label>
                                <input type="email" class="input w-full px-4 py-2 text-sm" placeholder="you@example.com">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">所属部门</label>
                                <select class="select w-full">
                                    <option>产品研发部</option>
                                    <option>设计部</option>
                                    <option>市场部</option>
                                    <option>运营部</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" style="color: var(--foreground);">备注</label>
                                <textarea class="input w-full px-4 py-2 text-sm" rows="3" placeholder="补充说明..."></textarea>
                            </div>
                            <div class="flex items-center gap-2">
                                <input type="checkbox" class="w-4 h-4" style="accent-color: var(--primary);">
                                <span class="text-sm" style="color: var(--muted-foreground);">我已阅读并同意服务条款</span>
                            </div>
                            <div class="flex gap-3 pt-2">
                                <button class="btn-primary px-6 py-2 text-sm font-medium">提交</button>
                                <button class="btn-outline px-6 py-2 text-sm">重置</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderTablePreview() {
            const container = document.getElementById('preview-container');
            const c = currentColorScheme.colors;
            container.innerHTML = `
                <div class="max-w-5xl mx-auto py-8">
                    <div class="card p-6">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold" style="color: var(--foreground);">订单管理</h2>
                            <div class="flex gap-2">
                                <input type="text" class="input px-3 py-1.5 text-sm" placeholder="搜索订单...">
                                <button class="btn-primary px-3 py-1.5 text-sm">新增</button>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr style="border-bottom: 2px solid var(--border);">
                                        <th class="text-left py-3 px-2 font-medium" style="color: var(--muted-foreground);">订单号</th>
                                        <th class="text-left py-3 px-2 font-medium" style="color: var(--muted-foreground);">客户</th>
                                        <th class="text-left py-3 px-2 font-medium" style="color: var(--muted-foreground);">产品</th>
                                        <th class="text-left py-3 px-2 font-medium" style="color: var(--muted-foreground);">金额</th>
                                        <th class="text-left py-3 px-2 font-medium" style="color: var(--muted-foreground);">状态</th>
                                        <th class="text-left py-3 px-2 font-medium" style="color: var(--muted-foreground);">日期</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${[
                                        {id:'ORD-2024-001', user:'张三', product:'Pro 年度版', amount:'¥2,999', status:'已完成', date:'2024-01-15'},
                                        {id:'ORD-2024-002', user:'李四设计', product:'团队版(5人)', amount:'¥8,500', status:'处理中', date:'2024-01-16'},
                                        {id:'ORD-2024-003', user:'王五科技', product:'Pro 月度版', amount:'¥299', status:'待付款', date:'2024-01-17'},
                                        {id:'ORD-2024-004', user:'赵六', product:'企业定制', amount:'¥45,000', status:'已完成', date:'2024-01-18'},
                                        {id:'ORD-2024-005', user:'钱七工作室', product:'Pro 年度版', amount:'¥2,999', status:'已取消', date:'2024-01-19'},
                                    ].map((row,i) => `
                                        <tr style="border-bottom: 1px solid var(--border); ${i%2===1 ? 'background-color: var(--muted); opacity:0.5;' : ''}">
                                            <td class="py-3 px-2 font-mono" style="color: var(--foreground);">${row.id}</td>
                                            <td class="py-3 px-2" style="color: var(--foreground);">${row.user}</td>
                                            <td class="py-3 px-2" style="color: var(--foreground);">${row.product}</td>
                                            <td class="py-3 px-2 font-medium" style="color: var(--foreground);">${row.amount}</td>
                                            <td class="py-3 px-2">
                                                <span class="badge px-2 py-0.5 text-xs" style="
                                                    background-color: ${row.status==='已完成'? c.primary : row.status==='处理中'? c.secondary : row.status==='待付款'? c.accent : c.destructive};
                                                    color: #fff;
                                                ">${row.status}</span>
                                            </td>
                                            <td class="py-3 px-2" style="color: var(--muted-foreground);">${row.date}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-xs" style="color: var(--muted-foreground);">显示 1-5 条，共 128 条</span>
                            <div class="flex gap-1">
                                <button class="btn-ghost px-2 py-1 text-xs">上一页</button>
                                <button class="btn-primary px-2 py-1 text-xs">1</button>
                                <button class="btn-ghost px-2 py-1 text-xs">2</button>
                                <button class="btn-ghost px-2 py-1 text-xs">3</button>
                                <button class="btn-ghost px-2 py-1 text-xs">下一页</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderSettingsPreview() {
            const container = document.getElementById('preview-container');
            container.innerHTML = `
                <div class="max-w-2xl mx-auto py-8">
                    <div class="card p-8">
                        <h2 class="text-2xl font-bold mb-6" style="color: var(--foreground);">系统设置</h2>
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-sm font-bold uppercase tracking-wider mb-4" style="color: var(--muted-foreground);">账号信息</h3>
                                <div class="flex items-center gap-4 mb-4">
                                    <div class="w-16 h-16 rounded-full" style="background-color: var(--primary);"></div>
                                    <div>
                                        <p class="font-bold" style="color: var(--foreground);">设计师小明</p>
                                        <p class="text-sm" style="color: var(--muted-foreground);">designer@example.com</p>
                                    </div>
                                    <button class="btn-outline ml-auto px-3 py-1.5 text-xs">更换头像</button>
                                </div>
                            </div>
                            <div style="border-top: 1px solid var(--border);" class="pt-6">
                                <h3 class="text-sm font-bold uppercase tracking-wider mb-4" style="color: var(--muted-foreground);">偏好设置</h3>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="font-medium" style="color: var(--foreground);">邮件通知</p>
                                            <p class="text-xs" style="color: var(--muted-foreground);">接收每周设计趋势简报</p>
                                        </div>
                                        <button type="button" class="toggle active" role="switch" aria-checked="true"></button>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="font-medium" style="color: var(--foreground);">深色模式</p>
                                            <p class="text-xs" style="color: var(--muted-foreground);">自动跟随系统设置</p>
                                        </div>
                                        <button type="button" class="toggle" role="switch" aria-checked="false"></button>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="font-medium" style="color: var(--foreground);">节省流量</p>
                                            <p class="text-xs" style="color: var(--muted-foreground);">降低图片和视频质量</p>
                                        </div>
                                        <button type="button" class="toggle" role="switch" aria-checked="false"></button>
                                    </div>
                                </div>
                            </div>
                            <div style="border-top: 1px solid var(--border);" class="pt-6">
                                <h3 class="text-sm font-bold uppercase tracking-wider mb-4" style="color: var(--muted-foreground);">危险操作</h3>
                                <button class="btn-outline px-4 py-2 text-sm" style="color: var(--destructive); border-color: var(--destructive);">注销账号</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderEmptyPreview() {
            const container = document.getElementById('preview-container');
            container.innerHTML = `
                <div class="flex items-center justify-center py-24">
                    <div class="text-center max-w-sm">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-sm font-bold" style="background-color: var(--muted); color: var(--muted-foreground);">空空</div>
                        <h3 class="text-lg font-bold mb-2" style="color: var(--foreground);">暂无数据</h3>
                        <p class="text-sm mb-6" style="color: var(--muted-foreground);">当前列表为空，点击下方按钮创建第一条记录。</p>
                        <button class="btn-primary px-4 py-2 text-sm font-medium">新建记录</button>
                    </div>
                </div>
            `;
        }

        function renderPosterPreview() {
            const container = document.getElementById('preview-container');
            const c = currentColorScheme.colors;
            const effect = currentArtEffect;
            const paramValues = effect._paramValues || {};
            const style = currentStyle;

            // 海报主色调跟随用户选择的配色方案，艺术效果配色仅作色板参考
            const cp = [c.primary, c.secondary, c.accent, c.foreground, c.background];
            const ep = (effect.colorPalettes && effect.colorPalettes[currentPaletteIndex])
                ? effect.colorPalettes[currentPaletteIndex].palette
                : (effect.colorPalette || cp);
            const p1 = cp[0] || '#2563EB';
            const p2 = cp[1] || '#64748B';
            const p3 = cp[2] || '#EA580C';
            const p4 = cp[3] || '#0F172A';
            const p5 = cp[4] || '#F8FAFC';

            const paramsHtml = effect.parameters.map(p => {
                const val = paramValues[p.id] !== undefined ? paramValues[p.id] : p.default;
                const pct = Math.round((val / p.max) * 100);
                return `<div class="poster-param"><span class="poster-param-name">${p.name}</span><div class="poster-param-bar"><div class="poster-param-fill" style="width:${pct}%;background:${p1}"></div></div><span class="poster-param-val">${Math.round(val)}${p.unit}</span></div>`;
            }).join('');

            const paletteHtml = ep.slice(0, 6).map((color) =>
                `<div class="poster-palette-swatch" style="background:${color}"><span>${color}</span></div>`
            ).join('');

            const featuresHtml = effect.visualFeatures.slice(0, 3).map(f =>
                `<li class="poster-feature">${f}</li>`
            ).join('');

            const year = new Date().getFullYear();
            const month = new Date().getMonth() + 1;
            const day = new Date().getDate();
            const randRot = (Math.random() * 4 - 2).toFixed(1);

            container.innerHTML = `
                <div class="poster-preview-wrapper">
                    <button class="poster-refresh-btn" onclick="renderPosterPreview()" title="刷新海报">↻</button>
                    <div class="poster-canvas" style="transform: rotate(${randRot}deg)">
                        <!-- 背景装饰 — 使用艺术效果配色 -->
                        <div class="poster-bg-deco">
                            <div class="poster-bg-block-1" style="background:${p1}"></div>
                            <div class="poster-bg-block-2" style="background:${p2}"></div>
                            <div class="poster-bg-stripe" style="background:${p3}"></div>
                            <div class="poster-bg-circle" style="border-color:${p3}"></div>
                        </div>

                        <!-- 顶部信息 -->
                        <div class="poster-top-band">
                            <span class="poster-series" contenteditable="true" data-poster-text="series">UI/UX PRO MAX · 视觉艺术系列</span>
                            <span class="poster-edition">NO.${String(effect.id).padStart(2,'0')} / ${year}</span>
                        </div>

                        <!-- 主标题 -->
                        <div class="poster-hero">
                            <div class="poster-category-pill" style="background:${p1};color:#fff">${effect.category}</div>
                            <h1 class="poster-main-title" contenteditable="true" data-poster-text="title" style="text-shadow: 3px 3px 0 ${p3}">${effect.name.split('·')[0].trim()}</h1>
                            <div class="poster-en-title" contenteditable="true" data-poster-text="subtitle">${effect.nameEn}</div>
                        </div>

                        <!-- 分割线 -->
                        <div class="poster-divider" style="background:${p1}"></div>

                        <!-- 主插图区域 -->
                        <div class="poster-main-image" style="border-color:${p1}">
                            <span class="poster-main-image-label" style="background:${p1};color:#fff">MAIN VISUAL</span>
                            <div class="poster-main-image-inner" style="background:linear-gradient(135deg, ${p1}22, ${p2}22, ${p3}22)"></div>
                            <div class="poster-main-image-caption" contenteditable="true" data-poster-text="caption">${effect.visualFeatures[0] || '主视觉示意图'}</div>
                        </div>

                        <!-- 描述 -->
                        <div class="poster-desc" contenteditable="true" data-poster-text="desc">${effect.description.slice(0, 80)}${effect.description.length > 80 ? '…' : ''}</div>

                        <!-- 配图网格 — 3张小图 -->
                        <div class="poster-img-row">
                            <div class="poster-img-block" style="border-color:${p2}">
                                <span class="poster-img-label" style="background:${p2};color:#fff">FIG.01</span>
                                <div class="poster-img-inner" style="background:${p2};opacity:0.12"></div>
                            </div>
                            <div class="poster-img-block" style="border-color:${p3}">
                                <span class="poster-img-label" style="background:${p3};color:#000">FIG.02</span>
                                <div class="poster-img-inner" style="background:${p3};opacity:0.12"></div>
                            </div>
                            <div class="poster-img-block" style="border-color:${p4}">
                                <span class="poster-img-label" style="background:${p4};color:#fff">FIG.03</span>
                                <div class="poster-img-inner" style="background:${p4};opacity:0.1"></div>
                            </div>
                        </div>

                        <!-- 双栏内容 -->
                        <div class="poster-body">
                            <div class="poster-left-col">
                                <div class="poster-section-title" style="color:${p1}">视觉特征</div>
                                <ul class="poster-features">${featuresHtml}</ul>
                                <div class="poster-section-title" style="color:${p1};margin-top:0.6rem">参数状态</div>
                                <div class="poster-params">${paramsHtml}</div>
                            </div>
                            <div class="poster-right-col">
                                <div class="poster-section-title" style="color:${p1}">色彩方案</div>
                                <div class="poster-palette">${paletteHtml}</div>
                                <div class="poster-section-title" style="color:${p1};margin-top:0.6rem">适用场景</div>
                                <div class="poster-bestfor" contenteditable="true" data-poster-text="bestfor">${effect.bestFor.split(',').slice(0,3).join('<br>')}</div>
                            </div>
                        </div>

                        <!-- 装饰字母 -->
                        <div class="poster-deco-letter" style="color:${p1};opacity:0.05">${effect.nameEn.charAt(0)}</div>

                        <!-- 底部信息 -->
                        <div class="poster-bottom-band">
                            <div class="poster-venue" contenteditable="true" data-poster-text="venue">
                                <span>数字美术馆 · 线上展厅</span>
                            </div>
                            <div class="poster-date-block">
                                <div class="poster-date-day">${day}</div>
                                <div class="poster-date-month">${month}月</div>
                            </div>
                            <div class="poster-curator">
                                <span>策展</span>
                                <strong contenteditable="true" data-poster-text="curator">${style.name}</strong>
                            </div>
                        </div>

                        <!-- 条形码 -->
                        <div class="poster-barcode-area">
                            <div class="poster-barcode-visual">
                                ${Array.from({length:14},(_,i)=>`<div class="poster-barcode-bar" style="background:${c.foreground};width:${2+Math.random()*5}px;height:${50+Math.random()*50}%"></div>`).join('')}
                            </div>
                            <div class="poster-barcode-text">${effect.id.toString().padStart(6,'0')} · ${effect.category} · ${year}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderPrompts(filter = '') {
            const grid = document.getElementById('prompts-grid');
            let filtered = uiStyles;
            if (filter) {
                const q = filter.toLowerCase();
                filtered = filtered.filter(s =>
                    s.name.toLowerCase().includes(q) ||
                    s.keywords.toLowerCase().includes(q) ||
                    s.bestFor.toLowerCase().includes(q) ||
                    s.vibe.toLowerCase().includes(q)
                );
            }
            // Sort: current style first, then by id
            filtered = [...filtered].sort((a, b) => {
                if (a.id === currentStyle.id) return -1;
                if (b.id === currentStyle.id) return 1;
                return a.id - b.id;
            });

            grid.innerHTML = filtered.map(style => {
                const isCurrent = style.id === currentStyle.id;
                const keywords = style.keywords.split(', ').slice(0, 5);
                const promptPreview = generatePrompt(style, 'quick');
                return `
                <div class="card p-4 ${isCurrent ? 'active' : ''}" id="prompt-style-card-${style.id}">
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1.5">
                                <h3 class="text-base font-bold">${style.name}</h3>
                                ${isCurrent ? '<span class="badge px-2 py-0.5 text-xs" style="background: var(--primary); color: var(--on-primary);">当前</span>' : `<span class="badge px-2 py-0.5 text-xs">#${style.id}</span>`}
                            </div>
                            <div class="flex flex-wrap gap-1.5 mb-2">
                                ${keywords.map(kw => `<span class="text-xs px-1.5 py-0.5 rounded" style="background: var(--muted); color: var(--muted-foreground);">${kw}</span>`).join('')}
                            </div>
                            <p class="text-xs mb-2" style="color: var(--muted-foreground);"><span class="font-medium">适用:</span> ${style.bestFor}</p>
                            <div class="code-block p-2.5 text-xs" style="max-height: 80px; overflow: hidden; position: relative;">
                                <pre class="whitespace-pre-wrap" style="font-family: var(--font-mono); line-height: 1.5;">${promptPreview.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                                <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 24px; background: linear-gradient(transparent, var(--muted));"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1.5 shrink-0">
                            <button onclick="copyPrompt(${style.id})" class="btn-primary px-2.5 py-1.5 text-xs" title="复制提示词">复制</button>
                            <button onclick="expandPrompt(${style.id})" class="btn-secondary px-2.5 py-1.5 text-xs" title="展开完整提示词">展开</button>
                            <button onclick="showDetail(${style.id})" class="btn-ghost px-2.5 py-1.5 text-xs" title="风格详情">ℹ️</button>
                        </div>
                    </div>
                    <div id="prompt-full-${style.id}" class="hidden mt-3 pt-3" style="border-top: 1px solid var(--border);">
                        <div class="code-block p-3 text-xs" style="max-height: 240px; overflow-y: auto;">
                            <pre class="whitespace-pre-wrap" style="font-family: var(--font-mono); line-height: 1.6;"></pre>
                        </div>
                        <div class="flex gap-2 mt-2">
                            <button onclick="copyPrompt(${style.id})" class="btn-primary px-3 py-1 text-xs">复制当前格式</button>
                            <button onclick="collapsePrompt(${style.id})" class="btn-ghost px-3 py-1 text-xs">收起</button>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        }

        function expandPrompt(id) {
            const fullEl = document.getElementById(`prompt-full-${id}`);
            const preEl = fullEl.querySelector('pre');
            const style = uiStyles.find(s => s.id === id);
            const format = document.getElementById('prompt-format-select')?.value || 'standard';
            preEl.textContent = generatePrompt(style, format);
            fullEl.classList.remove('hidden');
        }

        function collapsePrompt(id) {
            document.getElementById(`prompt-full-${id}`).classList.add('hidden');
        }

        function filterPromptStyles() {
            const search = document.getElementById('prompt-style-search')?.value || '';
            renderPrompts(search);
        }

        const debouncedFilterPromptStyles = debounce(filterPromptStyles, 300);

        function renderCurrentPrompt() {
            const format = document.getElementById('prompt-format-select')?.value || 'standard';
            const textEl = document.getElementById('current-prompt-text');
            const summaryEl = document.getElementById('current-config-summary');
            if (!textEl) return;

            textEl.textContent = generatePrompt(null, format);

            if (summaryEl) {
                const effectBadge = effectEnabled && currentArtEffect
                    ? `<span class="badge px-2 py-1 text-xs" style="background: ${(currentArtEffect.colorPalettes && currentArtEffect.colorPalettes[currentPaletteIndex]) ? currentArtEffect.colorPalettes[currentPaletteIndex].palette[0] : currentArtEffect.colorPalette[0]}; color: #fff;">${currentArtEffect.name.split('·')[0].trim()}</span>`
                    : '';
                summaryEl.innerHTML = `
                    <span class="badge px-2 py-1 text-xs" style="background: var(--primary); color: var(--on-primary);">${currentStyle.name}</span>
                    <span class="badge px-2 py-1 text-xs" style="background: var(--secondary); color: var(--on-secondary);">${currentColorScheme.name}</span>
                    <span class="badge px-2 py-1 text-xs" style="background: var(--accent); color: var(--on-accent);">${currentFontPairing.name}</span>
                    <span class="badge px-2 py-1 text-xs" style="background: var(--muted); color: var(--foreground);">${currentChineseFontPairing.name}</span>
                    ${effectBadge}
                `;
            }
        }

        function copyCurrentPrompt() {
            const format = document.getElementById('prompt-format-select')?.value || 'standard';
            const text = generatePrompt(null, format);
            navigator.clipboard.writeText(text).then(() => {
                showToast('当前配置提示词已复制！');
            });
        }

        function downloadPromptTxt() {
            const format = document.getElementById('prompt-format-select')?.value || 'standard';
            const text = generatePrompt(null, format);
            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ui-prompt-${currentStyle.nameEn || currentStyle.name}-${format}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('提示词已导出为 .txt');
        }

        function renderFavorites() {
            const grid = document.getElementById('favorites-grid');
            const empty = document.getElementById('favorites-empty');
            if (!favorites.length) {
                grid.innerHTML = '';
                empty.classList.remove('hidden');
                return;
            }
            empty.classList.add('hidden');
            grid.innerHTML = favorites.map(item => {
                const key = typeof item === 'string' ? item : item.key;
                const name = typeof item === 'string' ? null : item.name;
                const parts = key.split('-');
                if (parts.length < 4) return '';
                const s = uiStyles.find(x => x.id === parseInt(parts[0]));
                const c = colorSchemes.find(x => x.id === parseInt(parts[1])) || guofengColors.find(x => x.id === parseInt(parts[1]));
                const f = fontPairings.find(x => x.id === parseInt(parts[2]));
                const cf = chineseFontPairings.find(x => x.id === parseInt(parts[3]));
                const e = parts[4] ? artEffects.find(x => x.id === parseInt(parts[4])) : null;
                if (!s || !c || !f || !cf) return '';
                const pv = stylePreviewVars[s.id] || { radius: '8px', shadow: 'none', border: '1px solid var(--border)' };
                return `
                <div class="style-card card p-6">
                    <div class="mb-4 p-3 rounded-lg flex items-center justify-center gap-3" style="background-color: var(--muted);">
                        <div style="width: 28px; height: 28px; border-radius: ${pv.radius}; box-shadow: ${pv.shadow}; border: ${pv.border}; background-color: var(--card);"></div>
                        <div style="width: 40px; height: 20px; border-radius: ${pv.radius}; box-shadow: ${pv.shadow}; border: ${pv.border}; background-color: ${c.colors.primary};"></div>
                        <div style="width: 40px; height: 20px; border-radius: ${pv.radius}; box-shadow: ${pv.shadow}; border: ${pv.border}; background-color: ${c.colors.accent};"></div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-2">
                            <h3 class="text-lg font-bold flex-1 min-w-0"
                                contenteditable="true"
                                onblur="renameFavorite('${key}', this.innerText)"
                                onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
                                style="outline:none;border-bottom:1px solid transparent;"
                                onfocus="this.style.borderBottomColor='var(--primary)'"
                                title="点击编辑名称">${name || s.name}</h3>
                            <span class="badge px-2 py-1 text-xs flex-shrink-0">#${s.id}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full" style="background-color: ${c.colors.primary};"></div>
                            <span class="text-sm">${c.name}</span>
                        </div>
                        <div class="text-sm" style="color: var(--muted-foreground);">
                            <span class="font-medium">英文字体:</span> ${f.name}
                        </div>
                        <div class="text-sm" style="color: var(--muted-foreground);">
                            <span class="font-medium">中文字体:</span> ${cf.name}
                        </div>
                        ${e ? `<div class="text-sm" style="color: var(--muted-foreground);"><span class="font-medium">艺术效果:</span> ${e.name}</div>` : ''}
                    </div>
                    <div class="flex gap-2 mt-4 pt-4" style="border-top: 1px solid var(--border);">
                        <button onclick="applyFavoriteCombo('${key}')" class="btn-primary flex-1 px-3 py-2 text-sm">应用组合</button>
                        <button onclick="deleteFavoriteItem('${key}')" class="btn-ghost px-3 py-2 text-sm" style="color: var(--destructive);">删除</button>
                    </div>
                </div>
                `;
            }).join('');
        }

        function applyFavoriteCombo(key) {
            const parts = key.split('-');
            if (parts.length < 4) return;
            const s = uiStyles.find(x => x.id === parseInt(parts[0]));
            const c = colorSchemes.find(x => x.id === parseInt(parts[1])) || guofengColors.find(x => x.id === parseInt(parts[1]));
            const f = fontPairings.find(x => x.id === parseInt(parts[2]));
            const cf = chineseFontPairings.find(x => x.id === parseInt(parts[3]));
            const e = parts[4] ? artEffects.find(x => x.id === parseInt(parts[4])) : null;
            if (!s || !c || !f || !cf) {
                showToast('收藏组合已失效');
                return;
            }
            currentStyle = s;
            currentColorScheme = c;
            currentFontPairing = f;
            currentChineseFontPairing = cf;
            if (e) currentArtEffect = e;
            applyStyle(s.id);
            applyColorScheme(c);
            applyFontPairing(f.id);
            applyChineseFontPairing(cf.id);
            if (effectEnabled && currentArtEffect) {
                applyArtEffect(currentArtEffect);
            }
            updateActiveCards();
            updateFavoriteBtn();
            updateEffectCurrentInfo();
            renderEffectFloatGrid();
            renderEffectFloatParams();
            saveState();
            showToast(`已应用: ${s.name} + ${c.name}`);
        }

        function renameFavorite(key, newName) {
            const idx = favorites.findIndex(f => (typeof f === 'string' ? f : f.key) === key);
            if (idx >= 0 && newName && newName.trim()) {
                favorites[idx].name = newName.trim();
                saveState();
            }
        }

        function deleteFavoriteItem(key) {
            const idx = favorites.findIndex(f => (typeof f === 'string' ? f : f.key) === key);
            if (idx >= 0) {
                favorites.splice(idx, 1);
                saveState();
                renderFavorites();
                updateFavoriteBtn();
                showToast('已删除收藏');
            }
        }

        // Action functions
        function selectStyle(id) {
            currentStyle = uiStyles.find(s => s.id === id);
            applyStyle(id);

            // Auto-match recommended Chinese font pairing based on style's suggested fonts
            if (currentStyle.fonts && currentStyle.fonts.chineseHeading) {
                const recommendedName = currentStyle.fonts.chineseHeading;
                const matched = chineseFontPairings.find(p => {
                    if (p.heading === recommendedName) return true;
                    const baseName = recommendedName.replace(' Light', '').replace(' Bold', '');
                    if (p.heading === baseName) return true;
                    return false;
                });
                if (matched && matched.id !== currentChineseFontPairing.id) {
                    currentChineseFontPairing = matched;
                    applyChineseFontPairing(matched.id);
                }
            }

            updateActiveCards();
            if (activeTab === 'preview') renderPreview();
            updateFavoriteBtn();
            saveState();
            showToast(`已切换到风格: ${currentStyle.name}`);
        }

        function selectColorScheme(id) {
            currentColorScheme = colorSchemes.find(c => c.id === id) || guofengColors.find(c => c.id === id);
            applyColorScheme(currentColorScheme);
            updateActiveCards();
            if (activeTab === 'preview') renderPreview();
            updateFavoriteBtn();
            saveState();
            showToast(`已切换到配色: ${currentColorScheme.name}`);
        }

        function selectGuofeng(id) {
            selectColorScheme(id);
        }

        function selectFontPairing(id) {
            currentFontPairing = fontPairings.find(f => f.id === id);
            applyFontPairing(id);
            updateActiveCards();
            if (activeTab === 'preview') renderPreview();
            updateFavoriteBtn();
            saveState();
            showToast(`已切换到英文字体: ${currentFontPairing.name}`);
        }

        function selectChineseFontPairing(id) {
            currentChineseFontPairing = chineseFontPairings.find(f => f.id === id);
            applyChineseFontPairing(id);
            updateActiveCards();
            if (activeTab === 'preview') renderPreview();
            updateFavoriteBtn();
            saveState();
            showToast(`已切换到中文字体: ${currentChineseFontPairing.name}`);
        }

        function applyStyle(id) {
            const body = document.body;
            // Remove all registered style classes dynamically
            Object.values(CONFIG_REGISTRY.styles).forEach(cfg => body.classList.remove(cfg.className));
            const cfg = CONFIG_REGISTRY.styles[id];
            if (cfg) body.classList.add(cfg.className);
            if (artEffectOverrideActive) applyArtEffect(currentArtEffect);
            if (activeTab === 'preview' && currentPreviewMode === 'poster') renderPreview();
        }

        function applyColorScheme(scheme) {
            const root = document.documentElement;
            
            Object.entries(scheme.colors).forEach(([key, value]) => {
                const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                root.style.setProperty(`--${cssVar}`, value);
            });

            // Set --primary-rgb for rgba() usage in animations
            const primary = scheme.colors.primary || '#2563EB';
            const pr = parseInt(primary.slice(1, 3), 16);
            const pg = parseInt(primary.slice(3, 5), 16);
            const pb = parseInt(primary.slice(5, 7), 16);
            root.style.setProperty('--primary-rgb', `${pr}, ${pg}, ${pb}`);

            // Auto dark mode detection based on background luminance
            const bg = scheme.colors.background || '#F8FAFC';
            const luminance = getLuminance(bg);
            const body = document.body;
            if (luminance < 0.35) {
                body.classList.add('dark-mode-active');
            } else {
                body.classList.remove('dark-mode-active');
            }
            if (artEffectOverrideActive) applyArtEffect(currentArtEffect);
            if (activeTab === 'preview' && currentPreviewMode === 'poster') renderPreview();
        }

        function getLuminance(hex) {
            const r = parseInt(hex.slice(1, 3), 16) / 255;
            const g = parseInt(hex.slice(3, 5), 16) / 255;
            const b = parseInt(hex.slice(5, 7), 16) / 255;
            return 0.299 * r + 0.587 * g + 0.114 * b;
        }

        function applyFontPairing(id) {
            const pairing = fontPairings.find(f => f.id === id);
            const root = document.documentElement;
            
            // Dynamic Google Fonts loading with error fallback
            if (pairing.googleFonts) {
                const linkId = 'gf-font-' + pairing.id;
                if (!document.getElementById(linkId)) {
                    const link = document.createElement('link');
                    link.id = linkId;
                    link.rel = 'stylesheet';
                    link.href = pairing.googleFonts;
                    link.onerror = function() {
                        /* silently ignore font load errors in production */
                    };
                    document.head.appendChild(link);
                }
            }
            
            // Only update EN fonts; CN fonts stay independent via CSS var composition
            root.style.setProperty('--font-en-heading', `'${pairing.heading}', 'Helvetica Neue', 'Arial'`);
            root.style.setProperty('--font-en-body', `'${pairing.body}', 'Helvetica Neue', 'Arial'`);
        }

        function applyChineseFontPairing(id) {
            const pairing = chineseFontPairings.find(f => f.id === id);
            const root = document.documentElement;
            
            // Update core CN font vars; EN stays independent
            // Specialized categories (serif, kai, display, rounded, hand) currently map to
            // the selected pairing for simplicity. Future enhancement: allow per-category selection.
            root.style.setProperty('--font-cn', pairing.headingCss);
            root.style.setProperty('--font-cn-heading', pairing.headingCss);
            root.style.setProperty('--font-cn-body', pairing.bodyCss);
            root.style.setProperty('--font-cn-serif', pairing.headingCss);
            root.style.setProperty('--font-cn-kai', pairing.headingCss);
            root.style.setProperty('--font-cn-display', pairing.headingCss);
            root.style.setProperty('--font-cn-rounded', pairing.headingCss);
            root.style.setProperty('--font-cn-hand', pairing.headingCss);
        }

        function updateActiveCards() {
            document.querySelectorAll('.style-card').forEach(card => {
                card.classList.remove('active');
                card.setAttribute('aria-pressed', 'false');
            });
            
            const styleCard = document.getElementById(`style-card-${currentStyle.id}`);
            if (styleCard) { styleCard.classList.add('active'); styleCard.setAttribute('aria-pressed', 'true'); }
            
            const colorCard = document.getElementById(`color-card-${currentColorScheme.id}`);
            if (colorCard) { colorCard.classList.add('active'); colorCard.setAttribute('aria-pressed', 'true'); }
            
            const fontCard = document.getElementById(`font-card-${currentFontPairing.id}`);
            if (fontCard) { fontCard.classList.add('active'); fontCard.setAttribute('aria-pressed', 'true'); }
            
            const cnFontCard = document.getElementById(`cn-font-card-${currentChineseFontPairing.id}`);
            if (cnFontCard) { cnFontCard.classList.add('active'); cnFontCard.setAttribute('aria-pressed', 'true'); }

            const effectCard = document.getElementById(`effect-card-${currentArtEffect.id}`);
            if (effectCard) { effectCard.classList.add('active'); effectCard.setAttribute('aria-pressed', 'true'); }
        }

        function switchTab(tab, evt) {
            activeTab = tab;
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            if (evt && evt.target) {
                evt.target.classList.add('active');
                evt.target.setAttribute('aria-selected', 'true');
            } else {
                const btn = document.getElementById('tab-' + tab);
                if (btn) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');
                }
            }
            
            // Update mobile bottom tab bar
            document.querySelectorAll('#mobile-tab-bar button').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.mobileTab === tab) btn.classList.add('active');
            });
            // Tabs inside "more" menu highlight the "more" button
            const moreTabs = ['typography', 'prompts', 'favorites'];
            if (moreTabs.includes(tab)) {
                const moreBtn = document.getElementById('mobile-more-btn');
                if (moreBtn) moreBtn.classList.add('active');
            }
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            const panel = document.getElementById(`${tab}-tab`);
            if (panel) {
                panel.classList.remove('hidden');
            }
            
            if (tab === 'preview') { renderPreview(); setTimeout(updateFavoriteBtn, 0); renderEffectStatusBar(); }
            if (tab === 'favorites') renderFavorites();
            if (tab === 'effects') { renderEffects(); renderEffectCategoryFilters(); }
            if (tab === 'prompts') { renderPrompts(); renderCurrentPrompt(); }
            saveState();
        }

        function toggleMobileMoreMenu(evt) {
            const menu = document.getElementById('mobile-more-menu');
            if (!menu) return;
            if (evt) evt.stopPropagation();
            menu.classList.toggle('hidden');
        }
        // Close mobile more menu when clicking outside
        document.addEventListener('click', function(e) {
            const menu = document.getElementById('mobile-more-menu');
            const btn = document.getElementById('mobile-more-btn');
            if (menu && !menu.classList.contains('hidden') && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });

        function switchPreviewMode(mode) {
            currentPreviewMode = mode;
            document.querySelectorAll('#preview-tab .filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const btn = document.getElementById(`preview-btn-${mode}`);
            if (btn) btn.classList.add('active');
            renderPreview();
            saveState();
        }

        function filterStyles() {
            const search = document.getElementById('style-search').value;
            renderStyles(search);
        }

        function filterColors(category, evt) {
            const container = document.getElementById('colors-tab');
            if (container) {
                container.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
            if (evt && evt.target) {
                evt.target.classList.add('active');
            }
            renderColors(category);
        }

        function filterFonts() {
            const search = document.getElementById('font-search').value;
            renderTypography(search);
            renderChineseTypography(search);
        }

        const debouncedFilterStyles = debounce(filterStyles, 200);
        const debouncedFilterFonts = debounce(filterFonts, 200);
        const debouncedFilterEffects = debounce(filterEffects, 200);

        function generateConfigCode() {
            return Exporter.tailwind();
        }

        function exportConfig() {
            const config = {
                style: currentStyle,
                colorScheme: currentColorScheme,
                fontPairing: currentFontPairing,
                chineseFontPairing: currentChineseFontPairing,
                timestamp: new Date().toISOString()
            };
            
            const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ui-ux-config-${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('配置已导出！');
        }

        // ============================================
        // 提示词生成引擎
        // ============================================
        function generatePrompt(styleOverride, format) {
            const style = styleOverride || currentStyle;
            const scheme = currentColorScheme;
            const c = scheme.colors;
            const font = currentFontPairing;
            const cnFont = currentChineseFontPairing;
            const effect = effectEnabled && currentArtEffect ? currentArtEffect : null;
            const effectPalette = effect ? ((effect.colorPalettes && effect.colorPalettes[currentPaletteIndex]) ? effect.colorPalettes[currentPaletteIndex].palette : effect.colorPalette) : null;

            const styleName = style.nameEn || style.name;
            const colorDesc = `Primary ${c.primary}, Secondary ${c.secondary}, Accent ${c.accent}, Background ${c.background}`;
            const fontDesc = `English: ${font.heading} + ${font.body}; Chinese: ${cnFont.heading} + ${cnFont.body}`;
            const effectDesc = effect ? `${effect.nameEn || effect.name} aesthetic — ${effect.description}` : '';

            switch (format) {
                case 'quick':
                    return `Design a ${styleName} UI with ${scheme.name} color scheme (${colorDesc}). ${fontDesc}. ${effectDesc || style.description}`;

                case 'standard':
                    return `Create a UI design in ${styleName} style.

Style Description: ${style.description}
Vibe: ${style.vibe}
Keywords: ${style.keywords}

Color Scheme — ${scheme.name}:
• Primary: ${c.primary} | On Primary: ${c.onPrimary}
• Secondary: ${c.secondary} | On Secondary: ${c.onSecondary}
• Accent: ${c.accent} | On Accent: ${c.onAccent}
• Background: ${c.background} | Foreground: ${c.foreground}
• Card: ${c.card} | Muted: ${c.muted}

Typography:
• English: ${font.heading} (headings) + ${font.body} (body)
• Chinese: ${cnFont.heading} (headings) + ${cnFont.body} (body)

${effect ? `Art Direction Overlay — ${effect.name}:\n• ${effect.visualFeatures.slice(0, 4).join('\n• ')}\n• Color palette: ${effectPalette.slice(0, 4).join(', ')}` : ''}`;

                case 'detailed':
                    return `You are a senior UI/UX designer. Create a comprehensive design system and high-fidelity mockup for a web application using the following specifications:

## 1. Design Style
- Style: ${styleName}
- Description: ${style.description}
- Vibe: ${style.vibe}
- Keywords: ${style.keywords}
- Best for: ${style.bestFor}

## 2. Color System (${scheme.name})
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | ${c.primary} | Buttons, links, active states |
| Secondary | ${c.secondary} | Info, secondary actions |
| Accent | ${c.accent} | Highlights, badges, CTAs |
| Background | ${c.background} | Page background |
| Foreground | ${c.foreground} | Primary text |
| Card | ${c.card} | Card surfaces |
| Muted | ${c.muted} | Secondary backgrounds |
| Border | ${c.border} | Dividers, outlines |
| Destructive | ${c.destructive} | Errors, warnings |
| Ring | ${c.ring} | Focus states |

## 3. Typography
- English Headings: ${font.heading}
- English Body: ${font.body}
- Chinese Headings: ${cnFont.heading}
- Chinese Body: ${cnFont.body}
- Mood: ${font.mood}

## 4. Component Style Specifications
${style.uiApplication || 'Apply the design style consistently across all components.'}

## 5. ${effect ? `Art Direction — ${effect.name}\n${effect.description}\nVisual Features:\n• ${effect.visualFeatures.join('\n• ')}\nColor palette: ${effectPalette.join(', ')}` : 'No art direction overlay.'}

Please generate: (1) a design system overview, (2) a landing page mockup description, (3) a component library checklist.`;

                case 'midjourney':
                    return `${styleName} UI/UX design, ${scheme.name} color palette, ${c.primary} primary ${c.secondary} secondary ${c.accent} accent, clean modern interface, ${style.keywords.split(', ').slice(0, 4).join(', ')}, ${font.heading} typography, ${effect ? effect.nameEn || effect.name : 'modern'} aesthetic, high detail, professional mockup, dribbble trending, UI design, web application --ar 16:9 --style raw --v 6`;

                case 'chatgpt':
                    return `Write HTML and CSS code for a landing page with the following design system:

**Design Style:** ${styleName}
${style.description}

**Color Tokens (CSS variables):**
\`\`\`css
:root {
  --primary: ${c.primary};
  --on-primary: ${c.onPrimary};
  --secondary: ${c.secondary};
  --accent: ${c.accent};
  --background: ${c.background};
  --foreground: ${c.foreground};
  --card: ${c.card};
  --muted: ${c.muted};
  --border: ${c.border};
  --destructive: ${c.destructive};
  --ring: ${c.ring};
  --font-heading: ${font.heading}, sans-serif;
  --font-body: ${font.body}, sans-serif;
}
\`\`\`

**Typography:**
- Headings: ${font.heading} / ${cnFont.heading}
- Body: ${font.body} / ${cnFont.body}

**Style Guidelines:**
- ${style.vibe}
- Keywords: ${style.keywords}
- ${style.uiApplication || 'Follow the design style consistently.'}

${effect ? `**Art Direction — ${effect.name}:**\n${effect.description}\nApply these visual traits to all components.` : ''}

Please generate a complete, production-ready HTML file with embedded CSS that includes a responsive landing page with: navigation, hero section, feature grid, and footer.`;

                default:
                    return style.prompt;
            }
        }

        function copyPrompt(id) {
            const style = uiStyles.find(s => s.id === id);
            if (!style) return;
            const format = document.getElementById('prompt-format-select')?.value || 'standard';
            const promptText = generatePrompt(style, format);
            navigator.clipboard.writeText(promptText).then(() => {
                showToast('提示词已复制！');
            });
        }

        function copyCode() {
            navigator.clipboard.writeText(generateConfigCode()).then(() => {
                showToast('代码已复制！');
            });
        }

        let lastFocusedElement = null;

        function trapFocus(element) {
            const focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            element.addEventListener('keydown', function(e) {
                if (e.key !== 'Tab') return;
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            });
        }

        function showDetail(id) {
            const style = uiStyles.find(s => s.id === id);
            const modal = document.getElementById('detail-modal');
            const content = document.getElementById('modal-content');
            lastFocusedElement = document.activeElement;
            
            content.innerHTML = `
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-3xl font-bold">${style.name}</h2>
                    <button onclick="closeModal()" class="text-2xl" aria-label="关闭">&times;</button>
                </div>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-bold mb-2">描述</h3>
                        <p>${style.description}</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-2">氛围</h3>
                        <p>${style.vibe}</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-2">关键词</h3>
                        <div class="flex flex-wrap gap-2">
                            ${style.keywords.split(', ').map(kw => 
                                `<span class="badge px-3 py-1">${kw}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold mb-2">AI 提示词</h3>
                        <div class="code-block p-4">
                            <pre class="whitespace-pre-wrap">${style.prompt}</pre>
                        </div>
                        <button onclick="copyPrompt(${style.id})" class="btn-primary mt-4 px-4 py-2">复制提示词</button>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
            modal.setAttribute('aria-modal', 'true');
            requestAnimationFrame(() => {
                const closeBtn = content.querySelector('button[aria-label="关闭"]');
                if (closeBtn) closeBtn.focus();
                trapFocus(content);
            });
        }

        function closeModal() {
            const modal = document.getElementById('detail-modal');
            modal.classList.add('hidden');
            modal.removeAttribute('aria-modal');
            if (lastFocusedElement) {
                lastFocusedElement.focus();
                lastFocusedElement = null;
            }
        }

        function showToast(message) {
            const existing = document.querySelectorAll('.toast');
            if (existing.length >= 3) {
                existing[0].remove();
            }
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 3000);
        }

        function renderEffectCategoryFilters() {
            const container = document.getElementById('effects-category-filters');
            if (!container || typeof artEffectCategories === 'undefined') return;
            const allBtn = container.querySelector('button');
            container.innerHTML = '';
            if (allBtn) container.appendChild(allBtn);
            artEffectCategories.forEach(cat => {
                if (cat.id === 'all') return;
                const btn = document.createElement('button');
                btn.className = 'filter-btn' + (effectCategoryFilter === cat.id ? ' active' : '');
                btn.textContent = cat.name;
                btn.onclick = function(e) { filterEffectsCategory(cat.id, e); };
                container.appendChild(btn);
            });
        }

        function renderEffects(filter = '') {
            const grid = document.getElementById('effects-grid');
            let filtered = artEffects;
            if (filter) {
                filtered = filtered.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()) || e.description.toLowerCase().includes(filter.toLowerCase()) || e.keywords.toLowerCase().includes(filter.toLowerCase()));
            }
            if (effectCategoryFilter !== 'all') {
                filtered = filtered.filter(e => e.category === effectCategoryFilter);
            }
            grid.innerHTML = filtered.map(effect => `
                <div class="style-card card p-6 ${currentArtEffect.id === effect.id ? 'active' : ''}" onclick="selectEffect(${effect.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectEffect(${effect.id});}" tabindex="0" role="button" aria-pressed="${currentArtEffect.id === effect.id}" id="effect-card-${effect.id}">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-xl font-bold">${effect.name}</h3>
                        <span class="badge px-2 py-1 text-xs">${effect.category}</span>
                    </div>
                    <p class="text-sm mb-3" style="color: var(--muted-foreground);">${effect.description}</p>
                    <div class="mb-3">
                        <div class="flex gap-1 mb-2">
                            ${(effect.colorPalettes && effect.colorPalettes[currentPaletteIndex]
                                ? effect.colorPalettes[currentPaletteIndex].palette
                                : effect.colorPalette
                            ).map(clr => `<div style="width:24px;height:24px;border-radius:4px;background:${clr};border:1px solid var(--border);"></div>`).join('')}
                        </div>
                        ${(effect.colorPalettes && currentArtEffect.id === effect.id) ? `<div class="text-xs" style="color: var(--muted-foreground);">配色: ${effect.colorPalettes[currentPaletteIndex].name}</div>` : ''}
                    </div>
                    <div class="text-sm mb-2" style="color: var(--muted-foreground);">
                        <span class="font-medium">适用:</span> ${effect.bestFor}
                    </div>
                    <div class="text-sm mb-2" style="color: var(--muted-foreground);">
                        <span class="font-medium">工具:</span> ${effect.tools}
                    </div>
                    <div class="text-xs mt-2 pt-2" style="border-top: 1px solid var(--border); color: var(--muted-foreground);">
                        <span class="font-medium">氛围:</span> ${effect.vibe}
                    </div>
                </div>
            `).join('');
            renderEffectParams();
        }


        // Art Effect Float Panel Functions
        let effectPanelOpen = false;
        let effectFloatCategoryFilter = 'all';

        function toggleEffectPanel() {
            const panel = document.getElementById('art-effect-float-panel');
            effectPanelOpen = !effectPanelOpen;
            if (effectPanelOpen) {
                panel.classList.remove('hidden');
                renderEffectFloatGrid();
                renderEffectFloatCategories();
                renderEffectFloatParams();
                updateEffectCurrentInfo();
            } else {
                panel.classList.add('hidden');
            }
        }

        function closeEffectPanel() {
            effectPanelOpen = false;
            document.getElementById('art-effect-float-panel').classList.add('hidden');
        }

        function toggleEffectEnabled(enabled) {
            effectEnabled = enabled;
            const btn = document.getElementById('art-effect-float-btn');
            if (btn) {
                if (enabled) btn.classList.add('effect-active');
                else btn.classList.remove('effect-active');
            }
            if (enabled) {
                artEffectOverrideActive = true;
                applyArtEffect(currentArtEffect);
                updateActiveCards();
                updateFavoriteBtn();
                showToast(`艺术效果已开启: ${currentArtEffect.name}`);
            } else {
                artEffectOverrideActive = false;
                applyArtEffect(null);
                updateActiveCards();
                updateFavoriteBtn();
                showToast('艺术效果已关闭');
            }
            renderEffectStatusBar();
            saveState();
        }

        function updateEffectCurrentInfo() {
            const nameEl = document.getElementById('effect-current-name');
            if (nameEl && currentArtEffect) {
                nameEl.textContent = currentArtEffect.name + (effectEnabled ? ' · 已启用' : ' · 未启用');
            }
        }

        function renderEffectFloatCategories() {
            const container = document.getElementById('effect-float-categories');
            if (!container || typeof artEffectCategories === 'undefined') return;
            container.innerHTML = artEffectCategories.map(cat => {
                const active = effectFloatCategoryFilter === cat.id ? 'active' : '';
                return `<button class="filter-btn ${active} px-2 py-0.5 text-xs" onclick="filterEffectFloatCategory('${cat.id}')">${cat.name}</button>`;
            }).join('');
        }

        function filterEffectFloatCategory(category) {
            effectFloatCategoryFilter = category;
            renderEffectFloatCategories();
            renderEffectFloatGrid();
        }

        function renderEffectFloatGrid() {
            const grid = document.getElementById('effect-float-grid');
            if (!grid) return;
            let filtered = artEffects;
            if (effectFloatCategoryFilter !== 'all') {
                filtered = filtered.filter(e => e.category === effectFloatCategoryFilter);
            }
            grid.innerHTML = filtered.map(effect => {
                const active = currentArtEffect.id === effect.id ? 'active' : '';
                return `
                    <div class="effect-float-card ${active}" onclick="selectEffect(${effect.id})" title="${effect.name}">
                        <div class="effect-float-swatch" style="background: ${(effect.colorPalettes && currentArtEffect.id === effect.id && effect.colorPalettes[currentPaletteIndex]) ? effect.colorPalettes[currentPaletteIndex].palette[0] : effect.colorPalette[0]};"></div>
                        <div class="truncate">${effect.name.split('·')[0].trim()}</div>
                    </div>
                `;
            }).join('');
        }

        function renderEffectStatusBar() {
            const previewTab = document.getElementById('preview-tab');
            if (!previewTab) return;
            let bar = document.getElementById('effect-status-bar');
            if (!bar) {
                bar = document.createElement('div');
                bar.id = 'effect-status-bar';
                bar.className = 'mb-4 p-3 rounded-lg text-sm flex items-center justify-between';
                bar.style.cssText = 'background: var(--muted); border: 1px solid var(--border);';
                const h2 = previewTab.querySelector('h2');
                if (h2 && h2.parentElement) {
                    h2.parentElement.insertBefore(bar, h2.nextElementSibling);
                }
            }
            const baselineText = `${currentStyle.name} + ${currentColorScheme.name} + ${currentFontPairing.name.split(' + ')[0]}`;
            const effectText = effectEnabled
                ? `艺术效果: 已开启（${currentArtEffect.name}）`
                : `艺术效果: 已关闭（${currentArtEffect.name}）`;
            bar.innerHTML = `
                <span><strong>当前基线:</strong> ${baselineText}</span>
                <button onclick="toggleEffectSwitchFromBar()" class="text-sm font-medium" style="color: var(--primary);">${effectText}</button>
            `;
        }

        function toggleEffectSwitchFromBar() {
            const sw = document.getElementById('effect-toggle-switch');
            if (sw) {
                sw.checked = !sw.checked;
                toggleEffectEnabled(sw.checked);
            }
        }

        function selectEffect(id) {
            currentArtEffect = artEffects.find(e => e.id === id);
            currentPaletteIndex = 0;
            updateEffectCurrentInfo();
            renderEffectFloatGrid();
            renderEffectFloatParams();
            if (effectEnabled) {
                artEffectOverrideActive = true;
                applyArtEffect(currentArtEffect);
                updateActiveCards();
                updateFavoriteBtn();
            }
            if (activeTab === 'preview') renderPreview();
            renderEffectStatusBar();
            saveState();
            showToast(`已选择效果: ${currentArtEffect.name}`);
        }

        function applyArtEffect(effect) {
            const root = document.documentElement;
            const body = document.body;

            // Remove all art effect body classes
            for (let i = 1; i <= 18; i++) {
                body.classList.remove('art-effect-' + i);
            }

            // Manage overlay — scoped to preview-container so art effects act as background, not obstruction
            let overlay = document.getElementById('art-effect-overlay');
            const previewContainer = document.getElementById('preview-container');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'art-effect-overlay';
                if (previewContainer) {
                    previewContainer.appendChild(overlay);
                } else {
                    document.body.appendChild(overlay);
                }
            } else if (previewContainer && overlay.parentElement !== previewContainer) {
                previewContainer.appendChild(overlay);
            }
            overlay.className = '';

            // Clear inline overrides when resetting
            if (!effect) {
                artEffectOverrideActive = false;
                root.style.removeProperty('--primary');
                root.style.removeProperty('--accent');
                root.style.removeProperty('--ring');
                root.style.removeProperty('--border-width');
                root.style.removeProperty('--border-radius');
                root.style.removeProperty('--shadow');
                root.style.removeProperty('--font-heading');
                root.style.removeProperty('--font-body');
                const allVars = Array.from(root.style);
                allVars.forEach(v => { if (v.startsWith('--art-')) root.style.removeProperty(v); });
                const ov2 = document.getElementById('art-effect-overlay');
                if (ov2) {
                    ov2.className = '';
                    ov2.style.opacity = '0';
                    ov2.style.display = 'none';
                    if (ov2.parentElement && ov2.parentElement.id === 'preview-container') {
                        document.body.appendChild(ov2);
                    }
                }
                const sidebar = document.getElementById('layer-sidebar');
                if (sidebar) sidebar.classList.add('hidden');
                const gf = document.getElementById('gf-art-effect');
                if (gf) gf.remove();
                applyColorScheme(currentColorScheme);
                applyStyle(currentStyle.id);
                return;
            }

            artEffectOverrideActive = true;
            body.classList.add('art-effect-' + effect.id);
            overlay.classList.add('art-effect-' + effect.id);
            overlay.classList.add('active');
            overlay.style.display = '';
            overlay.style.opacity = '';

            const penetrationMap = { 'mist': 'mist', 'bleed': 'bleed', 'soak': 'soak', 'edge': 'mist', 'corner': 'bleed' };
            const penetrationMode = penetrationMap[effect.overlayMode] || 'soak';
            overlay.classList.add('penetrate-' + penetrationMode);

            if (effect.parameters) {
                effect.parameters.forEach(p => {
                    const val = (effect._paramValues && effect._paramValues[p.id] !== undefined)
                        ? effect._paramValues[p.id]
                        : p.default / 100;
                    root.style.setProperty('--art-' + p.id, val);
                });
            }
            const intensity = (effect._paramValues && effect._paramValues.intensity !== undefined)
                ? effect._paramValues.intensity
                : 0.5;
            root.style.setProperty('--art-intensity', intensity);

            for (let r = 1; r <= 8; r++) {
                root.style.setProperty('--art-rand-' + r, Math.random());
            }

            const fm = CONFIG_REGISTRY.effects.fontMap[effect.id];
            if (fm && fm.url) {
                const gfId = 'gf-art-effect';
                let gf = document.getElementById(gfId);
                if (!gf) {
                    gf = document.createElement('link');
                    gf.id = gfId;
                    gf.rel = 'stylesheet';
                    document.head.appendChild(gf);
                }
                gf.href = fm.url;
            }

            const p = (effect.colorPalettes && effect.colorPalettes[currentPaletteIndex])
                ? effect.colorPalettes[currentPaletteIndex].palette
                : effect.colorPalette;
            root.style.setProperty('--primary', p[0] || '#2563EB');
            root.style.setProperty('--accent', p[1] || '#EA580C');
            root.style.setProperty('--ring', p[2] || p[0] || '#2563EB');
            const cfg = CONFIG_REGISTRY.effects.overlayVars[effect.id];
            if (cfg) {
                Object.entries(cfg).forEach(([k, v]) => root.style.setProperty(k, v));
            }

        }

        function filterEffects() {
            const search = document.getElementById('effect-search').value;
            renderEffects(search);
        }

        function filterEffectsCategory(category, evt) {
            effectCategoryFilter = category;
            const container = document.getElementById('effects-tab');
            if (container) {
                container.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            }
            if (evt && evt.target) {
                evt.target.classList.add('active');
            }
            renderEffects(document.getElementById('effect-search').value);
        }

        // Effect parameter control
        function renderEffectParams() {
            // Legacy support for any remaining references
            renderEffectFloatParams();
        }

        function renderEffectFloatParams() {
            const paramsContainer = document.getElementById('effect-float-params');
            const slidersContainer = document.getElementById('effect-float-params-sliders');
            const title = document.getElementById('effect-float-params-title');
            if (!currentArtEffect || !currentArtEffect.parameters) {
                if (paramsContainer) paramsContainer.classList.add('hidden');
                return;
            }
            if (paramsContainer) paramsContainer.classList.remove('hidden');
            if (title) title.textContent = currentArtEffect.name;

            // Initialize default param values
            if (!currentArtEffect._paramValues) {
                currentArtEffect._paramValues = {};
                currentArtEffect.parameters.forEach(p => {
                    currentArtEffect._paramValues[p.id] = p.default / 100;
                });
            }

            if (!slidersContainer) return;

            // Palette selector for effects with multiple color palettes
            let paletteHtml = '';
            if (currentArtEffect.colorPalettes && currentArtEffect.colorPalettes.length > 1) {
                paletteHtml = `
                    <div class="mb-3">
                        <div class="text-xs mb-1.5" style="color: var(--muted-foreground);">配色方案</div>
                        <div class="flex gap-2 flex-wrap">
                            ${currentArtEffect.colorPalettes.map((cp, idx) => `
                                <button onclick="selectEffectPalette(${idx})" class="flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${idx === currentPaletteIndex ? 'font-bold' : ''}"
                                    style="border: 1.5px solid ${idx === currentPaletteIndex ? 'var(--primary)' : 'var(--border)'}; background: ${idx === currentPaletteIndex ? 'var(--muted)' : 'transparent'};">
                                    <span class="flex gap-0.5">
                                        ${cp.palette.slice(0, 3).map(clr => `<span style="width:10px;height:10px;border-radius:2px;background:${clr};display:inline-block;"></span>`).join('')}
                                    </span>
                                    ${cp.name}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            slidersContainer.innerHTML = paletteHtml + currentArtEffect.parameters.map(p => {
                const val = currentArtEffect._paramValues[p.id] !== undefined ? currentArtEffect._paramValues[p.id] : p.default / 100;
                const displayVal = Math.round(val * 100);
                return `
                    <div>
                        <div class="flex justify-between text-xs mb-1">
                            <span>${p.name}</span>
                            <span class="font-mono" id="float-param-val-${p.id}">${displayVal}${p.unit}</span>
                        </div>
                        <input type="range" min="0" max="100" value="${displayVal}"
                            class="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                            style="background: linear-gradient(to right, var(--primary) 0%, var(--primary) ${displayVal}%, var(--muted) ${displayVal}%, var(--muted) 100%);"
                            oninput="updateEffectParam('${p.id}', this.value / 100, this)"
                            aria-label="${p.name} 参数滑块">
                    </div>
                `;
            }).join('');
        }

        function selectEffectPalette(index) {
            if (!currentArtEffect || !currentArtEffect.colorPalettes) return;
            currentPaletteIndex = index;
            const palette = currentArtEffect.colorPalettes[index].palette;
            // Hot-update CSS variables without full re-apply
            const root = document.documentElement;
            root.style.setProperty('--primary', palette[0] || '#2563EB');
            root.style.setProperty('--accent', palette[1] || '#EA580C');
            root.style.setProperty('--ring', palette[2] || palette[0] || '#2563EB');
            // Re-render float panel to update selection highlight
            renderEffectFloatParams();
            renderEffectFloatGrid();
            renderEffects();
            renderEffectStatusBar();
            if (activeTab === 'preview') renderPreview();
            saveState();
            showToast(`配色: ${currentArtEffect.colorPalettes[index].name}`);
        }

        function updateEffectParam(paramId, value, sliderEl) {
            if (!currentArtEffect._paramValues) currentArtEffect._paramValues = {};
            currentArtEffect._paramValues[paramId] = value;
            // Update legacy labels
            const valLabel = document.getElementById('param-val-' + paramId);
            if (valLabel) valLabel.textContent = Math.round(value * 100) + '%';
            // Update float panel labels
            const floatValLabel = document.getElementById('float-param-val-' + paramId);
            if (floatValLabel) floatValLabel.textContent = Math.round(value * 100) + '%';
            if (sliderEl) {
                sliderEl.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${Math.round(value * 100)}%, var(--muted) ${Math.round(value * 100)}%, var(--muted) 100%)`;
            }
            // Lightweight hot update: only update CSS variable, no full re-apply
            const root = document.documentElement;
            root.style.setProperty('--art-' + paramId, value);
            if (paramId === 'intensity') {
                root.style.setProperty('--art-intensity', value);
            }
            if (activeTab === 'preview') renderPreview();
            saveState();
        }

        function randomizeEffectParams() {
            if (!currentArtEffect || !currentArtEffect.parameters) return;
            currentArtEffect._paramValues = currentArtEffect._paramValues || {};
            currentArtEffect.parameters.forEach(p => {
                const randomVal = Math.random();
                currentArtEffect._paramValues[p.id] = randomVal;
            });
            renderEffectFloatParams();
            if (effectEnabled) {
                applyArtEffect(currentArtEffect);
                // Re-inject fresh random seeds so CSS picks up new variation
                const root = document.documentElement;
                for (let r = 1; r <= 8; r++) {
                    root.style.setProperty('--art-rand-' + r, Math.random());
                }
                updateActiveCards();
            }
            saveState();
            showToast('参数已随机化');
        }

        // Tab keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.target.classList && e.target.classList.contains('tab-btn')) {
                const tabs = Array.from(document.querySelectorAll('.tab-btn'));
                const idx = tabs.indexOf(e.target);
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    const next = tabs[(idx + 1) % tabs.length];
                    next.focus();
                    next.click();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
                    prev.focus();
                    prev.click();
                }
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            const key = e.key;
            if (key >= '1' && key <= '7') {
                const tabs = ['styles', 'colors', 'typography', 'preview', 'prompts', 'favorites', 'effects'];
                const tab = tabs[parseInt(key) - 1];
                if (tab) {
                    const btn = document.querySelector(`.tab-btn[onclick="switchTab('${tab}')"]`);
                    if (btn) btn.click();
                }
            } else if (key === 'e' || key === 'E') {
                e.preventDefault();
                const sw = document.getElementById('effect-toggle-switch');
                if (sw) {
                    sw.checked = !sw.checked;
                    toggleEffectEnabled(sw.checked);
                }
            } else if (key === 'r' || key === 'R') {
                e.preventDefault();
                randomCombo();
            } else if (key === 'f' || key === 'F') {
                e.preventDefault();
                toggleFavorite();
            } else if (key === '0') {
                e.preventDefault();
                randomizeEffectParams();
            }
        });

        // ============================================
        // 历史记录 Undo / Redo
        // ============================================
        function undoState() {
            const snapshot = HistoryManager.undo();
            if (!snapshot) { showToast('没有更早的历史记录'); return; }
            restoreSnapshot(snapshot);
            showToast('已撤销');
        }

        function redoState() {
            const snapshot = HistoryManager.redo();
            if (!snapshot) { showToast('没有可重做的操作'); return; }
            restoreSnapshot(snapshot);
            showToast('已重做');
        }

        function restoreSnapshot(snapshot) {
            if (snapshot.style) { const s = uiStyles.find(x => x.id === snapshot.style); if (s) { currentStyle = s; applyStyle(s.id); } }
            if (snapshot.color) { const c = colorSchemes.find(x => x.id === snapshot.color) || guofengColors.find(x => x.id === snapshot.color); if (c) { currentColorScheme = c; applyColorScheme(c); } }
            if (snapshot.font) { const f = fontPairings.find(x => x.id === snapshot.font); if (f) { currentFontPairing = f; applyFontPairing(f.id); } }
            if (snapshot.cnFont) { const cf = chineseFontPairings.find(x => x.id === snapshot.cnFont); if (cf) { currentChineseFontPairing = cf; applyChineseFontPairing(cf.id); } }
            if (snapshot.effect) { const e = artEffects.find(x => x.id === snapshot.effect); if (e) currentArtEffect = e; }
            if (snapshot.effectEnabled !== undefined) effectEnabled = snapshot.effectEnabled;
            if (snapshot.previewMode) currentPreviewMode = snapshot.previewMode;
            if (effectEnabled && currentArtEffect) applyArtEffect(currentArtEffect);
            else applyArtEffect(null);
            updateActiveCards();
            updateFavoriteBtn();
            updateEffectCurrentInfo();
            renderEffectFloatGrid();
            renderEffectFloatParams();
            if (activeTab === 'preview') renderPreview();
            saveState();
        }

        // ============================================
        // 导出格式切换
        // ============================================
        let currentExportFormat = 'tailwind';
        function switchExportFormat(fmt) {
            currentExportFormat = fmt;
            const btnContainer = document.getElementById('export-format-btns');
            if (btnContainer) {
                btnContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                const btn = document.getElementById('export-btn-' + fmt);
                if (btn) btn.classList.add('active');
            }
            const codeBlock = document.getElementById('export-code-block');
            if (codeBlock) {
                const pre = codeBlock.querySelector('pre');
                if (pre) {
                    if (fmt === 'tailwind') pre.textContent = Exporter.tailwind();
                    else if (fmt === 'css') pre.textContent = Exporter.cssVariables();
                    else if (fmt === 'figma') pre.textContent = Exporter.figmaTokens();
                    else if (fmt === 'swift') pre.textContent = Exporter.swiftUI();
                    else if (fmt === 'compose') pre.textContent = Exporter.compose();
                }
            }
        }

        function copyExportCode() {
            let text = '';
            if (currentExportFormat === 'tailwind') text = Exporter.tailwind();
            else if (currentExportFormat === 'css') text = Exporter.cssVariables();
            else if (currentExportFormat === 'figma') text = Exporter.figmaTokens();
            else if (currentExportFormat === 'swift') text = Exporter.swiftUI();
            else if (currentExportFormat === 'compose') text = Exporter.compose();
            navigator.clipboard.writeText(text).then(() => showToast('代码已复制！'));
        }

        // ============================================
        // 艺术效果参数预设
        // ============================================
        function applyEffectPreset(level) {
            if (!currentArtEffect || !currentArtEffect.parameters) return;
            const presets = CONFIG_REGISTRY.effects.presets[currentArtEffect.id];
            if (!presets) return;
            currentArtEffect._paramValues = currentArtEffect._paramValues || {};
            currentArtEffect.parameters.forEach(p => {
                const base = presets[p.id] !== undefined ? presets[p.id] : p.default / 100;
                const factor = level === 'light' ? 0.5 : level === 'heavy' ? 1.5 : 1.0;
                currentArtEffect._paramValues[p.id] = Math.min(1, Math.max(0, base * factor));
            });
            renderEffectFloatParams();
            if (effectEnabled) {
                applyArtEffect(currentArtEffect);
                updateActiveCards();
            }
            saveState();
            showToast(`已应用${level === 'light' ? '轻度' : level === 'heavy' ? '强烈' : '标准'}预设`);
        }

        // Close modal when clicking outside or pressing Escape
        document.getElementById('detail-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modal = document.getElementById('detail-modal');
                if (!modal.classList.contains('hidden')) {
                    closeModal();
                }
            }
        });

        // Enhanced keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            // Undo / Redo
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                e.preventDefault();
                if (e.shiftKey) redoState();
                else undoState();
            }
        });
