import React , { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToDos } from '../actions/todoActions'
class ToDos extends Component{
   
    
    componentWillMount(){
        this.props.fetchToDos();    
    }
   
    componentWillReceiveProps(nextProps){
        if(nextProps.todo)
        {
            this.props.todos.push(nextProps.todo);
        }
    }
    
    render(){
    
        
       return this.props.todos.map((todo) =>(
           <div>
               <TodoItem key={todo._id} todo={todo} />
           </div>
        
       )); 
    }
}
//PropTypes
ToDos.propTypes={
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
    update:PropTypes.func.isRequired,
}
const mapStateToProps=(state,ownProps)=>{
    return{
        todos:state.todos,
        todo:state.todo
    }
}

export default connect(mapStateToProps,{ fetchToDos })(ToDos);
