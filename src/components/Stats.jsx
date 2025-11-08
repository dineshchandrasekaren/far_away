const Stats = ({ totalLength, totalPacked }) => {
  // console.log(stats);

  const percentage = totalLength === 0 ? 0 : (totalPacked / totalLength) * 100;
  console.log({ percentage, totalLength, totalPacked });

  return (
    <div className="stats">
      {totalLength === 0
        ? "Start adding some items to your packing list 🚀"
        : percentage < 100
        ? `💼 You have ${totalLength} items on your list, and you already packed ${totalPacked} (${percentage}%)`
        : "You got everything! Ready to go ✈️"}
    </div>
  );
};

export default Stats;
