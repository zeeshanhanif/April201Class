/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 9/15/13
 * Time: 4:57 PM
 * To change this template use File | Settings | File Templates.
 */

sampleApp.factory('Candidates',function ($http){
    var cand = {};
    cand.getList = function (){
        var candidates = [];
        candidates.push({name:"a"});
        candidates.push({name:"b"});
        candidates.push({name:"c"});
        candidates.push({name:"d"});
        candidates.push({name:"e"});
        candidates.push({name:"f"});
        return candidates;
    };
    return cand;
});