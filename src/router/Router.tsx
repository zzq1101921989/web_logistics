import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasicComponent } from "../component/BasicComponent";
import { Not404 } from "../component/Not404";
import { HomePage } from "../pages/homePage";
import { UserPage } from "../pages/userPage";

const RouterConfig = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <BasicComponent/> }>
                    <Route index element={ <HomePage/>} />
                    <Route path='user' element={ <UserPage /> } />
                    <Route path='detail/:id' element={ <UserPage /> } />
                </Route>
                <Route path="*" element={<Not404/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterConfig