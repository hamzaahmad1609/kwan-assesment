import React, { useState, useEffect } from 'react';
import useDebounce from '../customHooks/useDebounce.hook';


const DebouncedInput = (props: { action: (val: string) => void }) => {
    const { action } = props;
    const [inputValue, setInputValue] = useState<string>('');
    const debouncedValue = useDebounce(inputValue, 500);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        action(debouncedValue);
    }, [debouncedValue]);

    return (
        <div>
            <input className='input' type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
};

export default DebouncedInput;