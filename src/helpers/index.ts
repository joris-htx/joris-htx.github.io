import { IntlShape } from 'react-intl'

type PrintDurationProps = {
  intl: IntlShape
  startDate: Date
  endDate?: Date
}

export const printDuration = ({ intl, startDate, endDate }: PrintDurationProps) => {
  const oneYearInMs = 1000 * 60 * 60 * 24 * 365
  const oneMonthInMs = 1000 * 60 * 60 * 24 * 30

  // Compute date difference in ms
  let diffInMs = (endDate || new Date()).getTime() - startDate.getTime()

  // Compute date difference in years
  const years = Math.floor(diffInMs / oneYearInMs)
  diffInMs %= oneYearInMs

  // Compute date difference in months
  const months = Math.floor(diffInMs / oneMonthInMs)
  diffInMs %= oneMonthInMs

  if (years > 0 && months > 0) {
    return intl.formatMessage(
      {
        id: 'JobTitle.Duration.YearsAndMonths',
        defaultMessage:
          '{years, plural, one {# year} other {# years}} and {months, plural, one {# month} other {# months}}',
      },
      { years, months }
    )
  }

  if (years > 0) {
    return intl.formatMessage(
      {
        id: 'JobTitle.Duration.Years',
        defaultMessage: '{years, plural, one {# year} other {# years}}',
      },
      { years }
    )
  }

  return intl.formatMessage(
    {
      id: 'JobTitle.Duration.Months',
      defaultMessage: '{months, plural, one {# month} other {# months}}',
    },
    { months }
  )
}
