import React from 'react';
import { shallow } from 'enzyme';
import List from '../index';
import { listcssClasses } from '../../classes';

describe('<List />', () => {
    it('should render with basic li', () => {
        const list = shallow(
            <List>
                <li className="mdc-list-item">
                    Item One
                </li>
                <li className="mdc-list-item">
                    Item Two
                </li>
            </List>,
        );
        expect(list).toMatchSnapshot();
        expect(list.find('ul')).toHaveClassName('mdc-list');
        expect(list.find('li')).toBePresent();
        expect(list.find('li').at(1)).toHaveText('Item Two');
    });
    it('should render dense with basic li', () => {
        const type = 'dense';
        const cssClass = listcssClasses[type];
        const list = shallow(
            <List type={type}>
                <li className="mdc-list-item">
                    Item One
                </li>
                <li className="mdc-list-item">
                    Item Two
                </li>
            </List>,
        );
        expect(list).toMatchSnapshot();
        expect(list.find('ul')).toHaveClassName('mdc-list');
        expect(list).toHaveClassName(cssClass);
        expect(list.find('li')).toBePresent();
        expect(list.find('li').at(1)).toHaveText('Item Two');
    });
    it('should render avatar with avatar li', () => {
        const type = 'avatar';
        const cssClass = listcssClasses[type];
        const list = shallow(
            <List type={type}>
                <li className="mdc-list-item">
                    <img
                        className="mdc-list-item__start-detail" src="/users/1/profile_pic.png"
                        width="56" height="56" alt="Picture of Janet Perkins"
                    />
                        Janet Perkins
                </li>
                <li className="mdc-list-item">
                    <img
                        className="mdc-list-item__start-detail" src="/users/2/profile_pic.png"
                        width="56" height="56" alt="Picture of Mary Johnson"
                    />
                        Mary Johnson
                </li>
                <li className="mdc-list-item">
                    <img
                        className="mdc-list-item__start-detail" src="/users/3/profile_pic.png"
                        width="56" height="56" alt="Picture of Peter Carlsson"
                    />
                        Peter Carlsson
                </li>
            </List>
        ,
        );
        expect(list).toMatchSnapshot();
        expect(list.find('ul')).toHaveClassName('mdc-list');
        expect(list).toHaveClassName(cssClass);
        expect(list.find('li')).toBePresent();
        expect(list.find('li').at(1)).toHaveText('Mary Johnson');
    });
});
