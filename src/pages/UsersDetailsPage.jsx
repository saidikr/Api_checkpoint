import React from 'react'
import { getArticle } from '../services/api_connect';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';



export const UsersDetailsPage = () => {
    const navig=useNavigate()
    const params=useParams();
    const {data,loading,error}=getArticle(`https://jsonplaceholder.typicode.com/users/${parseInt(params.id)}`);
  return (
    <div className="row details">
        {console.log(data)}
        {loading&&<h1>Loading.....</h1>}
        {error&&<h1 className="text-danger">Error Fetch.....</h1>}
        {data&&<div className="card shadow col-md-5 offset-3 my-5">
            <div className="card-body">
                <h5 className="card-title text-center">{data.name}</h5><br />
                <p className="card-text"><b>Username : </b> {data.username}</p>
                <p className="card-text"><b>Email : </b> {data.email}</p>
                <p className="card-text"><b>Phone : </b> {data.phone}</p>
                <p className="card-text"><b>Adress : </b> {data.address.street} {data.address.suite} {data.address.city} {data.address.zipcode} </p>
                <p className="card-text"><b>WebSite : </b> <a href={data.website}>{data.website}</a></p>
                <p className="card-text"><b>CompanyName : </b> {data.company.name}</p>
                <br />
                <button className='btn btn-outline-primary' onClick={()=>navig('/')} >HomePage</button>
            </div>
        </div>}
    </div>
  )
}
