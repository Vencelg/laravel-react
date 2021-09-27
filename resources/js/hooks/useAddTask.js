import api from "../scripts/api"
import { useState, useEffect } from 'react'
import { useMutation } from "react-query";

const addTask = async (formData) => {
   try {
      const { data:response } = await api.post('/problems',formData);
      return response.data;
   } catch (error) {
      throw new Error(error)
   }
   
};

export const useAddTask = async(formData, refetch) =>{
   const {mutateAsync, isLoading: isAdding, error: addError} = useMutation(addTask);

   const data = await mutateAsync({
      ...formData
    });
    console.log(data);
    refetch();

    return {isAdding,addError};
}