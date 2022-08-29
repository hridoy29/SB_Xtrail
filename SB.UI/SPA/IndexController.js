app.controller("IndexController", function ($scope, $cookieStore, $route, $templateCache, $window, MyService, $http, $filter) {
    load();
    //$scope.LoginUser = $cookieStore.get('LoginUser');
    //var UserData = sessionStorage.getItem("UserDataSession");
    //if (UserData != null) {
    //    $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    //}
    function load() {
        $('.note-popover').css("display", "none");
        //$scope.LoginUser = [];
        $scope.NoticeList = [];
       
        $scope.UnreadMessageNo = 0;

        //All menu control hidden default ----Start
        $('.note-popover').css("display", "none");
       
        $scope.LoginView = "menuViewHide";
        $scope.RegisterView = "menuViewHide";
      

        ///======= Admin==================


        $("#DashboardView").attr("hidden", true);
     
        
        $scope.ApproveRegView = "menuViewHide";


        $scope.UserRoleView = "menuViewHide";

        $scope.UserManageView = "menuViewHide";


        //All menu control hidden default ----End
       
    }
 
    GetUser(); //Get logged in user Info from cookies
    
    //function ViewRole() {
    //    if ($scope.LoginUser != undefined) {
    //        if ($scope.LoginUser.username == 'duser') {
    //            //$("#User").attr("hidden", true);
    //            //$("#Care").attr("hidden", true);
    //            $(".left-sidenav").show();


    //        } else if ($scope.LoginUser.username == 'admin') {
    //            $(".left-sidenav").show();
    //        } else {
    //            $("#DailyMeeting").attr("hidden", true);
    //            $("#Report").attr("hidden", true);
    //            $("#Care").attr("hidden", true);

    //        }
    //    }
        

    //}
   
    $scope.ReloadPage = function () {
        //$templateCache.removeAll();
        var currentPageTemplate = $route.current.templateUrl;
        console.log(currentPageTemplate);
        $templateCache.remove(currentPageTemplate);
        $window.location.reload();
    }
    function GetUser() {
       
        var login = sessionStorage.getItem("UserDataSession");
        if (login != null) {
            $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
        }
       
        if ($scope.LoginUser != undefined) {
            GetAdminAccess();
        }
        
    }

    function GetAdminAccess() {
        $scope.user_id = $scope.LoginUser.username;
        GetPermissionByRoleId(true);
        //$http({
        //    url: '/Index/GetAdminAccess?user_id=' + $scope.user_id ,
        //    method: 'GET',
        //    headers: { 'Content-Type': 'application/json' }
        //}).success(function (data) {
        //    $scope.AdminList = data;
        //    if ($scope.AdminList.length > 0) {
        //        GetPermissionByRoleId(true);
        //    }
        //    else {
        //        GetPermissionByRoleId(false);
        //    }

        //});

    }


    function GetPermissionByRoleId(is_admin) {
        
        if (is_admin == true) {
            var data = [
                { ScreenName: 'Dashboard' },
                { ScreenName: 'My Task' },
                { ScreenName: 'My Info' },
                { ScreenName: 'Search' },
                { ScreenName: 'Task Status' },
                { ScreenName: 'Analytics' },
                { ScreenName: 'Meeting Minutes' },
                { ScreenName: 'Response Follow Up' },
            ]
        } else {
            var data = [
                { ScreenName: 'Dashboard' },
                { ScreenName: 'My Task' },
                { ScreenName: 'My Info' }
            ]
        }

        angular.forEach(data, function (aPermission) {
            $scope.LoginScreenName = 'Login'
            if ($scope.LoginScreenName == "Login" && true) {
                $scope.LoginView = "menuViewShow";
                sessionStorage.setItem("LoginPermission", 'true');

            }

            $scope.RegisterScreenName = 'Register'
            if ($scope.RegisterScreenName == "Register" && true) {
                $scope.RegisterView = "menuViewShow";
                sessionStorage.setItem("RegisterPermission", 'true');

            }

            if (aPermission.ScreenName == "TaskAssigner" && true) {
                $scope.TaskAssigner = "menuViewShow";
                sessionStorage.setItem("TaskAssignerPermission", 'true');

            }
            if (aPermission.ScreenName == "Dashboard" && true) {
                $("#DashboardView").attr("hidden", false);
                sessionStorage.setItem("DashboardPermission", 'true');

            }
            if (aPermission.ScreenName == "My Task" && true) {
                $("#MyTaskView").attr("hidden", false);
                sessionStorage.setItem("MyTaskPermission", 'true');

            }
            if (aPermission.ScreenName == "My Info" && true) {
                $("#MyInfoView").attr("hidden", false);
                sessionStorage.setItem("MyInfoPermission", 'true');

            }
            if (aPermission.ScreenName == "Search" && true) {
                $("#Reporting1View").attr("hidden", false);
                sessionStorage.setItem("Reporting1Permission", 'true');

            }
            if (aPermission.ScreenName == "Task Status" && true) {
                $("#TaskStatusView").attr("hidden", false);
                sessionStorage.setItem("TaskStatusPermission", 'true');

            }
            if (aPermission.ScreenName == "Analytics" && true) {
                $("#AnalyticsView").attr("hidden", false);
                sessionStorage.setItem("AnalyticsPermission", 'true');

            }
            if (aPermission.ScreenName == "Meeting Minutes" && true) {
                $("#MeetingMinutesView").attr("hidden", false);
                sessionStorage.setItem("MeetingMinutesPermission", 'true');

            }
            if (aPermission.ScreenName == "Response Follow Up" && true) {
                $("#TaskRemarksView").attr("hidden", false);
                sessionStorage.setItem("TaskRemarksPermission", 'true');

            }
        })
        

        

    }

    $scope.Home = function () {
        window.location = '/home/index#/Dashboard';
    }




    $scope.SignOut = function () {
        
        var login = sessionStorage.getItem("UserDataSession");
        if (login != null) {
            $scope.User = JSON.parse(sessionStorage.UserDataSession);
        }
       
        sessionStorage.setItem("UserDataSession", null);

        window.location = '/Home/Login#/';
    }
});
