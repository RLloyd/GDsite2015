/**
 * Created by Odee on 6/29/15.
 */

(function () { //IIFE
	'use strict';

	angular
		.module("ngResource")
		.factory("projectResource", projectResource);
		projectResource.$inject = ["$resource"]; //for minification


	function projectResource($resource) {
		//console.log("$resource: ",$resource);
		//console.log("$resource(/api/projects/:projectId): ",($resource("/api/projects/:projectId")));
		return $resource(
			"/api/projects/:projectId"
			/*{ 'query': { method: 'GET'}}*/
		)
	}
	
}());