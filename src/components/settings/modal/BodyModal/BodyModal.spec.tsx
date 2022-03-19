import * as React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { BodyModal } from './BodyModal';

describe('<BodyModal />', () => {
    it('should render BodyModal', () => {
        const { container } = render(<BodyModal />);
        expect(container).toBeInTheDocument();
    });
});