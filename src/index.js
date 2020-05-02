import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';

//리덕스 관련 불러오기
import modules from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

//스토어 생성
const store = createStore(modules, window.devToolsExtenstion && window.devToolsExtenstion());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();