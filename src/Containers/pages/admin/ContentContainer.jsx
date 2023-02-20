import React, { useEffect, useState } from "react";
import AdminContent from "../../../Components/organisms/AdminContent"
import { useNavigate, useParams } from "react-router-dom"
import { notification } from 'antd';
import PostProduct from "../../../service/api/post/post_product";

const ContentContainer = ({ role, name, logined }) => {

    const navigate = useNavigate();
    const { menu } = useParams();
    const [focusNavList, setFocusNavList] = useState("상품 관리")

    console.log("🚀 ~ focusNavList", focusNavList);
    const [isHeaderDetailOpen, setIsHeaderDetailOpen] = useState(true)

    const navListOnClick = (listsValue) => {
        // if (focusNavList === listsValue) return headerDetailOpenHandler()
        setIsHeaderDetailOpen(true)
        setFocusNavList(listsValue)
    }


    useEffect(() => {
        console.log(menu)
        if (menu === 'addgood') return setFocusNavList("상품 관리")
        if (menu === 'setgood') return setFocusNavList("상품 관리")
        if (menu === 'orderManage') return setFocusNavList('주문 관리');
        if (menu === 'inquiry') return setFocusNavList('QnA 관리')
    }, [menu])

    useEffect(() => {
        if (isHeaderDetailOpen === false) setFocusNavList('')
    }, [isHeaderDetailOpen])

    const headerDetailOpenHandler = () => {

        setIsHeaderDetailOpen(!isHeaderDetailOpen)

    }

    return (

        <AdminContent
            role={role}
            name={name}
            logined={logined}

            focusNavList={focusNavList}
            navListOnClick={navListOnClick}
            isHeaderDetailOpen={isHeaderDetailOpen}
            menu={menu}
            headerDetailOpenHandler={headerDetailOpenHandler}
        />
    )
}
export default React.memo(ContentContainer);