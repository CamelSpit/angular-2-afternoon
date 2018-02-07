angular.module('devmtnTravel').service('mainSrvc', function($http) {
    this.getTravelInfo = function(){
       return $http.get('https://practiceapi.devmountain.com/api/travel/travel-info').then(array=>{
           console.log('array', array);
            return array;
        })
    }

    this.getPackageInfo = function(){
        return $http.get('https://practiceapi.devmountain.com/api/travel/package-info').then(results=>{
            console.log(results, "package info")
            return results
        })
    }
  
});