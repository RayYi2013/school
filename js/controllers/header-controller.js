/**
 * Created by ray on 2014-06-30.
 */


angular.module('school')
    .controller('HeaderCtrl', function ($scope, $http) {
        $scope.menu = [
            {
                name: "关于我们",
                children: [
                    {
                        name: "中心介绍",
                        link: 'advance1'
                    },
                    {
                        name: "师资力量",
                        link: 'advance1'
                    }]
            },
            {
                name: "课程介绍",
                children: [
                    {
                        name: "升学课程",
                        link: 'advance1'
                    },
                    {
                        name: "AP课程",
                        link: 'advance1'
                    },
                    {
                        name: "IB 课程",
                        link: 'advance1'
                    },
                    {
                        name: "BC省课程",
                        link: 'advance1'
                    },
                    {
                        name: "英语课程",
                        link: 'advance1'
                    },
                    {
                        name: "UBC课程",
                        link: 'advance1'
                    },
                    {
                        name: "机器人课程",
                        link: 'advance1'
                    }]
            },
            {
                name: "升学指导",
                children: [
                    {
                        name: "美国长春藤大学申请指导",
                        link: 'advance1'
                    },
                    {
                        name: "美国大学申请指导",
                        link: 'advance1'
                    },
                    {
                        name: "加拿大大学本科申请指导",
                        link: 'advance1'
                    },
                    {
                        name: "硕博研究生申请指导",
                        link: 'advance1'
                    }]
            },
            {
                name: "留学服务",
                children: [
                    {
                        name: "加拿大中小学",
                        link: 'advance1'
                    },
                    {
                        name: "入学申请",
                        link: 'advance1'
                    },
                    {
                        name: "护照签证申请",
                        link: 'advance1'
                    },
                    {
                        name: "留学生安置",
                        link: 'advance1'
                    }]
            },
            {
                name: "联系我们",
                children: [
                    {
                        name: "联系信息",
                        link: 'contact-us'
                    },
                    {
                        name: "地址",
                        link: 'map'
                    }]
            }
        ];

    });