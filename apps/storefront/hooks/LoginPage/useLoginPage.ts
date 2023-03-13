import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { formatMessage } from '@ocloud/ui'

export const useLoginPage = () => {
  const {
    control,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    handleSubmit
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      images: [],
      option: '',
      radio: '',
      checkbox: false,
      quantity: 10,
      color: '',
      size: ''
    }
  })
  const [loading, setLoading] = useState<boolean>(false)

  const options = [
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'React',
      value: 'react'
    },
    {
      label: 'Vue',
      value: 'vue'
    }
  ]

  const swatchOptions: any[] = [
    {
      label: 'Select Color',
      value: 'color',
      options: [
        {
          label: 'Black',
          value: 'blank',
          url: 'https://us.olicdn.com/image/bk-11s5hv.jpg@40w_40h_50q.webp'
        },
        {
          label: 'Desert Tan',
          value: 'desert_tan',
          url: 'https://us.olicdn.com/image/dt-truoaw.jpg@40w_40h_50q.webp'
        }
      ]
    },
    {
      label: 'Select Size',
      value: 'size',
      options: [
        {
          label: '200x30x30',
          value: '200x30x30'
        },
        {
          label: '200x30x60',
          value: '200x30x60'
        },
        {
          label: '200x30x90',
          value: '200x30x90'
        }
      ]
    }
  ]

  const handleOptionChange = (params: any) => {
    console.info(params)
  }

  const handleValidEmail = (value: string) => {
    const regexp: RegExp =
      /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i

    return regexp.test(value) || formatMessage({ id: 'validate.email' })
  }

  const handleValidPassword = (value: string) => {
    let counter: number = 0
    const minLength: number = 6
    const minCharacterSets: number = 3

    if (value.length < minLength) {
      return formatMessage(
        { id: 'validate.passwordLenth' },
        {
          number: minLength
        }
      )
    }

    if (value.match(/\d+/)) counter++
    if (value.match(/[a-z]+/)) counter++
    if (value.match(/[A-Z]+/)) counter++
    if (value.match(/[^a-zA-Z0-9]+/)) counter++

    return (
      counter >= minCharacterSets ||
      formatMessage(
        { id: 'validate.password' },
        {
          number: minCharacterSets
        }
      )
    )
  }

  const handleFormSubmit = handleSubmit(async (values: any) => {
    setLoading(true)
    console.info(values)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return {
    control,
    errors,
    loading,
    options,
    swatchOptions,
    getValues,
    setValue,
    trigger,
    handleOptionChange,
    handleFormSubmit,
    handleValidEmail,
    handleValidPassword
  }
}
