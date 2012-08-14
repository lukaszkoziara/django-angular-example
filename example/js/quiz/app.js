angular.module('myapp', ['ngResource']);

function QuickStatsController($scope, $resource){
	$scope.quickstats = $resource('/api/v1/quickstats/?format=json',
		{
			callback: 'JSON_CALLBACK'});
	
	$scope.addItem = function(){
		var newItem = new $scope.quickstats({});
		newItem.$save(function(item){
			console.log('response age, height: ' + item.age + ', ' + item.height_inches);
			if(!item.session_key){
				alert('no session key');
			}
		});
	}
	
	$scope.createItem = function(){
		console.log('creating: ' + $scope.quickstat.age + ' ' + $scope.quickstat.height_inches);
		var newItem = new $scope.quickstats({});
		
		newItem.age = $scope.quickstat.age;
		newItem.height_inches = $scope.quickstat.height_inches;
		
		newItem.$save(function(item){
			console.log('response age, height: ' + item.age + ', ' + item.height_inches);
			if(!item.session_key){
				alert('no session key');
			}
		});
	}
}
