import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PokeList from './containers/PokeList/PokeList';
import Landing from './containers/Landing/Landing';
import FullPokemon from './containers/FullPokemon/FullPokemon';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/list" component={PokeList} />
            <Route path="/:id" component={FullPokemon} />
            <Route path="/" component={Landing} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
