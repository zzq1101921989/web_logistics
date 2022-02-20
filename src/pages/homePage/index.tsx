import { Button } from "antd-mobile";
import type React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

type HomePageProps = {

};
export const HomePage: React.FC<HomePageProps> = () => {

    const navigate = useNavigate();

    const context = useOutletContext();

    console.log(context, 'context');

    return (
        <>
            <div>这是home</div>
            <Button onClick={() => {
                navigate('user')
            }} >我点击了</Button>
        </>
    );
};