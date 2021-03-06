import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import {filter,includes,orderBy as funcOrderBy, remove,reject} from 'lodash';
// import tasks from './Mock/task';
const { v4: uuidv4 } = require('uuid');



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items           : [],
            isShowForm      : false,
            stringSearch    : '',
            orderBy         : 'name',
            orderDir        :'desc',
            itemSelected    : null
        };
        this.handleToggleForm=this.handleToggleForm.bind(this);
        this.closeForm=this.closeForm.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.handleSort=this.handleSort.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
    }

    componentWillMount(){
        let items = JSON.parse(localStorage.getItem('task')) || [] ;
        this.setState({
        items : items,
    })
        //luu vao localstorage
       
    }

    handleSubmit(item){
        let items = this.state.items;
        let id    = null;
        if(item.id !== ''){//edit
            items = reject(items, { id: item.id });
            id = item.id;
            
        }else{
          id= uuidv4();
        }

        items.push({
            id      :id,
            name    :item.name,
           level   :+item.level
       })

       this.setState({
           items: items,
           isShowForm: false
       });

       localStorage.setItem('task',JSON.stringify(items));
   }

    handleDelete(id){
        let items = this.state.items;
        remove(items, (item)=>{
            return item.id === id;
        });
        this.setState({
            items: this.state.items
        })

        localStorage.setItem('task',JSON.stringify(items));
    }

    handleEdit(item){
        this.setState({
            itemSelected:item,
            isShowForm:true
        })
    }

    handleSort(orderBy,orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir:orderDir
        });
    }

    handleToggleForm(){
        this.setState({
            isShowForm:!this.state.isShowForm,
            itemSelected:null
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
        let {orderBy, orderDir,stringSearch, itemSelected} =this.state;

        //Search
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

        // Sort
        items= funcOrderBy(items, [orderBy],[orderDir]);


        if(isShowfForm){
            elementForm = <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm}/>;
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
                    onClickSort={this.handleSort}
                    />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}

                    {elementForm}
        
                {/* FORM : END */}
                    <List
                    onClickEdit ={this.handleEdit}
                    onClickDelete ={this.handleDelete}
                    items={items}/>
                {/* LIST : START */}
    </div>
        );
    }
}

export default App;
