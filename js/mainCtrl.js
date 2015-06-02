var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, dataService, cookies) {
	$scope.author = prompt('Author?');
	if (!$scope.author) $scope.author = 'Anonymous';



	$scope.addQuote = function (query) {
		if(!query) return;

		var newMessage = {
			text: query,
			author: $scope.author
		}

		// Push new data
		var response = dataService.addData(newMessage);
		
		// Front end changes
		if (response) {
			$scope.textQuery = '';
		} else {
			$scope.errorMessage = 'Error!';
		}
	}



	$scope.removeQuote = function (query) {
		dataService.removeData(query);
		$scope.textQuery = '';
	}


	$scope.filterQuote = function (query) {
		$scope.searchQuery = query;
	}

	$scope.messages = dataService.getData();
})