import { connect } from "react-redux";
import ContentContainer from "../../../pages/servicecenter/ContentContainer";



const mapStateToProps = (state) => {
    return {
        role: state.user_reducer.role,
    }
}


export default connect(mapStateToProps)(ContentContainer)