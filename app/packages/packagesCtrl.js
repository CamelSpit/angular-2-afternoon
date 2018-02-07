angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrvc){

    mainSrvc.getPackageInfo().then(res=>{
        $scope.allPackages = res.data;
        var packages = []
        
        res.data.forEach(package=>{

            if (package.country===$stateParams.country){
                console.log("reaching package in if statement", package)
                packages.push(package)
            }
            console.log(packages, 'packages array')
            $scope.packages = packages;
        })
    })

});