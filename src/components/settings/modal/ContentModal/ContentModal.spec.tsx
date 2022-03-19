import * as React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { ContentModal } from './ContentModal';

describe('<ContentModal />', () => {
    it('should render ContentModal', () => {
        const { container } = render(<ContentModal />);
        expect(container).toBeInTheDocument();
    });
});