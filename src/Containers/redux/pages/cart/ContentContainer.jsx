import { connect } from "react-redux";
import ContentContainer from "../../../pages/cart/ContentContainer";



const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
    }
}


export default connect(mapStateToProps)(ContentContainer)