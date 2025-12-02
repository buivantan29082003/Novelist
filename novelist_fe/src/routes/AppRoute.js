import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UserBaseLayout from '../pages/user/BaseLayout';
import Discovery from '../pages/user/Discover';
import HomePage from '../pages/user/Home';
import Seacrhing from '../pages/user/Search'; 
import StoryDetail from '../pages/user/StoryDetail';
import Chapter from '../pages/user/Chapter';
import Plan from '../pages/user/Plan';

const AppRoute=()=>{
    return <>
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute/>}>
                    <Route path='/user' element={<UserBaseLayout/>}>
                        <Route path='home' element={<HomePage/>}/>
                        <Route path='discovery' element={<Discovery/>}/>
                        <Route path='search' element={<Seacrhing/>}/>
                        <Route path='story/:id' element={<StoryDetail/>}/>
                        <Route path='chapter/:chapterId' element={<Chapter/>}/>
                        <Route path='plans' element={<Plan/>}/>
                    </Route> 
                </Route> 
            </Routes>
        </BrowserRouter>
    </>
}

export default AppRoute