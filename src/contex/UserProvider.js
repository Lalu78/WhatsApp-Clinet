import React, { useState, createContext } from 'react';

 export const UserContext=createContext(null)

function UserProvider({ children }) {
    
const [person,setPerson]=useState('')
  return (
      <UserContext.Provider
          value={{ person, setPerson }}
      >
         {children} 
    </UserContext.Provider>
  )
}
export default UserProvider
