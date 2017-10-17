import React, { Component } from 'react';
import apps from './datas';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
  constructor(props) {
    super(props);
    this.handleEnv = this.handleEnv.bind(this);
  }

  handleEnv(e) {
    this.props.handleOnEnvChange(e.target.value);
  }

  render() {

    return (
      <select value={this.props.env} onChange={this.handleEnv}>
        <option value="all">All</option>
        <option value="stagging">Developpement</option>
        <option value="prod">Production</option>
      </select>
    )
  }
}

/******************
** CSS EXAMPLE  ***
******************/

class CssExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items : ['click', 'to', 'add', 'item']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(){
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i){
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items : newItems});
  }

  render(){

    console.log(this.state.items);

    const items = this.state.items.map((item, index) => {
      return (
        <div key={item} onClick={() => this.handleRemove(index)}>
          {item}
        </div>
      )
    });

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
          {items}
          </ReactCSSTransitionGroup>
      </div>
    );
  }
}

/******************
** FIN CSS EXAMPLE  ***
******************/



class FilterableAppsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      env : 'all'
    }
    this.handleEnvChange = this.handleEnvChange.bind(this);
  }

  handleEnvChange(env) {
    this.setState({
      env : env
    })
  }

  render() {
    return (
      <div>
        <CssExample />

        <DropdownList
          env={this.state.env}
          handleOnEnvChange ={this.handleEnvChange}
        />
        <AppsTable
          apps={this.props.apps}
          env={this.state.env}
        />
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
