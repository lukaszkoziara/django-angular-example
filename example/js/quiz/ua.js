angular.module('ua', ['ngResource']);

function UserAttributesController($scope, $resource){
	/*
	 * var User = $resource('/user/:userId', {userId:'@id'});
		var user = User.get({userId:123}, function() {
		  user.abc = true;
		  user.$save();
		});
	 */
	
	$scope.ua = $resource('/api/v1/userattributes/?format=json');
	$scope.uaid = $resource('/api/v1/userattributes/:id/?format=json', {id: '@id'},
		{update: { method: 'PUT' }});
	
	
	$scope.numsaving = 0;
	
	$scope.result = $scope.ua.get(function(response){
		console.log('got result');
	});
	
	$scope.addAttribute = function(){
		$scope.numsaving += 1;
		
		var attr = new $scope.ua({name: $scope.attribute_name});
		attr.$save(function(saveditem){
			console.log('saved: ', saveditem);
			$scope.result.objects.push(saveditem);
			$scope.numsaving -= 1;
		});
	}
	
	$scope.removeAttribute = function(item){
		console.log('removing item: ', item);
		$scope.uaid.remove(item);
		
		var position = $scope.result.objects.indexOf(item);
		if(position !== -1){
			$scope.result.objects.splice(position, 1);
		}
	}
	
	$scope.updateAttribute = function(item){
		$scope.uaid.save(item);
	}
	
	$scope.editAttribute = function(item){
		item.editing = true;
	}
	
	$scope.saveAttributeEdits = function(item){
		item.editing = false;
		$scope.uaid.update(item);
	}
}
