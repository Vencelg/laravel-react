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

export const useAddTask = async(formData) =>{
   const {mutateAsync, isLoading: isAdding, error: addError} = useMutation(addTask);

  
    

    return {isAdding,addError, mutateAsync};
}