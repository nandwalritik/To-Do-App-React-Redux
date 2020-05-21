import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';
export class AddTodo extends Component {
    state = {
        title:''
    }
    onSubmit= (e) => {
        e.preventDefault();
        const user={
            title:this.state.title,
            completed:false
        };
        this.setState({
            title:''
        })
        this.props.addTodo(user);
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                type="text" 
                name="title"
                style={{flex:'10',padding:'5px'}}
                placeholder="Add Todo ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex:'1'}}
                />
            </form>
        )
    }
}
// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,   
  }
const mapStateToProps = (state,ownProps) => {
    return{
        todos:state.todos,
        
    }
}  
// const mapDispatchToProps = (dispatch) => {
//     return{
//         addTodo: todo => dispatch(todoAction.addTodo(todo))
//     }
// }
export default connect(mapStateToProps,{ addTodo })(AddTodo);
