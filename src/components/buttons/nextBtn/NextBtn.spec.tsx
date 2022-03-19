import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NextBtn, NextBtnProps } from './NextBtn';

describe('<NextBtn />', () => {
    it('should render', () => {
        const { container }  = render(<NextBtn />);
        expect(container).toBeInTheDocument();
    });
});