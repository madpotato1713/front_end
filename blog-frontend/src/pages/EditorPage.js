import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EidtorHeaderContainer from 'containers/editor/EidtorHeaderContainer';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';

const EditorPage = () => {
    return (
        <div>
            <EditorTemplate
                header={<EidtorHeaderContainer />}
                editor={<EditorPaneContainer />}
                preview={<PreviewPaneContainer />}
            />
        </div>
    );
};

export default EditorPage;