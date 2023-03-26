import React, { useState, useEffect } from "react";
import HomeContent from "../../../Components/organisms/HomeContent"
import get_product_products_main from "../../../service/api/get/get_product_products_main";
import get_product_products_main_popularity from "../../../service/api/get/get_product_products_main_popularity";
import get_product_products_main_special from "../../../service/api/get/get_product_products_main_special";


const ContentContainer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [hotItems, setHotItems] = useState([]);
    const [sigItems, setSigItems] = useState([]);
    const [newItems, setNewItems] = useState([]);
    const [allItems, setAllItems] = useState([]);



    useEffect(() => {
        //TODO 통신

        get_product_products_main()
            .then((res) => {
                const allData = res.response;
                if (allData.length !== 0) {
                    setAllItems(allData);
                    setNewItems(allData.slice(0, 4));
                }
            }).catch((err) => console.log(err));

        get_product_products_main_popularity()
            .then((res) => {
                const hotData = res.response;
                setHotItems(hotData);
            }).catch((err) => console.log(err));

        get_product_products_main_special()
            .then((res) => {
                const sigData = res.response;
                setSigItems(sigData);
            }).catch((err) => console.log(err));

    }, [])


    return (
        <>
            <HomeContent
                hotItems={hotItems}
                sigItems={sigItems}
                newItems={newItems}
                allItems={allItems}
            />
        </>
    )
}

export default ContentContainer;