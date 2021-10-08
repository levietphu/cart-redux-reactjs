var inititalState = [
    {
        id: 1,
        name: 'Iphone 6 plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do apple sản xuất',
        price: 100,
        inventory: 15,
        ratting: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy S21',
        image: 'https://img.websosanh.vn/v2/users/review/images/u10g0w1flc04d.jpg?compress=85',
        description: 'Sản phẩm do sam sung sản xuất',
        price: 1000,
        inventory: 20,
        ratting: 3
    },
    {
        id: 3,
        name: 'Huwei mate 40 pro',
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquc/2020_10_22/Mate_40_Pro_GSMarena_cover_2.jpg',
        description: 'Sản phẩm do huwei sản xuất',
        price: 900,
        inventory: 25,
        ratting: 5
    },
];

const myReducer = (state=inititalState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default myReducer;