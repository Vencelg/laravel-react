import React from 'react'
import api from "../scripts/api"

export default function useDeleteProblem() {
  const [state, setState] = React.useReducer((_, action) => action, {
    isIdle: true,
  })

  const mutate = React.useCallback(async (problemId) => {
    setState({ isLoading: true })
    try {
      await api.delete(`/problem/${problemId}`).then((res) => res.data)
      setState({ isSuccess: true })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [])

  return [mutate, state]
}