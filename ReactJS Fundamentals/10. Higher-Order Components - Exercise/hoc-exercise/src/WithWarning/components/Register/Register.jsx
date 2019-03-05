import React from 'react';
import withWarning from '../../hocs/with-warning';

const Register = (props) => (
    <div>
        <header><span class="title">Register</span></header>
        <form>
            Username:
            <input type="text" /><br/>
            Email:
            <input type="text" /><br/>
            Password:
            <input type="password" /><br/>
            Repeat Password:
            <input type="password"/><br/>
            <input type="submit" value="Register" />
        </form>
    </div>
);

export default withWarning(Register);