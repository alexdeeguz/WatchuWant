import { connect } from 'react-redux';

import UserShow from './user_show';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    };
};


export default connect(mapStateToProps, null)(UserShow);