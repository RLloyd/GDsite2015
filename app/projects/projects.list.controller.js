/**
 * Created by Odee on 6/29/15.
 */
(function () {
    'use strict';
    /*---------| The old way |-----------*/
    /*angular.module("gdApp").controller("ProjectListController", ["projects", ProjectListController]);*/
    /*---------| Recommended |-----------*/
    angular
        .module("gdApp")
        .controller("ProjectListController", ProjectListController);
    ProjectListController.$inject = ["projectResource"]; //, "projects", "$state"];
    function ProjectListController(projectResource) {
        var vm = this;
        projectResource.query(function (data) {
            vm.projects = data;
        });
        //-----| Toggle show and hide images
        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };
    }
}());
//# sourceMappingURL=projects.list.controller.js.map