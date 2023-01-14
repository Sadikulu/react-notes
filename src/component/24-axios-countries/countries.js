import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadData = async () => {
    const resp = await axios.get("https://restcountries.com/v3.1/all");
    console.log(resp.data);
    setCountries(resp.data);
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Table striped bordered hover>
      {loading && <Spinner animation="border" variant="primary" />}
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Nüfus</th>
          <th>Başkent</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={country.cca3}>
            <td>{index + 1}</td>
            <td>
              <img src={country.flags.png} width="50px" />
            </td>
            <td>{country.name.common}</td>
            <td>{country.population}</td>
            <td>{country.capital}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default Countries;
