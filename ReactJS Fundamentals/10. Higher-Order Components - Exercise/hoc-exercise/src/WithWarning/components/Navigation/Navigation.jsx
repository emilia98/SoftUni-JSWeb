import React from 'react';
import withWarning from '../../hocs/with-warning';

const Navigation = (props) => (
    <nav>
    <header><span class="title">Navigation</span></header>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Catalog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
</nav>
);

export default withWarning(Navigation);