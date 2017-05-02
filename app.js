var app = angular.module('warehouse-app', ['ngRoute', 'ngResource', 'ui.bootstrap', 'toaster', 'chieffancypants.loadingBar'])
    .directive("ddDraggable", Draggable)
    .directive("ddDropTarget", DropTarget);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when("/scalecaps", {
        controller: "scaleCapsController",
        templateUrl: "app/views/scalecaps.html"
    });

    $routeProvider.when("/scalecaps_view", {
        controller: "scaleCapsController",
        templateUrl: "app/views/scalecaps_new.html"
    });

    $routeProvider.when("/select_shift", {
        controller: "scaleCapsController",
        templateUrl: "app/views/selectshift.html"
    });

    $routeProvider.when("/drag_drop", {
        controller: "dragDropController",
        templateUrl: "app/views/dragdrop.html"
    });

    $routeProvider.otherwise({ redirectTo: "/scalecaps" });

    $locationProvider.html5Mode(false);
});