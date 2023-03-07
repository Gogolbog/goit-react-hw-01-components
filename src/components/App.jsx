import { Profile } from "./Profile/profile";
import user from "../user.json"

export const App = () => {
  return (
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  );
};