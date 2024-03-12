import React from 'react'
import { Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import { CreateContext } from '../App'
import styles from './VerticalBar.module.css'
const VerticalBar = () => {
    const {arr,setDetails}=useContext(CreateContext);
    const clickHandler=(item)=>{
        setDetails(item)
    }
  return (
      <div className={`${styles.main} w-1/3 overflow-y-auto h-full`} style={{ position: 'sticky', top: 0}}>
        {
        arr.map(item =>
        <div key={item.id} className='w-96 h-48 mb-5 ml-3 border border-black rounded-3xl' onClick={()=>clickHandler(item)}>
            <Typography className='w-fit mx-auto' variant='h2' color='black'>{item.name}</Typography>
            <Typography className='' variant='h6' color='black'>Start Date:{item.start}</Typography>
            <Typography className='' variant='h6' color='black'>End Date:{item.end}</Typography>

        </div>
        )
    }
    </div>

  )
}

export default VerticalBar
