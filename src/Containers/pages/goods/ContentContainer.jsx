import React, { useEffect, useState } from "react";
import GoodsContent from "../../../Components/organisms/GoodsContent"
import { useParams } from "react-router-dom"


const ContentContainer = ({ role }) => {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    //NOTE - options Arr
    const productOptions = ["도자기", "미니흔들", "화분", "무드등"]

    //NOTE - user가 선택한 상품(push(productDefaultValue))
    // const [productValue, setProductValue] = useState([])
    const [selectOption, setSelectOption] = useState('')


    //TODO 이게 지금 선택한 product
    const [userProductObj, setUserProductObj] = useState({})

    console.log("🚀 ~ userProductObj", userProductObj);

    //NOTE - user가 옵션 선택 handleFunc
    const selectHandleFunc = (e) => {
        const value = e.target.value
        setSelectOption(value)
        // setProductValue((state) => ([...state, { option: value, amount: 1 }]))
        console.log(value)
        setUserProductObj((state) => ({ ...state, [value]: 1 }))
    }
    //NOTE - user가 수량 선택 handleFunc
    const amountHandleFunc = (e, option) => {
        const value = e.target.value;
        console.log(value)
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
        const swallowObj = Object.assign({}, userProductObj);
        delete swallowObj[key];
        console.log(swallowObj)
        setUserProductObj(swallowObj);
    }



    return (
        <>
            <GoodsContent
                role={role}
                productOptions={productOptions}
                userProductObj={userProductObj}
                selectOption={selectOption}
                selectHandleFunc={selectHandleFunc}
                amountHandleFunc={amountHandleFunc}
                amountIconHandleFunc={amountIconHandleFunc}
                productDeleteHandleFunc={productDeleteHandleFunc}
            />
        </>
    )
}

export default ContentContainer;