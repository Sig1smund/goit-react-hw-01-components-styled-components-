import PropTypes from 'prop-types';
import {Row, Data} from './TransacrionItem.styled'

export function TransactionItem({ type, amount, currency }) {
  return (
    <Row>
      <Data>{type}</Data>
      <Data>{amount}</Data>
      <Data>{currency}</Data>
    </Row>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
