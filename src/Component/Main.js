import React, { useState,useEffect } from 'react'
import Form from './Form'
import Data from './Data'
import { API,posts } from './Constant' 
import '../Component/Form.css'
export default function Main() {

    const [user,setuser]=useState(posts)
    const [userlist,setuserlist]=useState([])
    const [update,setupdate]=useState(false)
    const [isedit,setisedit]=useState(false)

    const getdata= async()=>{
     const resp=await fetch(API)
     const data=await resp.json()
     setuserlist(data)

    }
      useEffect(()=>{
          getdata()
     },[update]);
  return (
    <div className='main'>
        <Form user={user} setuser={setuser} setupdate={setupdate} isedit={isedit} setisedit={setisedit}/>
        <Data userlist={userlist} setuser={setuser} setisedit={setisedit} setupdate={setupdate} user={user}/>
    </div>
  )
}
