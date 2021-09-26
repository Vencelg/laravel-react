import React from 'react'
import { useFetchTasks } from '../../hooks/useFetchTasks'
const Main = () => {
   useFetchTasks();
   return (
      <div>
         Kokot
      </div>
   )
}

export default Main
