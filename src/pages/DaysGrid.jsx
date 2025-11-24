
const totalDays = 10958;      // 30 years
const livedDays = 7934;       // days lived until Oct 22, 2025

export default function DaysGrid() {
  const days = Array.from({ length: totalDays }, (_, i) => i < livedDays);

  return (
    <div className="container">
      {days.map((lived, index) => (
        <div
          key={index}
          className={`day ${lived ? "lived" : ""}`}
        ></div>
      ))}
    </div>
  );
}
