import React, { useEffect, useState } from "react";
import CartContent from "../../../Components/organisms/CartContent"
import { useNavigate } from "react-router-dom"
import EmptyCartForm from "../../../Components/molecules/EmptyCartForm";

const ContentContainer = ({ role,
}) => {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    //NOTE - 장바구니 기본 Data
    /**
     * @hook useState
     * @description 장바구니 상품 arr
     * @property {arr[object]} cartData
     */
    const [cartData, setCartData] = useState([])

    /**
     * @hook useState
     * @description 장바구니 상품 ID arr
     * @property {Array} cartDataId
     */
    const [cartDataId, setCartDataId] = useState([])

    /**
     * @hook useState
     * @param {totalProductCost} 총 상품금액 
     * @param {totalPaymentCost} 결제금액
     * @param {totalDiscountCost} 할인금액
     * @property {Number}  
     */
    const [totalProductCost, setTotalProductCost] = useState(0);
    const [totalPaymentCost, setTotalPaymentCost] = useState(0);
    const [totalDiscountCost, setTotalDiscountCost] = useState(0);

    //NOTE - 선택 데이터
    const [checkedArr, setCheckedArr] = useState([]);




    useEffect(() => {
        //TODO cartData setting MonkData 
        const storageProductList = JSON.parse(localStorage.getItem('cartProductList')) || [];
        setCartData([])
        setCartDataId([])
        if (storageProductList === []) {
            return;
        }
        storageProductList.map((products) => {
            setCartDataId(((state) => [...state, products.id]))
            setCheckedArr(((state) => [...state, products.id]))
            return setCartData((state) => [...state, Object.assign({ cartSelected: true }, products)])
        })
    }, []);

    useEffect(() => {
        setTotalProductCost(0)
        setTotalPaymentCost(0)
        setTotalDiscountCost(0)
        cartData.forEach((products) => {
            if (checkedArr.includes(products.id)) {
                setTotalPaymentCost((state) => state + (products.orderCount * products.sellingPrice))
                setTotalDiscountCost((state) => state + (products.orderCount * (products.originalPrice - products.sellingPrice)))
                setTotalProductCost((state) => state + (products.orderCount * products.originalPrice))
            }
        })
    }, [cartData, checkedArr])

    //NOTE - 전체선택 
    const [isCheckedAll, setCheckedAll] = useState(true)
    const checkedAllOnchange = (e) => {
        if (e.target.checked) {
            setCheckedArr([...cartDataId])
            return setCheckedAll(true)
        }
        if (!e.target.checked) {
            setCheckedArr([])
            return setCheckedAll(false)
        }
    }


    let checkedArrLength = checkedArr.length;

    const checkedGoodsOnchange = (e, goodsId) => {
        if (e.target.checked) {
            if (checkedArr.includes(goodsId)) return null;
            checkedArrLength += 1;
            setCheckedArr((state) => ([...state,
                goodsId
            ]))

            if (checkedArrLength === cartDataId.length) return setCheckedAll(true)
        }
        if (!e.target.checked) {
            checkedArrLength -= 1;

            setCheckedArr((state) =>
                state.filter(valueId => valueId !== goodsId)
            )
            setCheckedAll(false)
        }
    }


    /**
     *@type {function}
     * @description  장바구니 제거
     * @detail cartProduct 물건 제거 -> 물건 ID 제거 -> 선택된 물건 ID 제거
     */
    const goodsDeleteIconOnClick = (goodsId) => {
        setCartData((state) => state.filter(goods => goods.id !== goodsId))
        setCartDataId((state) => state.filter(id => id !== goodsId))
        setCheckedArr((state) => state.filter(id => id !== goodsId))
        const getCartProductList = JSON.parse(localStorage.getItem('cartProductList')); //문자형으로 된 자료를 다시 배열로 바꾸기
        localStorage.setItem('cartProductList', JSON.stringify(getCartProductList.filter(goods => goods.id !== goodsId)));
    }

    /**
     * @description 주문 수량 증가 감소
     */
    let orderCountHandler = {
        plus: (productId, orderCount) => {
            const cartDataIndex = cartData.findIndex(products => products.id === productId)
            const copiedCartData = [...cartData];
            copiedCartData[cartDataIndex].orderCount = orderCount + 1

            setCartData(copiedCartData)
        },
        minus: (productId, orderCount) => {
            const cartDataIndex = cartData.findIndex(products => products.id === productId)
            const copiedCartData = [...cartData];
            copiedCartData[cartDataIndex].orderCount = orderCount - 1

            setCartData(copiedCartData)
        }

    }



    /**
     *@type {function}
     * @description  구매하기
     * @detail redux에 저장 -> 페이지 넘기기
     */

    const orderHandler = () => {
        const orderProductsList = []
        cartData.forEach((data) => {
            if (checkedArr.includes(data.id)) {
                orderProductsList.push(data)
            }
        })
        localStorage.setItem('youngdong_order_list', JSON.stringify(orderProductsList));
        navigate('/order/checkout')
    }


    return (
        <>
            {
                cartData.length === 0 ?
                    <>
                        <EmptyCartForm />
                    </>
                    :
                    <CartContent
                        isCheckedAll={isCheckedAll}
                        checkedAllOnchange={checkedAllOnchange}
                        cartData={cartData}
                        checkedArr={checkedArr}
                        checkedGoodsOnchange={checkedGoodsOnchange}
                        goodsDeleteIconOnClick={goodsDeleteIconOnClick}
                        orderCountHandler={orderCountHandler}
                        orderHandler={orderHandler}
                        totalProductCost={totalProductCost}
                        totalPaymentCost={totalPaymentCost}
                        totalDiscountCost={totalDiscountCost}
                        role={role}
                    />
            }
        </>
    )
}

export default React.memo(ContentContainer);



