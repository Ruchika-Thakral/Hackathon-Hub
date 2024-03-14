// import { Button } from '@material-tailwind/react';
import React from 'react'
import EvaluatorRegistration from './components/EvaluatorRegistration';
import EvaluatorAssign from './components/EvaluatorAssign';
import AdminEvaluators from './components/AdminEvaluators';
import CreateHackathon from './components/CreateHackathon';
import AdminHackathons from './components/AdminHackathons';
import ListHackathon from './components/ListHackathon';
import ListEvaluator from './components/ListEvaluator';
// import AdminDashboard from './components/AdminDashboard';
import Results from './components/Results';
import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState} from 'react';
import Hackathons from './pages/Hackathons';
import IdeaSubmission from './pages/IdeaSubmission';
import Results from './pages/Results';
import Judge from './components/Judge';
import YourComponent from './components/PanelHackathonDropdown';
import Trial from './components/Trial';
export const CreateContext=React.createContext()
const Provider=CreateContext.Provider
function App() {
 
  const [open, setOpen] = useState(false);
  const arr1=[
    {id:1,name:"Hackathon 1",start:'1/1/2024',end:'1/12/2024'},
    {id:2,name:"Hackathon 2",start:'1/1/2024',end:'1/12/2024'},
    {id:3,name:"Hackathon 3",start:'1/1/2024',end:'1/12/2024'},
    {id:4,name:"Hackathon 4",start:'1/1/2024',end:'1/12/2024'}
]
const [details,setDetails]=useState(arr1[0]);
  
const arr = [
  {
      id: 1,
      name: "Hackathon 1",
      description: "Description of Hackathon 1",
      start: "1/1/2024",
      end: "1/12/2024",
      timeline: "Timeline of Hackathon 1",
      criteriaPoints: {
          criterion1: 10,
          criterion2: 20,
          criterion3: 15
      },
      teams: [
          { name: "Team A", idea: "Idea 1",image: "https://picsum.photos/900/350", description: "vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse" , github: "https://github.com/teamX", video: "https://youtube.com/teamX"},
          { name: "Team B", idea: "Idea 2",image: "https://picsum.photos/900/350", description: "vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse" , video: "https://youtube.com/teamY", googleDrive: "https://drive.google.com/teamY"},
          { name: "Team C", idea: "Idea 3", image: "https://picsum.photos/900/350",description: "Description for Team C", googleDrive: "https://drive.google.com/teamZ" },
          { name: "Team D", idea: "Idea 4",image: "https://picsum.photos/900/350", description: "Description for Team D", video: "https://youtube.com/teamY", googleDrive: "https://drive.google.com/teamY" },
          { name: "Team E", idea: "Idea 5",image: "https://picsum.photos/900/350", description: "Description for Team E", googleDrive: "https://drive.google.com/teamZ" },
          { name: "Team F", idea: "Idea 6",image: "https://picsum.photos/900/350", description: "Description for Team F", video: "https://youtube.com/teamY", googleDrive: "https://drive.google.com/teamY" },
      ]
  },
  {
      id: 2,
      name: "Hackathon 2",
      description: "Description of Hackathon 2",
      start: "1/1/2024",
      end: "1/12/2024",
      timeline: "Timeline of Hackathon 2",
      criteriaPoints: {
          criterion1: 15,
          criterion2: 25,
          criterion3: 20
      },
      teams: [
          { name: "Team X", idea: "Idea X",image: "https://picsum.photos/900/350", description: "Description for Team X" , googleDrive: "https://drive.google.com/teamZ"},
          { name: "Team Y", idea: "Idea Y",image: "https://picsum.photos/900/350", description: "Description for Team Y" , googleDrive: "https://drive.google.com/teamZ"},
          { name: "Team Z", idea: "Idea Z",image: "https://picsum.photos/900/350", description: "Description for Team Z", googleDrive: "https://drive.google.com/teamZ" }
      ]
  },
  {
      id: 3,
      name: "Hackathon 3",
      description: "Description of Hackathon 3",
      start: "1/1/2024",
      end: "1/12/2024",
      timeline: "Timeline of Hackathon 3",
      criteriaPoints: {
          criterion1: 12,
          criterion2: 22,
          criterion3: 17
      },
      teams: [
          { name: "Team P", idea: "Idea P",image: "https://picsum.photos/400/100", description: "Description for Team P" , googleDrive: "https://drive.google.com/teamZ"},
          { name: "Team Q", idea: "Idea Q",image: "https://picsum.photos/900/350", description: "Description for Team Q", googleDrive: "https://drive.google.com/teamZ" },
          { name: "Team R", idea: "Idea R",image: "https://picsum.photos/900/350", description: "Description for Team R", googleDrive: "https://drive.google.com/teamZ" }
      ]
  },
  {
      id: 4,
      name: "Hackathon 4",
      description: "Description of Hackathon 4",
      start: "1/1/2024",
      end: "1/12/2024",
      timeline: "Timeline of Hackathon 4",
      criteriaPoints: {
          criterion1: 18,
          criterion2: 28,
          criterion3: 23
      },
      teams: [
          { name: "Team M", idea: "Idea M",image: "https://picsum.photos/900/350", description: "Description for Team M", googleDrive: "https://drive.google.com/teamZ" },
          { name: "Team N", idea: "Idea N",image: "https://picsum.photos/900/350", description: "Description for Team N", googleDrive: "https://drive.google.com/teamZ" },
          { name: "Team O", idea: "Idea O",image: "https://picsum.photos/900/350", description: "Description for Team O", googleDrive: "https://drive.google.com/teamZ" }
      ]
  }
];
 
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
        <Route path='trial' element={<Trial />}/>
      </Routes>
      </BrowserRouter>
      {/* <Judge arr={arr}/> */}
      {/* <YourComponent arr={arr}/> */}
      
    </div>

    {/* <div className="App bg-gray-200 min-h-screen pb-4"> */}
      {/* <Button>Hello</Button> */}
      {/* <EvaluatorRegistration /> */}
      {/* <EvaluatorAssign /> */}
      {/* <AdminEvaluators /> */}
      {/* <CreateHackathon /> */}
      {/* <AdminHackathons /> */}
      {/* <ListHackathon /> */}
      {/* <ListEvaluator /> */}
      {/* <AdminDashboard /> */}
      {/* <Results/> */}
    {/* </div> */}


    </Provider>
  );
}


export default App;
