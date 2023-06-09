import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders the header component, the home page and the footer component', () => {
    // RENDER COMPONENT
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // FIND ELEMENTS ON THE SCREEN
    const header = screen.getByRole('banner');
    const motto = screen.getByText(/motto/i);
    const music = screen.getByText(/music/i);
    const featured = screen.getByText(/featured/i);
    const mailing = screen.getByText(/mailing/i);
    const footer = screen.getByText(/footer/i);

    // ASSERT ALL ELEMENTS ARE IN THE DOCUMENT
    expect(header).toBeInTheDocument();
    expect(motto).toBeInTheDocument();
    expect(music).toBeInTheDocument();
    expect(featured).toBeInTheDocument();
    expect(mailing).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
});
