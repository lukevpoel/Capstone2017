"use strict";angular.module("capstone2017App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("capstone2017App").controller("MainCtrl",["$scope","events",function(a,b){a.events=b.query(),a.refreshCurrent=function(){a.events=b.query({location:a.location})},this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("capstone2017App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstone2017App").factory("events",["$resource",function(a){return a("http://api.eventful.com/rest/events/search?q=music&l=:location&within=:distance&units=miles&t=:time&c=music&app_key=mhNWqRwCNqmxbkrL",{},{query:{method:"GET",params:{location:"Seattle,us"},isArray:!1}})}]),angular.module("capstone2017App").factory("about",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("capstone2017App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="img"><img src="../images/yeoman.c582c4d1.png" alt="test"></div> <h1> random text</h1> <h2>still random</h2> <div class="row"> <div id="reportrange" class="col-xs-6" style="cursor: pointer; padding: 5px 10px; border: 1px solid #ccc"> <i class="glyphicon glyphicon-calendar fa fa-calendar"></i>&nbsp; <span></span> <b class="caret"></b> </div> <div class="col-xs-2"> <button id="get-events-btn" class="btn" ng-click="refreshCurrent()">Get Events</button> </div> </div> <p>Some random text</p> <p><a href="">something even more random</a></p>')}]);