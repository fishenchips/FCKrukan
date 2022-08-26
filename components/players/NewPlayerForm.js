import React, { useRef } from "react";

function NewPlayerForm() {
  return (
    <form>
      <div>
        <label>Förnamn</label>
        <input type="text" />
      </div>
      <div>
        <label>Efternamn</label>
        <input type="text" />
      </div>
      <div>
        <label>Bild</label>
        <input type="file" />
      </div>
      <div>
        <label>Födelseår</label>
        <select></select>
      </div>
    </form>
  );
}

export default NewPlayerForm;
