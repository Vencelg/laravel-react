import { useMutation } from 'react-query';
import api from "../scripts/api"

export default function useChangePassword() {
  return useMutation(
    (values) => api.post('/password/change', values).then((res) => res.data),
    {
      onError: (error, _newProblem, rollback) => {
        console.error(error);
        if (rollback) rollback()
      }
    }
  )
}