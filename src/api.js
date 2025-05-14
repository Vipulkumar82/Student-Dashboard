import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 });

let students = [
  { id: 1, name: "Vipul", email: "Vipulkumar7422@gmail.com", course: "MCA" },
  { id: 2, name: "Vicky", email: "Vickykrsingh22@gmail.com", course: "MCA" },
];

mock.onGet("/students").reply(200, students);

mock.onPost("/students").reply(config => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = Date.now();
  students.push(newStudent);
  return [201, newStudent];
});

export default axiosInstance;

