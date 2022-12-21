import React from "react"
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeRouter from "./HomeRouter"
import GoodsRouter from "./GoodsRouter"
import Servicecenter from "./ServicecenterRouter"

const youngDongRouter = ({ role }) => {
    console.log(role)
    return (
        <BrowserRouter basename="youngdong-app">
            <Routes>
                <Route exact path="/" element={
                    <HomeRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/goods/:id/:product" element={
                    <GoodsRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/goods" element={
                    <GoodsRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/servicecenter/:service" element={
                    <Servicecenter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/servicecenter" element={
                    <Servicecenter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/collections/popular" element={
                    <Servicecenter security={["ADMIN", "GUEST", "USER"]}
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