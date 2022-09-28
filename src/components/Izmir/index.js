import React, { useState, useEffect } from "react";
import { Col, Table } from "reactstrap";

export default function IstanbulList() {
  const [istPharmacies, setIstPharmacies] = useState([]);
  useEffect(() => {
    fetch("https://api.collectapi.com/health/dutyPharmacy?il=İzmir", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "apikey 6jxjrjABUNG4MGaCOR0bF4:4sp9jwrOr5IN3oxvfgzq9u",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setIstPharmacies(data.result);
      });
  }, []);

  return (
    <Col md={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
      <div className="wrapper">
        <Table striped>
          <thead>
            <tr>
              <th>District</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {istPharmacies.map((item, i) => (
              <tr key={i}>
                <td className="district">{item.dist}</td>
                <td className="name">{item.name}</td>
                <td className="address">{item.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
}
