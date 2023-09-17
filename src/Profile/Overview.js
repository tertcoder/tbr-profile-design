import profile from "../assets/Me.jpg";

function Overview() {
  return (
    <div className="profile__details--persInfo">
      <div className="profile-photo">
        <img src={profile} alt="user profile" />
        <div className="edit__photo--overlay">
          <span>Edit...</span>
        </div>
      </div>
      <div className="profile-info">
        <p className="name">Bon Tertius Tuyishimire</p>
        <p className="location">Bujumbura, Burundi</p>
        <button className="btn-more">More details</button>
      </div>
    </div>
  );
}

export default Overview;
