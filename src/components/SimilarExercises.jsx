import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt:{lg: '100px', xs:'0'}}} >
      <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
      <Stack direction='row' sx={{p:'2', position: 'relative'}} >
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises.slice(0, 8)} /> : <Loader/>}
      </Stack>
      <Typography variant='h3' mb={5}>Exercises that target the same equipment</Typography>
      <Stack direction='row' sx={{p:'2', position: 'relative'}} >
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises.slice(0, 8)} /> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises