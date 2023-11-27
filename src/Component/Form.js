import { API,posts } from './Constant'
import React from 'react'

import '../Component/Form.css'

export default function Form({user,setuser,isedit,setisedit,setupdate}) {

    const handelragister= async()=>{
        const resp=await fetch(API,{
            method:"POST",
            headers:{
                "content-type": "application/json",
				"Access-Control-Allow-Origin": "*",

            },
            body:JSON.stringify(user)
         })
         if(resp.status === 201){
            alert('data has be creat succefuly')
            setuser(posts)
            setupdate((value)=>!value)
         }
        

    }



    const handelupdate= async()=>{
      const resp=await fetch(`${API}/${user.id}`,{
          method:"PUT",
          headers:{
              "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",

          },
          body:JSON.stringify(user)
       })
       if(resp.status === 200){
          alert('data has been update successfully')
          setuser(posts)
          setupdate((value)=>!value)
          setisedit(false)
       }
      

  }
   
    
  return (
    <div>
        <div className='div1'>
        <form method='post' onSubmit={(e)=>e.preventDefault()}>
          <label>Name</label>
          <br></br>
          <input type='text' value={user.Name}
           onChange={(e)=>setuser({...user,Name:e.target.value})} ></input>
          <br></br>
          <label>Email</label>
          <br></br>
          <input type='email' value={user.Email} 
          onChange={(e)=>setuser({...user,Email:e.target.value})}></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type='password' value={user.Password} 
          onChange={(e)=>setuser({...user,Password:e.target.value})}></input>
          <br></br>
          {isedit? <button type='update' onClick={handelupdate}>Update</button>
          :<button type='submit' onClick={handelragister}>Submit</button>}
        </form>
        </div>
    </div>
  )
}
