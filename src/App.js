import React,{useState , useEffect} from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import HashLoader from "react-spinners/HashLoader";
import './App.css';

const App = () => {
const  [loading,setLoading] = useState(false);

useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false)
  },3000)
},[])

  return(
    <div>
      {
        loading?
        <div className='loader'>
          <HashLoader
        color={"#d1e117"}
        loading={loading}
        size={100}
      />
        </div>
        :
        <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
      }
  </div>
  )
};

export default App;
