/**
 * Created by cuyu on 2/23/17.
 */
import {connect} from 'react-redux'
import {appendNumber} from '../actions/action-creator'
import Button from '../components/Button'

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('dispatch:', dispatch)
    return {
        onClick: () => {
            console.log('onClick',ownProps.name)
            dispatch(appendNumber(ownProps.name))
        }
    }
};

const PlayableButton = connect((state, ownProps) => {
    return {}
}, mapDispatchToProps)(Button);

export default PlayableButton