(function () {
    'use strict';

    angular.module('Ekzamen', [])
        .controller('Controller', Controller)
        .service('Service', Service);

    Controller.$inject = ['Service'];

    function Controller(Service) {
        var buy = this;
        buy.listBuy = Service.getBuy();
        buy.removeItem = function (index) {
            Service.removeItem(index);
        }
        buy.hide = function(index){
            Service.hide(index)
        }
         
    }
    function Service() {
        var service = this;

        var listBuy = [
            {
                mark: "Actimel",
                quantity: 12,
                isVisible : true
            },
            {
                mark: "Danone",
                quantity: 6,
                isVisible : true
            },
                        {
                mark: "Галичина",
                quantity: 10,
                isVisible : true
            },
            {
                mark: "Український",
                quantity: 7,
                isVisible : true
            },
            {
                mark: "Растішка",
                quantity: 77,
                isVisible : true
            },
        ];

        service.getBuy = function () {
            return listBuy;
        };

        service.removeItem = function (index) {
            listBuy.splice(index, 1);
        };
        service.hide = function(index)
        {
            listBuy[index].isVisible = false;
        }
        
    }
})();
