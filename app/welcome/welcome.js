'use strict';

angular.module('myApp.welcome', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
      });
    }])

    .controller('WelcomeCtrl', ['$scope', '$location', function($scope, $location) {
      $scope.names = [
        '李莫愁 Don’t Worry Lee',
        '李寻欢 Be Happy Lee',
        '常遇春 Always Meet Spring',
        '杨不悔 No Regrets Young',
        '杨逍 Happy Young',
        '范遥 Far Fan',
        '王重阳 Double Sun King',
        '金轮法王 Golden Wheel-in-law',
        '谢逊 Suckson',
        '黄药师 Dr. Huang',
        '张三丰 Three peak Chaung',
        '杨康 Health Young',
        '小龙女 Miss Dragon',
        '杨过 Fault Young',
        '陆小凤 Little Phoenix Lu',
        '令狐冲 Make the Fox Rush',
        '韦小宝 Baby Way',
        '任我行 Let Me Go',
        '何师我 Who Teaches Me',
        '何足道 What To Say',
        '向问天 To ask sky',
        '江玉郎 Handsome Man River',
        '江别鹤 Goodbye Crane River',
        '乔峰 Mountain Jeo',
        '段誉 Broken Jade',
        '张无忌 Whatever Zhang',
        '阳顶天 Great Penis',
        '鸠摩智 George',
        '西门庆 Simon King'
      ];
      $scope.selectedname = '王重阳 Double Sun King';

      $scope.boats = ['聚点儿撸串儿'];
      $scope.selectedboat = '聚点儿撸串儿';


      $scope.enterChatRoom = function() {
        $location.path('/chatroom/' + $scope.selectedname + '/' + $scope.selectedboat);
      }

    }]);