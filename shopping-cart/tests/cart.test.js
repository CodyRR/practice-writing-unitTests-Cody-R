
const cartFunc = require("../cart.js");

describe("Shopping Cart", function(){

    test("This should add an item to the cart",
        function() {

            let cartInit = {};
            let itemInit = "Apple";
            let quantityInit = 5;

            let cartChecker = { "Apple": 5};

            expect(cartFunc.addItem(cartInit, itemInit, quantityInit)).toStrictEqual(cartChecker);
        }
    );

    test("This should try to add an item with a negative quantity value to the cart",
        function() {

            let cartInit = {};
            let itemInit = "Apple";
            let quantityInit = -5;

            expect(cartFunc.addItem(cartInit, itemInit, quantityInit)).toBe("This number is negative");
        }
    );

    test("This should try to add an item with a string to the cart",
        function() {

            let cartInit = {};
            let itemInit = "Apple";
            let quantityInit = "One";

            expect(cartFunc.addItem(cartInit, itemInit, quantityInit)).toBe("The quantity is not a number");
        }
    );

    test("This should remove an item from the cart",
        function() {

            let cartInit = {
                "Apple": 5,
                "Orange": 10
            };
            let removeInit = "Apple";
            let cartChecker = { "Orange": 10};

            expect(cartFunc.removeItem(cartInit, removeInit)).toStrictEqual(cartChecker);
        }
    );

    test("This should try to remove an item that doesnt exist in the cart",
        function() {

            let cartInit = {
                "Apple": 5,
                "Orange": 10
            };
            let removeInit = "Banana";

            expect(cartFunc.removeItem(cartInit, removeInit)).toBe("Item not found.");
        }
    );

    test("This should remove an item from the cart, the cart should be empty",
        function() {

            let cartInit = {
                "Apple": 5
            };
            let removeInit = "Apple";
            let cartChecker = {};

            expect(cartFunc.removeItem(cartInit, removeInit)).toStrictEqual(cartChecker);
        }
    );

    test("This should add all the items in the cart",
        function() {
           let cartInit = {
                "Apple": 5,
                "Banana": 10,
                "Orange": 5,
                "Grapes": 20
            };
            
            expect(cartFunc.getTotalItmes(cartInit)).toBe(40);
        }
    );

    test("This should try and add a empty cart",
        function() {
           let cartInit = {};
            
            expect(cartFunc.getTotalItmes(cartInit)).toBe(0);
        }
    );

    test("This should add a large amount of items in the cart",
        function() {
           let cartInit = {
                "Apple": 50,
                "Banana": 90,
                "Orange": 75,
                "Grapes": 1245
            };
            
            expect(cartFunc.getTotalItmes(cartInit)).toBe(1460);
        }
    );
});