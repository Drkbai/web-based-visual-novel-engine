import React from 'react';
import ReactDOM from 'react-dom';

class PlayScreen extends React.Component {

    render() {
        return (
            <div></div>
        )
    }

}

if (document.getElementById('play-screen')) {
    ReactDOM.render(<PlayScreen />, document.getElementById('play-screen'));
}