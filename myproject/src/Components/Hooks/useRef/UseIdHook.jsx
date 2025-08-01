export const UseIdHook = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
