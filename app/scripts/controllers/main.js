'use strict';

/**
 * @ngdoc function
 * @name pauseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pauseApp
 */
angular.module('pauseApp')
  .controller('MainCtrl', function ($scope, $timeout) {
  	$scope.date = new Date();
  	$scope.pause = "Non !";
  	$scope.tickInterval = 1000; //ms

  	var tick = function() {
  	    $scope.date = new Date() // get the current time
  	    $scope.checkPause();
  	    $timeout(tick, $scope.tickInterval); // reset the timer
  	}

  	// Start the timer
  	$timeout(tick, $scope.tickInterval);

  	$scope.checkPause = function () {
  		if ($scope.date.getHours() == 15 && $scope.date.getMinutes() >= 30 && $scope.date.getMinutes() <= 45) {
  			$scope.pause = "Oui !";
  		}
  		if ($scope.date.getHours() == 10 && $scope.date.getMinutes() >= 15 && $scope.date.getMinutes() <= 30) {
  			$scope.pause = "Oui !";
  		}
  		if ($scope.date.getHours() == 12 && $scope.date.getMinutes() >= 15) {
  			$scope.pause = "Oui !";
  		}
  		if ($scope.date.getHours() == 13 && $scope.date.getMinutes() <= 40) {
  			$scope.pause = "Oui !";
  		}
  	}

  	$scope.checkPause();

  });
