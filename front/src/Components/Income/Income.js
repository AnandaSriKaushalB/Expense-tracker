import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        getIncomes();
    }, [getIncomes]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredIncomes = selectedCategory === 'All'
        ? incomes.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4)
        : incomes.filter(income => income.category === selectedCategory);

    const totalCategoryIncome = filteredIncomes.reduce((acc, income) => acc + income.amount, 0);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1><b>Incomes</b></h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        <div className="category-filter">
                        
                            <label htmlFor="category">Filter by Category:</label>
                            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="All">All</option>
                                {Array.from(new Set(incomes.map(income => income.category))).map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        {selectedCategory !== 'All' && (
                            <h2 className="category-total">Total {selectedCategory} Income: <span>${totalCategoryIncome.toFixed(2)}</span></h2>
                        )}
                        {filteredIncomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteIncome}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    color: #fff; 
    background-color: linear-gradient(#ff4e50, #f9d423); 
    padding: 2rem;

    h1 {
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        background: #ffffff; 
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        padding: 1rem;
        font-size: 2rem;
        gap: .5rem;
        margin-bottom: 1rem;

        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: #28a745; /* Green text color */
        }
    }

    .income-content {
    
        gap: 2rem;
        width: 100%;

        .form-container {
            flex: 1;
        }

        .incomes {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .category-filter {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 2rem;

                label {
                    margin-right: 0.5rem;
                    color: #ffffff; /* Light text color */
                }

                select {
                    padding: 0.5rem;
                    border: 1px solid #777; /* Darker border */
                    border-radius: 5px;
                    background-color: #ffffff; /* Darker background */
                    color: #000000; /* White text color */

                    option {
                        background-color: #ffffff; /* Darker background */
                        color: #000000; /* White text color */
                    }
                }
            }

            .category-total {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: #555; /* Darker background */
                border: 2px solid #777; /* Darker border */
                border-radius: 10px;
                padding: 0.5rem;
                font-size: 1.5rem;
                gap: .5rem;
                margin-bottom: 1rem;

                span {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #28a745; /* Green text color */
                }
            }
        }
    }
`;

export default Income;
