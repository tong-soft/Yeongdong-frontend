import React, { useState, useEffect } from "react";
import MypageContent from "../../../Components/organisms/MypageContent"
import get_my_info from "../../../service/api/get/get_account_my_info";
import { notification } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import patch_edit_address from "../../../service/api/patch/patch_edit_address"
import get_my_all_orders from "../../../service/api/get/get_order_my_all_orders";
import get_order_orders_detail from "../../../service/api/get/get_order_orders_detail";
import post_product_questions from "../../../service/api/post/post_product_question";
import get_product_my_questions from "../../../service/api/get/get_product_my_questions";

const ContentContainer = ({ role, name, logined, SET_USER }) => {
    const { menu } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //SECTION - 주문/배송정보 pagination
    //NOTE 전체 페이지 갯수 
    const [totalPageNum, setTotalPageNum] = useState(0);
    //NOTE 선택한 리스트 페이지 번호 ( 1페이지 , 2페이지) [pagingNum, setPagingNum]
    const [pagingNum, setPagingNum] = useState(1);
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
    //!SECTION - 주문/배송정보 pagination



    console.log("🚀 ~ menu", menu);

    useEffect(() => {
        if (!menu) {
            setAllOrderData([])
            get_my_all_orders(pagingNum - 1)
                .then((res) => {
                    const response = res.response;
                    console.log(response);
                    setAllOrderData(response.content);
                    setTotalPageNum(response.totalPages)
                }).catch((err) => console.log(err))
        }
        if (menu === 'order') {
            setAllOrderData([])
            get_my_all_orders(pagingNum - 1)
                .then((res) => {
                    const response = res.response;
                    console.log(response);
                    // setAllOrderData(response.content);
                    response.content.map((item, index) => {
                        // let setProducts = [].push(
                        //     item.orderProducts.map((orderProduct, index) => {
                        //         return {
                        //             deliveryCompany
                        //         }
                        // }))
                        return setAllOrderData((state) => [
                            ...state,
                            {
                                buyerName: item.buyerName,
                                deliveryPrice: item.deliveryPrice,
                                id: item.id,
                                orderDate: item.orderDate,
                                orderPrice: item.orderPrice,
                                orderProducts: item.orderProducts,
                                orderRequirement: item.orderRequirement,
                                paymentMethod: item.paymentMethod,
                                paymentPrice: item.paymentPrice,
                                paymentStatus: item.paymentStatus,
                            }])
                    }
                    )
                    setTotalPageNum(response.totalPages)
                }).catch((err) => console.log(err))
        }


        if (menu === 'address') {
            get_my_info()
                .then((res) => {
                    const data = res.response;
                    console.log(data)
                    setMyInfo((state) => ({
                        ...state,
                        jibunAddress: data.jibunAddress,
                        rodeAddress: data.rodeAddress,
                        detailAddress: data.detailAddress,
                        zipCode: data.zipCode,
                        email: data.email,
                        name: data.name,
                        phoneNumber: data.phoneNumber,
                    }))
                }).catch((err) => console.log(err))
        }

        if (menu === 'inquiry') {
            get_product_my_questions(pagingNum - 1)
                .then((res) => {
                    setProductMyQuestions([])
                    const response = res.response;
                    console.log(response)
                    setTotalPageNum(response.totalPages)
                    response.content.map((item, index) => {
                        return setProductMyQuestions((state) => [
                            ...state,
                            {
                                answerContent: item.answerContent,
                                id: item.id,
                                productTitle: item.productName,
                                productId: item.productId,
                                questionContent: item.questionContent,
                                title: item.title,
                                writerName: item.writerName,
                            }
                        ])
                    })

                })
                .catch((err) => console.log(err))
        }


    }, [menu, pagingNum])

    // SECTION - 문의 확인

    /**
    * @hook useState
    * @description 내 문의
   */
    const [productMyQuestions, setProductMyQuestions] = useState([]);

    console.log("🚀 ~ productMyQuestions", productMyQuestions);

    /**
    * @hook useState
    * @description 답변열기
    */
    const [isQuestionAnswered, setIsQuestionAnswered] = useState({
        isOpen: false,
        questionId: null,
    });
    const questionAnswerdHandle = {
        questionOnClick: (productId) => {
            setIsQuestionAnswered({
                isOpen: !isQuestionAnswered.isOpen,
                questionId: productId,
            })
        }
    }

    // !SECTION - 문의 확인





    /**
    * @hook useState
    * @description 내 정보
   */
    const [myInfo, setMyInfo] = useState({
        jibunAddress: '',
        rodeAddress: '',
        detailAddress: '',
        zipCode: '',
    });

    let editMyInfo = {
        detailAddress: (e) => {
            const value = e.target.value
            setMyInfo((state) => ({ ...state, detailAddress: value }))
        },
    }

    // SECTION 메뉴
    /**
    * @hook useState
    * @description 선택한 메뉴 
   */
    //TODO - 주문/배송정보 로 수정
    const [selectedMenu, setSelectMenu] = useState('주문/배송정보');

    /**
     * @type {Function}
     * @description 메뉴 클릭시 메뉴 바꾸기
     */
    const handleMenuClick = (value) => {
        setSelectMenu(value);

        if (value === '주문/배송정보') return navigate('/mypage/order');
        if (value === '주소지수정') return navigate('/mypage/address');
        if (value === '상품후기') return navigate('/mypage/review');
        if (value === '문의확인') return navigate('/mypage/inquiry');

    }
    // !SECTION 메뉴


    // SECTION 주문/배송정보


    /**
    * @hook useState
    * @description 내 모든 주문 정보
    * @enum {Array[{Object}]} allOrderData
    * @enum {String} allOrderData.buyerName
    * @enum {String} allOrderData.deliveryStatus
    * @enum {Number} allOrderData.id
    * @enum {String} allOrderData.orderDate
    * @enum {Array[{Object}]} allOrderData.orderProducts
    * @enum {Number} allOrderData.paymentPrice
    * @enum {String} allOrderData.paymentStatus
    * @enum {String} allOrderData.recipientName
    */
    const [allOrderData, setAllOrderData] = useState([{
        buyerName: '',
        deliveryStatus: '',
        id: 0,
        orderDate: '',
        orderProducts: [
            {
                orderProductCount: 0,
                orderProductId: 0,
                orderProductPrice: 0,
                productId: 0,
                productName: '',
                productThumbnailImg: ''
            }
        ],
        paymentPrice: 0,
        paymentStatus: '',
        recipientName: ''
    }]);

    console.log("🚀 ~ allOrderData", allOrderData);


    /**
    * @hook useState
    * @description 주문디테일 정보
    */
    const [orderDetailData, setOrderDetailData] = useState({
        buyerName: '',
        deliveryCompany: '',
        deliveryPrice: 0,
        deliveryRequirement: '',
        deliveryStatus: 'WAITING',
        detailAddress: '',
        id: 0,
        jibunAddress: '',
        orderDate: '',
        orderPrice: 0,
        orderProducts: [
            {
                orderProductCount: 0,
                orderProductId: 0,
                orderProductPrice: 0,
                productId: 0,
                productName: '',
                productThumbnailImg: ''
            }
        ],
        orderRequirement: '',
        paymentMethod: 'READY',
        paymentPrice: 0,
        paymentStatus: 'WAITING',
        recipientName: '',
        recipientPhoneNumber: '',
        roadAddress: '',
        trackingNumber: '',
        zipCode: ''
    })

    /**
    * @hook useState
    * @description 주문디테일 modal
    */
    const [isOrderDetail, setIsOrderDetail] = useState(false)

    /**
       * @description 주문디테일 modal OPEN 시
       * @type {Function} 
       * @detail 모달열기 / setOrderDetailData
       */
    const orderDetailModal = {
        show: (orderId) => {
            get_order_orders_detail(orderId)
                .then((res) => {
                    const response = res.response;
                    console.log(response);
                    setOrderDetailData(response);
                    setIsOrderDetail(true);

                })
            console.log(orderId)
        },
        close: () => {
            setIsOrderDetail(false);

        }
    }


    // SECTION 배송조회

    /**
    * @hook useState
    * @description 배송조회 로딩
    */
    const [loading, setLoading] = useState(true);


    const deliveryCarriers = {
        CJ: "kr.cjlogistics",
        '우체국 택베': "kr.epost"
    }

    /**
    * @hook useState
    * @description 배송조회 value
    */
    const [deliveryDetailValue, setDeliveryDetailValue] = useState({
        deliveryCompany: null,
        deliveryCompanyId: null,
        trackingNumber: null,
    })

    /**
    * @hook useState
    * @description 배송조회 modal
    */
    const [isDeliveryDetail, setIsDeliveryDetail] = useState(false)

    /**
           * @description 배송조회 modal OPEN 시
           * @type {Function} 
           * @detail 모달열기 / setIsDeliveryDetail
           */
    const deliveryDetailModal = {
        show: (deliveryCompany, trackingNumber) => {
            setLoading(true);
            setDeliveryDetailValue({
                deliveryCompany: deliveryCompany,
                deliveryCompanyId: deliveryCarriers[deliveryCompany],
                trackingNumber: trackingNumber
            })
            setIsDeliveryDetail(true)
        },
        close: () => {
            setIsDeliveryDetail(false);

        }
    }


    //!SECTION 배송조회


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
    * @description 제품 문의 글쓰기 id 담기 
    * @hook useState 
    */
    const [questionProduct, setQuestionProduct] = useState({
        productId: 0,
        productName: '',
    });
    /**
    * @description 제품 문의 글쓰기 
    * @type {Function} 
    * @detail 제품문의 글쓰기 모달 open
    */
    const productQuestionOnClick = (productId, name) => {
        setQuestionProduct({
            productId: productId,
            productName: name
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
        post_product_questions(questionProduct.productId, productQuestionData)
            .then((res) => {
                console.log(res);
                setProductQuestionData({
                    title: '',
                    content: ''
                })
            })
            .catch((err) => console.log(err))

        questionModalHandler.close();
    }
    //!SECTION - 제품 문의





    // !SECTION 주문/배송정보




    // SECTION 주소지 수정

    const [editDetailAddress, setEditDetailAddress] = useState(false)
    const detailAddressEdit = () => {
        setEditDetailAddress(!editDetailAddress)
    }

    const [isOpenKakaoMap, setIsOpenKakaoMap] = useState(false)

    const openKakaoMapOnClick = () => {
        setMyInfo((state) => ({ ...state, detailAddress: null }))

        setIsOpenKakaoMap(!isOpenKakaoMap)
    }
    const saveAddressOnClick = () => {
        if (myInfo.detailAddress === null) {
            return notification['error']({
                message: `저장 실패 💦`,
                description: '상세주소를 입력해 주세요.',
            });
        }
        patch_edit_address({
            jibunAddress: myInfo.jibunAddress,
            roadAddress: myInfo.rodeAddress,
            detailAddress: myInfo.detailAddress,
            zipCode: myInfo.zipCode,
        })
            .then((res) => {
                SET_USER({
                    user: {
                        roadAddress: myInfo.rodeAddress,
                        jibunAddress: myInfo.jibunAddress,
                        detailAddress: myInfo.detailAddress,
                        zipCode: myInfo.zipCode,
                    }
                })
                setIsOpenKakaoMap(false)
                setEditDetailAddress(false)

                console.log(res)
            }).catch((err) => err)
    }

    const selectAddressHandle = (data) => {
        console.log(data)
        console.log(`
        주소: ${data.address},
        우편번호: ${data.zonecode}
    `)
        setEditDetailAddress(true)
        setMyInfo((state) => ({ ...state, jibunAddress: data.jibunAddress }))
        setMyInfo((state) => ({ ...state, zipCode: data.zonecode }))
        setMyInfo((state) => ({ ...state, rodeAddress: data.roadAddress }))

        setIsOpenKakaoMap(false);
    }

    // !SECTION 주소지 수정




    //PIN - return
    return (
        <>
            <MypageContent
                role={role}
                menu={menu}

                name={name}
                logined={logined}
                selectedMenu={selectedMenu}
                handleMenuClick={handleMenuClick}
                myInfo={myInfo}
                editMyInfo={editMyInfo}
                editDetailAddress={editDetailAddress}
                detailAddressEdit={detailAddressEdit}
                isOpenKakaoMap={isOpenKakaoMap}
                openKakaoMapOnClick={openKakaoMapOnClick}
                selectAddressHandle={selectAddressHandle}
                saveAddressOnClick={saveAddressOnClick}

                allOrderData={allOrderData}
                isOrderDetail={isOrderDetail}
                orderDetailModal={orderDetailModal}
                orderDetailData={orderDetailData}

                pagingClick={pagingClick}
                pagingNum={pagingNum}
                totalPageNum={totalPageNum}

                isQuestionModalOpen={isQuestionModalOpen}
                questionModalHandler={questionModalHandler}
                productQuestionData={productQuestionData}
                productQuestionFunc={productQuestionFunc}
                productQuestionSaveOnClick={productQuestionSaveOnClick}
                productQuestionOnClick={productQuestionOnClick}
                questionProduct={questionProduct}

                loading={loading}
                setLoading={setLoading}
                isDeliveryDetail={isDeliveryDetail}
                deliveryDetailModal={deliveryDetailModal}
                deliveryDetailValue={deliveryDetailValue}

                // SECTION 문의확인
                productMyQuestions={productMyQuestions}

            //!SECTION 문의확인
            />
        </>
    )
}

export default ContentContainer;