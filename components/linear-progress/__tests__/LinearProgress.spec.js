import React from 'react';
import { mount } from 'enzyme';
import LinearProgress from '../index';

describe('<LinearProgress />', () => {
    it('should render with progress', () => {
        const progress = 0.5;
        const linearProgress = mount(
            <LinearProgress progress={progress} />,
    );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render accent', () => {
        const accent = true;
        const progress = 0.5;
        const linearProgress = mount(
            <LinearProgress accent={accent} progress={progress} />,
    );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render indeterminate', () => {
        const indeterminate = true;
        const linearProgress = mount(
            <LinearProgress indeterminate={indeterminate} />,
    );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render indeterminate accent', () => {
        const accent = true;
        const indeterminate = true;
        const linearProgress = mount(
            <LinearProgress accent={accent} indeterminate={indeterminate} />,
    );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render indeterminate reversed', () => {
        const reversed = true;
        const indeterminate = true;
        const linearProgress = mount(
            <LinearProgress reversed={reversed} indeterminate={indeterminate} />,
        );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render with buffer', () => {
        const progress = 0.5;
        const buffer = 0.8;
        const linearProgress = mount(
            <LinearProgress progress={progress} buffer={buffer} />,
      );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render with buffer accent', () => {
        const progress = 0.5;
        const buffer = 0.8;
        const accent = true;
        const linearProgress = mount(
            <LinearProgress progress={progress} buffer={buffer} accent={accent} />,
      );
        expect(linearProgress).toMatchSnapshot();
    });

    it('should render with buffer reversed', () => {
        const progress = 0.5;
        const buffer = 0.8;
        const reversed = true;
        const linearProgress = mount(
            <LinearProgress progress={progress} reversed={reversed} buffer={buffer} />,
      );
        expect(linearProgress).toMatchSnapshot();
    });
});
