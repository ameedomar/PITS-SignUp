import { useEffect, useState } from "react";
import "./styling.css";

export default function University() {
  var r = [
    {
      name: "ameed",
    },
    {
      name: "moath",
    },
  ];
  const [universitiesList, setUniversitiesList] = useState([]);
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        return response.json();
      })
      .then((universitiesList) => {
        setUniversitiesList(universitiesList);
        console.log(r);
      });
  }, []);
  return (
    <div>
      <table id="customers">
        <tr>
          <th>University name</th>
          <th>Country</th>
          <th>alpha_two_code</th>
          <th>number of domains</th>
        </tr>
        {universitiesList.slice(0, 20).map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.country}</td>
              <td>{item.alpha_two_code}</td>
              <td>{item.domains.length}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
