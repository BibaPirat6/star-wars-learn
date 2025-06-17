import React, { useEffect, useState } from "react";
import { API_PEOPLE } from "../../constants/api";
import { getApiData } from "../../utils/network";
import { styles } from "./PeoplePage.module.css";
import { getPeopleId } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

export default function PeoplePage() {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiData(url);
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);

      return {
        id: id,
        name: name,
        url: url,
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);


  function importAll(r) {
    return r.keys().reduce((acc, key) => {
      const id = key.match(/\.\/(\d+)\.jpg$/)[1];
      acc[id] = r(key);
      return acc;
    }, {});
  }

  const images = importAll(require.context('../../assets/images/characters/', false, /\.jpg$/));


  var number = function (busStops) {
    // Good Luck!
    let go = 0;
    for (let i = 0; i < busStops.length; i++) {
      go = go + busStops[0] - busStops[1]
      console.log(busStops[0]);
    }
    return go
  }

  console.log(number([[10, 0], [3, 5], [5, 8]]));

  return (
    <>
      {people && <PeopleList images={images} people={people} />}
    </>
  );
}
