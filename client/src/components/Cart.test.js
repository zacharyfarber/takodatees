import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

test('renders a cart button', () => {
    // RENDER COMPONENT
    render(<Cart />);

    // FIND THE ELEMENT ON THE SCREEN
    const button = screen.getByRole('button', { name: /cart/i });

    // ASSERT THE ELEMENT IS IN THE DOCUMENT
    expect(button).toBeInTheDocument();
});

test('renders a list and checkout button when cart button is clicked', async () => {
    // RENDER COMPONENT
    render(<Cart />);

    // FIND THE BUTTON ON THE SCREEN
    const button = screen.getByRole('button', { name: /cart/i });

    // SIMULATE CLICK ON BUTTON
    userEvent.click(button);

    // FIND THE LIST AND THE CHECKOUT BUTTON ON THE SCREEN
    const list = await screen.findByRole('list');
    const checkout = await screen.findByRole('button', { name: /checkout/i });

    // ASSERT THE LIST IS IN THE DOCUMENT
    expect(list).toBeInTheDocument();
    expect(checkout).toBeInTheDocument();
});
