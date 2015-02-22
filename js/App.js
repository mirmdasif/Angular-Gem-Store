
(function () {

    var app = angular.module('store',[]);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('ReviewFormController', function () {
        this.review = {};
        this.submitReview = function (product) {

            product.reviews.push(this.review);
            this.review = {};
        }
    })

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
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
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
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
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
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        }
    ];

})();

