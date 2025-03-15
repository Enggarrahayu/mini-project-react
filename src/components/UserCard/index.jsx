import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({users}) => {
  return (
    <>
       {users.map((item, index) => (          
          <div key={index} className="flex flex-col px-6 mb-6 text-center sm:col-6 lg:col-4 sm:items-center">
            <div className="inline-flex justify-center member-avatar">
              <img
                className="rounded-full h-28 w-28"
                src={ item.avatar }
                alt={item.first_name}
              />
            </div>
            <div className="flex-1 w-full px-4 py-8 mt-6 bg-white shadow-lg rounded-xl">
             <h5 className="font-primary">{item.first_name} { item.last_name }</h5>
             <p className="mt-1.5">{item.email}</p>
             <button>
              <Link to={`/user-detail/${item.id}`} className="block w-full mt-2 btn btn-sm btn-primary sm:w-auto">Detail</Link>
           </button>
           </div>          
          </div>
        ))}
      
    </>
  );
};

export default UserCard;
