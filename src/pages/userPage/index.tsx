import { Button } from "antd-mobile";
import type React from "react";
import { useNavigate } from 'react-router-dom';

type UserPageProps = {

};
export const UserPage: React.FC<UserPageProps> = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>这是user</div>
            <Button onClick={() => {
                navigate(-1)
            }} >我点击了</Button>
        </>
    );
};