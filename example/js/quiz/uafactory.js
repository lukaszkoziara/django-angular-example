angular.module('uafactory', ['ngResource']).
	factory('UserAttribute', function($resource) {
		var UserAttribute = $resource('/api/v1/userattributes/?format=json');
		
		return UserAttribute;
	});
