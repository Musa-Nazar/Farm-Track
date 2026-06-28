function getWeekNumber(date = new Date()) {
  const startOfYear = new Date(`1/1/${date.getFullYear()}`);

  const diffInMilliseconds = date - startOfYear;

  const diffInDays = Math.floor(diffInMilliseconds / 86400000);

  const weekNumber = Math.floor(diffInDays / 7);

  return weekNumber;
}

function padForChart(arr) {
  if (typeof arr !== "object") return;
  const length = arr.length;
  const weekNumber = arr?.[0]
    ? parseInt(arr?.[0]?.week?.split(" ")?.[1])
    : getWeekNumber();
  const newArr = [...arr];
  for (let i = 0; i < 4; i++) {
    if (arr[i]) continue;
    newArr.unshift({
      week: `Week ${weekNumber > 1 ? weekNumber - i : weekNumber - i + 53}`,
      totalSales: 0,
      totalPurchase: 0,
    });
  }
  return newArr;
}

export default padForChart;
