angular.module('myapp', ['ngResource']);

/*
 * angular.module('mongolab', ['ngResource']).
    factory('Project', function($resource) {
      var Project = $resource('https://api.mongolab.com/api/1/databases' +
          '/angularjs/collections/projects/:id',
          { apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
            update: { method: 'PUT' }
          }
      );
 
      Project.prototype.update = function(cb) {
        return Project.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      Project.prototype.destroy = function(cb) {
        return Project.remove({id: this._id.$oid}, cb);
      };
 
      return Project;
    });
 */

function MyController($scope, $resource){
	$scope.authors = $resource('/api/v1/author/',
		{
			callback: 'JSON_CALLBACK'},
		{get:{method:'JSONP'}}
	);
	
	$scope.authorResult = $scope.authors.get(function(results){
		console.log('results: ', results);
	});
	
	$scope.getTotalBooks = function(){
		return $scope.authorResult.objects.length;
	}
	
	$scope.addNewAuthor = function(){
		console.log('adding new author');
		$resource('/api/v1/author/',
		{
			update:{method: 'POST'},
			
		})
	}
}
