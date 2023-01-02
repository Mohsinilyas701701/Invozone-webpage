import React from 'react'
import './Navbar.css'
import Logo from '../../Images/InvoZone_Logo.webp'
import Button from '../Button/NavButton/Button'


const Navbar =() => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container">
    <img  src={Logo} alt="InvoZone" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav my-2 ms-auto">
        <li class="nav-item">
          <a class="nav-link active text-white me-3" aria-current="page" href="#">Services </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white me-3" aria-current="page" href="#">Industries</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white me-3" aria-current="page" href="#">Hire Developers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white me-3" aria-current="page" href="#" aria-disabled="true">Content Hub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white me-3" aria-current="page" href="#" aria-disabled="true">Company</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white me-5" aria-current="page" href="#">Pricing</a>
        </li>
      </ul>
      <Button />
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
