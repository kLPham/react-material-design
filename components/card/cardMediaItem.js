import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cardMediaItemcssClasses as imgClasses } from '../classes';
import CardTitle from './cardTitle';

const cx = classNames.bind(imgClasses);
/** Card Media Item */
const CardMediaItem = ({ children, imgSrc, imgSize, title, ...rest }) =>
    (<div className="mdc-card__horizontal-block">
        {title && <CardTitle title={title}{...rest} />}
        <img alt="" className={cx('mdc-card__media-item', imgClasses[imgSize])} src={imgSrc} />
        {children}
    </div>);
CardMediaItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgSize: PropTypes.number,
    title: PropTypes.string,
    children: PropTypes.any,
};
export default CardMediaItem;
