import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const root = () => {
  return (
    <>
    {/* Outlet change hunxa sabai page ma baki same to same */}
      <Navbar/>

        <Outlet />

      <Footer/>
    </>
  )
}

export default root
