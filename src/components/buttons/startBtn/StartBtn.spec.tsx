import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { StartBtn , StartBtnProps } from './StartBtn';

describe('<StartBtn />', () => {
    it('should render', () => {
        const { container }  = render(<StartBtn />);
        expect(container).toBeInTheDocument();
    });
});