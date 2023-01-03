import React from "react"
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeRouter from "./HomeRouter"
import GoodsRouter from "./GoodsRouter"
import ServicecenterRouter from "./ServicecenterRouter"
import CollectionsRouter from "./CollectionsRouter"
import CartRouter from "./CartRouter"

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
                    <ServicecenterRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/servicecenter" element={
                    <ServicecenterRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/collections/:sort" element={
                    <CollectionsRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/collections" element={
                    <CollectionsRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/cart" element={
                    <CartRouter security={["ADMIN", "GUEST", "USER"]}
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