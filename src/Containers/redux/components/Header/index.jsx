import { connect } from "react-redux";
import Header from "../../../../Components/organisms/HeaderContent"

const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
        logined: state.login_reducer.logined,
        name: state.user_reducer.name
    };
}

export default connect(mapStateToProps, null)(Header)