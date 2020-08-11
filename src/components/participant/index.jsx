import React from 'react';

const Participants = ({ participants }) => {
  return (
    <div>
      Participants:
      {participants.map((participant, index) => {
        return (
          <div key={index}>
            <div>
              <span>{index + 1}. </span>
              Name: {participant.firstName} {participant.lastName}
            </div>
            <div>Email: {participant.email}</div>
            <div>Phone: {participant.phone}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Participants;
