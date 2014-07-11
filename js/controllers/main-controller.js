/**
 * Created by ray on 2014-07-06.
 */

angular.module('school')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.list = [
            {id:0, title:'2014年6月15日 藤校学生、家长现场交流会', created:'2014-07-10'},
            {id:1, title:'YES 教育中心学生 R. Li 获2014年加拿大化学竞赛奖', created:'2014-07-06'},
            {id:2, title:'衷祝 YES 同学取得优异成绩', created:'2014-07-02'},
            {id:3, title:'SAT I 考试实行重大改革', created:'2014-07-05'},
            {id:4, title:'名校生伴你成长', created:'2014-07-07'},
            {id:5, title:'YES 2013 暑期课程', created:'2014-07-13'}
        ];

        $scope.selected = function(index){
            return index == $location.search().id;
        };

    });
