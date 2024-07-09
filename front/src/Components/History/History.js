import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext();

    const [...history] = transactionHistory();

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p style={{ color: type === 'expense' ? '#dc3545' : '#28a745' }}>
                            {title}
                        </p>
                        <p style={{ color: type === 'expense' ? '#dc3545' : '#28a745' }}>
                            {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </HistoryStyled>
    );
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        text-align: center;
        font-weight: bold;
        color: #000000; 
    }

    .history-item {
        background-color: #ffffff; 
        border: 2px solid #ffffff; 
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5); 
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin: 0;
            font-size: 1rem;
        }
    }

    .history-item p:first-child {
        flex: 1;
    }

    .history-item p:last-child {
        margin-left: 1rem;
    }
`;

export default History;
