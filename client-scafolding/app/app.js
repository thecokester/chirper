var app = angular.module('myApp', []);
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/home.html"
    })
    .when("/add", {
        templateUrl : "../views/add.html"
    })
})

// angular.module('contollers',[])
// .controller('homeController', ['$scope', function($scope){
//     $scope.thingsWayneIsWrongAbout = ['stuff, stuff, stuff, morestuff'];

// $scope.isString = function(item) {
//     if (typeofitem == 'string') {
//         return true
//     }

//     return false
// } 
// }])

// var app = angular.module("app", []);
//     app.controller("HttpGetController", function ($scope, $http) {

//         $scope.SendData = function () {
//            // use $.param jQuery function to serialize data from JSON 
//             var data = $.param({
//                 fName: $scope.firstName,
//                 lName: $scope.lastName
//             });
        
//             var config = {
//                 headers : {
//                     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
//                 }
//             }

//             $http.post('/ServerRequest/PostDataResponse', data, config)
//             .success(function (data, status, headers, config) {
//                 $scope.PostDataResponse = data;
//             })
//             .error(function (data, status, header, config) {
//                 $scope.ResponseDetails = "Data: " + data +
//                     "<hr />status: " + status +
//                     "<hr />headers: " + header +
//                     "<hr />config: " + config;
//             });
//         };

//     });

    var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("..views/add.html")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});