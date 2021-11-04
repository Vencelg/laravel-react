import { useMutation } from 'react-query';
import api from "../scripts/api"

export default function useFixProblem(problemId) {
  return useMutation(
    (values) => api.post(`/problem/${problemId}`, values).then((res) => res.data),
    {
      onError: (error, _newProblem, rollback) => {
        console.error(error);
        if (rollback) rollback()
      }
    }
  )
}