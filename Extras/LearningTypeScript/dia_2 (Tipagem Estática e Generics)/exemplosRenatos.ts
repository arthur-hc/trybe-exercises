import axios from 'axios'

type Person = {
  name: string,
  height: string,
  mass: string,
}

type Planet = {
  name: string,
  rotation_period: string,
}

const getPlanet = async (id: number): Promise<Planet> => {
  const { data } = await axios.get<Planet>(`https://swapi.dev/api/planets/${id}`)
  return data
}

const getPeople = async (id: number): Promise<Person> => {
  const { data } = await axios.get<Person>(`https://swapi.dev/api/people/${id}`)
  return data;
}

const main = async (planetId: number, personId: number): Promise<void> => {
  const planet = await getPlanet(planetId)
  console.log(planet.name)

  const person = await getPeople(personId)
  console.log(person.name);
  
}

main(1, 1)
