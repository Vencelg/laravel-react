import React from 'react'
import { useQuery, queryCache } from 'react-query';
import api from "../scripts/api"

export const fetchProblem = (problemId) =>
  api.get(`/problem/${problemId}`).then((res) => res.data)

export default function useProblem(problemId) {
  return useQuery(
    ['problems', problemId],
    () => fetchProblem(problemId), {
      initialData: () => { 
        return queryCache.getQueryData('problems')?.find(d => d.id == problemId)
      },
      initialStale: true
    }
  )
}