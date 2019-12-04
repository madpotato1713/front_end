import React, { Component } from 'react';

class TestView extends Component {

    scrollToBottom = () => {
        const {
            scrollHeight,
            clientHeight,
        } = this.box;

        console.log(this.box);

        this.box.scrollTop = scrollHeight - clientHeight;
    }
    
    shouldComponentUpdate(){
        
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
        };

        const innerStyle = {
            widht: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)',
        };

        return (
            <div>
                <li>하이</li>
            </div>
        )
    }
}

export default TestView;