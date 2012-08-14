angular.module('project', ['projectapi']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'/static/partials/list.html'}).
      when('/edit/:projectId', {controller:EditCtrl, templateUrl:'/static/partials/detail.html'}).
      when('/new', {controller:CreateCtrl, templateUrl:'/static/partials/detail.html'}).
      otherwise({redirectTo:'/'});
  });
 
 
function ListCtrl($scope, Project) {
  $scope.projects = Project.query();
  
  $scope.doAdd = function(){
  	console.log('adding...');
  	
  }
}
 
 
function CreateCtrl($scope, $location, Project) {
	//$scope.project_resource = $resource('/api/v1/project/');
	//$scope.Project = Project;
	
	$scope.doAdd = function(){
		console.log('adding');
		var newProj = new Project({name: 'test2', website: 'http://test.com', description: 'testng'});
		newProj.$save();
	}
	
	$scope.change = function(){
		console.log('changing');
		
	}
	
  $scope.save = function() {
  	console.log('saving in create controller');
  	
  	
    Project.save($scope.project, function(project) {
    	$location.path('/');
    });
    
  }
}
 
 
function EditCtrl($scope, $location, $routeParams, Project) {
  var self = this;
 
  Project.get({id: $routeParams.projectId}, function(project) {
    self.original = project;
    $scope.project = new Project(self.original);
  });
 
  $scope.isClean = function() {
    return angular.equals(self.original, $scope.project);
  }
 
  $scope.destroy = function() {
    self.original.destroy(function() {
      $location.path('/list');
    });
  };
 
  $scope.save = function() {
    $scope.project.update(function() {
      $location.path('/');
    });
  };
}
