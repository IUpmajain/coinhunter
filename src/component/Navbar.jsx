import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../assets/images-removebg-preview.png"
import {FaHome} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand"><img src={Image} alt="Coin Status" height={50} width={90} /></Link>
<span>
<Link to={"/pagesearch"} className='btn btn-danger'>Search</Link>
    <Link to={"/"} className='ms-2 fs-5 text-dark'><FaHome/></Link>
</span>
    </div>
    </nav>
  )
}

export default Navbar;
