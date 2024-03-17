import React, { useEffect } from 'react'
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState} from 'react';
import Hackathons from './pages/Hackathons';
import IdeaSubmission from './pages/IdeaSubmission';
import Results from './pages/Results';
import Judge from './components/Judge';
import YourComponent from './components/PanelHackathonDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHackathons } from './features/hackathon/hackathonSlice';
export const CreateContext=React.createContext()
const Provider=CreateContext.Provider
function App() {
 
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch()
 
  const hackathons=useSelector(state=>state.hackathon.hackathons.data) 
  const arr = hackathons?hackathons.data:[]
  const [details,setDetails]=useState(arr[0])
  useEffect(()=>{
    dispatch(fetchHackathons())
  },[dispatch])
  useEffect(()=>{
    setDetails(arr[0])
  },arr)
  return (
    <Provider value={{
      arr,
      details,
      setDetails,
      open,
      setOpen}}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path='hackathons' element={<Hackathons/>}/>
        <Route path='ideasubmission' element={<IdeaSubmission/>}/>
        <Route path='results' element={<Results/>}/>
        
      </Routes>
      </BrowserRouter>
      {/* <Judge arr={arr}/> */}
      {/* <YourComponent arr={arr}/> */}
      
    </div>
    </Provider>
  );
}


export default App;
