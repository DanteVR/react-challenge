const data = [
  { day: 'a', value: 3 },
  { day: 'b', value: 2 },
  { day: 'c', value: 1 },
  { day: 'd', value: 5 },
  { day: 'e', value: 4.9 },
  { day: 'f', value: 6 },
  { day: 'g', value: 7 },
];

export const config = {
  data,
  height: 200,
  xField: 'day',
  yField: 'value',
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  minColumnWidth: 20,
  maxColumnWidth: 20,
};
