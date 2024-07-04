import fs from 'node:fs'

export default function getBoroughs() {
  const data = JSON.parse(fs.readFileSync("./data/candy.json"));
  // Calculated total candy
  const totalCandyAndPeopleByBorough = data.reduce((acc, person)=> {
    const {borough, candy_collected } = person;

    acc[borough] ||= {
      total_candy_collected: 0,
      people: []
    }

    acc[borough].total_candy_collected = candy_collected.reduce((sum, candy) => sum + candy.count, acc[borough].total_candy_collected)
    acc[borough].people = [person, ...acc[borough].people];


    return acc;
  }, {});
  // Created a new object with name and total amount collected
  const newData = Object.entries(totalCandyAndPeopleByBorough).map(([borough, { total_candy_collected, people }]) => {
    return {
      name: borough,
      total_candy_collected,
      people
    };
  });
  // Sorted to descending order
  return newData.sort((a, b) => b.total_candy_collected - a.total_candy_collected);
}