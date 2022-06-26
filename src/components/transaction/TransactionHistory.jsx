import PropTypes from 'prop-types';
import {TransactionsTable, TableHead, TableBody, TableRaw, HeadCell, TableData} from './TransactionHistory.styled';
import transactions from 'data/transactions.json';

export const TransactionHistory = () => {
    return (
    <TransactionsTable>
      <TableHead>
        <TableRaw>
        <HeadCell>Type</HeadCell>
        <HeadCell>Amount</HeadCell>
        <HeadCell>Currency</HeadCell>
        </TableRaw>
      </TableHead>
      <TableBody transactions={transactions}>
        {transactions.map(({id, type, amount, currency}) =>
        <TableRaw key={id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
        </TableRaw>
       )}
      </TableBody>
    </TransactionsTable>
    )
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
  )
};
