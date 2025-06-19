import React, { use, useEffect, useState } from 'react';
import { Authcontext } from '../Context/Authcontext';
import { useNavigate } from 'react-router';

const Myapply = () => {
        const { user } = use(Authcontext);
        console.log(user)
      const [mypost, setMypost] = useState([]);
      const navigate =useNavigate();
       
       useEffect(() => {
           if (user?.email) {
             fetch(`http://localhost:3000/myapply?email=${user?.email}`)
               .then((res) => res.json())
               .then((data) => setMypost(data));
           }
         }, [user]);

    return (
     <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-3xl mt-6 mb-8 text-center">My Marathon List</h2>

      {mypost.length === 0 ? (
        <p className="text-2xl font-bold text-center">No Posts Available</p>
      ) : (
        <div>
          <div className="mt-8 mb-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-green-500">
                    <th>#</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Update User</th>
                  </tr>
                </thead>
                <tbody>
                  {mypost.map((post, index) => (
                    <tr className="bg-[#020079] text-white" key={index}>
                      <th >{index + 1}</th>
                   
                      <td>{post.title}</td>
                      <td>{post.first}</td>
                      <td>{post.number}</td>
                      <td>{post.email}</td>
                      <td> <button onClick={()=>navigate()} className="btn btn-success mr-3">Update</button> 
                      
                       <button className="btn btn-secoendery">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default Myapply;