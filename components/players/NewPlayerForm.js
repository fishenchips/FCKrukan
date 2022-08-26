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
      <div>
        <label>Position</label>
        {/* needs more precision, and able to choose serveral positions */}
        <select>
          <option value="goal-keeper">Målvakt</option>
          <option value="defender">Back</option>
          <option value="midfielder">Mittfält</option>
          <option value="striker">Anfall</option>
        </select>
      </div>
      <div>
        <label>Fot</label>
        <select>
          <option value="right">Höger</option>
          <option value="left">Vänster</option>
          <option value="both">Dubbelfotad</option>
        </select>
      </div>
      <div>
        <label>Moderklubb</label>
        <input type="text" />
      </div>
      <div>
        <button>Lägg till Spelare</button>
      </div>
    </form>
  );
}

export default NewPlayerForm;
