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

class AppsTable extends React.Component {
  render() {

    const rows = [];

    this.props.apps.forEach(app => {
      rows.push(
        <AppRow
          app={app} key={app.name}/>
      );
    })

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

class DropdownList extends React.Component {
  render() {
    return (
      <select>
        <option selected value="all">All</option>
        <option value="stagging">Developpement</option>
        <option value="prod">Production</option>
      </select>
    )
  }
}

class FilterableAppsTable extends React.Component {

  render() {
    return (
      <div>
        <DropdownList />
        <AppsTable apps={this.props.apps}/>
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
