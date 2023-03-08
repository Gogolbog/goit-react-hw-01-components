import { TransactionRow } from "components/TransactionRow/TransactionRow";
import PropTypes from "prop-types";
import { TransTabel } from "./TransactionHistory.styled";


export const TransactionHistory = ({ transactions }) => {
    return (
        <TransTabel>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            <TransactionRow transactions={transactions} />
        </tbody>
</TransTabel>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}