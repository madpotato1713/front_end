import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import AskRemoveModal from 'components/modal/AskRemoveModal';

class AskRemoveModalContainer extends Component {
    handleCancle = () => {

    }

    handleConfirm = () => {

    }

    render() {
        const { visible } = this.props;
        const { handleCancle, handleConfirm } = this;

        return (
            <AskRemoveModal visible={visible} onCancle={handleCancle} onConfirm={handleConfirm} />
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['modal', 'remove'])
    }),
    (dispatch) => ({
        baseActions: bindActionCreators(baseActions, dispatch),
        postActions: bindActionCreators(postActions, dispatch),
    })
)(AskRemoveModalContainer);