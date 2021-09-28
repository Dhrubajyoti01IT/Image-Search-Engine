import React, { Component } from "react";
import './SearchBar.css'
class SearchBar extends Component {
   state= { val: ''}

   onInputChange= (event) => {this.setState({val: event.target.value})
}

onFormSubmit= (event) => {event.preventDefault();
this.props.userSubmit(this.state.val);
}
    render() {
        return (<div>
            <form onSubmit={this.onFormSubmit} className="flexContainer">
                <label htmlFor="Search"><h1>Search For Photos:</h1></label>
                <input 
                type="text"className="input"
                value={this.state.val}
                onChange={this.onInputChange}/>
            </form>
        </div>)
    }
}

export default SearchBar;