import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Nikki";
  const age = 22;

  return (
    <div className="user-profile">
      <h1>User Profile</h1>

      {/* Passing props to child */}
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
