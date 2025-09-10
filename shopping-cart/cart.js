
function addItem(cart, item, quantity){

    if(!isNaN(quantity)){

        if(quantity > 0){
            cart[item] = quantity;
            console.log(`${item}, Qty ${cart[item]} has been added to the cart.`)
            return cart;
        } else {
            return "This number is negative";
        }
    } else{
        return "The quantity is not a number";
    }
}

function removeItem(cart, item){

    if(item in cart){
        delete cart[item];
    } else {
        return "Item not found.";
    }
    return cart;
}

function getTotalItmes(cart){
    
    const quantityArray = Object.values(cart);

    const sum = quantityArray.reduce((total, quantity) => total + quantity, 0);

    console.log(`There are ${sum} items in the cart.`)
    
    return sum;
}

module.exports = {addItem, removeItem, getTotalItmes};