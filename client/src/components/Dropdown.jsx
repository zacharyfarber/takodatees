import { useState } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Dropdown</button>
            {isOpen && <nav></nav>}
        </div>
    );
}

export default Dropdown;
