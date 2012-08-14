angular.module('appfactory', ['ngResource']).
	factory('QuickStat', function($resource) {
		var QuickStat = $resource('/api/v1/quickstats/?format=json',
			{
				callback: 'JSON_CALLBACK',
			});
		
		return QuickStat;
	});
