import React from 'react'
import { UserCard } from '../components/UserCard';
import { getArticle } from '../services/api_connect'


export const HomePage = () => {
    const {data,loading,error}=getArticle('https://jsonplaceholder.typicode.com/users');
  return (
<div className="container p-5">
            <h1 className="text-center">Product list</h1>
            {loading&&<h1>Loading.....</h1>}
            {error&&<h1 className="text-danger">Error Fetch.....</h1>}
            <div className="row mt-5">
                {data && data.map((item)=>{return(
                    <div key={item.id} className="col-md-3 mb-3">
                        <UserCard item={item}/>
                        </div>
                )
                })}
            </div>
        </div>
  )
}
