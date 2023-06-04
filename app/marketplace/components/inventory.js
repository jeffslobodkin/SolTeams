// import necessary hooks and components
"use client"
import { useState, useEffect } from 'react';
import Card from './Card'; // assuming you have a Card component
import { useSession } from "next-auth/react";


function Inventory() {
  const [users, setUsers] = useState([]);
  const { data: session } = useSession();

  async function getUsers() {
    const response = await fetch('/api/auth/mongodb', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const text = await response.text(); 
    console.log(text) // Add this line
    const data = JSON.parse(text); // Parse the JSON data from the response text
    return data; // return the data
  }

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []); 

  console.log("Users: ", users);






  return (
    <div>
        {users.map(user => (
            <Card key={user._id} user={user} />
        ))}
    </div>
  );
}

export default Inventory;
