import { notification } from "antd"
import { React, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Order from "../pages/OrderPage"

const OrderRouter = ({ security, role }) => {

    const navigate = useNavigate()

    let isRightSecurity = false;

    if (security.includes(role)) {
        isRightSecurity = true;
    }

    useEffect(() => {

        if (isRightSecurity === false) {
            navigate("/")
            notification['error']({
                message: `접근 실패 💦`,
                description: '로그인이 필요하거나 권한이 없습니다.',
            })
        }
    }, [isRightSecurity, navigate])


    console.log("접근 시도 ROLE : ", role)

    return <Order />;
}

export default OrderRouter