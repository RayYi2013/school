/**
 * Created by ray on 2014-07-06.
 */

angular.module('school')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.list = [
            '2014年6月15日 藤校学生、家长现场交流会',
            'YES 教育中心学生 R. Li 获2014年加拿大化学竞赛奖'
        ];

        $scope.selected = function(index){
            return index == $location.search().id;
        };

    });
