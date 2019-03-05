import React, { Component } from 'react';

class UniversalForm extends Component {
    constructor(props) {
        super(props);

        let obj = {};
        obj.children = [];
        obj.fields = [];
        
        React.Children.forEach(this.props.children, (child) => {
            obj[child.props.name] = '';
           obj.children.push(child);
           obj.fields.push(child.props.name);
        });

        this.state = obj;

        this.change = this.change.bind(this);
        // this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    change(name, value) {
        let data = {};
        data[name] = value; 
        this.setState(data);
    }

    onSubmit(e) {
        e.preventDefault();
        let data = {};
        let { fields } = this.state;
        let state = this.state;

        for(let field of fields) {
            data[field] = state[field];
        }
        console.log(data);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
               <h2 className="form-title">{this.props.title}</h2>
                {
                    this.state.children.map((child, i) => (
                        <div className="form-group">
                            <label for={child.props.name + i}>{child.props.name.toUpperCase()}</label>
                            <Input props={child.props} change={this.change} key={i} id={child.props.name + i} />
                        </div>
                    ))
                }
                <button type="submit" className="btn btn-primary btn-submit">Submit</button>
            </form>
        )
    }
}

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            change: this.props.change
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e, inputName) {
        this.state.change(inputName, e.target.value);
    }

    render() {
        let {type, name} = this.props.props;
        return (
            <input type={type} name={name} onChange={(e) => this.onInputChange(e, name)} placeholder={name} className="form-control"/>
        )
    }
}

export default UniversalForm;