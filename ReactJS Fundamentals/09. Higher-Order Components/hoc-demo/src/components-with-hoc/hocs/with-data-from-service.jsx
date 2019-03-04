import React from 'react';

function withDataFromService(Component, initialData, serviceMethod) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                data: initialData,
                error: null,
                isLoading: false
            }
        }
    
        async componentDidMount() {
            try {
                this.setState({isLoading: true}, async () => {
                    let data = await serviceMethod();
                    this.setState({isLoading: false, data});
                })
                
            } catch(error) {
                console.log(error);
                this.setState({isLoading: false, error});
            }
        }

        render() {
            const  {data, error, isLoading} = this.state;
    
            if(isLoading) {
                return <h1>Loading...</h1>
            }
    
            if(error) {
                return <h1>Something went wrong!</h1>
            }

            return <Component data={data} {...this.props}/>
        }
    }
    
}

export default withDataFromService;