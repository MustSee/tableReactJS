import React, { Component } from 'react';
import apps from './datas';
import './App.css';

class AppRow extends React.Component {

  render() {
    const app = this.props.app;
    const name = app.name;
    const env = app.environment;
    const date = app.date;

    return(
      <tr>
        <td>{name}</td>
        <td>{env}</td>
        <td>{date}</td>
      </tr>
    )
  }
}

// Displays and filters the data collection based on user input
class AppsTable extends React.Component {
  render() {

    const env = this.props.env;

    const rows = [];

    // Find a better way to this conditionnal rendering 
    if (env === 'all') {
      this.props.apps.map((app, index) => {
        return rows.push(
          <AppRow
            app={app} key={index} env={env}/>
        );
      })
    } else if (env === 'stagging'){
      // Add toLowerCase() method
      this.props.apps.filter(app => app.environment === 'stagging').map(
        (app, index) => {
          return rows.push(
            <AppRow
              app={app} key={index} env={env}/>
          );
        })
    } else {  // si env == 'prod'
      this.props.apps.filter(app => app.environment === 'prod').map(
        (app, index) => {
          return rows.push(
            <AppRow
              app={app} key={index} env={env}/>
          );
        })
    }


    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Environnement</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

// Receives all user input
class DropdownList extends React.Component {

  render() {

    const env = this.props.env

    return (
      <select value={env}>
        <option value="all">All</option>
        <option value="stagging">Developpement</option>
        <option value="prod">Production</option>
      </select>
    )
  }
}

class FilterableAppsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      env : 'stagging'
    }
  }

  render() {
    return (
      <div>
        <DropdownList env={this.state.env}/>
        <AppsTable apps={this.props.apps} env={this.state.env}/>
      </div>
    );
  }
}

class App extends Component {
  render() {

    const APPS = apps;
    console.log(APPS);

    return (
      <FilterableAppsTable apps={APPS} />
    );
  }
}

export default App;
