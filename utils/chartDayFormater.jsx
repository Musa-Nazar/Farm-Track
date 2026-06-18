function chartDayFormater(arr) {
  const format = [
    { day: 1, sales: 0 },
    { day: 2, sales: 0 },
    { day: 3, sales: 0 },
    { day: 4, sales: 0 },
    { day: 5, sales: 0 },
    { day: 6, sales: 0 },
    { day: 7, sales: 0 },
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const newArr = format.map((current) => {
    const itemFoundInNewArr = arr.find(
      (data) => parseInt(data?.day) === current?.day,
    );

    if (itemFoundInNewArr) return itemFoundInNewArr;

    return current;
  });

  return newArr.map((current) => ({ ...current, day: days[current.day - 1] }));
}

export default chartDayFormater;
