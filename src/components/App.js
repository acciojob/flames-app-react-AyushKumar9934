import React, { Component, useState } from "react";
import "../styles/App.css";
let data = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      result: "",
    };
    this.handleClik = this.handleClik.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleClik = () => {
    let var1 = this.state.input1;
    let var2 = this.state.input2;
    const map = new Map();
    const map2 = new Map();
    for (let i = 0; i < var1.length; i++) {
      if (map.get(`${var1[i]}`)) {
        map.set(`${var1[i]}`, map.get(`${var1[i]}`) + 1);
      } else map.set(`${var1[i]}`, 1);
    }
    let count = 0;
    for (let i = 0; i < var2.length; i++) {
      if (map.get(`${var2[i]}`)) {
        map.set(`${var2[i]}`, map.get(`${var2[i]}`) - 1);
      } else {
        count++;
      }
    }

    for (let [key, value] of map) {
      count += value;
    }

    this.setState({ result: data[count%6] });
    console.log("count is ", count);
  };

  handleClear = () => {
    console.log("we are inside clear button");

    this.setState({ input1: "", input2: "", result: "" }, () => {
      console.log(`input1,${this.state.input1}, input2 ${this.state.input2}, input3 ${this.state.result}`);
    });
  };
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input value={this.state.input1}
          onChange={(e) => {
            this.setState({ input1: e.target.value });
          }}
          type="text"
          data-testid="input1"
          placeholder="Enter first name"
        />
        <span>
          <input value={this.state.input2}
            onChange={(e) => {
              this.setState({ input2: e.target.value });
            }}
            type="text"
            data-testid="input2"
            placeholder="Enter second name"
          />
        </span>
        <span>
          {" "}
          <button
            onClick={() => this.handleClik()}
            data-testid="calculate_relationship"
          >
            Calculate Relationship Future
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              this.handleClear();
            }}
            data-testid="clear"
          >
            Clear
          </button>
        </span>
        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;

// Provide two input fields for the names with data-testid="input1" and data-testid="input2".
// Include a button to calculate the relationship future with data-testid="calculate_relationship".
// Include a clear button to reset inputs and output with data-testid="clear".
// Display the result in an h3 tag with data-testid="answer".
