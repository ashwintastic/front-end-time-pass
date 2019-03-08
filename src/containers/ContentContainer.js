import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContentComponent from '../components/ContentsComponent'
import *  as async from '../AsyncCalls'

function mapStateToProps(state) {
    console.log("state", state)
    return {
        contents: state.contents
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchcontentsFromserver: () => ({type: 'CONTENT_FETCHED_WATHCER',  remote: async.get})
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);