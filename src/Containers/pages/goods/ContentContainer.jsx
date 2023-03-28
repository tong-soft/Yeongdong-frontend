import React, { useEffect, useState } from "react";
import GoodsContent from "../../../Components/organisms/GoodsContent"
import { useParams, useNavigate } from "react-router-dom"
import get_product_info from "../../../service/api/get/get_product_info"
import { notification } from 'antd';
import post_product_questions from "../../../service/api/post/post_product_question";
import get_product_reviews from "../../../service/api/get/get_product_reviews";

const ContentContainer = ({ role, product }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    /**
     * @hook useState
     * @description 상품 정보
     */
    const [productInfo, setProductInfo] = useState({
        id: null,
        name: null,
        originalPrice: null,
        thumbnailImgUrl: null,
        description: null,
        descriptionImgUrl: null,
        amount: null,
        discount: null,
        sellingPrice: null,
        orderCount: 1,
        orderCost: null,
        starRating: 0,
        category: null,
        grade: null,
        totalCount: 1,
    })


    // SECTION review
    /**
     * @hook useState
     * @description 상품 후기
     * @enum {String} content
     * @enum {ImageUrl} reviewImgUrl
     * @enum {Number} starRating
     */
    const [productReview, setProductReview] = useState([])

    //NOTE 전체 페이지 갯수 
    const [totalReviewPageNum, setTotalReviewPageNum] = useState(0);

    //NOTE 선택한 리스트 페이지 번호 ( 1페이지 , 2페이지) [pagingNum, setPagingNum]
    const [reviewPagingNum, setReviewPagingNum] = useState(1);
    /**
  * @description paging 클릭 시
  * @param e - 선택한 page target하기위한 param
  * @detail id -1 해야댐 (page는 0 부터 시작 )
  */
    const reviewPagingClick = (e) => {
        const pagingId = e.target.innerText;
        setReviewPagingNum(Number(pagingId))
    }

    const [onClickReviewImg, setOnClickReviewImg] = useState({
        focus: false,
        index: 0,
    })

    const reviewImgOnCLick = (index) => {
        if (onClickReviewImg.index === index) {
            return setOnClickReviewImg((state) => ({
                ...state,
                focus: !state.focus,
            }))
        }
        return setOnClickReviewImg({
            focus: true,
            index: index,
        })
    }
    // !SECTION review

    useEffect(() => {
        window.scrollTo(0, 0);
        get_product_info(id)
            .then((res) => {
                const data = res.response;
                console.log(data)
                setProductInfo({
                    id: data.id,
                    name: data.name,
                    originalPrice: data.originalPrice,
                    thumbnailImgUrl: data.thumbnailImgUrl,
                    description: data.description,
                    descriptionImgUrl: data.descriptionImgUrl,
                    amount: data.amount,
                    sellingPrice: data.sellingPrice,
                    discount: Math.ceil(100 - (data.sellingPrice / data.originalPrice * 100)),
                    starRating: data.starRating,
                    category: data.category,
                    grade: data.grade,
                    totalCount: data.totalCount,
                    orderCount: 1,
                })
            })
            .then(() => {
                get_product_reviews(id, reviewPagingNum - 1)
                    .then((res) => {
                        const review = res.response;
                        console.log(review)
                        const content = review.content;
                        setProductReview(content);
                        setTotalReviewPageNum(review.totalPages);
                    }).catch((err) => console.log(err))
            })
            .catch((err) => {
                console.log(err)
                return navigate('/')
            })

    }, [id, reviewPagingNum, navigate])



    //SECTION - option 옵션

    //NOTE - options Arr
    const productOptions = ["도자기", "미니흔들", "화분", "무드등"]

    //NOTE - user가 선택한 옵션(push(productDefaultValue))
    // const [productValue, setProductValue] = useState([])
    const [selectOption, setSelectOption] = useState('')


    //TODO 이게 지금 선택한 product // 받아오기
    const [userProductObj, setUserProductObj] = useState({})


    //NOTE - user가 옵션 선택 handleFunc
    const selectHandleFunc = (option) => {
        setSelectOption(option)
        // setProductValue((state) => ([...state, { option: value, amount: 1 }]))
        setUserProductObj((state) => ({ ...state, [option]: 1 }))
    }
    //NOTE - user가 옵션 수량 선택 handleFunc
    const amountHandleFunc = (e, option) => {
        const value = e.target.value;
        setUserProductObj((state) => ({ ...state, [option]: value }))
    }
    const amountIconHandleFunc = {
        minus: (option) => {
            setUserProductObj((state) => ({ ...state, [option]: state[option] - 1 }))
        },
        plus: (option) => {
            setUserProductObj((state) => ({ ...state, [option]: state[option] + 1 }))
        },
    }

    const productDeleteHandleFunc = (key) => {
        const swallowObj = { ...userProductObj };
        delete swallowObj[key];
        setUserProductObj(swallowObj);
        setUserProductObj(swallowObj)
    }
    //!SECTION - option 옵션

    // SECTION - 일단 갯수 카운트 햄수 
    //TODO 옵션 사용 유뮤 후 자우기 
    // const orderCountHandler = (e) => {
    //     const value = Number(e.target.value);
    //     setProductInfo((state) => ({ ...state, orderCount: value }))
    // }
    const orderCountHandler = {
        minus: () => {
            setProductInfo((state) => ({ ...state, orderCount: state.orderCount - 1 }))
        },
        plus: () => {
            setProductInfo((state) => ({ ...state, orderCount: state.orderCount + 1 }))
        },
        setData: (e) => {
            setProductInfo((state) => ({ ...state, orderCount: e.target.value }))
        }
    }
    // !SECTION - 일단 갯수 카운트 햄수 

    //SECTION - .장바구니
    /** NOTE 장바구니 아이콘 제품 클릭시 열리는 모달
* @description 장바구니 아이콘 제품 클릭시 열리는 모달
*/
    const [isCartAlertVisible, setCartAlertVisible] = useState(false);

    const cartAlertModal = {
        show: () => setCartAlertVisible(true),
        close: () => setCartAlertVisible(false)
    }
    /**
    * @description 장바구니 추가  클릭 시
    * @type {Function}
    * @detail productId로 GET -> localStorage에 {cartItem} 
    */
    const addCartOnClick = () => {
        //localStorage에 카트상품리스트가 없다면 생성
        if (localStorage.getItem('cartProductList') === null) {
            cartAlertModal.show();
            localStorage.setItem('cartProductList', JSON.stringify([productInfo]));
            return;
        } else {
            const getCartProductList = JSON.parse(localStorage.getItem('cartProductList')); //문자형으로 된 자료를 다시 배열로 바꾸기
            if (getCartProductList.findIndex(products => products.id === productInfo.id) !== -1) {
                return notification['warning']({
                    message: `이미 장바구니에 있는 제품입니다.`,
                    description: `장바구니를 확인해 주세요`,
                });
            }
            getCartProductList.push(productInfo);
            localStorage.setItem('cartProductList', JSON.stringify(getCartProductList));
            cartAlertModal.show();
        }

    }
    //!SECTION - .장바구니

    //SECTION - 제품 문의
    /**
    * @description 제품 문의 글쓰기 모달 
    * @hook useState 
    */
    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
    const questionModalHandler = {
        show: () => setIsQuestionModalOpen(true),
        close: () => setIsQuestionModalOpen(false)
    }


    /**
    * @description 제품 문의 글쓰기 
    * @type {Function} 
    * @detail 제품문의 글쓰기 모달 open
    */
    const productQuestionOnClick = () => {
        setProductQuestionData({
            title: '',
            content: ''
        })
        questionModalHandler.show();
    }

    /**
   * @description 제품 문의 data
   * @hook useState 
   */
    const [productQuestionData, setProductQuestionData] = useState({
        title: '',
        content: ''
    })

    const productQuestionFunc = {
        title: (e) => setProductQuestionData({ ...productQuestionData, title: e.target.value }),
        content: (e) => setProductQuestionData({ ...productQuestionData, content: e.target.value })
    }

    /**
    * @description 제품 문의 저장 
    * @type {Function}
    */
    const productQuestionSaveOnClick = () => {
        const { title, content } = productQuestionData;
        if (title === '' || content === '') {
            return notification['warning']({
                message: `문의종류와 내용을 입력해주세요`,
            })
        }
        post_product_questions(productInfo.id, productQuestionData)
            .then((res) => {
                setProductQuestionData({
                    title: '',
                    content: ''
                })
            })
            .catch((err) => console.log(err))
        questionModalHandler.close();
    }
    //!SECTION - 제품 문의



    /**
     * @description 결제하기 클릭 시
     * @type {Function} 
     */
    const paymentBtnOnClick = () => {
        localStorage.setItem('youngdong_order_list', JSON.stringify([productInfo]));
        navigate('/order/checkout')
    }


    return (
        <>
            <GoodsContent
                role={role}
                productInfo={productInfo}
                productOptions={productOptions}
                userProductObj={userProductObj}
                selectOption={selectOption}
                selectHandleFunc={selectHandleFunc}
                amountHandleFunc={amountHandleFunc}
                amountIconHandleFunc={amountIconHandleFunc}
                productDeleteHandleFunc={productDeleteHandleFunc}
                paymentBtnOnClick={paymentBtnOnClick}
                orderCountHandler={orderCountHandler}
                addCartOnClick={addCartOnClick}

                isCartAlertVisible={isCartAlertVisible}
                cartAlertModal={cartAlertModal}
                isQuestionModalOpen={isQuestionModalOpen}
                questionModalHandler={questionModalHandler}
                productQuestionOnClick={productQuestionOnClick}
                productQuestionFunc={productQuestionFunc}
                productQuestionSaveOnClick={productQuestionSaveOnClick}
                productQuestionData={productQuestionData}

                productReview={productReview}
                totalReviewPageNum={totalReviewPageNum}
                reviewPagingNum={reviewPagingNum}
                reviewPagingClick={reviewPagingClick}
                onClickReviewImg={onClickReviewImg}
                reviewImgOnCLick={reviewImgOnCLick}
            />
        </>
    )
}

export default React.memo(ContentContainer);