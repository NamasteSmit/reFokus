import React from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Cards from './components/Cards';
const App = ()=>{

    return (
        <div className='w-full h-screen bg-zinc-900 text-white'>
           <Navbar/>
           <Work/>
           <Stripes/>
           <Cards/>
        </div>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);