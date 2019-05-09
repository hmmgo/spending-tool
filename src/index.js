// inspired by https://github.com/mbrn/react-basket/

import React from 'react'
import ReactDOM from 'react-dom'
import Tool from './components/Tool';

class App extends React.Component {
    render() {
        return <div>
            <Tool/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
