import { notification } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import Collections from "../pages/CollectionsPage"

const CollectionsRouter = ({ security, role }) => {

    console.log(role)
    const navigate = useNavigate();

    if (security.includes(role)) {
        return <Collections />
    }

    navigate('/')
    notification['error']({
        message: `접근 실패 💦`,
        description: '로그인이 필요하거나 권한이 없습니다.',
    })

    return null;
}

export default CollectionsRouter