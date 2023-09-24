// import React from 'react'
import { useParams } from "react-router";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl rounded-md p-4 mx-10 m-3">User ID:{userid}</div>
      <div className="bg-gray-600 text-white text-3xl rounded-md p-4 mx-10">User ID ko Next:{Number(userid) + 1}</div>;
    </>
  );
};

export default User;
