/**
 * Created by cuyu on 2/23/17.
 */
import {connect} from 'react-redux'
import {appendNumber, clearNumber, addNumber, subNumber, calculate, multiplyNumber} from '../actions/action-creator'
import Button from '../components/Button'

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('dispatch:', dispatch)
    return {
        onClick: () => {
            console.log('onClick', ownProps.name)
            switch (ownProps.name) {
                case 'C':
                    dispatch(clearNumber());
                    break;
                case '+':
                    dispatch(addNumber());
                    break;
                case '-':
                    dispatch(subNumber());
                    break;
                case '*':
                    dispatch(multiplyNumber());
                    break;
                case '=':
                    dispatch(calculate());
                    break;
                default:
                    dispatch(appendNumber(ownProps.name));
                    break;
            }
        }
    }
};

const PlayableButton = connect((state, ownProps) => {
    return {}
}, mapDispatchToProps)(Button);

export default PlayableButton