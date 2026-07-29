let products = {
    laptop: 45000,
    iphone: 67000,
    mobileCover: 1200,
    tablet: 58999
};

const calculateDiscount = (obj) => {
    for (let product in obj) {
        obj[product] = obj[product] - (obj[product] * 15 / 100);
    }
};

calculateDiscount(products);
console.log(products);