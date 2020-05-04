import * as Allactions from './allAction';

export const address=(value)=>{
    return{
        type:Allactions.ADDRESS,
        value:value
    }
}


export const Asyncaddress=(address)=>{
    return function(dispatch){
        setTimeout(() => {
            dispatch(address(address))
        }, 1000);
    }   
}