app.controller("DashboardController", function ($scope, $filter, $http) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

	$scope.TodayTaskCount = 0;
	$scope.TodayInboxCount = 0;
	$scope.CurrentMonthsPendingCount = 0;
	$scope.CurrentMonthsPendingCount = 0;
	$scope.CurrentMonthsOngoingCount = 0;
	$scope.CurrentMonthsCompletedCount = 0;

    Clear();
    function Clear() {
		//GetDashboardInfo();

		//GetThisMonthTaskStatusList();
		//GetPreviousMonthTaskStatusList();
		//GetAllDashboardGraphForDayWiseTaskCount(FromDate, ToDate);
		//GetAllDashboardGraphForPreviousDayWiseTaskCount(FromDate, ToDate);
		
	}

	function GetDashboardInfo() {

		$scope.InfoList = [];

		$scope.infoFilter = {};

		$scope.infoFilter.from_date = $filter('date')(new Date(), 'yyyy-MM-dd');
		$scope.infoFilter.to_date = $filter('date')(new Date(), 'yyyy-MM-dd');
		//$scope.infoFilter.keyword = null;
		//$scope.reportFilter.priority_id = 0;
		//$scope.reportFilter.task_type = 0;
		//$scope.reportFilter.completion_status = 0;
		$scope.infoFilter.dept_id = $scope.LoginUser.dept;
		$http({
			url: '/Dashboard/GetDashboardInfo',
			method: 'GET',
			params: { from_date: $scope.infoFilter.from_date, to_date: $scope.infoFilter.to_date, dept_id: $scope.infoFilter.dept_id},
			headers: { 'Content-Type': 'application/json' }

		}).success(function (data) {
			$scope.InfoList = data;

			$scope.TodayTaskCount = $scope.InfoList[0].TaskCount;
			$scope.TodayInboxCount = $scope.InfoList[0].InboxCount;
			$scope.CurrentMonthsPendingCount = $scope.InfoList[0].CurrentMonthPendingCount;
			$scope.CurrentMonthsOngoingCount = $scope.InfoList[0].CurrentMonthOngoingCount;
			$scope.CurrentMonthsCompletedCount = $scope.InfoList[0].CurrentMonthCompletedCount;
		
		});

	}

	//function GetThisMonthTaskStatusList() {

	//	$scope.CurrentMonthTaskStatusList = [];

	//	$scope.infoFilter = {};

	//	var now = new Date();

	//	var firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
	//	console.log(firstDay); 

	//	var lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

	//	$scope.infoFilter.from_date = firstDay;
	//	$scope.infoFilter.to_date = lastDay;
	//	//$scope.infoFilter.keyword = null;
	//	//$scope.reportFilter.priority_id = 0;
	//	//$scope.reportFilter.task_type = 0;
	//	//$scope.reportFilter.completion_status = 0;
	//	$scope.infoFilter.dept_id = $scope.LoginUser.dept;
	//	$http({
	//		url: '/Dashboard/GetThisMonthTaskStatusList',
	//		method: 'GET',
	//		params: { from_date: $scope.infoFilter.from_date, to_date: $scope.infoFilter.to_date, dept_id: $scope.infoFilter.dept_id },
	//		headers: { 'Content-Type': 'application/json' }

	//	}).success(function (data) {
	//		$scope.CurrentMonthTaskStatusList = data;
	//		$scope.PendingCountArray = [];
	//		$scope.OngoingCountArray = [];
	//		$scope.CompleteCountArray = [];
	//		angular.forEach($scope.LastMonthTaskStatusList, function (aData) {
	//			$scope.PendingCountArray.push(aData.PendingCount);
	//			$scope.OngoingCountArray.push(aData.OngoingCount);
	//			$scope.CompleteCountArray.push(aData.CompletedCount);

	//		})

	//	});

	//}

	//function GetPreviousMonthTaskStatusList() {

	//	$scope.LastMonthTaskStatusList = [];

	//	$scope.infoFilter = {};

	//	var date = new Date();

	//	var firstDayPrevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
	

	//	var lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);

	//	$scope.infoFilter.from_date = firstDayPrevMonth;
	//	$scope.infoFilter.to_date = lastDayPrevMonth;
	//	//$scope.infoFilter.keyword = null;
	//	//$scope.reportFilter.priority_id = 0;
	//	//$scope.reportFilter.task_type = 0;
	//	//$scope.reportFilter.completion_status = 0;
	//	$scope.infoFilter.dept_id = $scope.LoginUser.dept;
	//	$http({
	//		url: '/Dashboard/GetThisMonthTaskStatusList',
	//		method: 'GET',
	//		params: { from_date: $scope.infoFilter.from_date, to_date: $scope.infoFilter.to_date, dept_id: $scope.infoFilter.dept_id },
	//		headers: { 'Content-Type': 'application/json' }

	//	}).success(function (data) {
	//		$scope.LastMonthTaskStatusList = data;
	//		$scope.PendingCountArray = [];
	//		$scope.OngoingCountArray = [];
	//		$scope.CompleteCountArray = [];
	//		angular.forEach($scope.LastMonthTaskStatusList, function (aData) {
	//			$scope.PendingCountArray.push(aData.PendingCount);
	//			$scope.OngoingCountArray.push(aData.OngoingCount);
	//			$scope.CompleteCountArray.push(aData.CompletedCount);
			
 //               })
	//	});

	//}


	//function GetAllDashboardGraphForDayWiseTaskCount(FromDate, ToDate) {

	//	//$http({
	//	//	url: "/PosDashboard/GetAllDashboardGraphForSoIwoSi?FromDate=" + FromDate + "&ToDate=" + ToDate,
	//	//	method: "Get",
	//	//	headers: { 'Content-Type': "application/json" }
	//	//}).success(function (data) {
	//		$scope.DashboardGraphForSoIwoSiList = data;
	//		if ($scope.DashboardGraphForSoIwoSiList.length > 0) {
	//			$scope.monthsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.Months;
	//			});
	//			$scope.YearsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.Years;
	//			}).map(String);
	//			$scope.OngoingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.TotalSO;
	//			});
	//			$scope.PendingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.TotalIWO;
	//			});
	//			$scope.CompleteCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.TotalSi;
	//			});

	//			$scope.ThisMonth = $scope.monthsArray.map((d, i) => `${d}-${$scope.YearsArray[i]}`);
	//			LineGraphForDayWiseTaskCount();
	//		} else {
	//			$scope.monthsArray = [];
	//			$scope.YearsArray = [];
	//			$scope.OngoingCountArray = [];
	//			$scope.PendingCountArray = [];
	//			$scope.CompleteCountArray = [];
	//			$scope.ThisMonth = [];
	//			LineGraphForDayWiseTaskCount();
	//		}


	//	/*})*/
	//}
	////LineGraphForDayWiseTaskCount();
	//function LineGraphForDayWiseTaskCount() {
	//	var CountCanvas = document.getElementById("CountLineChartThisMonth");

	//	Chart.defaults.global.defaultFontFamily = "Lato";
	//	Chart.defaults.global.defaultFontSize = 18;

	//	var dataOngoing = {
	//		label: "Ongoing",
	//		data: $scope.OngoingCountArray = [2, 4, 5, 6, 7, 9, 2, 3, 4, 7, 1, 6, 4, 8, 3, 4, 9, 6, 8, 2, 4, 5, 6, 8, 4, 6, 4, 8, 2, 7, 9],
			
	//		lineTension: 0.3,
	//		fill: true,
	//		borderColor: '#00a65a'

	//	};

	//	var dataPending = {
	//		label: "Pending",
	//		data: $scope.PendingCountArray = [8, 6, 4, 7, 6, 1, 7, 6, 8, 2, 4, 7, 3, 1, 5, 4, 7, 2, 5, 3, 6, 9, 7, 4, 1, 2, 4, 9, 4, 3, 7],
	//		lineTension: 0.3,
	//		fill: true,
	//		borderColor: '#f39c12'

	//	};

	//	var dataComplete = {
	//		label: "Complete",
	//		data: $scope.CompleteCountArray = [4, 5, 7, 5, 7, 6, 1, 8, 7, 4, 5, 3, 7, 8, 9, 6, 4, 1, 5, 7, 6, 8, 3, 9, 4, 1, 3, 4, 7, 8,3],
	//		lineTension: 0.3,
	//		fill: true,
	//		borderColor: '#d9534f'
	//	};

	//	var CountData = {

	//		labels: $scope.ThisMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
	//		datasets: [dataOngoing, dataPending, dataComplete]
	//	};

	//	var chartOptions = {
	//		legend: {
	//			display: true,
	//			position: 'top',
	//			labels: {
	//				//boxWidth: 80,
	//				fontColor: 'black'
	//			}
	//		},
	//		title: {
	//			display: true,
	//			text: 'This Day Wise Task Count',
	//			position: 'left'
	//		},
	//		scales: {
	//			yAxes: [{
	//				ticks: {
	//					beginAtZero: true
	//				}
	//			}]
	//		}
	//	};

	//	if (window.MyChartLineThisCount != undefined) {
	//		window.MyChartLineThisCount.destroy();
	//	}
	//	window.MyChartLineThisCount = new Chart(CountCanvas, {
	//		type: 'line',
	//		data: CountData,
	//		options: chartOptions
	//	});
	//}



	//function GetAllDashboardGraphForPreviousDayWiseTaskCount(FromDate, ToDate) {

	//	//$http({
	//	//	url: "/PosDashboard/GetAllDashboardGraphForSoIwoSi?FromDate=" + FromDate + "&ToDate=" + ToDate,
	//	//	method: "Get",
	//	//	headers: { 'Content-Type': "application/json" }
	//	//}).success(function (data) {
	//		$scope.DashboardGraphForSoIwoSiList = data;
	//		if ($scope.DashboardGraphForSoIwoSiList.length > 0) {
	//			$scope.monthsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.Months;
	//			});
	//			$scope.YearsArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.Years;
	//			}).map(String);
	//			$scope.OngoingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.TotalSO;
	//			});
	//			$scope.PendingCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.TotalIWO;
	//			});
	//			$scope.CompleteCountArray = $scope.DashboardGraphForSoIwoSiList.map(function (obj) {
	//				return obj.TotalSi;
	//			});

	//			$scope.ThisMonth = $scope.monthsArray.map((d, i) => `${d}-${$scope.YearsArray[i]}`);
	//			LineGraphForDayWiseTaskCount();
	//		} else {
	//			$scope.monthsArray = [];
	//			$scope.YearsArray = [];
	//			$scope.OngoingCountArray = [];
	//			$scope.PendingCountArray = [];
	//			$scope.CompleteCountArray = [];
	//			$scope.ThisMonth = [];
	//			LineGraphForDayWiseTaskCount();
	//		}


	//	/*})*/
	//}
	////LineGraphForPreviousDayWiseTaskCount();
	//function LineGraphForPreviousDayWiseTaskCount() {
	//	var CountCanvas = document.getElementById("CountLineChartPreviousMonth");

	//	Chart.defaults.global.defaultFontFamily = "Lato";
	//	Chart.defaults.global.defaultFontSize = 18;

	//	var dataOngoing = {
	//		label: "Ongoing",
	//		data: $scope.OngoingCountArray = [2, 4, 5, 6, 7, 9, 2, 3, 4, 7, 1, 6, 4, 8, 3, 4, 9, 6, 8, 2, 4, 5, 6, 8, 4, 6, 4, 8, 2, 7, 9],
	//		lineTension: 0.3,
	//		fill: true,
	//		borderColor: '#00a65a'

	//	};

	//	var dataPending = {
	//		label: "Pending",
	//		data: $scope.PendingCountArray = [8, 6, 4, 7, 6, 1, 7, 6, 8, 2, 4, 7, 3, 1, 5, 4, 7, 2, 5, 3, 6, 9, 7, 4, 1, 2, 4, 9, 4, 3, 7],
	//		lineTension: 0.3,
	//		fill: true,
	//		borderColor: '#f39c12'

	//	};

	//	var dataComplete = {
	//		label: "Complete",
	//		data: $scope.CompleteCountArray = [4, 5, 7, 5, 7, 6, 1, 8, 7, 4, 5, 3, 7, 8, 9, 6, 4, 1, 5, 7, 6, 8, 3, 9, 4, 1, 3, 4, 7, 8,3],
	//		lineTension: 0.3,
	//		fill: true,
	//		borderColor: '#d9534f'
	//	};

	//	var CountData = {

	//		labels: $scope.ThisMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
	//		datasets: [dataOngoing, dataPending, dataComplete]
	//	};

	//	var chartOptions = {
	//		legend: {
	//			display: true,
	//			position: 'top',
	//			labels: {
	//				//boxWidth: 80,
	//				fontColor: 'black'
	//			}
	//		},
	//		title: {
	//			display: true,
	//			text: 'Previous Day Wise Task Count',
	//			position: 'left'
	//		},
	//		scales: {
	//			yAxes: [{
	//				ticks: {
	//					beginAtZero: true
	//				}
	//			}]
	//		}
	//	};

	//	if (window.MyChartLinePreviousCount != undefined) {
	//		window.MyChartLinePreviousCount.destroy();
	//	}
	//	window.MyChartLinePreviousCount = new Chart(CountCanvas, {
	//		type: 'line',
	//		data: CountData,
	//		options: chartOptions
	//	});
	//}

});
