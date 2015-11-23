(function() {

  angular.module('ngNebraskaAnimateExample3', [ 'ngAnimate' ])
    .controller('AnimationController', AnimationController)
    .animation('.block', MyJSAnimation);

  function AnimationController() {
    // nothing
  }

  function MyJSAnimation() {
    return {

      addClass: function(element) {
        $(element).animate({ height: '100px', width: '200px' }, 'slow');
      },

      removeClass: function(element) {
        $(element).animate({ height: '200px', width: '100px' }, 'slow');
      }

    };
  }

})();