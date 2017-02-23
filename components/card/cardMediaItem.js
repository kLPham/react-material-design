import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { cardMediaItemcssClasses as imgClasses } from '../classes';
import CardTitle from './cardTitle';

const cx = classNames.bind(imgClasses);

const CardMedia = ({ children, imgSrc, imgSize, title, ...rest }) =>
    <div className="mdc-card__horizontal-block">
        {title && <CardTitle title={title}{...rest} />}
        <img alt="" className={cx('mdc-card__media-item', imgClasses[imgSize])} src={imgSrc} />
        {children}
    </div>;
CardMedia.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgSize: PropTypes.number,
};
export default CardMedia;
