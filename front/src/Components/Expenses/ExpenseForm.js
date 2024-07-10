import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import { useAuthContext } from '../../hooks/useAuthContext';

function ExpenseForm() {
    const { addExpense, error, setError } = useGlobalContext();
    const { user } = useAuthContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',
        type: 'expense'
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value});
        setError('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await addExpense(inputState, user.token);
            setInputState({
                title: '',
                amount: '',
                date: null,
                category: '',
                description: '',
                type: 'expense'
            });
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            <h2>Add New Expense</h2>
            {error && <p className='error'>{error}</p>}
            
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input 
                    type="text" 
                    value={amount}
                    name={'amount'} 
                    placeholder="Expense Amount"
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setInputState({...inputState, date: date})}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea 
                    name="description" 
                    value={description} 
                    placeholder='Add A Reference' 
                    id="description" 
                    cols="30" 
                    rows="4" 
                    onChange={handleInput('description')}>
                </textarea>
            </div>
            <div className="submit-btn">
                <button type="submit">Add Expense</button>
            </div>
        </ExpenseFormStyled>
    );
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
    color: #ffffff;

    h2 {
        text-align: center;
        color: #000000;
        font-weight: bold;
    }

    .input-control {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        input, select, textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid ${props => props.theme.inputBorder};
            border-radius: 4px;
            font-size: 1rem;
            background-color: #ffffff;
            color: ${props => props.theme.text};
        }
        
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: ${props => props.theme.inputFocusBorder};
        }
    }

    .selects {
        select {
            height: 2.5rem;
        }
    }

    .submit-btn {
        display: flex;
        justify-content: center;
        
        button {
            padding: 0.5rem 2rem;
            border: none;
            border-radius: 4px;
            background: #ccc;
            color: #000000;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease;

            &:hover {
                background: #ccc;
            }
        }
    }

    .error {
        color: red;
        font-size: 0.875rem;
        text-align: center;
        margin-top: 1rem;
    }
`;

export default ExpenseForm;