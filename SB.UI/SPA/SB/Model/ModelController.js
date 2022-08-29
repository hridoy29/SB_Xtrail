app.controller("ModelController", function ($scope, $filter, $http) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }




    $scope.clear = function () {
        toastr.success('Data Cleared!!!');
		
    }

    $scope.save = function () {
        toastr.success('Data Saved!!!');

    }

	

});
