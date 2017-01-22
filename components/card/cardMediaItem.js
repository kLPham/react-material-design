import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { cardMediaItemcssClasses as imgClasses } from '../classes';
import CardTitle from './cardTitle';

const cx = classNames.bind(imgClasses);

const CardMedia = ({ imgSrc, imgSize, ...rest }) =>
    <div className="mdc-card__horizontal-block">
        <CardTitle {...rest} />
        <img alt="" className={cx('mdc-card__media-item', imgClasses[imgSize])} src={imgSrc} />
    </div>;
CardMedia.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgSize: PropTypes.number,
};
export default CardMedia;
