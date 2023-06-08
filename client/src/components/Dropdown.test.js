import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

test('renders a button', () => {
    // RENDER THE COMPONENT
    render(<Dropdown />);

    // FIND THE ELEMENT ON THE SCREEN
    const button = screen.getByRole('button');

    // ASSERT THE ELEMENT IS IN THE DOCUMENT
    expect(button).toBeInTheDocument();
});

test('renders a nav when button is clicked', async () => {
    // RENDER THE COMPONENT
    render(<Dropdown />);

    // FIND THE BUTTON ON THE SCREEN
    const button = screen.getByRole('button');

    // SIMULATE CLICK ON BUTTON
    userEvent.click(button);

    // FIND THE NAV ON THE SCREEN
    const nav = await screen.findByRole('navigation');

    // ASSERT THE NAV IS IN THE DOCUMENT
    expect(nav).toBeInTheDocument();
});
