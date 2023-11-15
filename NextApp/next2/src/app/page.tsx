import Image from 'next/image'

export default function Home() {
  return (
   // data fetching in next.js



   let res = await fetch('https://.../posts');

   if(res.status === 200){
     const posts = await res.json();
     console.log(posts);
  )
}
