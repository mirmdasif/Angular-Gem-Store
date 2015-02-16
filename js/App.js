
(function () {

    var app = angular.module('store',[]);
    app.controller('StoreController', function () {
        this.product = gem;
    });

    var gem = {
        name: 'Azurite',
        price: '20',
        canPurchase: false,
        soldOut: true
    };

})();

