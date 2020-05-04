import * as Allactions from '../actions/allAction'

const initialstate={
    result:'',
    address:''
}



const reducer=(oldstate=initialstate,actions)=>{
    switch(actions.type){
        case Allactions.GETDATA:return{
            ...oldstate,
            result:oldstate.result.concat(actions.value)
        }
       
    }
    return oldstate
}




export default reducer