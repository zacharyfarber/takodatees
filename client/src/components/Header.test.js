import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the dropdown component, the logo and the cart component', () => {
    // RENDER THE COMPONENT
    render(<Header />);

    // FIND ELEMENTS ON THE SCREEN
    const dropdown = screen.getByRole('button', { name: /dropdown/i });
    const logo = screen.getByRole('img', { name: /logo/i });
    const cart = screen.getByRole('button', { name: /cart/i });

    // ASSERT ALL ELEMENTS ARE IN THE DOCUMENT
    expect(dropdown).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
});
