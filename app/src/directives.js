/**
 * Created by Drapegnik on 17.12.16.
 */
'use strict';

hackApp.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind('keydown keypress', function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

hackApp.directive('ngOnload', function() {
  return function(scope, element, attrs) {
    element.bind('loadedmetadata', function(event) {
      scope.$apply(function() {
        scope.$eval(attrs.ngOnload);
      });

      event.preventDefault();
    });
  };
});
