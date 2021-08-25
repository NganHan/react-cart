import * as types from './../constants/ActionType';
// import products from './products';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];
// var initialState = [
//     {
//         product: {
//             id: 1,
//             name: 'Iphone 7 plus 128GB',
//             image: 'https://trungstore.vn/wp-content/uploads/2019/10/den-1-1-1.jpg',
//             description: 'San pham Apple chinh hang',
//             price: 500,
//             inventory: 10,
//             rating: 4
//         },
//         quanlity: 5
//     },
//     {
//         product: {
//             id: 3,
//             name: 'Iphone X',
//             image: 'https://cdn.tgdd.vn/Products/Images/60/225902/op-lung-iphone-x-xs-nhua-deo-sliipa-jm-nude-1-600x600.jpg',
//             description: 'San pham apple chinh hang',
//             price: 750,
//             inventory: 5,
//             rating: 5
//         },
//         quanlity: 2
//     }
// ]
const cart = (state = initialState, action) => {
    var {product, quanlity} = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quanlity += quanlity;
            } else {
                state.push({
                    product,
                    quanlity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quanlity = quanlity; //quanlity dc truyen vao tu action
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}


export default cart;