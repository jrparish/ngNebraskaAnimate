(function() {

  angular.module('ngNebraskaAnimateExample2', [ 'ngAnimate' ])
    .controller('AnimationController', AnimationController);

  function AnimationController() {
    var vm = this;
    vm.grid = [];
    vm.showGrid = showGrid;
    vm.hideGrid = hideGrid;

    function showGrid() {
      vm.grid = Array.apply(null, Array(50)).map(Number.prototype.valueOf,0);
    }

    function hideGrid() {
      vm.grid = [];
    }

  }

})();