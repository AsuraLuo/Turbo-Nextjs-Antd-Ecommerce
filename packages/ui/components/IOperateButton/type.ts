export type IOperateButtonCollection = 'badcode' | 'add'

export type IOperateButtonType = Exclude<IOperateButtonCollection, 'badcode'>
export type IOperateButtonBreakType = Extract<IOperateButtonCollection, 'badcode'>

export type IOperateButtonValueType = {
  buttonColor: string
  buttonFontSize: number
  buttonBackground: string
  buttonBorderColor: string
  buttonText: string
}

export type IOperateButtonConfigType = {
  [key in IOperateButtonType]: IOperateButtonValueType
}

export type IOperateButtonBreakConfigType = {
  [key in IOperateButtonBreakType]: IOperateButtonValueType
}
