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
      
    )
  }
}

export default App;
