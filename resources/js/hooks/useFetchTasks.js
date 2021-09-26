import api from "../scripts/api"
import { useState, useEffect } from 'react'
import { useQuery } from "react-query";

const getTasks = async () => {
   const { data } = await api.get('/problems');
   return data;
};


export const useFetchTasks = () => {
   const { data, isError, error, isLoading } = useQuery('tasks', getTasks);
   console.log(data, isError, error, isLoading);
}