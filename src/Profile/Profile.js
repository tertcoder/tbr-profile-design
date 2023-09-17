import "./ProfileStyles.css";
import Overview from "./Overview";
import History from "./History";

function Profile() {
  return (
    <div className="profile__container">
      <header>
        <h1 className="profile__headtext">Client</h1>
      </header>
      <div className="profile__details">
        <Overview />
        <History />
      </div>
    </div>
  );
}

export default Profile;
