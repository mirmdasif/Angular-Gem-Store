
(function () {

    var app = angular.module('store',[]);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems =[
        {
            name: 'Azurite',
            price: '20',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'BloodStone',
            price: '20',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Zircon',
            price: '20',
            canPurchase: true,
            soldOut: false
        }
    ];

})();

