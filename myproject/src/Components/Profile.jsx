export const Profile = () => {
  return (
    <div>
      <h1>Profile card Challenge</h1>
      <ProfileCard
        name="coder"
        age={23}
        img = "images/profile.jpg"
        greeting={
          <div>
            <strong>Hey! coder, keep up the great work!</strong>
            <p>Welcome to the coding world!</p>
            <p>Keep learning and growing!</p>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};

function ProfileCard(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <img src={props.img} alt="Profile" />
      <p>Age: {props.age}</p>
      <p>{props.greeting}</p>
      <div>{props.children}</div>
    </>
  );
}

export default ProfileCard;
