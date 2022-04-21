export const people = [
  {
    id: "1",
    name: "Han",
    age: 29,
    gender: "female",
  },
  {
    id: "2",
    name: "Stark",
    age: 30,
    gender: "female",
  },
  {
    id: "3",
    name: "Robert",
    age: 25,
    gender: "female",
  },
  {
    id: "4",
    name: "Lil",
    age: 29,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
