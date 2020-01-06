import { asAssetsPath } from './paths'

/** 应用标题 */
export const APP_TITLE = 'Electron Antd'

/** 应用主图标 (桌面) */
export const APP_ICON = asAssetsPath('app-icon/app-icon@256.png')

/** 亮色风格托盘图标 标准尺寸 16*16, 系统会自动载入 @2x 和 @3x */
export const TRAY_ICON_LIGHT = asAssetsPath('tray-icon/tray-icon-light.png')

/** 暗色风格托盘图标 (仅 macOS) */
export const TRAY_ICON_DARK = asAssetsPath('tray-icon/tray-icon-dark.png')