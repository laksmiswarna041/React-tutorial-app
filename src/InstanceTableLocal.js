import React from 'react';
import instancesData from './ec2.json';
import './style.css';

const InstanceTableLocal = () => {
  const instances = instancesData.instances;

  return (
    <table className='table'>
      <thead className='table-container'>
        <tr>
          <th>Type</th>
          <th>vCPUs</th>
          <th>RAM (GiB)</th>
          <th>On-Demand Price (Linux)</th>
        </tr>
      </thead>
      <tbody>
        {instances.map((instance, index) => (
          <tr key={index}>
            <td>{instance.type}</td>
            <td>{instance.vCPUs}</td>
            <td>{instance["RAM (GiB)"]}</td>
            <td>{instance["On-Demand Price (Linux)"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InstanceTableLocal;
