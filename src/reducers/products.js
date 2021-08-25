var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus 128GB',
        image: 'https://trungstore.vn/wp-content/uploads/2019/10/den-1-1-1.jpg',
        description: 'San pham Apple chinh hang',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Oppo neo7',
        image: 'http://2tekviet.com/wp-content/uploads/2016/11/OPPO-NEO-7-A33W-den-1.jpg',
        description: 'San pham Oppo chinh hang',
        price: 300,
        inventory: 7,
        rating: 3
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/60/225902/op-lung-iphone-x-xs-nhua-deo-sliipa-jm-nude-1-600x600.jpg',
        description: 'San pham apple chinh hang',
        price: 750,
        inventory: 5,
        rating: 5
    }
]
const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}
export default products;