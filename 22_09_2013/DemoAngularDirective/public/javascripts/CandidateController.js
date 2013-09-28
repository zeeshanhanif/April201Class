/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/15/13
 * Time: 4:32 PM
 * To change this template use File | Settings | File Templates.
 */

sampleApp.controller('CandidateController', function(Candidates,$scope,$location) {
    $scope.message = "Hello AngularJS";
    $scope.candidates = Candidates.getList();
    $scope.newName = null;
    $scope.addCandidate = function (){
        $scope.candidates.push({name:$scope.newName});
    }
    /*
    var Candidate = $resource('/candidate/:id',{id:@id});
    var shaista = new Candidate({id:"ss",name:"shaista",age:50});
    shaista.$save();
    shaista.$get();
    */
    $scope.changePage = function (){
        $location.path('/error');
    }
});







