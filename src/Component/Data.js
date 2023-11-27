import React from 'react'
import { API } from './Constant'

import '../Component/Data.css'
export default function Data({userlist,setuser,setisedit,setupdate}) {
   const handeldelete=async(id)=>{
    const resp=await fetch(`${API}/${id}`,{
      method:"Delete",
      headers:{
        "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      },
    })
    if(resp.status===200){
      alert('data has been delete successfully')
      setupdate((value)=>value)
    }
   }
  
  return (
    <div>
        <div className='table'>
            <thead>
                <tr className='data'>
                      <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Action</td>

                </tr>

            </thead>
            <tbody>
                
                    {userlist.map((user)=>(
                        <tr>
                          <td>{user.id}</td>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Password}</td>
                        <td>
                            <button className='btn1' onClick={()=>{setuser(user);setisedit(true)}} >Edit</button>
                            <button className='btn2' onClick={()=>handeldelete(user.id)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                
            </tbody>
        </div>
    </div>
  )
}
