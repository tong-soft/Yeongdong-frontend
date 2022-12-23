import React, { useEffect, useState } from "react";
import CollectionsContent from "../../../Components/organisms/CollectionsContent"
import { useParams } from "react-router-dom"
import monkListImg from "../../../assets/images/monkListImg.png"
import monkLists from "../../../mocks/lists"

const ContentContainer = () => {
    const { sort } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [sort])

    //SECTION pagination
    //NOTE 전체 리스트 갯수 listTotalNum , setListTotalNum
    const [listTotalNum, setListTotalNum] = useState("0");
    //NOTE 선택한 리스트 페이지 번호 ( 1페이지 , 2페이지) [pagingNum, setPagingNum]
    const [pagingNum, setPagingNum] = useState(0);
    //NOTE fetch 로 받아올 리스트 (6개씩뜨는 notice) [lists, setLists]
    const [lists, setLists] = useState([]);

    //NOTE //전체 페이지 갯수 받아오기 
    useEffect(() => {
        setListTotalNum(50);// 전체 리스트 갯수 저장 
    }, [])

    // 전체 페이지 갯수가 바뀔 때 마다 선택된 페이지 새로 받아오기 (삭제되었을때 바로 반영이 되로=도록)
    useEffect(() => {
        // getNoticeByPage(pagingNum)
        //     .then((res) => {
        //         console.log(res.notices)
        //         setLists(res.notices);
        //     }).catch(error => console.log(error))
        setLists(monkLists);

    }, [pagingNum, listTotalNum])

    /**
   * @description paging 클릭 시
   * @param e - 선택한 page target하기위한 param
   * @detail id -1 해야댐 (page는 0 부터 시작 )
   */

    const pagingClick = (e) => {
        const pagingId = e.target.innerText;
        console.log(pagingId)
        setPagingNum(pagingId - 1)
    }

    const pageNumber = []; // pagNation 배열 

    for (let i = 1; i <= Math.ceil(listTotalNum / 6); i++) {
        pageNumber.push(i);
    }

    //!SECTION pagination


    return (
        <>
            <CollectionsContent
                listTotalNum={listTotalNum}
                pagingClick={pagingClick}
                pagingNum={pagingNum}
                lists={lists}
            />
        </>
    )
}

export default ContentContainer;