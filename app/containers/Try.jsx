import React from 'react'
import { browserHistory } from 'react-router'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        if (!localStorage.nickName || !localStorage.userId) {
            browserHistory.replace('/login');
        }
    }


    render() {
        return (
            <div className="try">
                    Mytry
            </div>
)
}
}
