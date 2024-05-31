app.directive('customSlider', function() {
  return {
      restrict: 'E',
      template: '<input type="range" min="{{min}}" max="{{max}}" ng-model="value">',
      scope: {
          min: '@',
          max: '@',
          value: '='
      }
  };
});
