import { Status } from "components/FriendList/FriendList.styled";
import PropTypes from "prop-types";

export const FriendItem = ({friends}) => {
    return (
        friends.map(({ avatar, name, isOnline, id }) => {
            return (
    <li key={id}>
    <Status isActive={isOnline}></Status>
    <img  src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
    </li>)})
    )
}


FriendItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}