import React from "react"
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeRouter from "./HomeRouter"
import LoginRouter from "./LoginRouter"
import GoodsRouter from "./GoodsRouter"
import ServicecenterRouter from "./ServicecenterRouter"
import CollectionsRouter from "./CollectionsRouter"
import CartRouter from "./CartRouter"
import MypageRouter from "./MypageRouter"
import AdminRouter from "./AdminRouter"
import OrderRouter from "./OrderRouter"
import SearchRouter from "./SearchRouter"

const youngDongRouter = ({ role }) => {
    console.log(`📌router/index📌 role : ${role} `)
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <HomeRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/login" element={
                    <LoginRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/goods/:id" element={
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
                    />} >
                    {/* <Route path=":service" element={
                        <ServicecenterRouter security={["ADMIN", "GUEST", "USER"]}
                            role={role} />}
                    /> */}
                </Route>
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
                <Route exact path="/mypage/:menu" element={
                    <MypageRouter security={["ADMIN", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/mypage" element={
                    <MypageRouter security={["ADMIN", "USER"]}
                        role={role}
                    />} />

                <Route exact path="/search" element={
                    <SearchRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />


                {/**
                    * @description 주문관련 path
                    * @param  {params} checkout - 주문서 
                    * @param  {params} complete - 주문완료 
                */}
                <Route exact path="/order/:params" element={
                    <OrderRouter security={["ADMIN", "USER", "GUEST"]}
                        role={role}
                    />} />
                <Route exact path="/order/" element={
                    <OrderRouter security={["ADMIN", "USER", "GUEST"]}
                        role={role}
                    />} />

                {/* ADMIN PAGE */}
                <Route exact path="/admin/:menu" element={
                    <AdminRouter security={["ADMIN", "GUEST", "USER"]}
                        role={role}
                    />} />
                <Route exact path="/admin" element={
                    <AdminRouter security={["ADMIN",]}
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