import * as React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { FooterModal } from './FooterModal';

describe('<FooterModal />', () => {
    it('should render FooterModal', () => {
        const { container } = render(<FooterModal />);
        expect(container).toBeInTheDocument();
    });
});