import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
    // RENDER COMPONENT
    render(<App />);

    // FIND TEXT ON THE SCREEN
    const motto = screen.getByText(/motto/i);
    const music = screen.getByText(/music/i);
    const featured = screen.getByText(/featured/i);
    const mailing = screen.getByText(/mailing/i);

    // ASSERT ALL TEXT IS IN THE DOCUMENT
    expect(motto).toBeInTheDocument();
    expect(music).toBeInTheDocument();
    expect(featured).toBeInTheDocument();
    expect(mailing).toBeInTheDocument();
});
