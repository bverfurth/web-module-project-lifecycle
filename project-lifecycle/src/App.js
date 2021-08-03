import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  //Constructor method for creating an object with a class / setting state

  constructor() {
    super();
    this.state = {
      userCards: {},
      followers: [],
    };
  }

  //Setting up data for API pull for github

  componentDidMount() {
    // Get request for my URL & Setting my data to state

    axios.get(`https://api.github.com/users/bverfurth`).then((res) => {
      console.log("My Page", res);
      this.setState({ userCards: res.data });
    });

    // Fetching the other user's data and setting to state
    axios
      .get("https://api.github.com/users/bverfurth/followers")
      .then((res) => {
        console.log("request failed", res.data);
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Return
  render() {
    return (
      <div className="App-header">
        <h1> My GitHub </h1>
        <img src={this.state.userCards.avatar_url} alt="Profile Picture" />
        <div>
          <h2>{this.state.userCards.name}</h2>
          <h4>{this.state.userCards.bio}</h4>
        </div>

        {/* Follwers Section Under Image */}

        <h3>Follower Count: {this.state.userCards.followers}</h3>
        <h4>Followers:</h4>
      </div>
    );
  }
}

export default App;
