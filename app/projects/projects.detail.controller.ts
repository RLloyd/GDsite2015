/**
 * Created by Odee on 6/30/15.
 */

(function () { //IIFE
	'use strict';

	/*app.controller("ControllerBasics",
	 ["$scope", "$http", "$resource" "$interval", "$anchorScroll", "$location",
	 function ($scope, $http, $resource, $interval, $anchorScroll, $location) {

	 /!*----------| SCOPE VARS |----------*!/
	 $scope.title = "GitHub Viewer";
	 $scope.shortBlurb;// = something;

	 */
	/*angular.module("gdApp").controller("ProjectDetailCtrl", ["$scope", function ProjectDetailCtrl($scope){
	 $scope.test = "Testing";
	 var vm = this;
	 //vm.title = "Titolo";

	 /!*Hard coded data for development testing only*!/
	 vm.project = {
	 "projectId": 9,
	 "projectName": "Garden Cart",
	 "projectCode": "GDN-0023",
	 "releaseDate": "June 11, 2015",
	 "description": "15 galloon capacity rolling garden cart",
	 "cost": 20.00,
	 "price": 32.99,
	 "category": "garden",
	 "tags": ["barrow", "cart", "wheelbarrow"],
	 "imageUrl": "images/johnEating.jpg"
	 };
	 /!*End hard coded*!/

	 vm.title = "Project Detail: " + vm.project.projectName;

	 if (vm.project.tags) {
	 vm.project.tagList = vm.project.tags.toString();
	 }

	 };*/

	angular
		.module("gdApp")
		.controller("ProjectDetailCtrl", ["project", ProjectDetailCtrl]); //"projectService",

	//angular.module("gdApp").controller("ProjectDetailCtrl", ["$scope", ProjectDetailCtrl]);
	//app.controller("ProjectDetailCtrl", ProjectDetailCtrl);

	console.log("Project Detail Controller");

	function ProjectDetailCtrl(project) { //projectService
		var vm = this;
		vm.projects = project;
		//console.log("project: ",project);
		//console.log("vm.projects: ", vm.projects);
		//console.log("project: ", project);

		/*Hard coded data for development testing only*/
		/*vm.projects = {
		 "projectId": 1,
		 "projectName": "John John Poot",
		 "projectCode": "JFG-0808",
		 "releaseDate": "June 11, 2015",
		 "description": "Naughty boy who likes to tease his Mom and loves corn.",
		 "cost": 20.00,
		 "price": 32.99,
		 "category": "Food",
		 "tags": ["vegies", " fruit", " yummy"],
		 "imageUrl": "images/johnEating.jpg"
		 };*/
		/*End hard coded*/

	/*	function escapeRegExp(str) {
			//return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			var arr = [];
			var tmp = str.split(',');
			//var tmp = str.split('a');
			console.log("tmp.lengthO: ", tmp.length, " | str: ", str, " | tmp: ", tmp);
			/!*var tS = str.replace(/\a/, "x ");
			console.log("tS: ", tS)*!/

			//str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
			//console.log("str: ", str)

			console.log("tmp.lengthI: ", tmp.length);
			for (var i = 0; i < tmp.length; i++) {
				//console.log("tmp.lengthI: ", tmp.length);
				//arr.push(tmp[i].replace(arr, 'x')//.replace(/\,/'').split(',. '));
				//arr.push(tmp[i].replace(/\a/).split('o'));
				arr.push(tmp[i];//.replace(/\a|\r/g, '').split(', '));
				console.log("arr: ", arr[i], i);
				var tS = str.replace(arr[i], "x ");
				console.log("tS: ", tS, " ---------------------", i)

				/!*var tS = str.replace(arr, "x ");
				vm.projects.tagList = tS;//str;
				console.log("tS: ", tS);

				var tS2 = str.replace('", ', ', ');
				vm.projects.tagList = tS2;//str;
				console.log("tS2: ", tS2);*!/

				vm.projects.tagList = tS;

			}


			/!*console.log("value: ", value);
			 return (!value) ? 'x' : value.replace(/r/g, 'xx');*!/

			/!*return function (value) {
			 console.log("value: ", value);
			 return (!value) ? 'x' : value.replace(/r/g, 'xx');

			 };*!/
		}*/

		function splitString(stringToSplit) {
			var arrayOfStrings = stringToSplit.split(',');
			/*
			console.log("arrayOfStrings: ", arrayOfStrings);
			console.log("arrayOfStrings.join(', '): ", arrayOfStrings.join(', '));

			console.log('The original string is: "' + stringToSplit + '"');
			//console.log('The separator is: "' + separator + '"');
			console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(', '));
*/
			vm.projects.tagList = arrayOfStrings.join(', ');
		}
		//var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
		/*var space = ' ';
		var comma = ',';*/

		vm.title = "Project Detail: " + vm.projects.projectName;

		//console.log("vm.projects.projectName: ", vm.projects.projectName);

		//vm.marginPercent = projectService.calculateMarginPercent(vm.projects.price, vm.projects.cost);
		//console.log("vm.projects.tags: ", vm.projects.tags);
		console.log("•|--------------------------->");
		if (vm.projects.tags) {
			var tempStrings = vm.projects.tags.toString();
			console.log("tempStrings: ", tempStrings);

			var monthString = tempStrings;
			splitString(monthString);
			console.log("monthString: ", monthString);
			
			//vm.projects.tagList = monthString;

			/*var re = new RegExp(",*");
			 console.log("re: ",re);*/

			/*var re = /\s*;\s*!/;
			var nameList = tempStrings.split(re);
			console.log("nameList: ", nameList);
			vm.projects.tagList = nameList;*/

			//escapeRegExp(tempStrings);
			//console.log("tempStrings: ", tempStrings);
			//vm.projects.tagList = tempStrings;




			//var arr = [];
			//var tmp = tempStrings.split('r');
			//console.log("tmp.length: ",tmp.length);
			//for (var i=0; i<tmp.length; i++) {

			/*console.log("tmp.length: ",tmp.length);
			 arr.push(tmp[i]//.replace(/\,/'').split(',. '));
			 console.log("arr: ",arr, i);

			 var tS = tempStrings.replace(arr, "x ");
			 vm.projects.tagList = tS;//tempStrings;
			 console.log("tS: ",tS);*/

			//var tS2 = tempStrings.replace('", ', ', ');
			//vm.projects.tagList = tS2;//tempStrings;
			//console.log("tS2: ",tS2);
			//}


			//var tS = tempStrings.replace(",", ", ")
			//var tS.split(",").join(", ")
			//console.log("tS: ",tS);

			//vm.projects.tagList = tS;//vm.projects.tags.toString();


			//str.split(search).join(replacement)

			//console.log("vm.projects.tagList: ",vm.projects.tagList);

			/*var tagIndx = vm.projects.tagList.indexOf(",")
			 console.log("tagIndx: ",tagIndx);*/
			/*if(tagIndx){
			 tagIndx.split(/\,|,. /);
			 }*/

			/*
			 //var projString = vm.projects.tagList;
			 //console.log("projString: ",projString);
			 var arr = [];
			 var tmp = tempStrings.split(',');
			 console.log("tmp: ",tmp);
			 for (var i=0; i<tmp.length; i++) {
			 arr.push(tmp[i].replace(/\,/'').split(',. '));
			 console.log("arr: ",arr);
			 vm.projects.tagList = tempStrings;
			 }
			 */
			/*var myObj = {
			 strngTemp: "Temporary String",
			 tagToStrng: vm.projects.tags.toString()
			 }
			 console.log("myObj: ", myObj)*/


			/*if(vm.projects.tagList.indexOf(",")){
			 //var parameters = url.split('/');
			 console.log("found it!");
			 /!*vm.projects.tagList.split(/\,|,. /);*!/
			 vm.projects.tagList.split('/');
			 }*/
			/*var nx = vm.projects.tagList.indexOf(",");
			 console.log("nx: ",nx);*/
		}
	}

}());




