app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});


app.controller("LoginController", function ($scope, $cookieStore, $http) {
   
    $scope.LoginUser = {};
  
    
    $scope.Login = function () {
        $scope.LoginUser.username = $scope.username;
        $scope.LoginUser.UserPassword = $scope.UserPassword;
        sessionStorage.setItem("UserDataSession", JSON.stringify($scope.LoginUser));
       


        $http({
            url: '/Login/GetLoginStatus?user_name=' + $scope.username + '&password=' + $scope.UserPassword,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.LoginStatusList = data;
            if ($scope.LoginStatusList.length > 0) {
                if ($scope.LoginStatusList[0].status == true) {
                   
                    $scope.LoginUser.dept = $scope.LoginStatusList[0].dept;
                    sessionStorage.setItem("UserDataSession", JSON.stringify($scope.LoginUser));
                    window.location = '/Home/Index#/Dashboard';
                   
               
                } 
            } else {
                toastr.error('Invalid Login Information!!!');
            }
            
        });
       
    }

  
    $scope.PasswordIcon = "fa fa-eye-slash";
    $scope.InputType = "password";
    $scope.PasswordHideAndShow = function () {

        if ($scope.UserPassword != null) {
            if ($scope.InputType == 'password') {
                $scope.InputType = "text";
                $scope.PasswordIcon = 'fa fa-eye';
            } else {
                $scope.InputType = 'password';
                $scope.PasswordIcon = "fa fa-eye-slash";
              

            }
        }
    }


    $scope.ChangeFocus = function () {
        document.getElementById("userpassword").focus();
    }

  
})