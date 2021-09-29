import { useMutation, queryCache } from 'react-query';
import api from "../scripts/api"

export default function useCreateProblem() {
  return useMutation(
    (values) => api.post('/problems', values).then((res) => res.data),
    {
      onError: (error, _newProblem, rollback) => {
        console.error(error);
        if (rollback) rollback()
      }
    }
  )
}