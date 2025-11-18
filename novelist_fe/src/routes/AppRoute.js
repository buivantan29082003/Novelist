import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UserBaseLayout from '../pages/user/BaseLayout';
import Discovery from '../pages/user/Discover';

const AppRoute=()=>{
    return <>
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path='/user' element={<UserBaseLayout/>}>
                        <Route path='discovery' element={<Discovery/>}/>
                    </Route> 
                </Route> 
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoute