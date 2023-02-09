import { connect } from "react-redux";
import ContentContainer from "../../../pages/cart/ContentContainer";


const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
        product: state.order_reducer.product,
        deliveryFee: state.order_reducer.deliveryFee,

    }
}




export default connect(mapStateToProps)(ContentContainer)