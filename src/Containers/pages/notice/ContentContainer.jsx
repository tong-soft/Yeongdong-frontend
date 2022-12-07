import React, { useEffect } from "react";
import NoticeContent from "../../../Components/organisms/NoticeContent"
import { useParams } from "react-router-dom"


const ContentContainer = ({ role }) => {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])

    return (
        <>
            <NoticeContent
                role={role}
            />
        </>
    )
}

export default ContentContainer;