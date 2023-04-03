export type IButtonCollection =
  | 'badcode'
  | 'add'
  | 'confirm'
  | 'cancel'
  | 'delete'
  | 'update'
  | 'upload'
  | 'query'
  | 'import'
  | 'export'
  | 'refresh'
  | 'save'
  | 'reset'
  | 'lock'
  | 'unlock'
  | 'filter'
  | 'next'
  | 'configuration'
  | 'return'
  | 'moveup'
  | 'movedown'
  | 'submit'

export type IButtonType = Exclude<IButtonCollection, 'badcode'>
export type IButtonBreakType = Extract<IButtonCollection, 'badcode'>

export type IButtonValueType = {
  buttonColor: string
  buttonFontSize: number
  buttonBackground: string
  buttonBorderColor: string
  buttonText: string
}

export type IButtonConfigType = {
  [key in IButtonType]: IButtonValueType
}

export type IButtonBreakConfigType = {
  [key in IButtonBreakType]: IButtonValueType
}
