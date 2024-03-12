import { Button, Input, Textarea, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'

const IdeaSubmission = () => {
    const [submit,setSubmit]=useState(false)
    const [formdata,setFormData]=useState({
        name1:'',
        email1:'',
        name2:'',
        email2:'',
        name3:'',
        email3:'',
        name4:'',
        email4:''
    })
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmit(true)

    }
  return (
    <div>
        {!submit &&(<form onSubmit={handleSubmit} className='w-3/5 mx-auto mt- border border-black hover:border-cyan-400 rounded-xl p-4'>
        <Typography variant='h2' color='black' className='w-fit mx-auto'>Team Details</Typography>
        <div className='grid grid-cols-2 gap-4 mt-2'>
        <Input type='text' label='Name 1' size='lg' name='name1' value={formdata.name1} disabled/>
        <Input type='email' label='Email 1' size='lg' name='email1' value={formdata.email1} disabled/>
        <Input type='text' label='Name 2' size='lg' name='name2' value={formdata.name2} disabled/>
        <Input type='email' label='Email 2' size='lg' name='email2'value={formdata.email2} disabled/>
        <Input type='text'  label='Name 3' size='lg' name='name3' value={formdata.name3} disabled/>
        <Input type='email' label='Email 3' size='lg'name='email3'value={formdata.email3} disabled/>
        <Input type='text' label='Name 4' size='lg' name='name4' value={formdata.name4} disabled/>
        <Input type='email' label='Email 4' size='lg'name='email4' value={formdata.email4} disabled/>
        </div>
        <Typography variant='h2' color='black' className='w-fit mx-auto'>Idea</Typography>
        <div className="w-full mt-2">
        <Textarea size='lg' label="Type Your Idea here" rows={10}/>
        </div>
        <div className='w-fit mx-auto'>
        <Button className='mt-2' type='submit'>Submit</Button>
        </div>
      </form>)}
      {submit && <Typography  variant='h2' color='black' className='w-fit mx-auto mt-72'>Your Idea Is Submitted Successfully</Typography>}
      
    </div>
  )
}

export default IdeaSubmission
