import React, { Component } from 'react';
import { MainPage } from '@src/pages/MainPage';

class App extends Component {
    state = {
        color: 'blue',
    };

    render() {
        return <MainPage />
    }
}
export default App;
