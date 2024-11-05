import { useState, useCallback, Dispatch, SetStateAction } from 'react'

/*
Since we are only using the useLocalStorage hook from the react-use lib in ricardo-common
and importing the complete lib is creating errors on listing-form-spa
We are only extracting the useLocalStorage hook from the react-use project in this file

You can find the react-use project here :  https://github.com/streamich/react-use
 */

type ParserOptions<T> =
  | {
      raw: true
    }
  | {
      raw: false
      serializer: (value: T) => string
      deserializer: (value: string) => T
    }

const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
  options?: ParserOptions<T>
): [T | undefined, Dispatch<SetStateAction<T | undefined>>, () => void] => {
  const noop = () => {}
  const isBrowser = typeof window !== 'undefined'

  if (!isBrowser) {
    return [initialValue as T, noop, noop]
  }
  if (!key) {
    throw new Error('useLocalStorage key may not be falsy')
  }

  // eslint-disable-next-line no-nested-ternary
  const deserializer = options
    ? options.raw
      ? (value: string) => value
      : options.deserializer
    : JSON.parse

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState<T | undefined>(() => {
    try {
      // eslint-disable-next-line no-nested-ternary
      const serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify

      const localStorageValue = localStorage.getItem(key)
      if (localStorageValue !== null) {
        return deserializer(localStorageValue)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      initialValue && localStorage.setItem(key, serializer(initialValue))
      return initialValue
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue
    }
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const set: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (valOrFunc) => {
      try {
        const newState =
          typeof valOrFunc === 'function'
            ? (valOrFunc as (state: T | undefined) => void)(state)
            : valOrFunc
        if (typeof newState === 'undefined') return
        let value: string

        if (options)
          if (options.raw)
            if (typeof newState === 'string') value = newState
            else value = JSON.stringify(newState)
          else if (options.serializer) value = options.serializer(newState)
          else value = JSON.stringify(newState)
        else value = JSON.stringify(newState)

        localStorage.setItem(key, value)
        setState(deserializer(value))
      } catch {
        // If user is in private mode or has storage restriction
        // localStorage can throw. Also JSON.stringify can throw.
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, setState]
  )

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key)
      setState(undefined)
    } catch {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key, setState])

  return [state, set, remove]
}

export default useLocalStorage
