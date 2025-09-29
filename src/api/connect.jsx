import { useState } from "react";

const Fetch = () => {
  const baseurl = "https://dummyjson.com/users";
  const [data, setData] = useState([]);
  const getUsers = () => {
    fetch(baseurl)
      .then((res) => res.json())
      .then((json) => {
        console.log("Users:", json.users);
        setData(json.users); // store all users
      })
      .catch((err) => console.error(err));
  };

  const addUser = () => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 31,
        firstName: "Karthic",
        lastName: "Nandakumar",
        phone: "+91-9876543210",
        image: "https://i.pravatar.cc/150?img=12",
      }),
    })
      .then((res) => res.json())
      .then((newUser) => {
        console.log("Added:", newUser);
        setData((prev) => [...prev, newUser]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <center>
      <h1>Welcome to Api Interaction!!!</h1>
      <button onClick={getUsers}>Get Users</button>
      <button onClick={addUser}>Add User</button>

      <table border="1" cellPadding="6" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{user?.firstName}</td>
              <td>{user?.lastName}</td>
              <td>{user?.phone}</td>
              <td>
                <img src={user?.image} alt={user?.firstName} width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default Fetch;