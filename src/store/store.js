import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import hackathonSlice from '../features/hackathon/hackathonSlice'
import teamSlice from '../features/team/teamSlice'
import evaluatorSlice from '../features/evaluator/evaluatorSlice'


export default configureStore({
    reducer: {
      user: userSlice,
      hackathon: hackathonSlice,
      team: teamSlice,
      evaluator: evaluatorSlice,
    }
  })