'use strict';

/**
 * @ngdoc function
 * @name pauseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pauseApp
 */
angular.module('pauseApp')
  .controller('MainCtrl', function ($scope, $filter) {
  	$scope.date = new Date();
  	$scope.pause = "Non !";

  	$scope.init = function () {
  		if ($scope.date.getHours() == 15 && $scope.date.getMinutes() > 30 && $scope.date.getMinutes() < 45) {
  			$scope.pause = "Oui !";
  		}
  		if ($scope.date.getHours() == 10 && $scope.date.getMinutes() > 15 && $scope.date.getMinutes() < 30) {
  			$scope.pause = "Oui !";
  		}
  	}

  	$scope.init();

  });
