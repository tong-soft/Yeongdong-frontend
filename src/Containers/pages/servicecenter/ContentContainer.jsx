import React, { useEffect, useState } from "react";
import ServicecenterContent from "../../../Components/organisms/ServicecenterContent"
import { useParams } from "react-router-dom"


const ContentContainer = ({ role }) => {
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id])


    return (
        <>
            <ServicecenterContent

            />
        </>
    )
}

export default ContentContainer;