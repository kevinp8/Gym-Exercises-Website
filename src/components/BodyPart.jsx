import { Typography, Stack } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

function BodyPart({item, setBodyPart, bodyPart}) {
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2526' : '',
            borderBottomLeftRadius: '20px',
            widht:'300px',
            height: '300px',
            cursor: 'pointer',
            gap: '50px'
        }}
        onClick={()=> {
            setBodyPart(item)
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={Icon} alt='dumbell' style={{width:'80px', height:'80px'}} />
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart