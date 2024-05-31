var app = angular.module('searchApp', []);

app.controller('SearchController', function($scope) {
    $scope.items = [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' },
        { name: 'Mango' },
        { name: 'Grapes' },
    ];

    $scope.searchText = '';
});
