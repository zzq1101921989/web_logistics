import { Outlet, useParams } from "react-router-dom";
import { Not404 } from "./Not404";

type BasicComponentProps = {

};
export const BasicComponent = (props: BasicComponentProps) => {

    console.log('这是框架外层');

    const params = useParams();

    // 当前路由是否存在无效参数
    let isInvalidPath = false;

    const keys = Object.keys(params);

    for (let i = 0; i < keys.length; i++) {
        if (isNaN(Number(params[keys[i]]))) {
            isInvalidPath = true;
            break
        }
    }

    return (
        isInvalidPath ? <Not404/> : <Outlet context={{ a: 1 }} />
    );
};