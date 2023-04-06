import type { ThemeConfig } from 'antd/es/config-provider'

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#30B8BD',
    colorError: '#D11515',
    colorText: '#333',
    fontFamily: 'Microsoft YaHei, sans-serif',
    borderRadiusLG: 4,
    borderRadiusSM: 0,
    boxShadowSecondary: '0 0 7px 0 rgba(126,136,155,0.2)',
    paddingXXS: 0
  },
  components: {
    Button: {
      controlHeight: 34,
      colorPrimaryHover: '#00A9AF',
      colorBgContainerDisabled: '#EDEDED',
      colorTextDisabled: '#666666',
      borderRadius: 4,
      paddingContentHorizontal: 21
    },
    Input: {
      controlHeight: 34,
      colorText: '#221F1F',
      colorTextPlaceholder: '#BDBDBD',
      colorPrimaryHover: '#30B8BD',
      colorBgContainerDisabled: '#F8F8F8',
      borderRadius: 4,
      paddingSM: 13
    },
    Select: {
      controlHeight: 34,
      borderRadius: 4,
      paddingSM: 13,
      controlItemBgHover: '#F6F8FC',
      controlItemBgActive: '#F6F8FC'
    },
    Checkbox: {
      borderRadiusSM: 4
    },
    Radio: {
      colorBorder: '#E7E7E7'
    },
    Dropdown: {
      colorText: '#333333',
      borderRadius: 4
    },
    Modal: {
      borderRadius: 4
    },
    Pagination: {
      size: 28,
      borderRadius: 4,
      controlHeight: 26,
      controlHeightSM: 26
    },
    DatePicker: {
      borderRadius: 4
    },
    Table: {
      colorBgContainer: '#F8FCFC',
      borderRadiusLG: 0,
      paddingContentVerticalLG: 12,
      padding: 12
    }
  }
}
