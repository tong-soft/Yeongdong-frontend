import React, { useEffect } from "react";
import HomeContent from "../../../Components/organisms/HomeContent"


const ContentContainer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <HomeContent />
        </>
    )
}

export default ContentContainer;