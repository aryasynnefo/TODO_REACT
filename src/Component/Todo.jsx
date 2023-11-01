import React, { Component } from 'react'
import "./Todo.css";


export default class Todo extends Component { 


  state={
    input:"",
    items:[]
  }
  onHandleChange=(event)=>{

   this.setState({
    input:event.target.value
   })
   
  }
  StoreItems=(e)=>{
    e.preventDefault();
    // console.log("hii");
    const{input,items}=this.state
    // const allItems=items
    // allItems.push(input)
    // this.setState({
    //   items:allItems,
    //   input:""
    // })
    this.setState({
      items:[...items,input],
      input:""
    })

  }
  onHandleDelete=(i)=>{
    console.log(i);
    const {items}=this.state
    // const del=items
    // del.splice(index,1);
    // this.setState({
    //   items:del
    // })
   this.setState({
    items:items.filter((item,index)=>index!==i)
   })
  }
  render() {
const{input,items}=this.state
console.log(items);
const reverseItem=items.reverse();
    return (
      <div className='todo-container'>
            <form className='input-section' onSubmit={this.StoreItems}>
                <h1>Todo App</h1>
                <input type="text" value={input}  placeholder='Enter item' onChange={this.onHandleChange} /> 
            </form>
            <ul>

              {
                reverseItem.map((item,index)=>{
                  return (
                    <li key={index}>{item}<i className="fa-solid fa-trash-can" onClick={()=>{
                      this.onHandleDelete(index)
                    }}></i > </li>
                  )
                })
              }
              
                    
                 
            </ul>
      </div>
    )
  }
}
