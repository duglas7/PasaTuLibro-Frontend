import React from "react";

const Table = () => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Telefono</th>
          <th scope="col">Direccion</th>
          <th scope="col">Contraseña</th>
          <th scope="col">Perfil</th>
          <th scope="col">Select</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Duglas Medina</td>
          <td>Duglasmedina@gmail.com</td>
          <td>+5691111111</td>
          <td>Santiago, Chile</td>
          <td>************</td>
          <td>User</td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Yessenia</td>
          <td>Yessenia@gmail.com</td>
          <td>+569115511</td>
          <td>Las condes, Chile</td>
          <td>************</td>
          <td>Admin</td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cristian Alvarez</td>
          <td>Cristianalvarez@gmail.com</td>
          <td>+569111133311</td>
          <td>Santiago, Chile</td>
          <td>************</td>
          <td>Admin</td>
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
