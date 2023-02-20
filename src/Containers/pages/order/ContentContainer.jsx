import React, { useState, useEffect, useRef } from "react";
import OrderContent from "../../../Components/organisms/OrderContent"
import { notification } from "antd"
import { useNavigate } from "react-router-dom";


const ContentContainer = ({ deliveryFee, role, name, logined, email,
    phoneNumber, jibunAddress, detailAddress, zipCode, roadAddress
}) => {

    const navigate = useNavigate();
    /**
        * @hook useState
        * @description 주문할 제품
        * @param {orderProduct} 
        * @property {Array.object}
        * @init  localStorage.getItem("youngdong_order_list")
        */
    const [orderProduct, setOrderProduct] = useState([]);
    /**
           * @hook useState
           * @param {totalProductCost} 총 상품금액 
           * @param {totalPaymentCost} 결제금액
           * @param {totalDiscountCost} 할인금액
   
           * @property {Number}  
           */
    const [totalProductCost, setTotalProductCost] = useState(0);
    const [totalPaymentCost, setTotalPaymentCost] = useState(deliveryFee);
    const [totalDiscountCost, setTotalDiscountCost] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const localStorageList = JSON.parse(localStorage.getItem("youngdong_order_list"))
        console.log(Array.isArray(localStorageList))
        if (!localStorageList || localStorageList.length === 0 || !Array.isArray(localStorageList)) {
            notification['error']({
                message: `주문할 제품이 없습니다.`,
                description: `다시 시도해 주세요.`,
            });
            return navigate('/')
        }
        setOrderProduct(localStorage.getItem("youngdong_order_list") ? localStorageList : [])
        setTotalProductCost(0)
        setTotalDiscountCost(0)
        setTotalPaymentCost(deliveryFee)
        localStorageList.forEach(products => {
            setTotalPaymentCost((state) => state + (products.orderCount * products.sellingPrice))
            setTotalDiscountCost((state) => state + (products.orderCount * (products.originalPrice - products.sellingPrice)))
            setTotalProductCost((state) => state + (products.orderCount * products.originalPrice))

        });

    }, [navigate, deliveryFee])






    console.log(orderProduct)



    //SECTION - 주문자 정보 
    /**
     * @hook useState
     * @description buyer Info / 주문자 정보
     * @InitState user Info
     */
    const [buyerInfo, setBuyerInfo] = useState({
        name: name || '',
        phoneNumber: phoneNumber || "",
        email: email,
    })

    /**
     * @description buyer Info 수정 Func
     */
    let editBuyerInfo = {
        name: (e) => {
            return setBuyerInfo((state) => ({ ...state, name: e.target.value }))
        },
        phoneNumber: (e) => {
            return setBuyerInfo((state) => ({ ...state, phoneNumber: e.target.value }))
        },
        email: (e) => {
            return setBuyerInfo((state) => ({ ...state, email: e.target.value }))
        },
    }
    //!SECTION - 주문자 정보 


    //SECTION - 배송지 정보

    /**
     * @hook useState
     * @description 배송지 정보 Info
     */

    const [adrrInfo, setAdrrInfo] = useState({
        adrrName: '',
        adrrPhone: '',
        addrAddress: '',
        addrAddressDetail: '',
        roadAddress: '',
        addrZoneCode: '',
    })

    console.log("🚀 ~ adrrInfo", adrrInfo);

    /**
     * @description checked Func
     * @checkedValue 주문자 정보 기입
     */
    const [isCheckedAddrInfo, setIsCheckedAddrInfo] = useState(false)

    const checkedAddrOnchange = (e) => {
        console.log(e.target.checked)
        if (e.target.checked) {
            console.log("체크됨")
            setAdrrInfo((state) => ({ ...state, adrrName: buyerInfo.name }))
            setAdrrInfo((state) => ({ ...state, adrrPhone: phoneNumber.replace(/[^0-9]/g, '') }))
            setAdrrInfo((state) => ({ ...state, addrAddress: jibunAddress }))
            setAdrrInfo((state) => ({ ...state, addrAddressDetail: detailAddress }))
            setAdrrInfo((state) => ({ ...state, addrZoneCode: zipCode }))
            setAdrrInfo((state) => ({ ...state, roadAddress: roadAddress }))

            return setIsCheckedAddrInfo(true)
        }
        if (!e.target.checked) {
            setAdrrInfo((state) => ({ ...state, adrrName: '' }))
            setAdrrInfo((state) => ({ ...state, adrrPhone: '' }))
            setAdrrInfo((state) => ({ ...state, addrAddress: '' }))
            setAdrrInfo((state) => ({ ...state, addrAddressDetail: '' }))
            setAdrrInfo((state) => ({ ...state, addrZoneCode: '' }))
            setAdrrInfo((state) => ({ ...state, roadAddress: '' }))

            return setIsCheckedAddrInfo(false)
        }
    }


    /**
     * @description buyer Info 수정 Func
     */
    let editAdrrInfo = {
        adrrName: (e) => {
            return setAdrrInfo((state) => ({ ...state, adrrName: e.target.value }))
        },
        adrrPhone: (e) => {
            return setAdrrInfo((state) => ({ ...state, adrrPhone: e.target.value }))
        },
        addrAddress: (e) => {
            return setAdrrInfo((state) => ({ ...state, addrAddress: e.target.value }))
        },
        adrrMemo: (e) => {
            return setAdrrInfo((state) => ({ ...state, adrrMemo: e.target.value }))
        },
        addrAddressDetail: (e) => {
            return setAdrrInfo((state) => ({ ...state, addrAddressDetail: e.target.value }))
        }
    }

    const [isOpenKakaoMap, setIsOpenKakaoMap] = useState(false)

    const openKakaoMapOnClick = () => {
        setIsOpenKakaoMap(!isOpenKakaoMap)
    }

    const selectAddressHandle = (data) => {
        console.log(data)
        console.log(`
        주소: ${data.address},
        우편번호: ${data.zonecode}
    `)
        setAdrrInfo((state) => ({ ...state, addrAddress: data.jibunAddress }))
        setAdrrInfo((state) => ({ ...state, addrZoneCode: data.zonecode }))
        setAdrrInfo((state) => ({ ...state, roadAddress: data.roadAddress }))

        setIsOpenKakaoMap(false);
    }

    //!SECTION - 배송지 정보


    //SECTION - 배송메모
    const deliveryMemoObj = [
        `문 앞에 놓아 주세요.`,
        `경비(관리)실에 맡겨 주세요.`,
        `택배함에 넣어 주세요.`,
        `직접 받겠습니다.`,
        `직접입력`
    ]
    const [memo, setMemo] = useState('');
    const [writeMemo, setWriteMemo] = useState('');

    const onMemoChange = (event) => {
        console.log(event.target.value)
        setMemo(event.target.value);
    };
    const onWriteMemoChange = (event) => {
        console.log(event.target.value)
        setWriteMemo(event.target.value);
    }

    //!SECTION - 배송메모




    //SECTION - 결제 창에 넘길 정보
    const paymentProduct = [];
    orderProduct.forEach(product => {
        return paymentProduct.push({
            productId: product.id,
            count: product.orderCount
        })
    });
    const paymentData = {
        payProducts: paymentProduct,
        buyer_name: buyerInfo.name,
        buyer_tel: adrrInfo.adrrPhone,
        buyer_email: buyerInfo.email,
        buyer_addr: adrrInfo.addrAddress + ' ' + adrrInfo.addrAddressDetail,
        buyer_postcode: adrrInfo.addrZoneCode,
        deliveryRequirement: memo === `직접입력` ? writeMemo : memo,
        roadAddress: adrrInfo.roadAddress,
        jibunAddress: adrrInfo.addrAddress,
        detailAddress: adrrInfo.addrAddressDetail,
        zipCode: adrrInfo.addrZoneCode,
        recipientName: adrrInfo.adrrName,
        recipientPhoneNumber: buyerInfo.phoneNumber
    }

    console.log(paymentData)

    //!SECTION - 결제 창에 넘길 정보







    return (
        <>
            <OrderContent
                role={role}
                name={name}
                logined={logined}
                deliveryFee={deliveryFee}
                product={orderProduct}


                buyerInfo={buyerInfo} //buyer Info / 주문자 정보
                editBuyerInfo={editBuyerInfo}

                isCheckedAddrInfo={isCheckedAddrInfo}
                checkedAddrOnchange={checkedAddrOnchange}
                adrrInfo={adrrInfo}
                editAdrrInfo={editAdrrInfo}
                isOpenKakaoMap={isOpenKakaoMap}
                openKakaoMapOnClick={openKakaoMapOnClick}
                selectAddressHandle={selectAddressHandle}

                totalProductCost={totalProductCost}
                totalPaymentCost={totalPaymentCost}
                totalDiscountCost={totalDiscountCost}

                paymentData={paymentData}

                deliveryMemoObj={deliveryMemoObj}
                memo={memo}
                onMemoChange={onMemoChange}
                writeMemo={writeMemo}
                onWriteMemoChange={onWriteMemoChange}
            />
        </>
    )
}

export default ContentContainer;