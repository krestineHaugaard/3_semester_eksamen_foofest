export default function CampingOptions() {
  return (
    <form>
      <label htmlFor="preassembled_option">Preassembled tents</label>
      <input
        id="preassembled_option"
        type="radio"
        value="preassembled"
        name="camping_options"
      />
      <label htmlFor="shelter_option">Shelter</label>
      <input
        id="shelter_option"
        type="radio"
        value="shelter"
        name="camping_options"
      />
      <label htmlFor="no_exstras_option">No extras</label>
      <input
        id="no_exstras_option"
        type="radio"
        value="no exstras"
        name="camping_options"
      />
    </form>
  );
}
