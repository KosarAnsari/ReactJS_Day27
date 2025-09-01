import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);
  const getUsersData = async () => {
    const url = 'https://dummyjson.com/users';
    let response = await fetch(url);
    response = await response.json();

    setUsersData(response.users);
  };

  return (
    <>
      <h1>Understanding API's</h1>
      <ul>
        <li>Application Programming Interface</li>
        <li>We need data from DB when making projects.</li>
        <li>But JS can not connect with Database,</li>
        <li>So we make API's in other language as Java,PHP, or node etc.</li>
      </ul>

      <h2>Shared Data with API </h2>
      <ul>
        <li>We need same data on multiple platforms</li>
        <li>Like web app,mobile app, windows etc.</li>
        <li>so we make API in one language.</li>
        <li>And use same api with all platforms.</li>
      </ul>

      <h2>Data Format</h2>
      <ul>
        <li>API use JSON Format.</li>
      </ul>

      <hr />
      <h2>API METHODS</h2>
      <ol>
        <li>GET : used for Fetching the API</li>
        <li>POST : used for storing an info/data in API</li>
        <li>PUT/PATCH : To Update data</li>
        <li>DELETE : To delete the data</li>
      </ol>
      <ul className="user-list-header">
        <li>FirstName</li>
        <li>LastName</li>
        <li>Age</li>
      </ul>
      {usersData &&
        usersData.map((user) => (
          <ul className="user-list">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))}
    </>
  );
}
export default App;
