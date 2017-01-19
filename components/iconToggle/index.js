import React from 'react';
import '@material/icon-toggle/dist/mdc.icon-toggle.css';

const IconToggle = () =>
    <i
        className="mdc-icon-toggle material-icons" role="button" aria-pressed="false"
        aria-label="Add to favorites" tabIndex="0"
        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
    >
        favorite_border
    </i>;
export default IconToggle;
