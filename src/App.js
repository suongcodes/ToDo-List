import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './Mock/task';




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items:items
        };
    }

 

    render() {
        let items = this.state.items;
        console.log(items);

        return (
                <div className="row">
                    <Title></Title>
                
                 {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    <Control></Control>
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}

                    <Form></Form>
        
                {/* FORM : END */}
                    <List items={items}/>
                {/* LIST : START */}
    </div>
        );
    }
}

export default App;
