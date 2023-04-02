import { FC, useEffect } from 'react'

import type { ButtonProps } from 'antd/es/button'
import type { FormInstance } from 'antd/es/form'
import type { InputProps } from 'antd/es/input'

import OForm from '../OForm'
import OButton from '../OButton'
import OInput from '../OInput'
import { StyledIQuantity } from './styled'

interface IQuantityProps {
  min: number
  max: number
  name: string
  step: number
  initValue: number
  buttonProps: ButtonProps
  inputProps: Omit<InputProps, 'type' | 'value'>
}

const IQuantity: FC<IQuantityProps> = ({
  min,
  max,
  name,
  step,
  initValue,
  buttonProps,
  inputProps,
  ...props
}) => {
  const form: FormInstance = OForm.useFormInstance()

  const handleIncrease = () => {
    const value: string = form.getFieldValue(name)
    const param: number = Number(value)
    if (param - step >= min) {
      form.setFieldValue(name, param - step)
    }
  }

  const handleIecrease = () => {
    const value: string = form.getFieldValue(name)
    const param: number = Number(value)
    if (param + step <= max) {
      form.setFieldValue(name, param + step)
    }
  }

  useEffect(() => {
    form.setFieldValue(name, initValue)
  }, [initValue, form, name])

  return (
    <StyledIQuantity>
      <OButton {...buttonProps} onClick={handleIncrease}>
        -
      </OButton>
      <OInput type="number" {...inputProps} {...props} />
      <OButton {...buttonProps} onClick={handleIecrease}>
        +
      </OButton>
    </StyledIQuantity>
  )
}

export default IQuantity
