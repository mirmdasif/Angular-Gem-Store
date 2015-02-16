
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
            soldOut: false,
            images:[
                "images/gem-01.gif",
                "images/gem-02.gif",
                "images/gem-03.gif"
            ]
        },
        {
            name: 'BloodStone',
            price: '25',
            canPurchase: true,
            soldOut: false,
            images:[
                "images/gem-04.gif",
                "images/gem-05.gif",
                "images/gem-06.gif"
            ]
        },
        {
            name: 'Zircon',
            price: '50',
            canPurchase: true,
            soldOut: false,
            images:[
                "images/gem-07.gif",
                "images/gem-08.gif",
                "images/gem-09.gif"
            ]
        }
    ];

})();

