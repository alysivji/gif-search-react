import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

class App extends Component {

    constructor() {
        super();

        this.state = {
            gifs: []
        }
    }

    handleTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=756f04f36e164314a3cb3dd5448a16a1`;
        
        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }
    
    render() {
        return (
            <div className='App'>
                
                <div>
                    <SearchBar onTermChange={term => this.handleTermChange(term)} />
                    <GifList gifs={this.state.gifs} />
                </div>

            </div>
        );
    }
}

class SearchBar extends Component {
    
        constructor() {
            super();

            this.state = {
                term: ''
            }
        }
    
        onInputChange(term) {
            this.setState({term});
            this.props.onTermChange(term);
        }
    
        render() {
            return (
                <div className="search">
                    <input onChange={event => this.onInputChange(event.target.value)} />
                </div>
            );
        }
    }


const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} />
    });
    
    return (
        <div className="gif-list">{gifItems}</div>
    );
    };


const GifItem = (image) => {
    return (
        <div className="gif-item">
            <img src={image.gif.images.downsized.url} />
        </div>
    )
    };

export default App;
