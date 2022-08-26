import React, { useRef } from "react";

function NewPlayerForm() {
  let years = [];
  let d = new Date();
  let currentYear = d.getFullYear();

  for (let i = currentYear - 15; i > currentYear - 50; i--) {
    years.push(i);
  }

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
        <select>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default NewPlayerForm;
