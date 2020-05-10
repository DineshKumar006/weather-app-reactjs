import React from 'react';
import './style.css'


const Form=(props)=>{
    return(
        <div>
            <form onSubmit={props.submitHandler}>
                <input type='text' placeholder='Location' name='location' className='txt'/> 
                <input type='submit' value='Search' className='btn'/>
            </form>
        </div>
    )
}

export default Form