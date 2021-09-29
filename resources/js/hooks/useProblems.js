import api from "../scripts/api"
import { useQuery, queryCache } from 'react-query';

export default function useProblems() {
  return useQuery(
    'problems', 
    () => api.get('/problems').then((res) => res.data),
  )
}