import { useState, useEffect } from 'react';
import Card from './Card';
import TeamCard from './TeamCard';
import { useSession } from "next-auth/react";
import styles from './inventory.module.scss';

function Inventory({ searchValue }) {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [displayTeams, setDisplayTeams] = useState(false);
  const { data: session } = useSession();

  async function getUsers() {
    const response = await fetch('/api/auth/mongodb/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const text = await response.text();
    const data = JSON.parse(text);
    return data;
  }

  async function getTeams() {
    const response = await fetch('/api/auth/mongodb/team', {
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
    });
    getTeams().then((teams) => {
      setTeams(teams);
    });
  }, []);

  const filteredUsers = users.filter(user => user.description.toLowerCase().includes(searchValue.toLowerCase()));
  const filteredTeams = teams.filter(team => team.description.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <button className={styles.toggle} onClick={() => setDisplayTeams(!displayTeams)}>
        {displayTeams ? "Show Users" : "Show Teams"}
      </button>
      <div className={styles.inventoryContainer}>
        {displayTeams ? (
          filteredTeams.map(team => (
            <div key={team._id} className={styles.cardWrapper}>
              <TeamCard team={team} />
            </div>
          ))
        ) : (
          filteredUsers.map(user => (
            <div key={user._id} className={styles.cardWrapper}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Inventory;
