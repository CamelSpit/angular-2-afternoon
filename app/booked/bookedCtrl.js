angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
    mainSrvc.getPackageInfo().then( function( response ) {
        console.log('hitting controller', response.data)
      $scope.allPackages = response.data;
  
      if ( $stateParams.id ) {
            response.data.forEach(package=>{
               if (package.id==$stateParams.id){
                   console.log('getting to if statement', package)
                    $scope.package = package;
                }
        }); 
      }
    });
  })