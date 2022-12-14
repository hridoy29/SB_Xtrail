var app = angular.module('AngularDemoApp', ['ngRoute', 'ngCookies', 'angular.filter'] );


//app.run(function (signalR) {
//    signalR.url("http://localhost:21991/signalr");
//});

//Check page parmission from cookies which is defined by 'IndexController'
app.config(function ($routeProvider, $controllerProvider) {
    
    $routeProvider
        
        .when('/UserRole', {
            templateUrl: '/SPA/SB/UserRole/UserRoleEntry.html',
            controller: 'UserRoleEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/UserManage', {
            templateUrl: '/SPA/SB/UserManage/UserManage.html',
            controller: 'UserManageController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        
        .when('/UserProfile', {
            templateUrl: '/SPA/User/UserProfile/UserProfile.html',
            controller: 'UserProfileController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        
        .when('/ApproveReg', {
            templateUrl: '/SPA/SB/ApproveReg/ApproveReg.html',
            controller: 'ApproveRegController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })

        .when('/TaskAssigner', {
            templateUrl: '/SPA/SB/TaskAssigner/TaskAssigner.html',
            controller: 'TaskAssignerController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/Dashboard', {
            templateUrl: '/SPA/SB/Dashboard/Dashboard.html',
            controller: 'DashboardController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
     
        .when('/Register', {
            templateUrl: '/SPA/Register/Registration.html',
            controller: 'RegisterEntryController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/', {
            templateUrl: '/SPA/Login/Login.html',
            controller: 'LoginController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/ItemGroup', {
            templateUrl: '/SPA/SB/ItemGroup/ItemGroup.html',
            controller: 'ItemGroupController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })
        .when('/Model', {
            templateUrl: '/SPA/SB/Model/Model.html',
            controller: 'ModelController',
            resolve: {
                "check": function () {
                    $('.note-popover').css("display", "none");
                }
            }
        })


        //.when('/', {
        //    templateUrl: '/SPA/LandingPage/LandingPage.html',
        //    controller: 'LandingPageController',
        //    resolve: {
        //        "check": function () {
        //            $('.note-popover').css("display", "none");
        //        }
        //    }
        //})
      
        .otherwise({
            redirectTo: '/' });


    app.registerCtrl = $controllerProvider.register;

    
});
app.directive("selectNgFiles", function () {
    return {
        require: "ngModel",
        link: function postLink(scope, elem, attrs, ngModel) {
            elem.on("change", function (e) {
                var files = elem[0].files;
                ngModel.$setViewValue(files);
            })
        }
    }
});
app.factory('MyService', function () {
    return {
        data: {
            userName: '',
            role: '',
            permission: []
        },
        update: function (username, role) {
            this.data.userName = username;
            this.data.role = role;
        },
        permissionUpdate: function (permission) {
            this.data.permission = permission;
        }
    };
});

app.config(function ($provide) {
    $provide.decorator('$exceptionHandler', function ($delegate, $cookieStore) {
        return function (exception, cause) {
            $delegate(exception, cause);
            var message = exception.message;
            $cookieStore.put('errorMassage', message);
        };

    });
});

app.run(function ($http, $cookieStore) {
    var message = $cookieStore.get('errorMassage');
    if (message != undefined) {
        var megs = $cookieStore.get('errorMassage');
        var parms = { message: megs };
        //$http.post('/ErrorLog/CreateErrorLogForClintSite', parms).success(function (data) {
        //});
    }


});