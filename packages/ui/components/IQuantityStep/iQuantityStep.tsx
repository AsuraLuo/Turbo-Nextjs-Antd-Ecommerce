import { FC } from 'react'

import type { ButtonProps } from 'antd/es/button'
import type { FormItemProps } from 'antd/es/form'
import type { InputProps } from 'antd/es/input'

import OForm from '../OForm'
import IQuantity from './iQuantity'

interface IQuantityStepProps {
  name?: string
  label?: string
  required?: boolean
  min?: number
  max?: number
  step?: number
  initValue?: number
  buttonProps?: ButtonProps
  forItemProps?: Omit<FormItemProps, 'label' | 'name' | 'rules'>
  inputProps?: Omit<InputProps, 'type' | 'value'>
}

const IQuantityStep: FC<IQuantityStepProps> = ({
  name = 'quantity',
  label = '调整数量',
  required = true,
  min = 1,
  max = 10,
  step = 3,
  initValue = 1,
  buttonProps = {},
  forItemProps = {},
  inputProps = {}
}) => {
  return (
    <OForm.Item name={name} label={label} rules={[{ required }]} {...forItemProps}>
      <IQuantity
        min={min}
        max={max}
        name={name}
        step={step}
        initValue={initValue}
        buttonProps={buttonProps}
        inputProps={inputProps}
      />
    </OForm.Item>
  )
}

export default IQuantityStep
