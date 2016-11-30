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
  	$scope.dates = [];
  	$scope.nextPause = 1;

  	for (var i = 0; i < $scope.pauses.length; i++) {
  		let datePause = new Date();
  		datePause.setHours($scope.pauses[i].beginHour);
  		datePause.setMinutes($scope.pauses[i].beginMinute);
  		datePause.setSeconds(0);
  		$scope.dates.push(datePause);
  	}

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
  		let diffTmp = 0;
  		if ($scope.date.getHours() > 15 && $scope.date.getMinutes() > 30) { 			
			for (var i = 0; i < $scope.dates.length; i++) {
				if ($scope.date < $scope.dates[i]) {
					var nextPauseTmp = $scope.dates[i] - $scope.date;
					if (nextPauseTmp < diffTmp || diffTmp === 0) {
						diffTmp = nextPauseTmp;
					}
				}
			}
			$scope.showPause = true;
			$scope.nextPause = diffTmp;
  		} else {
  			$scope.showPause = false;
  		}
  	}

  	$scope.checkPause();

  });
