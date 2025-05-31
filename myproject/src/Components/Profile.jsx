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

function ProfileCard({img, name, age, greeting,children}) {
  return (
    <>
      <img src={img} alt="Profile" />
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}

export default ProfileCard;
