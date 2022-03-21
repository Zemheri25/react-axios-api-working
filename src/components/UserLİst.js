import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import "./Userlist.css"

function UserLİst() {
    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState("https://reqres.in/api/users?page=1");



    useEffect((ChangeApi) => {
        axios({
            url : url,
            method : 'GET'
        }).then(response => setUsers(response.data.data))
        console.log(users)
        
    }, []);

    



  return (
    <div>
        <h1 className='h1'>USERS PAGE</h1>
    <div className='container'> 
        
        
        {users.map((item) => {
            
            return<div className="card" key={item.id}>
            <img src={`https://reqres.in/img/faces/${item.id}-image.jpg`} alt="" className='card-img-top'/>
            <div className="card-body">
              <h5 className="card-title">{item.first_name} {item.last_name}</h5>
              <p className="card-text">{item.email}</p>
              <a href="#" className="btn btn-primary">Portfolio</a>
            </div>
          </div>
        })}
        

        
    </div>

    </div>
  )
}

export default UserLİst