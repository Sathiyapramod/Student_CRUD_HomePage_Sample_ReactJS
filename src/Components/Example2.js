import React from 'react';
import { useGlobalContext } from '../Trial';
import { Button } from '@mui/material';

const Example2 = () => {
    const data = useGlobalContext();
  return (
    <div className='gap-2 d-flex justify-content-center'> 
            {data.map((element,index)=>{
                return (
                    <Button variant="contained" size="large" id={index}>{element} </Button>
                );
            })}
    </div>
  )
}

export default Example2;