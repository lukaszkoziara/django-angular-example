angular.module('ua', ['ngResource']);

function UserAttributesController($scope, $resource){
	$scope.ua = $resource('/api/v1/userattributes/?format=json');
	$scope.ua_id = $resource('/api/v1/userattributes/:id/?format=json', {id: '@id'},
		{update: { method: 'PUT' }});
	
	$scope.numsaving = 0;
	$scope.getNumSavingText = function(){
		if($scope.numsaving == 1){
			return "Saving 1 item...";
		}
		else{
			return "Saving " + $scope.numsaving + " items...";
		}
	}
	
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
		$scope.ua_id.remove(item);
		
		var position = $scope.result.objects.indexOf(item);
		if(position !== -1){
			$scope.result.objects.splice(position, 1);
		}
	}
	
	$scope.updateAttribute = function(item){
		$scope.ua_id.save(item);
	}
	
	$scope.editAttribute = function(item){
		item.editing = true;
	}
	
	$scope.saveAttributeEdits = function(item){
		item.editing = false;
		$scope.ua_id.update(item);
	}
}
