// import Image from 'next/image'

// export default function Home() {
//   return (
//    // data fetching in next.js

//    async function getData() {
//     const res = await fetch('https://api.example.com/...')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }

//     return res.json()
//   }
//   )
// }

import Image from "next/image";
function Home({ params }) {
  return async function getData() {
    const res = await fetch(`https://api.example.com/posts/${params.id}`, {
      cache: "no-store",
    });
    
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  };
}

export default Home;
