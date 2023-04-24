import PropTypes from 'prop-types';
import { TransactionItem } from '../TransactionItem/TransactionItem.jsx';
import {Table, Head, Row} from './Transactions.styled'

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Row>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </Row>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
