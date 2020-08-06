import React, { Component, Fragment } from 'react';
import Title from '../../components/title';
import styles from './team-page.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import team from '../../helpers/team-list';
import Member from '../../components/teamMember';

class TeamPage extends Component {
  teamMembers = team;

  render() {
    return (
      <Fragment>
        <Header />
        <section className={styles.background}>
          <Title title='Our Team' />
          <h4>Meet our leadership team</h4>
        </section>
        <section className={styles.team}>
          <ul>
            {this.teamMembers.map((member, index) => {
              return (
                <li key={index} className={styles.list}>
                  <Member
                    key={member.name}
                    name={member.name}
                    image={member.image}
                    description={member.description}
                  />
                </li>
              );
            })}
          </ul>
        </section>

        <Footer />
      </Fragment>
    );
  }
}

export default TeamPage;
