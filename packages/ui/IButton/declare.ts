export type IButtonType = 'add' | 'delete' | 'update' | 'query' | 'import' | 'export'

export type IButtonValueType = {
  buttonColor: string
  buttonFontSize: number
  buttonBackground: string
  buttonText: string
}

export type IButtonConfigType = {
  [key in IButtonType]: IButtonValueType
}

export const IButtonConfig: IButtonConfigType = {
  add: {
    buttonColor: '#000',
    buttonFontSize: 14,
    buttonBackground: '#fff',
    buttonText: '新增'
  },
  delete: {
    buttonColor: '#000',
    buttonFontSize: 14,
    buttonBackground: '#fff',
    buttonText: '删除'
  },
  update: {
    buttonColor: '#000',
    buttonFontSize: 14,
    buttonBackground: '#fff',
    buttonText: '更新'
  },
  query: {
    buttonColor: '#000',
    buttonFontSize: 14,
    buttonBackground: '#fff',
    buttonText: '查询'
  },
  import: {
    buttonColor: '#000',
    buttonFontSize: 14,
    buttonBackground: '#fff',
    buttonText: '导入'
  },
  export: {
    buttonColor: '#000',
    buttonFontSize: 14,
    buttonBackground: '#fff',
    buttonText: '导出'
  }
}
