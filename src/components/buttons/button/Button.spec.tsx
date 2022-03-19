import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from './Button';

describe('<Button />', () => {
    it('should render', () => {
        const { container }  = render(<Button />);
        expect(container).toBeInTheDocument();
    });
});