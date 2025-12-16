function UserInfo(props) {
  return (
    <div className="user-info">
      <h2>User Information</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserInfo;
