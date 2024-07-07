import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import History from '../History/History';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    
                    <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p className="income-amount">
                                {dollar} {totalIncome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expense</h2>
                            <p className="expense-amount">
                                {dollar} {totalExpenses()}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total Balance</h2>
                            <p className="balance-amount">
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                    </div>
                    <div className="chart-con">
                        <ChartWrapper>
                            <Chart />
                        </ChartWrapper>
                    </div>
                    <div className="history-con">
                        <History />
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .chart-con {
        grid-column: 1 / -1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh; /* Adjust the height as needed */
    }

    .amount-con {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 2rem;

        .income, .expense, .balance {
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;

            h2 {
                font-size: 1.6rem;
                margin-bottom: 0.5rem;
                color: #333;
            }

            p {
                font-size: 2.5rem;
                font-weight: 700;
                margin: 0;

                &.income-amount {
                    color: var(--color-green);
                }

                &.expense-amount {
                    color: red;
                }

                &.balance-amount {
                    color: #333;
                }
            }
        }
    }

    .history-con {
        grid-column: 1 / -1;
        background: #FCF6F9;
        border-radius: 20px;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
    }
`;

const ChartWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Dashboard;
