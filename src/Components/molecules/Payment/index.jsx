import React from 'react';
import styled from 'styled-components';
import PostPaymentYoungdong from "../../../service/api/post/post_order_payment_youngdong"
import PostPaymentVerify from "../../../service/api/post/post_payment_verify"
import { ReactComponent as KakaoPayIcon } from "../../../assets/svg/kakaoPayIcon.svg"
import { notification } from 'antd';
import { useNavigate } from "react-router-dom"
import _ from "../../../config/env"


const PaymentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
`

const KakaoPayBtn = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 48px;
    border: 1px solid rgb(246, 229, 0);
    font-size: 14px;
    color: rgb(255, 255, 255);
    background: rgb(246, 229, 0);
    font-weight: 500;
    border-radius: 3px;
    cursor : pointer;
`

const NiceCardBtn = styled(KakaoPayBtn)`
     border: 1px solid rgb(226, 226, 226);
     color : #333;
     background : none;

`


const Payment = ({ effect, deps, pgTypes,
    // children,
    paymentData,
    pgValue
}) => {
    const navigate = useNavigate();



    // useEffect(() => {
    //     const jquery = document.createElement("script");
    //     jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    //     const iamport = document.createElement("script");
    //     iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    //     document.head.appendChild(jquery); document.head.appendChild(iamport);
    //     return () => {
    //         document.head.removeChild(jquery);
    //         document.head.removeChild(iamport);
    //     }
    // }, []);

    const jquery = document.createElement("script");
    const iamport = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);


    const onClickPayment = () => {
        //TODO request 수정

        if (!paymentData.zipCode || !paymentData.jibunAddress || !paymentData.detailAddress) {
            return notification['warning']({
                message: `배송지를 다시 입력해 주세요`,
            });
        }

        PostPaymentYoungdong({
            deliveryRequirement: paymentData.deliveryRequirement,
            detailAddress: paymentData.detailAddress,
            jibunAddress: paymentData.jibunAddress,
            payProducts: paymentData.payProducts,
            recipientName: paymentData.recipientName,
            recipientPhoneNumber: paymentData.recipientPhoneNumber,
            roadAddress: paymentData.roadAddress,
            zipCode: paymentData.zipCode
        })
            .then(res => {
                //TODO
                console.log(res.response)
                console.log("🚀 ~ res.response.name", res.response.name);
                console.log("🚀 ~ Number(res.response.amount)", Number(res.response.amount));
                console.log("🚀 ~ res.response.merchantUid", res.response.merchantUid);


                const { IMP } = window;
                IMP.init(_.IMPORT_CODE); // 결제 데이터 정의
                const data = {
                    pg: pgValue || 'kakaopay', // PG사 (필수항목)
                    pay_method: 'card', // 결제수단 (필수항목)
                    // merchant_uid: `mid_${new Date().getTime()}`,
                    merchant_uid: `mid_${res.response.merchantUid}` || null, // 주문번호 (필수항목)
                    name: res.response.name || "결제 테스트", // 주문명 (필수항목)
                    amount: Number(res.response.amount), // 금액 (필수항목)

                    buyer_name: paymentData.buyer_name,// 구매자 이름
                    buyer_tel: paymentData.buyer_tel,// 구매자 전화번호
                    buyer_email: paymentData.buyer_email,// 구매자 이메일
                    buyer_addr: paymentData.buyer_addr,// 구매자 주소
                    buyer_postcode: paymentData.buyer_postcode, // 구매자 우편번호
                };
                /* NOTE  4. 결제 창 호출하기 */
                IMP.request_pay(data, callback);
            })
            .catch((err) => console.log(err))



        // document.head.removeChild(jquery);
        // document.head.removeChild(iamport);
    }

    const callback = (response) => {

        console.log(response)
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
        if (success) {
            PostPaymentVerify({
                "impUid": imp_uid,
                "merchantUid": merchant_uid.slice(4),
            }).then((res) => {
                console.log(res)
                /**
                 * @description 구매한건 장바구니에서 빼기
                 */
                const productIdArr = [];
                paymentData.payProducts.forEach((product) => {
                    return productIdArr.push(product.productId)
                })
                console.log("🚀 ~ productIdArr", productIdArr);
                const localStorageList = JSON.parse(localStorage.getItem("cartProductList"))
                if(Array.isArray(localStorageList) === true){
                     const setLocalStorageList = localStorageList.filter(list => !productIdArr.includes(list.id))
                console.log("🚀 ~ setLocalStorageList", setLocalStorageList);
                localStorage.setItem('cartProductList', JSON.stringify(setLocalStorageList));
                }
            
                notification['success']({
                    message: `결제 성공 `,
                });
                navigate('/order/success')

            }).catch((err) => console.log(err))
        } else {
            alert(`결제 실패 : ${error_msg}`);
        }
    }

    return (
        <>
            {
                pgValue === "kakaopay" ?
                    <PaymentWrapper onClick={onClickPayment} >
                        <KakaoPayBtn>
                            <KakaoPayIcon></KakaoPayIcon>
                        </KakaoPayBtn>
                    </PaymentWrapper>
                    : null
            }
            {
                pgValue === "nice" ?
                    <PaymentWrapper onClick={onClickPayment} >
                        <NiceCardBtn >
                            신용카드
                        </NiceCardBtn>
                    </PaymentWrapper>
                    : null
            }



        </>
    );
}

export default Payment;


