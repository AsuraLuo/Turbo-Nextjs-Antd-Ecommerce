import { useRef } from 'react'
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer
  // px2remTransformer
} from '@ant-design/cssinjs'
import { ThemeConf } from '@config/theme'
import { ThemeProvider } from '@emotion/react'
import { store } from '@store/index'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import {
  OConfigProvider,
  OCssBaseline,
  OForm,
  OButton,
  OInput,
  OSelect,
  OTable,
  OPagination,
  OCheckbox,
  ORadio,
  IButton,
  IConfirmModal,
  IDynamicInput,
  IOperateButton,
  IWangEditor
} from '@ocloud/ui'
import type { IConfirmModalRef } from '@ocloud/ui'

import AppShell from '@components/AppShell'
import HttpProvider from '@components/HttpProvider'
import LocaleProvider from '@components/LocaleProvider'

const App = () => {
  const modelRef: IConfirmModalRef = useRef(null)

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true }
  ]

  const onFinish = (values: any) => {
    console.info('Received values of form:', values)
  }

  const handleApprovel = () => {
    modelRef.current?.openModal()
  }

  return (
    <ReduxProvider store={store}>
      <HttpProvider>
        <BrowserRouter>
          <LocaleProvider>
            <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
              <ThemeProvider theme={ThemeConf}>
                <OConfigProvider prefixCls={ThemeConf.namespace}>
                  <OCssBaseline />
                  <AppShell />
                  <div style={{ width: '500px', margin: '10rem auto' }}>
                    <OForm onFinish={onFinish}>
                      <IDynamicInput
                        name="users"
                        label="工作&仓库"
                        dataSource={[
                          { key: 'first', value: undefined },
                          { key: 'last', value: undefined }
                        ]}
                      />
                      <OForm.Item>
                        <OButton onClick={handleApprovel}>审核</OButton>
                        <IConfirmModal
                          ref={modelRef}
                          title="审核"
                          confirmText="审核通过"
                          showCancel={false}
                        >
                          <p>是否审核选中订单？</p>
                        </IConfirmModal>
                      </OForm.Item>
                      <OForm.Item>
                        <IOperateButton type="cancel" />
                      </OForm.Item>
                      <OForm.Item>
                        <IButton type="refresh" />
                      </OForm.Item>
                      <OForm.Item>
                        <IButton type="delete" />
                      </OForm.Item>
                      <OForm.Item name="input">
                        <OInput placeholder="请输入内容" disabled />
                      </OForm.Item>
                      <OForm.Item name="name" rules={[{ required: true }]}>
                        <OSelect
                          options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true }
                          ]}
                        />
                      </OForm.Item>
                      <OForm.Item>
                        <OCheckbox.Group options={options} />
                      </OForm.Item>
                      <OForm.Item>
                        <ORadio defaultChecked={false}>Disabled</ORadio>
                        <ORadio defaultChecked disabled>
                          Disabled
                        </ORadio>
                      </OForm.Item>
                      <OForm.Item>
                        <OPagination total={85} defaultPageSize={20} defaultCurrent={1} />
                      </OForm.Item>
                      <OTable dataSource={dataSource} columns={columns} />
                      <IWangEditor />
                      <OForm.Item>
                        <OButton type="primary" htmlType="submit">
                          OButton
                        </OButton>
                      </OForm.Item>
                    </OForm>
                  </div>
                </OConfigProvider>
              </ThemeProvider>
            </StyleProvider>
          </LocaleProvider>
        </BrowserRouter>
      </HttpProvider>
    </ReduxProvider>
  )
}

export default App
