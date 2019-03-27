import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'
import *  as async from '../AsyncCalls'

function mapStateToProps(state) {
    return {
        jwtToken: state.jwtToken.token
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchTokenFromserver: (userData) => ({type: 'FB_TOKEN_FETCH_WATHCER',
                                              payload: userData,
                                              remote: async.post,
                                              endpoint: 'facebook/callback'})
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);