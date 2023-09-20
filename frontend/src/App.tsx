import React, { useEffect, useState } from 'react';
import { getAllProducts, getProduct } from './utils/api';
import { IProduct } from './types';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [product, setProduct] = useState<IProduct>({
        id: 0,
        title: '',
        description: '',
        image: '',
        price: '',
        category: '',
        rating: {
            rate: 0,
            count: 0,
        },
    });

    return (
        <div>
            <Header />
            <Routes>
                <Route element={<HomePage />} path="/"></Route>
                <Route element={<CatalogPage />} path="/catalog"></Route>
                <Route element={<ProductPage />} path="products/:id"></Route>
            </Routes>
        </div>
    );
}

export default App;
