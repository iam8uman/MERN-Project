
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Github = () => {
  const count = useLoaderData();
  // same task can be done with the help of loader
  //   const [count, setCount] = useState([]);

  //   useEffect(() => {
  //     fetch('https://api.github.com/users/iam8uman')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         console.log(data)
  //         setCount(data)})
  //   }, []);
  return (
    <div className="bg-stone-700 rounded-md text-center text-3xl m-10 p-10 text-white">
      github followers: {count.followers}

    <img src={count.avatar_url} height={`200px`} width={`200px`}/>
    </div>
  );
};

export default Github;

// loader vanne kura le hover garda nai data fetch garera cache ma rakhxa
// So no lagging
export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/iam8uman");
  return response.json();
};
