import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Home from './Home';

test('renders the Motto, Music, Featured and Mailing components', () => {
    // RENDER THE COMPONENT
    render(
        <Provider store={store}>
            <Home />
        </Provider>
    );

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
