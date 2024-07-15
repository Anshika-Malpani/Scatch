// filterProducts.js
import productData from '../assets/productData';

const filterProducts = (filters) => {
    let filteredProducts = [...productData];

    if (filters.priceRange) {
        filteredProducts = filteredProducts.filter(product => {
            if (filters.priceRange === 'bellow1500') {
                return product.price < 1500;
            } else if (filters.priceRange === '1500-2500') {
                return product.price >= 1500 && product.price <= 2500;
            } else if (filters.priceRange === '2000-3000') {
                return product.price >= 2000 && product.price <= 3000;
            } else if (filters.priceRange === '3000-4000'){
                return product.price >= 3000 && product.price <= 4000;
            }
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
    return filteredProducts;
};

export { filterProducts };