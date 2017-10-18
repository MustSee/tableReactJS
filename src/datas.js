// var apps = [
//   {environment: "prod", name: "www.rugby.fr", date: "27/02/2018"},
//
//   {environment: "stagging", name: "foot.com", date: "27/02/2017"},
//
//     {environment: "prod", name: "basket.com", date: "18/10/2017"},
//
//     {environment: "stagging", name: "tennis.fr", date: "30/10/2017"},
//
//     {environment: "prod", name: "pong.fr", date: "22/10/2016"},
//
//     {environment: "stagging", name: "rocket.fr", date: "22/11/2016"}
// ];

var apps = [
  {
    environment: "prod",
    name:[{fdqn:"www.rugby.fr"},{fdqn:"rugby.fr"},{fdqn:"www.rugby.fr"}],
    date: "27/02/2018"
  },

  {
    environment: "stagging",
    name: [{fdqn:"foot.com"},{fdqn:"www.foot.fr"},{fdqn:"www.foot.fr"}],
    date: "27/02/2017"
  },

  {
    environment: "prod",
    name: [{fdqn:"www.tennis.fr"},{fdqn:"tennis.fr"},{fdqn:"www.tennis.com"}],
    date: "18/10/2017"
  },

  {
    environment: "stagging",
    name: [{fdqn:"www.peche.fr"},{fdqn:"peche.fr"},{fdqn:"www.peche.com"}],
    date: "30/10/2017"
  },

  {
    environment: "prod",
    name: [{fdqn:"www.pong.fr"},{fdqn:"pong.fr"},{fdqn:"www.pong.com"}],
    date: "22/10/2016"
  },

  {
    environment: "stagging",
    name: [{fdqn:"www.rocket.fr"},{fdqn:"rocket.fr"},{fdqn:"www.rocket.com"}], 
    date: "22/11/2016"
  }
];

export default apps;
