console.log("Yahhh!");

var jsonData = [
  {
    "name" : "Most Expensivest Shit w/ 2 Chainz",
    "channel" : "VICELAND & GQ",
    "handle" : "GQVideos",
    "category" : "Entertain",
    "subscribers" : "1,926,975",
    "views" : "625,762,087",
    "joined" : "Jan 16, 08",
    "links" : ["", ""]
  },
  {
    "name" : "The Nerdwriter",
    "channel" : "",
    "handle" : "Nerdwriter1",
    "category" : "Entertain",
    "subscribers" : "2,071,993",
    "views" : "126,454,618",
    "joined" : "Sep 30, 11",
    "links" : ["", ""]
  },
  {
    "name" : "Shaqtin' A Fool",
    "channel" : "NBA on TNT",
    "handle" : "UCU7iRrk3xfpUk0R6VdyC1Ow",
    "category" : "Sports",
    "subscribers" : "392,274",
    "views" : "145,430,992",
    "joined" : "Dec 14, 15",
    "links" : ["", ""]
  },
  {
    "name" : "Between Two Ferns with Zach Galifianakis",
    "channel" : "Funny or Die",
    "handle" : "FunnyorDie",
    "category" : "Comedy",
    "subscribers" : "2,218,882",
    "views" : "764,458,375",
    "joined" : "Apr 21, 07",
    "links" : ["", ""]
  },
  {
    "name" : "Sneaker Shopping with Complex",
    "channel" : "Complex",
    "handle" : "UCE_--R1P5-kfBzHTca0dsnw",
    "category" : "Entertain",
    "subscribers" : "2,068,058",
    "views" : "617,423,236",
    "joined" : "Mar 1, 16",
    "links" : ["", ""]
  },
  {
    "name" : "Chris Chann",
    "channel" : "",
    "handle" : "christopherchann",
    "category" : "Entertain",
    "subscribers" : "926,153",
    "views" : "134,294,061",
    "joined" : "Feb 22, 09",
    "links" : ["", ""]
  },
  {
    "name" : "Key & Peele",
    "channel" : "Comedy Central",
    "handle" : "comedycentral",
    "category" : "Comedy",
    "subscribers" : "6,192,902",
    "views" : "3,180,944,301",
    "joined" : "Jun 14, 06",
    "links" : ["", ""]
  },
  {
    "name" : "Best of Shark Tank",
    "channel" : "",
    "handle" : "UCuKxlZolHn6fyaGEh0SHQ3g",
    "category" : "Entertain",
    "subscribers" : "2,458",
    "views" : "1,143,777",
    "joined" : "Feb 6, 14",
    "links" : ["", ""]
  },
  {
    "name" : "Casey Neistat",
    "channel" : "",
    "handle" : "caseyneistat",
    "category" : "People & Blogs",
    "subscribers" : "9,162,808",
    "views" : "2,114,942,907",
    "joined" : "Feb 15, 10",
    "links" : ["", ""]
  },
  {
    "name" : "Actors on Actors",
    "channel" : "Variety",
    "handle" : "Variety",
    "category" : "Entertain",
    "subscribers" : "234,636",
    "views" : "101,618,901",
    "joined" : "Mar 3, 06",
    "links" : ["", ""]
  },
  {
    "name" : "Vox",
    "channel" : "",
    "handle" : "voxdotcom",
    "category" : "News & Politics",
    "subscribers" : "3,869,953",
    "views" : "879,984,589",
    "joined" : "Mar 4, 14",
    "links" : ["", ""]
  },
  {
    "name" : "Marques Brownlee (MKBHD)",
    "channel" : "",
    "handle" : "marquesbrownlee",
    "category" : "Science & Tech",
    "subscribers" : "5,954,843",
    "views" : "868,423,996",
    "joined" : "Mar 21, 08",
    "links" : ["", ""]
  }
]

function init() {
  render();
}

function render() {
  for (i = 0; i < jsonData.length; i++) {
    var card = buildTile(jsonData[i]);
    $("#tileHolder").append(card);
  }
}

function buildTile(cardData) {
  return '<div class="tile">'+
    '<h2>'+cardData.name+'</h2>'+
    '<h3>'+cardData.channel+'</h3>'+
    '<div class="content">'+
      '<div class="wrapper">'+
        '<p>'+cardData.category+'</p>'+
        '<label>Category</label>'+
      '</div>'+
      '<div class="wrapper">'+
        '<p>'+cardData.subscribers+'</p>'+
        '<label>Subscribers</label>'+
      '</div>'+
      '<div class="wrapper">'+
        '<p>'+cardData.joined+'</p>'+
        '<label>Views</label>'+
      '</div>'+
      '<div class="wrapper">'+
        '<p>'+cardData.views+'</p>'+
        '<label>Joined</label>'+
      '</div>'+
    '</div>'+
  '</div>';
}

window.addEventListener('load', init);
