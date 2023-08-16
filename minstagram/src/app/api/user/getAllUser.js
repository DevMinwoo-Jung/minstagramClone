export default (req, res) => {
  // Simulate fetching user data
  const userData = { username: 'example_user' };
  res.status(200).json(userData);
};