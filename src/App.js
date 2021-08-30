import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Main from './components/Main'
function App() {
  return (
    <div className="App"> 

    {/* <Navbar /> */}
      <Main />
    </div>
  );
}

export default App;