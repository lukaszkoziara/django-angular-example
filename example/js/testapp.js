angular.module('testapp', ['ngResource']);



function TestController($scope, $resource){
	/*
	$scope.twitter = $resource('http://search.twitter.com/:action',
		{action : 'search.json', q: 'angularjs',
			callback: 'JSON_CALLBACK'},
		{get:{method:'JSONP'}}
	);
	
	$scope.doSearch = function(){
		console.log('search term: ' + $scope.searchTerm);
		$scope.twitterResult = $scope.twitter.get({q: $scope.searchTerm});
	};
	*/
	
	$scope.projects = $resource('/api/v1/project/');
	
	$scope.doAdd = function(){
		console.log('adding');
		
		var Project = $resource('/api/v1/project/?format=json');
		var newProj = new Project({name: 'test2', website: 'http://test.com', description: 'another test'});
		newProj.$save(function(proj, response){
			console.log('saved project name: ' + proj.name);
			
		});
	}
}
