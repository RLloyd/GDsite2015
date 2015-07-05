/**
 * Created by Odee on 6/29/15.
 */
(function () {
    'use strict';
    var app = angular.module("gdApp", ["ngResource",
        "ui.router",
        "projectResourceMock"]);
    /*			"ui.mask", //ui-utils
     "ui.bootstrap" ]);*/
    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            //---Defining the 3 states and the views for the Menu
            $stateProvider
                .state("home", {
                url: "/",
                templateUrl: "app/welcome.home.view.html"
            })
                .state("projectsList", {
                url: "/projects",
                templateUrl: "app/projects/projects.list.view.html",
                controller: "ProjectListController as vm"
            })
                .state("myInfo", {
                abstract: true,
                url: "/projects/edit/:projectId",
                templateUrl: "app/projects/project.edit.view.html",
                controller: "ProjectListController as vm",
                resolve: {
                    projectResource: "projectResource",
                    project: function (projectResource, $stateParams) {
                        var projectId = $stateParams.projectId;
                        //console.log("prodResource: ", projectResource);
                        //console.log("projectId: ", projectId);
                        return projectResource.get({ projectId: projectId }).$promise;
                    }
                }
            })
                .state("projectEdit.info", {
                url: "/info",
                templateUrl: "app/projects/projectEditInfoView.html"
            })
                .state("projectEdit.price", {
                url: "/price",
                templateUrl: "app/projects/projectEditPriceView.html"
            })
                .state("projectEdit.tags", {
                url: "/tags",
                templateUrl: "app/projects/projectEditTagsView.html"
            })
                .state("projectDetail", {
                url: "/projects/:projectId",
                templateUrl: "app/projects/projects.detail.view.html",
                controller: "ProjectDetailCtrl as vm",
                //---Adding resolve: prodResource is the key name, value: "projectResource" is a string alias of the service
                resolve: {
                    projectResource: "projectResource",
                    project: function (projectResource, $stateParams) {
                        var projectId = $stateParams.projectId;
                        console.log("prodResource: ", projectResource);
                        console.log("projectId: ", projectId);
                        return projectResource.get({ projectId: projectId }).$promise;
                    }
                }
            });
            $urlRouterProvider.otherwise("/");
        }
    ]);
}());
//# sourceMappingURL=app.js.map