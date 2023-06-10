"use client"

import { useState, useEffect } from 'react';
import Card from './Card';
import { useSession } from "next-auth/react";
import styles from './inventory.module.scss';

function Inventory({ searchValue }) {
  const [users, setUsers] = useState([]);
  //const [filteredUsers, setFilteredUsers] = useState([]);
  const { data: session } = useSession();

  async function getUsers() {
    const response = await fetch('/api/auth/mongodb', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const text = await response.text();
    const data = JSON.parse(text);
    return data;
  }

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      //setFilteredUsers(users);
    });
  }, []);

  // useEffect(() => {
  //   if(searchValue === "") {
  //     setFilteredUsers(users);
  //   } else {
  //     setFilteredUsers(users.filter(user => user.description.toLowerCase().includes(searchValue.toLowerCase())));
  //   }
  // }, [searchValue, users]);

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  const filteredUsers = users.filter(user => user.description.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      {/* <input 
        type="text" 
        className={styles.searchBar}
        value={searchValue} 
        onChange={handleSearchChange} 
        placeholder="Search by description..." 
      /> */}
      <div className={styles.inventoryContainer}>
      {filteredUsers.map(user => (
        <div key={user._id} className={styles.cardWrapper}>
          <Card user={user} />
        </div>
      ))}
      </div>
    </div>
  );
}
export default Inventory;
