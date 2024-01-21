db.createUser
(
    {
      user: "admin",
      pwd: "password",
      roles: [
        {
          role: "readWrite",
          db: "polyteia-challenge-db"
        }
      ]
    }
);