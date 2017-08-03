import '@material/icon-toggle/dist/mdc.icon-toggle.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { MDCIconToggle } from '@material/icon-toggle';

// TODO: Font Awesome
// TODO: Label
/** Icon Toggle*/
class IconToggle extends Component {
    static propTypes = {
        accent: PropTypes.bool,
        disable: PropTypes.bool,
        icon: PropTypes.string.isRequired,
        toggledIcon: PropTypes.string.isRequired,
        primary: PropTypes.bool,
    }
    static defaultProps = {
        icon: 'favorite_border',
        toggledIcon: 'favorite',
    }
    componentDidMount() {
        const { disable } = this.props;
        this.iconToggle = new MDCIconToggle(this.mainRoot);
        this.iconToggle.foundation_.setDisabled(disable);
        this.iconToggle.listen('MDCIconToggle:change', ({ detail }) => {
            this.setState({
                isOn: detail.isOn,
            });
        });
    }
    render() {
        const { accent, darkTheme, icon, toggledIcon, primary } = this.props;
        return (
            <i
                ref={(i) => { this.mainRoot = i; }}
                className={classNames('mdc-icon-toggle material-icons', { 'mdc-icon-toggle--theme-dark': darkTheme }, { 'mdc-icon-toggle--primary': primary }, { 'mdc-icon-toggle--accent': accent })}
                role="button"
                aria-pressed="false"
                aria-label="Add to favorites"
                tabIndex="0"
                data-toggle-on={`{"label": "Remove from favorites", "content": "${toggledIcon}"}`}
                data-toggle-off={`{"label": "Add to favorites", "content": "${icon}"}`}
            >
                favorite_border
            </i>
        );
    }
}
export default IconToggle;
