import {  Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { CreateContext } from '../App'
import './Results.css'

const Results = () => {
    const {details}=useContext(CreateContext)
  return (
    <div className='w-4/5 mx-auto border border-black rounded-xl my-4'>
      <Typography className='w-fit mx-auto'variant='h1' color='black'>{details.name}</Typography>
      <div className='w-fit mx-auto flex gap-x-96 mb-4'>
      <Typography className='w-fit' variant='h4' color='black'>Start date:</Typography>
      <Typography className='w-fit' variant='h4' color='black'>End date:</Typography>
      </div>
      <div className='w-fit mx-auto my-4 flex border border-black rounded-2xl'>
        <div className='w-80 m-0.5 rounded-2xl h-96 bg-gradient-to-b
     from-lightSlateBlue to-lightRoyalBlue'>
            <Typography className='w-fit mx-auto  mt-4 'variant='h3' color='black'>Your Result</Typography>
            <div className='mx-auto  bg-gradient-to-b from-violetBlue to-persianBlue h-36 w-36 my-12 rounded-full'></div>
        </div>
        <div className='w-80 m-0.5 h-96'>
            <Typography className='w-fit mx-auto mt-4'variant='h3' color='black'>Overall Result</Typography>
        </div>
      </div>
    </div>
  )
}

export default Results
