const bcrypt = require("bcryptjs");
const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true,
  },
  {
    name: "admin1",
    email: "admin@xyz.com",
    password: bcrypt.hashSync("admin456", 10),
  },
  {
    name: "user",
    email: "user@xyz.com",
    password: bcrypt.hashSync("user123456", 10),
  },
];

module.exports = users;
