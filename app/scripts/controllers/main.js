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
  	$scope.message = "Non !";
  	$scope.babyfoot = "Mais c'est quand même l'heure du baby";
  	$scope.tickInterval = 1000; //ms
  	$scope.pauses = [{'beginHour': 10, 'stopHour': 10, 'beginMinute': 15, 'stopMinute': 30}, {'beginHour': 12, 'stopHour': 13, 'beginMinute': 15, 'stopMinute': 40}, {'beginHour': 15, 'stopHour': 15, 'beginMinute': 30, 'stopMinute': 45}];


  	var tick = function() {
  	    $scope.date = new Date() // get the current time
  	    $scope.checkPause();
  	    $timeout(tick, $scope.tickInterval); // reset the timer

  	}

  	// Start the timer
  	$timeout(tick, $scope.tickInterval);

  	$scope.checkPause = function () {
  		let isPause = false;
  		let date = $scope.date;
  		for (var i = 0; i < $scope.pauses.length; i++) {
  			let pause = $scope.pauses[i];
  			if (pause.beginHour != pause.stopHour) {
  				if ((pause.beginHour === date.getHours() && pause.beginMinute <= date.getMinutes()) || (pause.stopHour === date.getHours() && pause.stopMinute > date.getMinutes())) {
  					isPause = true;
  				}
  			}
  			if (pause.beginHour === pause.stopHour) {
  				if ((pause.beginHour === date.getHours() && pause.beginMinute <= date.getMinutes() && pause.stopMinute > date.getMinutes())) {
  					isPause = true;
  				}
  			}
  		}
  		if (isPause) {
  			$scope.message = "Oui !";
  			$scope.babyfoot = "YOLO";
  		} else {
  			$scope.message = "Non !";
  			$scope.babyfoot = "Mais c'est quand même l'heure du baby";
  		}
  	}

  	$scope.checkPause();

  });
