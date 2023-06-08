import { useState } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <button onClick={() => setIsOpen(!isOpen)}>Dropdown</button>
            {isOpen && 'isOpen'}
        </nav>
    );
}

export default Dropdown;
