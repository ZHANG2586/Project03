import React from 'react'
import Login from './loginView'
import ShowLoginSate  from './showLoginState'
import {UserProvider} from './userProvder'

export default function userlogin(params) {
    return (
        <>
        
           <UserProvider>
               <Login/>
               <ShowLoginSate/>
           </UserProvider>
        
        </>
    );   
}