var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe("KarmaController", function() {
	
	beforeEach(module('karma'));
	
	var $controller;
	
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));
	
	describe("$scope.sum", function() {
		it("should add two numbers", function() {
			var $scope = {};
			var controller = $controller('karmaController', { $scope: $scope });
			
			$scope.num1 = 5;
			$scope.num2 = 10;
			$scope.AddNumbers();
			
			expect($scope.sum).to.equal(15);
		});
        it("should failed", function() {
			var $scope = {};
			var controller = $controller('karmaController', { $scope: $scope });
			
			$scope.num1 = 3;
			$scope.num2 = 10;
			$scope.AddNumbers();
			
			assert.equal($scope.sum, 15);
		});
        xit("should pass", function() {
			var $scope = {};
			var controller = $controller('karmaController', { $scope: $scope });
			
			$scope.num1 = 5;
			$scope.num2 = 10;
			$scope.AddNumbers();

			($scope.sum).should.equal(15);
		});
        it("should pass again", function() {
			var $scope = {};
			var controller = $controller('karmaController', { $scope: $scope });
			
			$scope.num1 = 5;
			$scope.num2 = 10;
			$scope.AddNumbers();
			
			($scope.sum).should.equal(15);
		});
        describe("nested $scope.sum", function() {
            it("should add two numbers", function() {
                var $scope = {};
                var controller = $controller('karmaController', { $scope: $scope });
                
                $scope.num1 = 5;
                $scope.num2 = 10;
                $scope.AddNumbers();
                
				($scope.sum).should.equal(15);
            });
        });
	});
});