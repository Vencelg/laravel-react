import api from "../scripts/api"
import { useState, useEffect } from 'react'
import { useQuery } from "react-query";

const getTasks = async () => {
   try {
      const { data } = await api.get('/problems');
      return data;
   } catch (error) {
      throw new Error(error)
   }
   
};


export const useFetchTasks = () => {
   const { data, isError, error, isLoading, refetch } = useQuery('tasks', getTasks);
   return { data, isError, error, isLoading, refetch };
}