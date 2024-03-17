import React from 'react'
import VerticalBar from '../components/VerticalBar'
import HackathonDetails from '../components/HackathonDetails'

const Hackathons = () => {
  return (
     <div className='main flex overflow-y-auto 'style={{ height: '590px'}} >
        <VerticalBar/>
        <HackathonDetails/>
    </div>
  )
}

export default Hackathons
