angular.module('quickstatsapp', ['appfactory']);

function QuickStatsController($scope, QuickStat){
	$scope.stats = QuickStat.query();
	
	$scope.createItem = function(){
		console.log('creating: ' + $scope.quickstat.age + ' ' + $scope.quickstat.height_inches);
		
		QuickStat.save($scope.quickstat, function(saveditem){
			console.log('saved item: ', saveditem);
		});
	}
}
