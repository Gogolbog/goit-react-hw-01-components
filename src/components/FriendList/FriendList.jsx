import { FriendItem } from "components/Frienditem/FriendItem";
import PropTypes from "prop-types";
import { Container } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    return (<Container>
        <FriendItem friends={friends}/>
    </Container>)
}

FriendList.propTypes = {
    friends: PropTypes.array,
}