import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stringSearch : ''
        };
        
        this.handleClear=this.handleClear.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        
    }


    handleSearch(){
        this.props.onClickGo(this.state.stringSearch);
    }
    handleClear(){
        this.setState({stringSearch: ''});
        this.props.onClickGo(this.state.stringSearch);
    }
    handleChange(event){
        this.setState({stringSearch: event.target.value});
    }
    render() {
        return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input value={this.state.stringSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button onClick={this.handleSearch} className="btn btn-info" type="button">Tìm</button>
                    <button onClick={this.handleClear} className="btn btn-warning" type="button">Xóa!</button>
                </span>
            </div>
        </div>
        );
    }
}

export default Search;
