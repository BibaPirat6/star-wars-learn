import React, { useEffect, useState } from "react";
import { API_PEOPLE } from "../../constants/api";
import { getApiData } from "../../utils/network";
import { styles } from "./PeoplePage.module.css";
import { getPeopleId } from "../../services/getPeopleData";

export default function PeoplePage() {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiData(url);
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      console.log(id)

      return {
        name: name,
        url: url,
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);  
  }, []);

  console.log(1)

  return (
    <>
      <ul>
        {people &&
          people.map(({ name, url }) => (
            <li key={url}>
              {name} {url}
            </li>
          ))}
      </ul>
    </>
  );
}
