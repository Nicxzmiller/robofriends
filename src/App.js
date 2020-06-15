import React, { Component } from "react";
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearch = (e) => {
        this.setState({searchfield: e.target.value})
    };
        render() {
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            return(
                <div className="tc">
                    <h1 className="f1">ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearch}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }

export default App;