import { render, screen } from '@testing-library/react';
import App from './App';

test('renders some text', () => {
    // RENDER COMPONENT
    render(<App />);

    // GRAB TEXT FROM SCREEN
    const text = screen.getByText(/app/i);

    // ASSERT TEXT IS IN DOCUMENT
    expect(text).toBeInTheDocument();
});
