import { FC } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import type { FormItemProps } from 'antd/es/form'
import type { InputProps } from 'antd/es/input'

import OForm from '../OForm'
import OInput from '../OInput'
import { StyledDynamicInput, StyledOSpace } from './styled'

export interface IDynamicDataSource {
  key: string
  value?: string | undefined
  required?: boolean
  fromItemProps?: Omit<FormItemProps, 'rules'>
  inputProps?: InputProps
}

export interface IDynamicInputProps {
  name: string
  label?: string
  dataSource?: Array<IDynamicDataSource>
}

const IDynamicInput: FC<IDynamicInputProps> = ({ name: fileName, label = '', dataSource = [] }) => {
  const initialValue = dataSource.reduce((prev: any, next: any) => {
    return {
      ...prev,
      [next.key]: next.value
    }
  }, {})

  return (
    <StyledDynamicInput>
      <OForm.List name={fileName} initialValue={[initialValue]}>
        {(fields, { add, remove }) => (
          <>
            <OForm.Item label={label}>
              {fields.map(({ key, name, ...restField }, index: number) => {
                const showPlus: boolean = index + 1 === fields.length
                return (
                  <StyledOSpace key={key} align="baseline">
                    {dataSource.map((source: IDynamicDataSource) => {
                      const { required = true, fromItemProps = {}, inputProps = {} } = source
                      return (
                        <OForm.Item
                          key={source.key}
                          {...fromItemProps}
                          {...restField}
                          name={[name, source.key]}
                          rules={[{ required }]}
                        >
                          <OInput {...inputProps} />
                        </OForm.Item>
                      )
                    })}
                    {showPlus ? (
                      <PlusOutlined onClick={() => add(name)} />
                    ) : (
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    )}
                  </StyledOSpace>
                )
              })}
            </OForm.Item>
          </>
        )}
      </OForm.List>
    </StyledDynamicInput>
  )
}

export default IDynamicInput
