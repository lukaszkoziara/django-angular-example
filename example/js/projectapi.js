// This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('projectapi', ['ngResource']).
    factory('Project', function($resource) {
      /*
      var Project = $resource('/api/v1/project/',
      {
      	update: {method: 'POST'},
      	
      });
 	
 	*/
 	var Project = $resource('/api/v1/project/');
 	
      Project.prototype.update = function(cb) {
      	
      	console.log('updating');
      	
      	//var newProj = new Project({name: })
      	/*
        return Project.update({id: this.id.$oid},
            angular.extend({}, this, {id:undefined}), cb);
        */
      };
      
      /*
      Project.prototype.save = function(cb){
      	console.log('saving');
      }
 */

      Project.prototype.destroy = function(cb) {
        return Project.remove({id: this.id.$oid}, cb);
      };
 
      return Project;
    });
