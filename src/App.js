import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearch = (e) => {
        this.setState({searchfield: e.target.value})
    };
        render() {
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });
            if (this.state.robots.length === 0){
                return <h1 className="tc f1">Loading...</h1>
            } else {
                return(
                    <div className="tc">
                        <h1 className="f1">ROBOFRIENDS</h1>
                        <SearchBox searchChange={this.onSearch}/>
                        <CardList robots={filteredRobots}/>
                    </div>
                );
            }
        }
    }

export default App;