import React from 'react';
import styles from './index.module.css';
import UserContext from '../../Context';
import userLogo from '../../images/hiker-logo-removebg-preview.png';

class AsideProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      adventuresNum: this.props.number,
      typeUser: 'Regular User',
    };
  }

  getTypeUser = (number) => {
    let result = 'Regular User';

    if (number >= 3) {
      result = 'Golden User';
    } else if (number >= 1) {
      result = 'Silver User';
    }
    return result;
  };

  static contextType = UserContext;

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        username: this.props.username,
        adventuresNum: this.props.number,
        typeUser: this.getTypeUser(this.props.number),
      });
    }
  }

  render() {
    const { username, adventuresNum, typeUser } = this.state;

    return (
      <aside className={styles.aside}>
        <div className={styles.box}>
          <section>
            <h2>My Profile</h2>
            <div>
              <strong>Username: </strong>
              {username}
            </div>
            <div>
              <strong>Total number of your adventures: </strong>
              {adventuresNum}
            </div>
            <div className={styles.typeUser}>
              <strong> Your Rang: </strong>
              <span>{typeUser}</span>
            </div>
            <div className={styles.image}>
              <img src={userLogo} alt='Ups' />
            </div>
            <p>
              Your Rang depends on the number of your adventures. When you
              achieve "Silver" or "Golden" User Rang you become a part of our
              community and have access to many discounts and bonuses.
            </p>
          </section>
        </div>
      </aside>
    );
  }
}

export default AsideProfile;
