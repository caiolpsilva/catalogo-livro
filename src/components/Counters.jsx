function Counters({ total, filtered }) {
  return (
    <div className="counters">
      <p id="total-count">
        <strong>Total:</strong> {total}
      </p>
      <p id="filtered-count">
        <strong>Filtrados:</strong> {filtered}
      </p>
    </div>
  );
}

export default Counters;