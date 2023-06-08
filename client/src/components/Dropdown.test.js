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

test('changes the state of isOpen when button is clicked', async () => {
    // RENDER THE COMPONENT
    render(<Dropdown />);

    // FIND THE BUTTON ON THE SCREEN
    const button = screen.getByRole('button');

    // SIMULATE CLICK ON BUTTON
    userEvent.click(button);

    // FIND THE TEXT ON THE SCREEN
    const isOpen = await screen.findByText('isOpen');

    // ASSERT THE ELEMENT IS IN THE DOCUMENT
    expect(isOpen).toBeInTheDocument();
});