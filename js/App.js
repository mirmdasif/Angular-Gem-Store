
(function () {

    var gem = { name: 'Azurite', price: '20'};
    var app = angular.module('store',[]);
    app.controller('StoreController', function () {
        this.product = gem;
    });

})();

