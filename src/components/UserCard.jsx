import React from 'react'
import { useNavigate } from 'react-router';

export const UserCard =({

    item={id:0,name:'name',username:'username',email:'email',phone:'phone',website:'wesite'}
})=>{
    const navig=useNavigate();
    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5><br />
                <p className="card-text"><b>Username : </b> {item.username}</p>
                <p className="card-text"><b>Email : </b> {item.email}</p>
                <p className="card-text"><b>Phone : </b><br /> {item.phone}</p>              
                <button className='btn btn-outline-primary' onClick={()=>navig(`/users/${item.id}`)} >More Details</button>
            </div>
        </div>
    )
}
