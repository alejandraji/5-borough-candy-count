import fs from 'node:fs'

export default function getBoroughs() {
  const data = JSON.parse(fs.readFileSync("./data/candy.json"));
  // Calculated total candy
  const totalCandyByBorough = data.reduce((acc, person)=> {
    const {borough, candy_collected } = person;

    const total = candy_collected.reduce((sum, candy) => sum + candy.count, 0)
    acc[borough] = (acc[borough] || 0) + total;

    return acc;
  }, {});
  // Created a new object with name and total amount collected
  const newData = Object.entries(totalCandyByBorough).map(([borough, total_candy_collected]) => {
    return {
      name: borough,
      total_candy_collected
    };
  });
  // Sorted to descending order
  return newData.sort((a, b) => b.total_candy_collected - a.total_candy_collected);
}