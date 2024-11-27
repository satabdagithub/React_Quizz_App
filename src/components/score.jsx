import React, { Component } from 'react';
import '../App.css'

class Score extends Component {

    handleRefresh = () => {
        window.location.reload();
    };

    render() {
        const { score, onNextQuestion } = this.props;

        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: <b>{score} out of 100</b> </h4>

                <button onClick={this.handleRefresh} className="btn btn-primary rounded justify-content-centre mt-5">
                    REFRESH QUIZZY
                </button>
            </div>
        );
    }
}

export default Score;