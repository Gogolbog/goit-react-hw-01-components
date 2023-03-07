import PropTypes from "prop-types";
import { Avatar, AvatarWrapper, Container, StatsLists } from "./profile.styled";


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<Container>
        <AvatarWrapper>
            <Avatar
                src={avatar}
                alt="User avatar"                
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </AvatarWrapper>

        <StatsLists>
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </StatsLists>
    </Container>)
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
}
