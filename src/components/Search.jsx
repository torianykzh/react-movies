import React from "react";

class Search extends React.Component{

    state={
        search: '',
        type: 'all'
    }

    handleKey = (e) => {
        if(e.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(()=>({type: e.target.dataset.type}), ()=>{
                this.props.searchMovies(this.state.search, this.state.type);
        });
    }
    render(){
        return <div className="row relative">
            <input 
                placeholder="search" 
                type="search" 
                id="email_inline" 
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={(e) => this.handleKey(e)}
            />
            <button 
                className="waves-effect waves-light btn-small search-btn" 
                onClick={()=>this.props.searchMovies(this.state.search, this.state.type)}>
                Search
            </button>
            <p>
                <label>
                    <input 
                        name="type" 
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                        />
                    <span>All</span>
                </label>
            </p>
            <p>
                <label>
                    <input 
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
            </p>
            <p>
                <label>
                    <input 
                        name="type" 
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series only</span>
                </label>
            </p>
        </div>
    }
}

export default Search