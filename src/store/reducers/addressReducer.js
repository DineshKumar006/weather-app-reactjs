import * as Allactions from '../actions/allAction'
const initalstate={
    address:''
}
const reducer=(oldstate=initalstate,actions)=>{
    switch(actions.type){
        case Allactions.ADDRESS:return{
            ...oldstate,
            address:oldstate.address.replace(oldstate.address,actions.value),
        }
    }
    return oldstate
}

console.log(initalstate.address)
export default reducer