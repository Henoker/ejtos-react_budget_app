//Budget app
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;
        if (!isNaN(inputValue) && inputValue <= budget) {
            setNewBudget(inputValue);
        } else {
            alert(`The value cannot exceed remaining funds £${budget}`);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
