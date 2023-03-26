import React, { useEffect, useState } from "react";
import SearchContent from "../../../Components/organisms/SearchContent"
import { useNavigate } from "react-router-dom"
import get_product_search from "../../../service/api/get/get_product_search";
import qs from 'qs';

const ContentContainer = () => {
    const navigate = useNavigate();
    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    });
    const keywordValue = query.keyword; // 쿼리의 파싱결과값은 문자열입니다.


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //SECTION pagination
    //NOTE 전체 페이지 갯수 
    const [totalPageNum, setTotalPageNum] = useState(0);
    //NOTE 선택한 리스트 페이지 번호 ( 1페이지 , 2페이지) [pagingNum, setPagingNum]
    const [pagingNum, setPagingNum] = useState(1);
    //NOTE fetch 로 받아올 리스트 (6개씩뜨는 notice) [lists, setLists]
    /**
     * @type {Array.object}
     * @enum {String} id
     * @enum {String} name
     * @enum {String} description
     * @enum {Number} originalPrice
     * @enum {Number} sellingPrice 
     * @enum {src} thumbnailImg 
     */
    const [lists, setLists] = useState([
        {
            id: '',
            name: '',
            description: '',
            originalPrice: '',
            sellingPrice: '',
            thumbnailImg: ``,
        }
    ]);


    useEffect(() => {
        setLists([]);
        get_product_search(keywordValue, pagingNum - 1)
            .then((res) => {
                setLists([]);

                const data = res.response;
                console.log(data)
                setTotalPageNum(data.totalPages)
                data.content.map((value) => {
                    return setLists((state) => [
                        ...state,
                        {
                            id: value.id,
                            name: value.name,
                            description: value.description,
                            originalPrice: value.originalPrice,
                            sellingPrice: value.sellingPrice,
                            thumbnailImg: value.thumbnailImg,
                        }])
                })
            }).catch((err) => { console.log(err) });

    }, [pagingNum, keywordValue])


    /**
   * @description paging 클릭 시
   * @param e - 선택한 page target하기위한 param
   * @detail id -1 해야댐 (page는 0 부터 시작 )
   */
    const pagingClick = (e) => {
        const pagingId = e.target.innerText;
        console.log(pagingId)
        setPagingNum(Number(pagingId))
    }



    //!SECTION pagination

    //SECTION sort===undefined -> collection

    /** NOTE 전체상품 제품 클릭시 
     * @sort collection - 전체상품
     * @type {Function} 
     * @param productId - 제품 ID
     * @enum {number} productId
     * @description 
     */
    const collectionProductOnClick = (productId) => {
        navigate(`/goods/${productId}`)
    }




    //!SECTION sort===undefined -> collection


    return (

        <SearchContent
            pagingClick={pagingClick}
            pagingNum={pagingNum}
            totalPageNum={totalPageNum}
            lists={lists}
            collectionProductOnClick={collectionProductOnClick}
            keywordValue={keywordValue}
        />

    )
}

export default React.memo(ContentContainer);