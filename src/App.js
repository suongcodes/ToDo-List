import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
      
        };
    }

 

    render() {
        return (
                <div className="row">
                    <Title></Title>
                
                 {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    <Control></Control>
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}

                    <Form></Form>
        
                {/* FORM : END */}
                    <List></List>
                {/* LIST : START */}
    </div>
        );
    }
}

export default App;
