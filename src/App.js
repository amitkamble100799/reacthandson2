import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    name:"",
    department:"",
    rating:"",
    data:[]
  }
  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.department]:event.target.value})
    this.setState({[event.target.rating]:event.target.value})
  }

  handleClick=()=>{
    const obj={
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating
    }
    this.state.data.push(obj);
    this.setState({data:this.state.data,
      name:"",department:"",
      rating:""})
  }


  render() {
    return (

      <>
      <div className='txt'>
     <h1 className='head'>EMPLOYEE FEEDBACK FORM</h1>
    
      <div className='dt'>
      <label className='name'> Name :</label><input className='box' type="text" name="name" onChange={this.handleChange} value={this.state.name}/> 
      </div>

      <div className='dt' >
      <label className='dpt'>  Department :</label><input className='box' type="text" name="department" onChange={this.handleChange} value={this.state.department}/>
      </div>

      <div className='dt'>
      <label className='rt'>  Rating :</label><input className='box' type="number" name="rating" onChange={this.handleChange} value={this.state.rating}/>
      </div>


      <button className='button' onClick={this.handleClick}>Submit</button>

    </div>

      <div className='box1'>

      {this.state.data.map((item)=>{
        return(
          
          <table className='item'> 
          <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Rating</th>
          </tr>
          <tr>
         <td>{item.name} </td> 
         <td>{item.department} </td>
         <td>  {item.rating}</td>
          </tr>
          </table>
          )   
        })}
      </div>

      </>
    )
  }
}


