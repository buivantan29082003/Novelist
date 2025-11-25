import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UserBaseLayout from '../pages/user/BaseLayout';
import Discovery from '../pages/user/Discover';
import HomePage from '../pages/user/Home';
import Seacrhing from '../pages/user/Search';

const AppRoute=()=>{
    return <>
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path='/user' element={<UserBaseLayout/>}>
                        <Route path='home' element={<HomePage/>}/>
                        <Route path='discovery' element={<Discovery/>}/>
                        <Route path='search' element={<Seacrhing/>}/>
                    </Route> 
                </Route> 
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoute