import React from 'react';
import Loader from 'react-loader-spinner'

import './loader.css'

const loader=()=>{
    return(
        <div className='loader'>
            <Loader className='innerLoader'
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
        </div>
    )
}

export default loader