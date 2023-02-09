import { connect } from "react-redux";
import ContentContainer from "../../../pages/mypage/ContentContainer";
import ACTION from "../../../../store/actions/action.js"


const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
        logined: state.login_reducer.logined,
        name: state.user_reducer.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))


        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)