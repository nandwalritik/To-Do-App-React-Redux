import {ADD_TO_DO,DEL_TO_DO,TOGGLE_TO_DO,UPDATE_TO_DO,FETCH_TO_DOS} from './actionTypes';

export const addTodo = (text)=>dispatch=>{
    fetch('http://localhost:2020/products',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'

        },
        body:JSON.stringify(text)
    })
    .then(res=> res.json())
    .then(json =>
        dispatch({
            type:ADD_TO_DO,
            payload:json.createdProduct
        })
    )
    
};
export const fetchToDos = () =>dispatch =>{
    fetch('http://localhost:2020/products')
    .then(res => res.json())
    .then(todos=>
        dispatch({
            type:FETCH_TO_DOS,
            payload:todos
        })
    )
}   
export const delToDo = (index)=>dispatch =>{
    fetch(`http://localhost:2020/products/${index}`,
    {method:'DELETE'})
    .then(res => res.json())
    .then(todo =>
        dispatch({
            type:DEL_TO_DO,
            payload:index
        }) )
}
var user,bool;
export const toggleToDo = (index)=>dispatch=>{
    
    fetch(`http://localhost:2020/products/${index}`)
    .then(res => res.json())
    .then(json => {
        // console.log(json);
        bool = !json.completed;})

    fetch(`http://localhost:2020/products/${index}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
                },
            body:JSON.stringify({
                completed:!bool
            })
        })
    
        .then(res => res.json())
        .then(a =>dispatch({
            type:TOGGLE_TO_DO,
            payload:a
        }))
       
    }  

export const updateToDo = (data)=>dispatch=>{
    fetch(`http://localhost:2020/products/${data._id}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({
           title:data.title 
        })

    })
    .then(res => res.json())
    .then(json => 
        dispatch({
            type:UPDATE_TO_DO,
            payload:json
        }))

}