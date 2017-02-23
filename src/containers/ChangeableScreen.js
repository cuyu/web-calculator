/**
 * Created by cuyu on 2/23/17.
 */
import Screen from '../components/Screen'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        value: state.value.value
    }
};


const ChangeableScreen = connect(mapStateToProps)(Screen);

export default ChangeableScreen