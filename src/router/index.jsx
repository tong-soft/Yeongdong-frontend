import React from "react"
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeRouter from "./HomeRouter"
import NoticeRouter from "./NoticeRouter"


const youngDongRouter = ({ role }) => {
    console.log(role)
    return (
        <BrowserRouter basename="youngdong-app">
            <Routes>
                <Route exact path="/" element={
                    <HomeRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/notice/:id/:product" element={
                    <NoticeRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/notice" element={
                    <NoticeRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
            </Routes>
        </BrowserRouter>
    )

}
const mapStateToProps = (state) => {
    return {
        role: state.user_reducer?.role,

    }
}

export default connect(mapStateToProps, null)(youngDongRouter)