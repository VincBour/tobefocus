import { render, screen } from '@testing-library/react';
import { Timer } from './Timer';

describe('<Timer />', () => {
    it('should be defined', () => {
        const { container } = render(<Timer minutes='00' secondes='59'/>);
        expect(container).toBeDefined();
    });
    it('should render minutes', () => {
        render(<Timer minutes='00' secondes='59'/>);
        expect(screen.getByText('00')).toBeInTheDocument();
    });
    it('should render seconds', () => {
        render(<Timer minutes='00' secondes='59'/>);
        expect(screen.getByText('59')).toBeInTheDocument();
    });
});