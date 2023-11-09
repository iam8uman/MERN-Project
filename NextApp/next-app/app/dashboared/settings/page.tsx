import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h2 className='bg-slate-400 m-2 p-2 rounded-md text-white'>Dashboarddd <br /> Love to see that i actually learn routing in next</h2>
      <Link href='/Dash'>
        <div className='button m-2 rounded-md'>Go to Home</div>
        </Link>

        {/* post lai dekhaune kam gara */}
        <div className='flex flex-wrap'>
          <Link href='/' className='bg-purple-500 m-3 text-2xl p-2 rounded-md md:text-1xl'>Home</Link>
          <Link href='/dashboared' className='bg-purple-500 m-3 text-2xl p-2 rounded-md md:text-1xl'>Dashboared</Link>
          <Link href='/dashboared/settings' className='bg-purple-500 m-3 text-2xl p-2 rounded-md md:text-1xl'>Settings</Link>
          </div>
    </div>
  )
}

export default Dashboard
