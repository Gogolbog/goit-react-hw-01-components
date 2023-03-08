import { TabelRow } from "components/TransactionHistory/TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionRow = ({ transactions }) => {
    return (
        transactions.map(({ id, type, amount, currency }) => {
            return (
            <TabelRow key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </TabelRow> 
            )
        })
    )
}

TransactionRow.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        })
    )
}