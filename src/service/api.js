import axios from 'axios';
 const URL = 'http://localhost:8000';
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`,data)
        
    } catch (error)
    {
        console.log("error while calling addUser api",error)
    }
    
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/users`);
        console.log(response)
        return response.data;
        
    }catch (error)
    {
      console.log("error while calling getUsers api",error)
    }
}

export const setConversation = async (data) => {
    try {
        
        await axios.post(`${URL}/conversation/add`,data)
        
    } catch (error)
    {
        console.log("error while calling setconversation api",error)
    }
}

export const getConversatioin = async (data) => {
    try {
        const response = await axios.post(`${URL}/conversation/get`, data);
        return response.data;
        
    } catch (error)
    {
        console.log("errror while calling getconversation api",error)
    }
}

export const newMessage = async (data) => {
    try {
        const response = await axios.post(`${URL}/message/add`, data);
        return response.data;
        
    } catch (error)
    {
        console.log("errror while calling newMessage api",error)
    }
}


export const getMessage = async (id) => {
    try {
        const response = await axios.get(`${URL}/message/get/${id}`);
        return response.data;
        
    } catch (error)
    {
        console.log("errror while calling getMessage api",error)
    }
}