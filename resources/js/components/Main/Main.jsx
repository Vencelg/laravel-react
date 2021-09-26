import React from 'react'
import { useFetchTasks } from '../../hooks/useFetchTasks'
const Main = () => {
   const { data, isError, error, isLoading } = useFetchTasks();
   console.log({ data, isError, error, isLoading });
   return (
      <div>
         pičus
      </div>
   )
}

export default Main
