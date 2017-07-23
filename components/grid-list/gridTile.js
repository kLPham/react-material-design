import React from 'react';
import PropTypes from 'prop-types';
import '@material/grid-list/dist/mdc.grid-list.css';
/**
* Grid Tiles
*/
const GridTile = ({ src, title, icon, supportText }) =>
    (<li className="mdc-grid-tile">
        <div className="mdc-grid-tile__primary">
            <div
                style={{ backgroundImage: `url(${src})` }}
                className="mdc-grid-tile__primary-content my-tile-image"
            />

        </div>
        {
            title && <span className="mdc-grid-tile__secondary">
                { icon &&
                    <i className="mdc-grid-tile__icon material-icons">{icon}</i>
                }
                <span className="mdc-grid-tile__title">{title}</span>
                {
                    supportText && <span className="mdc-grid-tile__support-text">{supportText}</span>
                }
            </span>
        }
    </li>);
GridTile.propTypes = {

    icon: PropTypes.string,
    /**
    * Source for image to present
    */
    src: PropTypes.string.isRequired,
    /**
    * Grid lists support a one-line caption by default. You can add an additional line of support text if needed.
    */
    supportText: PropTypes.string,
    title: PropTypes.string,
};
export default GridTile;
