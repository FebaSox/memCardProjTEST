import { Component } from 'react';

class Header extends Component {
    render() {
        const { currentScore, bestScore } = this.props;
        return (
            <header className='App-header'>
                <div className='d-flex justify-content-around align-items-center'>
                     <p>Current Score</p>
                    <p>{currentScore}</p>
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                     <p>Best Score</p>
                    <p>{bestScore}</p>
                </div>
            </header>
        );
    }
}

export default Header;