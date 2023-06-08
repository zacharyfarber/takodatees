import { useState } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <button onClick={() => setIsOpen(!isOpen)}>Dropdown</button>
            {isOpen && (
                <div>
                    <ul></ul>
                </div>
            )}
        </nav>
    );
}

export default Dropdown;
