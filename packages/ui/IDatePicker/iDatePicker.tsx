import { FC } from 'react'
import type {
  DatePickerProps,
  MonthPickerProps,
  WeekPickerProps,
  RangePickerProps
} from 'antd/es/date-picker'

import DatePicker from '../ODatePicker'
import { StyledIDatePicker } from './styled'

export interface IDatePickerProps {
  type?: 'date' | 'week' | 'month' | 'quarter' | 'year' | 'range' | 'time'
  dateProps?: DatePickerProps
  weekProps?: WeekPickerProps
  monthProps?: MonthPickerProps
  quarterProps?: DatePickerProps
  yearProps?: DatePickerProps
  rangeProps?: RangePickerProps
  timeProps?: DatePickerProps
}

const IDatePicker: FC<IDatePickerProps> = ({
  type = 'date',
  dateProps = {
    showToday: false
  },
  weekProps = {},
  monthProps = {},
  quarterProps = {},
  yearProps = {},
  rangeProps = {},
  timeProps = {}
}) => {
  const defaultProps: DatePickerProps = {
    getPopupContainer: (node: HTMLElement) => node
  }

  switch (type) {
    case 'date':
      return <DatePicker {...defaultProps} {...dateProps} mode={type} />
    case 'week':
      return (
        <StyledIDatePicker>
          <DatePicker.WeekPicker {...defaultProps} {...weekProps} />
        </StyledIDatePicker>
      )
    case 'month':
      return <DatePicker.MonthPicker {...defaultProps} {...monthProps} />
    case 'quarter':
      return <DatePicker.QuarterPicker {...defaultProps} {...quarterProps} />
    case 'year':
      return <DatePicker.YearPicker {...defaultProps} {...yearProps} />
    case 'range':
      return (
        <DatePicker.RangePicker getPopupContainer={(node: HTMLElement) => node} {...rangeProps} />
      )
    default:
      return <DatePicker.TimePicker {...defaultProps} {...timeProps} />
  }
}

export default IDatePicker
