import React from 'react';
import ReactDOM from 'react-dom';
import Garage from './App.js';

const myelement = (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John {5 + 6}</td>
      </tr>
      <tr>
        <td>
          <Garage />
        </td>
      </tr>
    </tbody>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root'));
