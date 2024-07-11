// filterProducts.js
import productData from '../assets/productData';

const filterProducts = (filters) => {
    let filteredProducts = [...productData];

    if (filters.priceRange) {
        filteredProducts = filteredProducts.filter(product => {

            return product.price >= filters.minPrice && product.price <= filters.maxPrice;
        });
    }

    if (filters.newCollection) {
        filteredProducts = filteredProducts.filter(product => {
            return product.newCollection == true;
        });
    }
    if (filters.popular) {
        filteredProducts = filteredProducts.filter(product => {
            return product.popular == true;
        });
    }
    if (filters.discount) {
        filteredProducts = filteredProducts.filter(product => {
            return product.discount != "";
        });
    }
    console.log(filteredProducts);
    return filteredProducts;
};

export { filterProducts };