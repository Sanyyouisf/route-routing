app.config(function($routeProvider){
	$routeProvider
	.when('/highway/Interstate24',{
		templateUrl:'/partials/Hy-Interstate24.html',
		controller:'Interstate24Ctrl'
	})
	.when('/highway/Interstate40',{
		templateUrl:'/partials/Hy-Interstate40.html',
		controller:'Interstate40Ctrl'
	})
	.when('/highway/Home',{
		templateUrl:'/partials/Hy-Home.html',
		controller:'HomeCtrl'
	})
	.otherwise('/highway/Home');
});