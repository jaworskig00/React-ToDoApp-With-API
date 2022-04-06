import axios from "axios";

/*const token = localStorage.getItem("token");
  moj token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzMmE0NzcxNjFhZDAwMTc3ZDJiM2IiLCJpYXQiOjE2NDc1MjAzMjd9.vJC6TgD-_DHjUeGGn1PN1qgRj6wR4QUU5evP1h9Drb0";*/

export const privateApi = (token) => axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com/",
  headers: { Authorization: "Bearer " + token },
});

export const publicApi = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com/",
});
