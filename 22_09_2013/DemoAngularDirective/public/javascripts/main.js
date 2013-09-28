/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/15/13
 * Time: 2:23 PM
 * To change this template use File | Settings | File Templates.
 */

var sampleApp = angular.module("myapp",[])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/candiate.html',
                controller: 'CandidateController'
            })
            .when('/error', {
                templateUrl: 'views/error.html'
            })
            .otherwise({
                templateUrl: 'views/error.html'
            })
    }]);


/*
function MyController($scope){
    $scope.message = "Hello AngularJS";
    $scope.candidates = [];
    $scope.candidates.push({name:"a"});
    $scope.candidates.push({name:"b"});
    $scope.candidates.push({name:"c"});
    $scope.candidates.push({name:"d"});
    $scope.candidates.push({name:"e"});
    $scope.candidates.push({name:"f"});
    $scope.newName = null;
    $scope.addCandidate = function (){
        $scope.candidates.push({name:$scope.newName});
    }
}
*/

