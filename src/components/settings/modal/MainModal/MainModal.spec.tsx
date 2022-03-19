import * as React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { MainModal } from './MainModal';

describe('<MainModal />', () => {
    it('should render MainModal', () => {
        const { container } = render(<MainModal />);
        expect(container).toBeInTheDocument();
    });
});