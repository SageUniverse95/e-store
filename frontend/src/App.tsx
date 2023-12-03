import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import { Header } from './components/Header';
import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { PersonalAccPage } from './pages/PersonalAccPage';
import { Routes, Route } from 'react-router-dom';
import style from './App.module.css';

function App() {
    return (
        <div>
            <Header />
            <div className={style.layout}>
                <Routes>
                    <Route element={<HomePage />} path="/"></Route>
                    <Route element={<CatalogPage />} path="/catalog"></Route>
                    <Route
                        element={<ProductPage />}
                        path="products/:id"
                    ></Route>
                    <Route element={<SignupPage />} path="/signup"></Route>
                    <Route element={<PersonalAccPage />} path='/acc'></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
