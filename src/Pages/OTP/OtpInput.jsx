import styles from "./optStyle";

function OtpInput({ id, name, moveToNext, deletePrev, handleChange }) {
  // HANDLE INPUT
  function handleInput(e) {
    if (e.data === "e" || e.data === "-" || e.target.value.length === 1) {
      e.preventDefault();
    }
  }
  const xml = (
    <input
      type="number"
      name={name}
      onBeforeInput={handleInput}
      required
      onChange={handleChange}
      maxLength={1}
      onInput={moveToNext}
      onKeyDown={deletePrev}
      id={id}
      className={`${styles.otpInput}`}
    />
  );
  return xml;
}

export default OtpInput;
