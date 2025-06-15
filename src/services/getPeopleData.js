import { HTTP, PEOPLE, API } from "../constants/api";

const getId = (url, category) => {
  const splitUrl = url.split("/");
  const id = splitUrl[splitUrl.length - 2];
  return id;
};

export const getPeopleId = (url) => getId(url, PEOPLE);
