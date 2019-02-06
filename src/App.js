import React, { Component } from 'react';
import { Accordion, Item } from './Accordion';
import './App.css';


class App extends Component {
  render() {
    const Tabs = () => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    );

    return (
      <div className="App">
        <Accordion dynamic>
          <Item title="Title 1">
            <Tabs />
          </Item>
          <Item title="Title 2">
            <Tabs />
          </Item>
          <Item title="Title 3">
            <Tabs />
          </Item>
        </Accordion>
      </div>
    );
  }
}

export default App;
