/**
 * Created by ray on 2014-06-30.
 */


angular.module('school')
    .directive("navigation", ['$compile',function ($compile) {

        return {
            restrict: 'E',
            replace: true,
            scope: {
                menu: '='
            },
            templateUrl: 'views/navbar-template.html',
            compile: function (el) {
                var contents = el.contents().remove();
                return function(scope,el){
                    $compile(contents)(scope,function(clone){
                        el.append(clone);
                    });
                };
            }
        };

    }]);