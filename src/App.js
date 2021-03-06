import React, { Component } from 'react';
import apps from './datas';
import TweenMax from 'gsap';
import './App.css';

// Feature : onClick displays more informations
class AppRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTrClicked : false,
      isOutdated : false
    }
    this.changeRow = this.changeRow.bind(this);
  }

/* Don't forget to put this in the CSS
  tbody tr div {
    overflow: hidden;
  }
*/
  changeRow() {
    const tr = this.refs.tr; // Get DOM Element
    // Get infos about tr. try : document.body.getBoundingClientRect();
    const rect = tr.getBoundingClientRect();
    console.log('RECT tr', rect);

    // Allow to stop the animation (for example in case of multiple clicks)
    TweenMax.killTweensOf(tr);

    if(this.state.isTrClicked) {
      TweenMax.to(tr, 1, {
        // Here we cheat a bit as we already now the height of the div
        height: 30,
        onComplete: () => {
          this.setState({
            isTrClicked: !this.state.isTrClicked
          });
        }
      })
    }
    else {
      tr.style.height = rect.height+'px'; // DOM property element
      // setState can have a callback
      this.setState({
        isTrClicked: !this.state.isTrClicked
      }, () => {
        tr.style.height = '';
        const newRect = tr.getBoundingClientRect();

        TweenMax.fromTo(tr, 1, {
          height: rect.height
        },{
          height: newRect.height
        });
      });
    }
  }

  componentDidMount() {
    const date = this.props.app.date;
    // We change the typeof "date = app.date" from string to date object
    // This allow us to compare the date with the currentDate - new DateTime
    var dateCompare = new Date(date.split('/').reverse().join('-')).getTime();
    console.log(this, Date.now() - dateCompare)
    if((Date.now() - dateCompare) > 0) {
      this.setState(
        {isOutdated : true}
      );
    }
  }

  render() {
    const app = this.props.app;
    const name = app.name;
    const env = app.environment;
    const date = app.date;

    let clicked = this.state.isTrClicked;

    let domainNames = name.slice(1).map((element, index) => {
      return (
        <span key={index}>{element.fdqn}<br/></span>
      )
    })




    return(
       clicked ?
         <tr onClick={this.changeRow} className={this.state.isOutdated?"getRed":null}>
           <td>
             {/* Set ref */}
             {/* We set a div around as we had problems with table properties */}
            <div ref="tr">
             {name[0].fdqn} <br/>
             {domainNames}
            </div>
           </td>
           <td>{env}</td>
          <td>{date}</td>
         </tr>
      :
        <tr onClick={this.changeRow} className={this.state.isOutdated?"getRed":null}>
          <td>
            {/* Set ref */}
            <div ref="tr">
              {name[0].fdqn}
            </div>
          </td>
          <td>{env}</td>
          <td>{date}</td>
        </tr>
    )
  }
}

// Displays and filters the data collection based on user input
class AppsTable extends React.Component {

  sortAppByDate(arr) {
    const now = Date.now();
    return arr.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));

      // On transforme en TimeStamp
      const diffA = now - dateA.getTime();
      const diffB = now - dateB.getTime();

      if(diffA < 0 && diffB >= 0) {
        return 1;
      }
      else if(diffB < 0 && diffA >= 0) {
        return -1;
      }
      else {
        return dateA > dateB;
      }
    });
  }

  render() {

    const env = this.props.env;

    const rows = [];


    // Find a better way to this conditionnal rendering
    if (env === 'all') {
      this.sortAppByDate(this.props.apps).map((app, index) => {
        return rows.push(
          <AppRow
            app={app} key={index} env={env}/>
        );
      })
    } else {
      // Add toLowerCase() method
      this.sortAppByDate(this.props.apps.filter(app => app.environment === env)).map(
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
      <div className="chooseEnv">
          <select value={this.props.env} onChange={this.handleEnv}>
            <option value="all">All</option>
            <option value="stagging">Developpement</option>
            <option value="prod">Production</option>
          </select>
      </div>
    )
  }
}

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
        {/* <CssExample /> */}

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

    // les json datas que l'on passe en props
    const APPS = apps;
    console.log(APPS);

    console.log(
      APPS.filter(app => app.defaultEnv.filter(env => env.name === 'ENV'))
    );

    return (
      <FilterableAppsTable apps={APPS} />
    );
  }
}

export default App;
