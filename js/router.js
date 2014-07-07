/**
 * Created by ray on 2014-06-30.
 */


angular.module('school')
    .config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {

            /////////////////////////////
            // Redirects and Otherwise //
            /////////////////////////////

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider

                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('/');


            //////////////////////////
            // State Configurations //
            //////////////////////////

            // Use $stateProvider to configure your states.
            $stateProvider

                .state("root", {

                    url: "",
                    abstract: true,
                    views : {
                        'header': {
                            templateUrl: 'views/header.html',
                            controller: 'HeaderCtrl'
                        },
                        'footer': {
                            templateUrl: 'views/footer.html'
                        }
                    }

                })
                .state("home", {

                    url: "/",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/main.html',
                            controller: 'MainCtrl'
                        }
                    }

                })
                .state("home.news", {

                    url: "news/?id",
                    views : {
                        'news': {
                            templateUrl: function ($stateParams){
                                return 'views/news/' + $stateParams.id + '.html';
                            }
                        }
                    }

                })
                .state("advance1", {

                    url: "/advance1",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/advance1.html'
                        }
                    }
                })
                .state("basc1", {

                    url: "/basc1",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/basc1.html'
                        }
                    }
                })
                .state("about-us", {

                    url: "/about-us",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/about-us.html'
                        }
                    }
                })
                .state("contact-us", {

                    url: "/contact-us",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/contact-us.html'
                        }
                    }
                })
                .state("map", {

                    url: "/map",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/map.html'
                        }
                    }
                })
                .state("faq", {

                    url: "/faq",
                    parent: 'root',
                    views : {
                        'main@': {
                            templateUrl: 'views/faq.html'
                        }
                    }
                });
        }
    ]
);
