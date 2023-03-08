import { notification } from "antd"
import { React, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Goods from "../pages/GoodsPage"

const GoodsRouter = ({ security, role }) => {

    const navigate = useNavigate()

    useEffect(() => {

        if (!security.includes(role)) {
            navigate("/")
            notification['error']({
                message: `접근 실패 💦`,
                description: '로그인이 필요하거나 권한이 없습니다.',
            })
        }
    }, [role, security, navigate])


    console.log("접근 시도 ROLE : ", role)


    return <Goods />;
}

export default GoodsRouter