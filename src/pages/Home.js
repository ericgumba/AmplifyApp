import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div >
      <header> 
        <h1>We now have Home!</h1>
      </header>
      <button> debate someone </button> 
        <Link to="/signup">
        <button variant="outlined">
            Sign up
        </button>
        </Link>  
    </div>
  );
}

export default Home;