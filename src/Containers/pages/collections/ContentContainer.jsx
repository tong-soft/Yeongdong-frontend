import React, { useEffect, useState } from "react";
import CollectionsContent from "../../../Components/organisms/CollectionsContent"
import { useParams, useNavigate } from "react-router-dom"
import get_all_goods from "../../../service/api/get/get_product_all_goods";
import get_grade_goods from "../../../service/api/get/get_product_grade_goods";
import qs from 'qs';


const ContentContainer = () => {
    const navigate = useNavigate()
    const { sort } = useParams();
    const query = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    });
    const keywordValue = query.keyword; // 쿼리의 파싱결과값은 문자열입니다.

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [sort])

    useEffect(() => {
        console.log(keywordValue)
        setSelectedCategory(keywordValue || '')
    }, [keywordValue])

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
    const [lists, setLists] = useState([]);

    console.log("🚀 ~ lists:", lists);

    /**
     * @hook useEffect
     * @description 전체 리스트 갯수 저장 
     * @description 페이지 바뀔떄마다 새로운 페이지 가져오기
     * @description 전체 페이지 갯수 가져오기
     */
    useEffect(() => {
        //NOTE param{sort} 별로 새로 저장
        //TODO 전체 리스트 갯수 저장
        if (sort === undefined) {
            get_all_goods(pagingNum - 1)
                .then((res) => {
                    setLists([]);
                    const data = res.response;
                    console.log('/api/product/v1/products')
                    console.log(data)
                    // setLists(data.content)
                    data.content.map((products) => {
                        return setLists((state) => [
                            ...state,
                            {
                                id: products.id,
                                category: products.category,
                                description: products.description,
                                grade: products.grade,
                                name: products.name,
                                originalPrice: products.originalPrice,
                                sellingPrice: products.sellingPrice,
                                thumbnailImg: products.thumbnailImg,
                                totalCount: products.totalCount
                            }
                        ])
                    })
                    setTotalPageNum(data.totalPages)
                })
                .catch((error) => console.log(error));

            return;
        }
        if (sort === `signature`) {
            get_grade_goods('SPECIAL')
                .then((res) => {
                    const data = res.response;
                    console.log(data)
                    setLists([]);

                    data.content.map((products) => {
                        return setLists((state) => [
                            ...state,
                            {
                                id: products.id,
                                category: products.category,
                                description: products.description,
                                grade: products.grade,
                                name: products.name,
                                originalPrice: products.originalPrice,
                                sellingPrice: products.sellingPrice,
                                thumbnailImg: products.thumbnailImg,
                                totalCount: products.totalCount
                            }
                        ])
                    })
                    setTotalPageNum(data.totalPages)
                })
                .catch((error) => console.log(error));

            return;
        }

    }, [sort, pagingNum])

    /**
   * @description paging 클릭 시
   * @param e - 선택한 page target하기위한 param
   * @detail id -1 해야댐 (page는 0 부터 시작 )
   */
    const pagingClick = (e) => {
        const pagingId = e.target.innerText;
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

    //SECTION 카테고리
    const [categoryList, setCategoryList] = useState([]);


    const categoryData = ['쌀 · 잡곡', '채소', '과일', '감 · 곶감', '와인', '벌꿀', '가공식품', '장류', '떡 · 간식', '견과 · 버섯', '기타'];
    const categoryObj = {
        '쌀 · 잡곡': "RICE",
        '채소': "VEGETABLE",
        '과일': "FRUIT",
        '감 · 곶감': "PERSIMMON",
        '와인': "WINE",
        '벌꿀': "HONEY",
        '가공식품': "PROCESSED",
        '장류': "PASTE",
        '떡 · 간식': "SNACK",
        '견과 · 버섯': "NUT",
        '기타': "ETC",
    }
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleChangeCategory = (tag, checked) => {
        if (tag === selectedCategory) {
            setSelectedCategory('');
            setCategoryList([]);
            return navigate(`/collections`)

        }
        navigate(`/collections?keyword=${tag}`)

        const nextSelectedCategory = checked
            ? tag
            : selectedCategory.filter((t) => {
                return t !== tag;
            });
        setSelectedCategory(nextSelectedCategory);
        setCategoryList(
            [...lists].filter((item) => {
                return item.category === categoryObj[tag]
            })
        )
    };
    //!SECTION 카테고리


    return (
        <>
            {
                sort === undefined ?
                    <CollectionsContent
                        sort={sort}
                        pagingClick={pagingClick}
                        pagingNum={pagingNum}
                        totalPageNum={totalPageNum}
                        lists={lists}
                        collectionProductOnClick={collectionProductOnClick}
                        categoryData={categoryData}
                        selectedCategory={selectedCategory}
                        handleChangeCategory={handleChangeCategory}
                        categoryList={categoryList}
                    />
                    :
                    null
            }
            {
                sort === 'signature' ?
                    <CollectionsContent
                        sort={sort}
                        pagingClick={pagingClick}
                        pagingNum={pagingNum}
                        lists={lists}
                        collectionProductOnClick={collectionProductOnClick}
                        totalPageNum={totalPageNum}
                        categoryData={categoryData}
                        selectedCategory={selectedCategory}
                        handleChangeCategory={handleChangeCategory}
                        categoryList={categoryList}
                    />
                    :
                    null
            }
        </>
    )
}

export default React.memo(ContentContainer);