export const Profile = () => {
  return (
    <div>
      <h1>Profile card Challenge</h1>
      <ProfileCard
        name="coder"
        age={23}
        greeting={
          <div>
            <strong>Het coder, keep up the great work!</strong>
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
      <p>Age: {props.age}</p>
      <p>{props.greeting}</p>
      <div>{props.children}</div>
    </>
  );
}

export default ProfileCard;
