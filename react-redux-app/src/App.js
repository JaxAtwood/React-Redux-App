import React from 'react';
import Fox from "./components/Fox";
import { Grid } from "./components/Styles";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Grid>
        <h1>All Out Of Fox?</h1>
        <p>Daily Random Fox Generator!</p>
        <p>For when there are:</p>
        <Fox />
        </Grid>
      </div>
    </div>
  );
}

export default App;
