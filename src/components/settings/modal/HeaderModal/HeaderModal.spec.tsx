import * as React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { HeaderModal } from './HeaderModal';

describe('<HeaderModal />', () => {
    it('should render HeaderModal', () => {
        const { container } = render(<HeaderModal />);
        expect(container).toBeInTheDocument();
    });
});