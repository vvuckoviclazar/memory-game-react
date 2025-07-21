import { useState } from "react";

function Li({ img, name }) {
  return (
    <li>
      <img src={img} alt={name} className="character-img" />
      <h3 className="character-name">{name}</h3>
    </li>
  );
}

export default Li;
