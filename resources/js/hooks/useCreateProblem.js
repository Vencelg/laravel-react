import { useMutation, queryCache } from 'react-query';
import api from "../scripts/api"

export default function useCreateProblem() {
  return useMutation(
    (values) => api.post('/problems', values).then((res) => res.data),
    {
      onMutate: (newProblem) => {
        const oldProblems = queryCache.getQueryData('problems')

        if (queryCache.getQueryData('problems')) {
          queryCache.setQueryData('problems', old => [...old, newProblem])
        }

        return () => queryCache.setQueryData('problems', oldProblems)
      },
      onError: (error, _newProblem, rollback) => {
        console.error(error);
        if (rollback) rollback()
      },
      onSettled: () => {
        queryCache.invalidateQueries('problems');
      }
    }
  )
}