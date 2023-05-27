import React from "react";
import { useParams } from "react-router-dom";

function TeamMember({ teamMembers }) {
  const { id } = useParams();
  const teamMember = teamMembers.find((member) => member.id === parseInt(id));

  if (!teamMember) {
    return <div>Team member not found!</div>;
  }

  return (
    <div>
      <h2>{teamMember.name}</h2>
      <p>
        <strong>Position:</strong> {teamMember.position}
      </p>
      <p>{teamMember.bio}</p>
    </div>
  );
}

export default TeamMember;
