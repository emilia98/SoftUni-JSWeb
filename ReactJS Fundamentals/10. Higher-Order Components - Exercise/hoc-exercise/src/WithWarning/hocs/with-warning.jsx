import React from 'react';

function withWarning(Component) {
    return class extends React.Component {
        render() {
            let { hasError } = this.props;

            if(hasError) {
                return (
                    <div class="alert">
                        <span class="alert-symbol">&#9888;</span>
                        <Component />
                    </div>
                )
            } else {
                return <Component />
            }
            
        }
    }
}

export default withWarning;