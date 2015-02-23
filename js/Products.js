(function(){
    var app = angular.module('store-directives',[]);

    app.directive('productHeading',function(){
        return {
            templateUrl : 'product-heading.html'
        };
    });
    app.directive('productImages',function () {
        return  {
            templateUrl : 'product-images.html'
        };
    });
    app.directive('productTabs',function(){
        return {
            templateUrl : 'product-tabs.html'
        };
    });

    app.directive('productDescription', function () {
        return {
            restrict : 'E',
            templateUrl : 'product-description.html'
        };
    });
    app.directive('productSpecs', function () {
        return {
            restrict : 'E',
            templateUrl : 'product-specs.html'
        };
    });

    app.directive('productReviews',function() {
        return {
            restrict : 'E',
            templateUrl : 'product-reviews.html'
        };
    });

    app.directive('reviewForm',function(){
        return {
            restrict : 'E',
            templateUrl : 'review-form.html',
            controller : function () {
                this.review = {};
                this.submitReview = function (product) {

                    this.review.createdOn = Date.now();
                    product.reviews.push(this.review);
                    this.review = {};
                }
            },
            controllerAs : 'formCtrl'
        };
    });

})();