import React, { useState, useEffect } from "react";
import HomeContent from "../../../Components/organisms/HomeContent"

import get_all_goods from "../../../service/api/get/get_all_goods"

const ContentContainer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [allGoods, setAllGoods] = useState([]);

    useEffect(() => {
        // get_all_goods().then(res => {
        //     console.log(res.response)
        //     // setAllGoods(res.data);
        // }).catch(error => console.log(error))
    }, [])


    return (
        <>
            <HomeContent />
        </>
    )
}

export default ContentContainer;