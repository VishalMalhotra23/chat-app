const users = [];

const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  //validate the data
  if (!username || !room) {
    return {
      error: `Username and Room are required`,
    };
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: "Username already in use",
    };
  }

  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    //remove and return the matched user
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

// addUser({
//   id: 22,
//   username: "hf",
//   room: "qwerty",
// });
// console.log(users);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
