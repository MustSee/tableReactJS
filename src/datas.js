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
    defaultEnv: [
      {name: "PORT", value: "8080"},
      {name: "CALLBACK", value: "http://www.assurement-rugby.com/login"},
      {name: "ENV", value: "PROD"},,
      {name: "DATE_FIN", value: "27/02/2017"}
    ],
    description : "Lorem ipsum dolor sit amet, consectetur adipi",
    name:[{fdqn:"www.rugby.fr"},{fdqn:"rugby.fr"},{fdqn:"www.rugby.com"}],
    date: "27/02/2018"
  },

  {
    environment: "stagging",
    defaultEnv: [
      {name: "PORT", value: "8080"},
      {name: "CALLBACK", value: "http://www.assurement-rugby.com/login"},
      {name: "ENV", value: "PROD"},
      {name: "DATE_FIN", value: "27/02/2017"}
    ],
    description : "o laboris nisi ut aliquip ex luptate veli",
    name: [{fdqn:"foot.com"},{fdqn:"www.foot.fr"},{fdqn:"www.foot.fr"}],
    date: "27/02/2017"
  },

  {
    environment: "prod",
    defaultEnv: [
      {name: "PORT", value: "8080"},
      {name: "CALLBACK", value: "http://www.assurement-rugby.com/login"},
      {name: "ENV", value: "PROD"},
      {name: "DATE_FIN", value: "27/02/2017"}
    ],
    description : "Lorem ipsum dolor sit amet, consectetur adipi",
    name: [{fdqn:"www.tennis.fr"},{fdqn:"tennis.fr"},{fdqn:"www.tennis.com"}],
    date: "18/10/2017"
  },

  {
    environment: "stagging",
    defaultEnv: [
      {name: "PORT", value: "8080"},
      {name: "CALLBACK", value: "http://www.assurement-rugby.com/login"},
      {name: "ENV", value: "PROD"},
      {name: "DATE_FIN", value: "12/06/2017"}
    ],
    description : "o laboris nisi ut aliquip ex luptate veli",
    name: [{fdqn:"www.peche.fr"},{fdqn:"peche.fr"},{fdqn:"www.peche.com"}],
    date: "30/10/2017"
  },

  {
    environment: "prod",
    defaultEnv: [
      {name: "PORT", value: "8080"},
      {name: "CALLBACK", value: "http://www.assurement-rugby.com/login"},
      {name: "ENV", value: "PROD"},
      {name: "DATE_FIN", value: "12/06/2017"}
    ],
    description : "Lorem sit amet, consectetur adipi",
    name: [{fdqn:"www.wrong.fr"},{fdqn:"wrong.fr"},{fdqn:"www.wrong.com"}],
    date: "22/10/2015"
  }
];

export default apps;
