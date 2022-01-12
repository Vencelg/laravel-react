import { useMutation } from 'react-query';
import api from "../scripts/api"

export default function useRegisterUser() {
  return useMutation(
    (values) => api.post('/admin/users', values).then((res) => res.data),
    {
      onError: (error, _newUser, rollback) => {
        console.error(error);
        if (rollback) rollback()
      }
    }
  )
}