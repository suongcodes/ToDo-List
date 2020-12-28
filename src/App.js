import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import {filter,includes} from 'lodash';

import tasks from './Mock/task';




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items           : tasks,
            isShowForm      : false,
            stringSearch    : '',
            orderBy         : 'name',
            orderDir         :'desc'
        };
        this.handleToggleForm=this.handleToggleForm.bind(this);
        this.closeForm=this.closeForm.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }
    handleToggleForm(){
        this.setState({
            isShowForm:!this.state.isShowForm
        });
    }

    handleSearch(value){
        this.setState({
            stringSearch:value
        });
    }
    closeForm(){
        this.setState({
            isShowForm:false,
            stringSearch:''
        });
    }

    render() {
        let itemsOrigin = [...this.state.items];
        let items =[];
        let isShowfForm = this.state.isShowForm;
        let elementForm = null;
        let {orderBy, orderDir,stringSearch} =this.state;

        console.log(orderBy +"-"+orderDir);

        items= filter(itemsOrigin,(item) => {
            return includes(item.name.toLowerCase(),stringSearch.toLowerCase())
        });

        // if(search.length >0){
        //     itemsOrigin.forEach((item) => {
        //         if(item.name.toLowerCase().indexOf(search) !== -1){
        //             items.push(item);
        //         }
        //     });
        // }else{
        //     items = itemsOrigin;
        // }

        if(isShowfForm){
            elementForm = <Form onClickCancel={this.closeForm}/>;
        }
        
        return (
                <div className="row">
                    <Title></Title>
                
                 {/* CONTROL (SEARCH + SORT + ADD) : END */}
                    <Control 
                    orderBy={orderBy}
                    orderDir={orderDir}
                    onClickSearchGo={this.handleSearch}
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
