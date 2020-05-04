import React from 'react';

const Form=(props)=>{
    return(
        <div>
            <form onSubmit={props.submitHandler}>
                <input type='text' placeholder='Location' name='location' /> 
                <input type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default Form