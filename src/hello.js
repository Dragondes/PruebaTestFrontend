import React from 'react';
import { useEffect, useState } from 'react';

export const Hello = ()=> {
    const [initialState, setIntialState] = useState([])
    
    useEffect (()=>{
        fetch('/hello').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setIntialState(jsonResponse))
    },[])
    
    console.log(initialState)
 
    return(<div>
        {initialState.mensaje}
    </div>
    )
}