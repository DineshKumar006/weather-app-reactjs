import React,{ Component} from 'react';
import './style.css';
import * as Api from '../Api/api';



class  Form extends Component{

    state={
        countries:[]
    }

    async componentWillMount(){
       const Names= await Api.fetchCountries().then(ele=>{
            const name=  ele.data.map(curr=>{
            //    console.log(curr.name)
            return  curr
           })
           return name
      })

         this.setState({countries:Names})
       }
      
    render(){
            return(
            <div>
                <form onSubmit={this.props.submitHandler}>
                    <input type='text' placeholder='Location' name='location' className='txt'/> 
                    <input type='submit' value='Search' className='btn'/>
                </form>
                        <hr></hr>
               
                        <p className="para">select country</p>

                        <select className='select' onChange={this.props.changeHandler} >
                        <option>Select County</option>
                        {this.state.countries.length>0?this.state.countries.map((curr,idx)=>
                             <option key={idx}>{curr.name}</option>)
                        : 'Loading'}
                           
                            </select>
            </div>
        )
    }
    
}

export default Form