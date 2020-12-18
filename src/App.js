import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import tasks from './Mock/task';




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items:tasks,
            isShowForm:false
        };
        this.handleToggleForm=this.handleToggleForm.bind(this);
    }
    handleToggleForm(){
        this.setState({
            isShowForm:!this.state.isShowForm
        });
    }
 

    render() {
        let items = this.state.items;
        let isShowfForm = this.state.isShowForm;
        let elementForm = null;
        if(isShowfForm){
            elementForm = <Form/>;
        }
        return (
                <div className="row">
                    <Title></Title>
                
                 {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    <Control 
                    onClickAdd={this.handleToggleForm} 
                    isShowfForm={isShowfForm}
                    />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}

                    {elementForm}
        
                {/* FORM : END */}
                    <List items={items}/>
                {/* LIST : START */}
    </div>
        );
    }
}

export default App;
