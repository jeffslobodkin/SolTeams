import styles from './Card.module.css';

function Card({ user }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.label}>
        <span>Username: </span>
        <span className={styles.input}>{user.username}</span>
      </div>
      <div className={styles.label}>
        <span>Profile Picture: </span>
        <span className={styles.input}>{user.image}</span>
      </div>
      <div className={styles.label}>
        <span>Twitter: </span>
        <span className={styles.input}>{user.twitter}</span>
      </div>
      <div className={styles.label}>
        <span>Description: </span>
        <span className={styles.input}>{user.description}</span>
      </div>
      <div className={styles.label}>
        <span>Experience: </span>
        <div className={styles.barContainer}>
          {[1, 2, 3, 4, 5].map((section) => (
            <div
              key={section}
              className={`${styles.barSection} ${user.barValue >= section ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
