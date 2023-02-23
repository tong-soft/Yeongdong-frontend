import React, { useState, useEffect } from "react";
import HomeContent from "../../../Components/organisms/HomeContent"


const ContentContainer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [hotItems, setHotItems] = useState([
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 1,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 2,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 11900,
            thumbnailImg: "img_34",
            totalCount: 96,
        }
    ]);
    const [sigItems, setSigItems] = useState([
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 3,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 4,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 5,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
    ]);
    const [newItems, setNewItems] = useState([]);
    const [allItems, setAllItems] = useState([
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 6,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 7,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 8,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 9,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 10,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 11,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 12,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        },
        {
            category: "NUT",
            description: "우수한 품질의 무농약 새송이 버섯",
            grade: "SPECIAL",
            id: 13,
            name: "새농이 버섯 2kg 특품 상품",
            originalPrice: 11900,
            sellingPrice: 9990,
            thumbnailImg: "img_34",
            totalCount: 96,
        }



    ]);

    useEffect(() => {
        //TODO 통신
        setNewItems(allItems.slice(0, 4));
    }, [allItems])

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