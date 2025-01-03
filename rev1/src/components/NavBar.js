import React from 'react'
import  {useNavigate } from 'react-router-dom'


function NavBar() {
    const navigate = useNavigate()

    const goToHome =()=>{
        navigate('/');
    }

    const goToMySite =()=>{
        navigate('/mysite');
    }

    const goToLogin =()=>{
        navigate('/login');
    }


  return (
    <div>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToMySite}>MySite</button>
      <button onClick={goToLogin}>Login</button>
    </div>
  )
}

export default NavBar
