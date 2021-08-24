import React, { useReducer } from 'react';

export const UserContext=new React.createContext({});
export const reduce=(userInfo,action)=>{
            if(action.error){
                return {error:action.error};
            }
            return action;
}

export const UserProvider=(props)=>{
    const [userInfo,userDispatch]=new useReducer(reduce,{});
    return (
        <>
             <UserContext.Provider value={{userInfo,userDispatch}}>     
                     {props.children}
             </UserContext.Provider>
        </>
    );
}
