'use strict';

angular.module('myApp')
.component('navigationElement', {
    restrict: 'E',
    bindings: {
      heading: '='
    },
    controller: 'MainCtrl',
    template: function ($element, $attrs) {
      return [
        '<div class="toolbar header">',
        '<div ng-hide="editorEnabled"> {{heading}} <a href="#" ng-click="editorEnabled=!editorEnabled"> Edit</a></div>',
        '<div ng-show="editorEnabled"><input size="40" ng-model="heading"><a href="#" ng-click="editorEnabled=!editorEnabled">Done editing?</a></div>',
        '</div>',
        '<div ng-class="{borderstyle: $last }" id="navigation" ng-repeat="lists in list">',
        '<div class="header">{{lists.nav_name}}</div>',
        '<div ng-repeat="item in lists.content">',
        '  <ul>',
        '<li ng-class="{active: item.name == \'Home\'}"><a href="#"><i class="icon"></i> {{item.name}}</a></li>',
        '  </ul>',
        '</div>',
        '</div>',
        '<div id="paginationTest">',
        '  <ul>',
        '  <li class="disabled"><a href="#">&laquo;</a></li>',
        '  <li class="active"><a href="#">1</a></li>',
        '  <li ng-click="navigationElement.click();"><a href="#">2</a></li>',
        '  <li><a href="#">3</a></li>',
        '  <li><a href="#">4</a></li>',
        '  <li><a href="#">&raquo;</a></li>',
        '</ul>',
        '</div>'
      ].join('');
    }
})
.controller('MainCtrl', ['$scope', function($scope) {
  $scope.heading = 'Welcome to Angular Components';
  $scope.list = [
     {
        "nav_id":"1",
        "nav_name":"Navigation",
        "content":[
           {
             "name" : "Home"
           },
           {
             "name" : "Applications"
           },
           {
             "name" : "Careers"
           }
        ]
     },
     {
        "nav_id":"2",
        "nav_name":"MY ACCOUNT",
        "content":[
           {
             "name" : "Profile"
           },
           {
             "name" : "Settings"
           },
           {
             "name" : "Careers"
           }
        ]
     }
   ]
}]);
