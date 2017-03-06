"use strict";angular.module("capstone2017App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","angularMoment","daterangepicker"]).config(["$locationProvider","$routeProvider","$sceDelegateProvider",function(a,b,c){c.resourceUrlWhitelist(["self","http://api.eventful.com/json/events/**"]),b.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/events/:eventID",{templateUrl:"views/events.html",controller:"EventsCtrl",controllerAs:"events"}).otherwise({redirectTo:"/"})}]),angular.module("capstone2017App").controller("MainCtrl",["$scope","events",function(a,b){a.dates=["All","Today","This Week","Next Week","January","February","March","April","May","June","July","August","September","October","November","December"],a.location=null,a.time=null,a.within=null,a.distance=["5","10","20","50","100"],a.keywords=null,a.refreshCurrent=function(c,d,e,f){a.events=b.query({location:e,within:d,time:c,keywords:f}).then(function(b){a.eventdata=b.data.events}),a.searchLocation=a.location,a.searchWithin=a.within,a.searchKeyword=a.keywords,a.searchTime=a.time},this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("capstone2017App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstone2017App").factory("events",["$http",function(a){var b="http://api.eventful.com/json/events/search";return{query:function(c){return a.jsonp(b,{dataType:"jsonp",jsonpCallbackParam:"callback",params:{q:"music",app_key:"mhNWqRwCNqmxbkrL",location:c.location,within:c.within,time:c.time,keywords:c.keywords,image_sizes:"large"}})}}}]),angular.module("capstone2017App").factory("about",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("capstone2017App").controller("EventsCtrl",["$scope","$routeParams","events",function(a,b,c){a.cityID=b.cityID,this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("capstone2017App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/events.html",'<div ng-app class="content-container" ng-controller="MainCtrl"> <h1>Your events within {{within}} miles of {{location}} for {{time}}</h1> <dl ng-repeat> <dt>{{eventdata.event[0].title}}</dt> <dd>at {{eventdata.event[0].}}</dd> <dd>Map link?</dd> <dt>Performers:</dt> <dd>{{eventdata.event[0].}} </dd></dl> <div class="col-sm-6"> <img src="{{eventdata.event[0].url[0]}}" alt="event image"> </div> <div class="eventful-badge eventful-small col-xs-12"> <img src="http://api.eventful.com/images/powered/eventful_58x20.gif" alt="Local Events, Concerts, Tickets"> <p><a href="http://eventful.com/">Events</a> by Eventful</p> </div> </div>'),a.put("views/main.html",'<div ng-controller="MainCtrl"> <h1>Find your favorite events</h1> <h2>With the artist\'s best music!<br> For now, just type in zip code for any functionality</h2> <div class="row"> <div class="col-sm-2 col-xs-4"> Date: <br> <select ng-model="time" ng-options="x for x in dates" id="date-range" name="Choose-date" class="select-field"> </select> </div> <div class="col-sm-1 col-xs-4 within-select"> Within: <br> <select ng-model="within" ng-options="x for x in distance" id="within-range" name="Choose-within" class="select-field"> </select> </div> <div class="col-sm-3 col-xs-4"> Zip Code: <br> <input ng-model="location" type="number" ng-pattern="/^(\\d{5}(-\\d{4})?|[A-Z]\\d[A-Z] *\\d[A-Z]\\d)$/" class="select-field" id="zip-code" placeholder="98101"> </div> <div class="col-sm-3 col-xs-6"> Keyword: <br> <input ng-model="keywords" type="text" class="select-field" id="keyword-input" placeholder="Michael Jackson"> </div> <div class="col-sm-2 col-xs-6"> <br> <a class="select-field btn btn-lg btn-primary" ng-click="refreshCurrent(time, within, location, keywords)">Find events!</a> </div> </div> <div id="event-container"> <!-- <div ng-if="searchLocation || searchWithin || searchKeyword || searchTime" class="eventsFound"> --> <h1>Your events <span ng-if="searchLocation == null">in {{eventdata[0].city_name}} etc.</span> <span ng-if="searchWithin == null && searchLocation">in {{location}}</span> <span ng-if="searchWithin && searchLocation">within {{within}} miles of {{location}}</span> <span ng-if="searchTime"> for {{time}}</span></h1> <div ng-model="eventsDisplay" ng-repeat="event in eventdata.event" class="col-md-6"> <div class="event-height"> <div class="col-xs-12"><h2><a ng-href="#!/events/{{event.id}}" alt="event link">{{event.title}}</a></h2></div> <div class="row"> <div class="col-sm-6 col-xs-12 ind-events"> <div class="interior-events"> <div ng-if="event.image == null"><img src="images/sixteenth-note.f52c8412.jpg" class="event-image" alt="placeholder image"></div> <div ng-if="event.image"><img src="{{event.image.large.url}}" class="event-image" alt="{{event.title}} Image"></div> </div> </div> <div class="col-sm-6 col-xs-12 ind-events"> <div class="interior-events"> <a href="{{event.venue_url}}" alt="venue link">at {{event.venue_name}}</a> <div ng-if="event.performers">Performed by <span ng-if="event.performers.performer.name"> {{event.performers.performer.name}} </span> <div ng-if="event.performers.performer.length" ng-repeat="performer for event.performers.performer"> <div> hey </div> </div> </div> </div> </div> </div> <div class="col-xs-12"> </div> </div> </div> <!-- </div> --> </div> </div>')}]);