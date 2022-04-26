import React from "react";

const Card = ({ place }) => {
  return (
    <div className="card">
      <h1>
        {place.name}
        <br />
        {place.username}
      </h1>
      <p>
        {place.street} <br />
        {place.suite} <br />
        {place.city}
      </p>
      <h2>{place.email}</h2>
      <h2>{place.phone}</h2>
      <h4>
        company: <br />
        {place.company.name}
        <br /> {place.company.bs}
      </h4>
    </div>
  );
};

export default Card;
