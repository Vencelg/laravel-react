import { useMutation } from 'react-query';
import api from "../scripts/api"

export default function useFixProblem() {
  return useMutation(
    (values) => api.put('/problems', values).then((res) => res.data),
    {
      onError: (error, _newProblem, rollback) => {
        console.error(error);
        if (rollback) rollback()
      }
    }
  )
}