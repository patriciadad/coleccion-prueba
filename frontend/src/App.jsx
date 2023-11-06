import React from 'react'
//import './App.css';
import Login from './components/Login'
import Home from './components/Home'
//import Pruebas from './components/Pruebas'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
       
    <RouterProvider router={router} />
  );
}

export default App;




/*
div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/