import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Variants } from "framer-motion"

export const publicPaddingStyle = css`
  padding: 0 16px;
  box-sizing: border-box;
`

export const baseLabelStyle = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ListLabelStyle = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  font-weight: 400;
`

export function applyLabelStyle(isInList?: boolean): SerializedStyles {
  return isInList ? ListLabelStyle : baseLabelStyle
}

export function applyLabelTipsStyle(isInList?: boolean): SerializedStyles {
  const labelStyle = applyLabelStyle(isInList)
  return css`
    ${labelStyle};
    border-bottom: 1px dashed ${globalColor(`--${illaPrefix}-grayBlue-07`)};
  `
}

export const panelHeaderWrapperStyle = css`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  ${publicPaddingStyle}
`

export const panelHeaderIconWrapperStyle = css`
  cursor: pointer;
`

export const panelBarHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  cursor: pointer;
  ${publicPaddingStyle};
`

export const panelBarTitleStyle = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  font-weight: 500;
  font-size: 14px;
`

export function applyPanelBarOpenedIconStyle(
  isOpened: boolean,
): SerializedStyles {
  const rotate = isOpened
    ? ""
    : css`
        transform: rotate(180deg);
      `
  return css`
    font-size: 12px;
    transition: transform 200ms;
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    ${rotate}
  `
}

export const panelBarItemContentStyle = css`
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  position: relative;
  overflow: hidden;
`

export const panelBarItemAnimation: Variants = {
  enter: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
}

export function applySetterWrapperStyle(
  isSetterSingleRow: boolean = false,
  isInList: boolean = false,
  isSetterSingleRowWrapper: boolean = false,
  useCustomLayout: boolean = false,
): SerializedStyles {
  if (useCustomLayout) {
    return css``
  }
  if (isSetterSingleRow) {
    return css`
      ${publicPaddingStyle}
    `
  }

  const basicStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${isInList ? "40px" : "48px"};
  `
  const wrappedStyle = css`
    height: auto;
  `
  return css`
    ${publicPaddingStyle};
    ${isSetterSingleRowWrapper ? wrappedStyle : basicStyle};
  `
}

export const unselectedTipWrapperStyle = css`
  width: 100%;
  height: 319px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const unselectedTipIconStyle = css`
  font-size: 30px;
`

export const unselectedTipTextStyle = css`
  margin-top: 4px;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const singleSelectedPanelWrapperStyle = css`
  width: 100%;
`

export const singleSelectedPanelSetterWrapperStyle = css`
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`