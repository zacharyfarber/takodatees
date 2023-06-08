import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
    // RENDER COMPONENT
    render(<App />);

    // GRAB TEXT FROM SCREEN
    const text = screen.getByText(/home/i);

    // ASSERT TEXT IS IN DOCUMENT
    expect(text).toBeInTheDocument();
});
