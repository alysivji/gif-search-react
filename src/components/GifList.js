import React, { Component } from 'react';
import GifItem from './GifItem'

class GifList extends Component {

    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onInputChange(term);
    }

    render() {
        return (

            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>

        );
    }

}

export default SearchBar;
