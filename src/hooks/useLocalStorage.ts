import { formatISO, addMinutes, parseISO, toDate } from 'date-fns'
import React, { Dispatch, SetStateAction } from 'react'

import useLocalStorageOriginal from './react-use/useLocalStorage'

const isExpired = (expirationDate: string) => {
  try {
    const expiresAt = expirationDate ? parseISO(expirationDate) : null
    if (!expiresAt) {
      return true
    }

    return new Date(Date.now()) >= toDate(expiresAt)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return true
  }
}

type Options = {
  expiresInMinutes?: number
}
type InternalState<T> = {
  value: T | undefined // = state of consumer of hook
  expirationDate?: string // consumer of hook won't see that
}
type SetStateCallback<T> = (consumerState: T | undefined) => T

const getNewInternalState = <T>(value?: T, expiresInMinutes?: number): InternalState<T> => ({
  value,
  expirationDate:
    typeof expiresInMinutes === 'number'
      ? formatISO(addMinutes(Date.now(), expiresInMinutes))
      : undefined,
})

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  { expiresInMinutes }: Options = {}
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const [isMounted, setIsMounted] = React.useState(false)
  const [originalState, setOriginalState, remove] = useLocalStorageOriginal<InternalState<T>>(
    key,
    getNewInternalState(defaultValue, expiresInMinutes)
  )
  React.useEffect(() => {
    setIsMounted(true)
  }, [setIsMounted])

  const getConsumerState = () => {
    const lsExpirationDate = originalState?.expirationDate

    if (lsExpirationDate && isExpired(lsExpirationDate)) {
      setOriginalState(getNewInternalState(defaultValue, expiresInMinutes))
      return defaultValue
    }

    return originalState?.value === undefined ? defaultValue : originalState.value
  }
  const consumerState = getConsumerState()

  const setValue: Dispatch<SetStateAction<T>> = React.useCallback(
    (valOrFunc) => {
      const newValue =
        typeof valOrFunc === 'function'
          ? (valOrFunc as SetStateCallback<T>)(consumerState)
          : valOrFunc
      setOriginalState(getNewInternalState(newValue, expiresInMinutes))
    },
    [setOriginalState, consumerState, expiresInMinutes]
  )

  // When doing SSR, we don't have the localstorage!
  // To avoid having 2 different HTML versions client side and server side, we need to check if it is mounted
  if (!isMounted) {
    return [defaultValue, setValue, remove]
  }

  return [consumerState, setValue, remove]
}
