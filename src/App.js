import React , { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import ToDos from './Components/ToDos';
import AddTodo from './Components/AddTodo';
import about from './Components/pages/about';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import './App.css';

const store = configureStore();
class App extends Component{
  
  render() 
    {
        // console.log(store.getState());
                  return (
                    <Provider store={store}>
                    <Router>
                        <div className="App">
                          <div className="container">
                            <Header/>
                              <Route exact path="/" render={()=>(
                                <React.Fragment>
                                    <AddTodo/>
                                    <ToDos/>
                                </React.Fragment>
                            )}/>
                              <Route path="/about" component={about}/>
                          </div> 
                        </div>
                  </Router>
                  </Provider>
                );
            }
          }


export default connect(null,null)(App);
