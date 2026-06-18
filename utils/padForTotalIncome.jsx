function padForTotalIncome(arr) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const arrLength = arr?.length;
  const curMonthIndex =
    months?.indexOf(arr?.[0]?.month) !== -1
      ? months?.indexOf(arr?.[0]?.month)
      : months?.indexOf(new Date().toLocaleString("en-US", { month: "short" }));
  console.log(curMonthIndex);
  const pad = 6 - arrLength;
  const newArr = [...arr];
  for (let i = 0; i < pad; i++) {
    newArr?.unshift({
      month:
        curMonthIndex - (i + 1) >= 0
          ? months[curMonthIndex - (i + 1)]
          : months[curMonthIndex - (i + 1) + 12],
      totalIncome: 0,
    });
  }

  return newArr;
}

export default padForTotalIncome;
