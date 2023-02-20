import React from 'react';
import './griddb.css';

const Griddb: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Nuestros pancitos :V</h1>
        <table>
          <thead>
            <tr>
              <th><strong>Nombre</strong></th>
              <th><strong>Cantidad</strong></th>
              <th><strong>Horario</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bonette</td>
              <td>70</td>
              <td>16:00 - 20:00</td>
            </tr>
            <tr>
              <td>Oreja de pan dulce</td>
              <td>20</td>
              <td>16:00 - 20:00</td>
            </tr>
            <tr>
              <td>Crossaint</td>
              <td>60</td>
              <td>16:00 - 20:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Griddb;
