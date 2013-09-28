/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/22/13
 * Time: 1:58 PM
 * To change this template use File | Settings | File Templates.
 */
alert("hello");
//var appModule = angular.module('app', []);
sampleApp.directive('hello', function() {
    return {
        restrict: 'A',
        template: '<div>Hi there</div>',
        replace: true
    };
});

sampleApp.directive('boldText', function() {
    return {
        restrict: "A",
        link: function (scope,element,attr){
            alert("hello there");
            element[0].innerHTML="Testing";
            console.log("hello there");
        }
    };
});