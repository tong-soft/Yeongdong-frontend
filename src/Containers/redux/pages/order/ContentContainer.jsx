import { connect } from "react-redux";
import ContentContainer from "../../../pages/order/ContentContainer";



const mapStateToProps = (state) => {
    return {
        logined: state.login_reducer.logined,
        role: state.user_reducer.role,
        name: state.user_reducer.name,
        email: state.user_reducer.email,
        phoneNumber: state.user_reducer.phoneNumber,
        roadAddress: state.user_reducer.roadAddress,
        jibunAddress: state.user_reducer.jibunAddress,
        detailAddress: state.user_reducer.detailAddress,
        zipCode: state.user_reducer.zipCode,

        deliveryFee: state.order_reducer.deliveryFee,

    }
}





export default connect(mapStateToProps)(ContentContainer)
