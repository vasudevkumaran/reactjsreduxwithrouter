import React from 'react';
import {Route} from 'react-router-dom';
import Main from '../components/Main';
import AddEdit from '../components/AddEdit';
import ViewAll from '../components/ViewAll';

export default class MyRouter extends React.Component{
    
    
    render(){
        return<React.Fragment>
            <Route exact path="/" component={Main}/>
            <Route path="/addedit" component={AddEdit} />
            <Route path="/viewall" component={ViewAll} />
        </React.Fragment>
    }
}