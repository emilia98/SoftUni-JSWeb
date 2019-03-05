import React from 'react';
import withWarning from '../../hocs/with-warning';

const Article = (props) => (
    <article>
        <header><span class="title">Article Title</span></header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magni labore voluptatibus. Vel sunt voluptate fugiat et ducimus voluptates doloremque, eum illo exercitationem dignissimos sequi cum, id molestiae debitis atque.</p>
    </article>
)

export default withWarning(Article);