import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {delToDo,toggleToDo,updateToDo} from '../actions/todoActions';
import { connect } from 'react-redux';
export class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
             _id:this.props.todo._id,
             title:this.props.todo.title
        };
       
    }
    getStyle=()=>{
        return {
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed?'line-through':'none'
            }
        }
    delTodo=(id)=>{
        console.log("onclick",id)

        this.props.delToDo(id);
    }
    toggleToDo=(id)=>{
       
       this.props.toggleToDo(id);
    }
    handleChange=(event)=>{
        
        this.setState({
            title:event.target.value,
           
        });
        
       
    }
    handleSubmit=(e)=>{
         e.preventDefault();
        const data={
            title:this.state.title,
            _id:this.state._id,
        };
        this.setState({
            title:''
        })
        this.props.updateToDo(data);
    }
 
   
    render() {
        const{ _id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                 
                     <input type="checkbox" onChange={()=>this.toggleToDo(_id)}/>{' '} { title }
                     <button onClick={()=>this.delTodo(_id)} style={btnStyle}>x</button>
                     <form onSubmit={this.handleSubmit}>
                       <input
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                       />
                       <input type="submit" value="Edit"/>  
                     </form>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
    update:PropTypes.func.isRequired,

}
const btnStyle={
    background: '#ff0000',
    color:'#fff',
    border:'none' ,
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}
const itemStyle={
    backgroundColor:'#f4f4f4'
}

export default connect(null,{delToDo,toggleToDo,updateToDo})(TodoItem);
