import React from 'react'
import NavBar from './components/navbar/NavBar';
import './App.css'
import Banner from './components/navbar/Banner/Bannner';
import RowPoster from './components/rowposter/rowposter';
import {originals,action} from './urls'





function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
   <RowPoster url={originals} title="netflix Originals" />
   <RowPoster url={action} title="Action" isSmall  />
   <RowPoster url={action} title="Drama" isSmall  />
    
    
    </div>
 

  );
}

export default App;
