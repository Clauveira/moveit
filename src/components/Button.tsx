import { useState } from 'react';

interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [counter, setCouter] = useState(1)

    function increment() {
        setCouter(counter + 1);
    }

    return (
        <button
            type="button"
            style={{ backgroundColor: props.color }}
            onClick={increment}
        >
            <div>
                {props.children}
            </div>
            <div>
                <strong>{counter}</strong>
            </div>
        </button>
    )

}

