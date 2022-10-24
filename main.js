let angularRoutingApp = angular.module("LibrosApp", ["ngRoute"]);

angularRoutingApp.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'Vistas/listado.html',
        controller: 'listController'
    })

    .when('/fichas', {
        templateUrl: 'Vistas/fichas.html',
        controller: 'fichasController'
    })

    .otherwise({
        redirectTo: '/error'
    });

});

angularRoutingApp.controller('listController', function($scope){});

angularRoutingApp.controller('fichasController', function($scope){
    $scope.message="HOLA"
});