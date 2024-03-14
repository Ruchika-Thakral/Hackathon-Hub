// import { Button } from '@material-tailwind/react';
import React from 'react'
import EvaluatorRegistration from './components/EvaluatorRegistration';
import EvaluatorAssign from './components/EvaluatorAssign';
import AdminEvaluators from './components/AdminEvaluators';
import CreateHackathon from './components/CreateHackathon';
import AdminHackathons from './components/AdminHackathons';
import ListHackathon from './components/ListHackathon';
import ListEvaluator from './components/ListEvaluator';
import AdminDashboard from './components/AdminDashboard';
import Results from './components/Results';

const App = () => {
  return (
    <div className="App bg-gray-200 min-h-screen pb-4">
      {/* <Button>Hello</Button> */}
      {/* <EvaluatorRegistration /> */}
      {/* <EvaluatorAssign /> */}
      {/* <AdminEvaluators /> */}
      {/* <CreateHackathon /> */}
      {/* <AdminHackathons /> */}
      {/* <ListHackathon /> */}
      {/* <ListEvaluator /> */}
      {/* <AdminDashboard /> */}
      <Results/>
    </div>
  );
}

export default App;
