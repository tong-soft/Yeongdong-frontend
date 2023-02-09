import { connect } from "react-redux";
import ContentContainer from "../../../pages/goods/ContentContainer";


const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
        product: state.order_reducer.product,
        logined: state.login_reducer.logined,

    }
}




export default connect(mapStateToProps)(ContentContainer)