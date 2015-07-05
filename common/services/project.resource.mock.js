/**
 * Created by Odee on 6/9/15.
 */
/* projectResourceMock
 * Add this file as DI in "app" module
 * THIS IS FOR MOCKING DATA FOR DEVELOPMENT
 * */
/*Data is still hard-coded here but this app is Web Service ready.
 When connecting to a web service just remove this as DI in "app" module*/
(function () {
    'use strict';
    var app = angular.module("projectResourceMock", ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        var projects = [
            {
                "projectId": 1,
                "projectName": "Vape Juice Calculator",
                "projectCode": "GDP-1201",
                "dateCreated": "July 2015",
                "description": "Calculator for home made vape juice. Vape juice can be quite expensive when you buy it from the vape store.",
                "cost": 9.00,
                "price": 27.00,
                "category": "AngularJS, Programming, Design",
                "tags": ["AngularJS", "Javascript", "Bootstrap", "HTML5", "CSS3", ".*+?^$"],
                "imageUrl": "images/sexyPinay_01.jpg"
            },
            {
                "projectId": 2,
                "projectName": "Calories Exercise Calculator",
                "projectCode": "GDN-0011",
                "dateCreated": "March 19, 2010",
                "description": "Leaf rake with 48-inch wooden handle.",
                "cost": 9.00,
                "price": 18.00,
                "category": "AngularJS, Programming, Design",
                "tags": ["AngularJS", "Javascript", "Bootstrap", "HTML5", "CSS3"],
                "imageUrl": "images/sexyPinay_02.jpg"
            },
            {
                "projectId": 3,
                "projectName": "G-String",
                "projectCode": "GDN-0011",
                "dateCreated": "March 19, 2010",
                "description": "Leaf rake with 48-inch wooden handle.",
                "cost": 9.00,
                "price": 15.00,
                "category": "AngularJS, Programming, Design",
                "tags": ["AngularJS", "Javascript", "Bootstrap", "HTML5", "CSS3"],
                "imageUrl": "images/sexyPinay_03.jpg"
            }
        ];
        //console.log("projects: ", projects.projectName:2);
        //Url that expected to intercept. This Url was issued in "projectResource" service
        var projectUrl = "/api/projects";
        console.log("projectUrl: ", projectUrl);
        //When "projectUrl" is intercepted response with the "projects" data instead
        $httpBackend.whenGET(projectUrl).respond(projects);
        //-----------| For Editing data
        var editingRegex = new RegExp(projectUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var project = { "projectId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            if (id > 0) {
                for (var i = 0; i < projects.length; i++) {
                    //console.log("projects[i].projectId: ", projects[i].projectId);
                    if (projects[i].projectId == id) {
                        project = projects[i];
                        break;
                    }
                }
                ;
            }
            return [200, project, {}];
        });
        //-----------| For Saving data
        $httpBackend.whenPOST(projectUrl).respond(function (method, url, data) {
            var project = angular.fromJson(data);
            console.log("projectResourceMock.project: ", project);
            if (!project.projectId) {
                //new project id
                project.projectId = projects[projects.length - 1].projectId + 1;
                var pushMe = projects.push(project);
                console.log("projectResourceMock.pushMe: ", pushMe);
            }
            else {
                //updated project
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i].projectId == project.projectId) {
                        projects[i] = project;
                        break;
                    }
                }
                ;
            }
            return [200, project, {}];
        });
        //Pass through any requests for application files
        //Any file inside the app folder will be pass through
        $httpBackend.whenGET(/app/).passThrough();
    });
}());
//# sourceMappingURL=project.resource.mock.js.map