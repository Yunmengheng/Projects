var carApp = angular.module('carApp', []);

carApp.controller('MainController', function($scope) {
    $scope.cars = [
        {
            name: 'Bugatti Chiron',
            speed: 350,
            price: '3,000,000',
            image: 'imgaes/chiron.webp'
        },
        {
            name: 'Lamborghini Aventador SVJ',
            speed: 200,
            price: '300,000',
            image: 'imgaes/Lamborghini Aventador SVJ.jpg'
        },
    ];

    $scope.initCars = function() {
    };

    $scope.toggleCardSize = function(card) {
        card.classList.toggle("enlarged");
    };
});

function toggleCardSize(card) {
    card.classList.toggle("enlarged");
}
