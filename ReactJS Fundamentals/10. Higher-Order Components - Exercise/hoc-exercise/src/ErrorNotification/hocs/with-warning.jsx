import React from 'react';

function withWarning(Component, hasError) {

    return class extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                hasError: this.props.hasError
            }

            this.onBtnClick = this.onBtnClick.bind(this);
            this.normalize = this.normalize.bind(this);
        }

        componentDidUpdate(prevProps, prevState) {

            // Typical usage (don't forget to compare props):
            if (prevState.clicked !== this.state.clicked) {
                throw new Error('Hello')
            }

            if (prevState.normalize !== this.state.normalize) {
                return;
            }
        }

        onBtnClick() {
            let { clicked } = this.state;

            this.setState({
                clicked: !clicked
            });
        }

        normalize() {
            this.props.normalizeParent();
        }

        render() {
            if (this.props.hasError) {
                return (
                    <React.Fragment>
                        <button className="btn btn-warning" onClick={this.onBtnClick}>Throw An Error</button>
                        <button className="btn btn-info" onClick={this.normalize}>Normalize</button>
                        <div class="alert">
                            <span class="alert-symbol">&#9888;</span>

                            <Component />

                        </div>
                    </React.Fragment>

                )
            } else {
                return (
                    <React.Fragment>
                        <button className="btn btn-warning" onClick={this.onBtnClick}>Throw An Error</button>
                        <button className="btn btn-info" onClick={this.normalize}>Normalize</button>
                        <Component />
                    </React.Fragment>)
            }

        }
    }
}

export default withWarning;