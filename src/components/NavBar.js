// import React,{useEffect} from 'react'
import { Link,useHistory } from "react-router-dom";
export default function NavBar() {
  let history=useHistory();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    history.push('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook-vault</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link `} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link `} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary m-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary m-1" to="/signup" role="button">SignUp</Link>
      </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}
