import { useState } from 'react';

function Cart() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Cart</button>
            {isOpen && (
                <div>
                    <ul></ul>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
