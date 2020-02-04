import React, { FunctionComponent } from "react";
import { ListTable } from "./CollaboratorsList.style";

const users = [
  {
    id: 1,
    firstname: "India",
    lastname: "Dabon",
    email: "india.dabon@email.fr"
  },
  {
    id: 2,
    firstname: "Damien",
    lastname: "Saillard",
    email: "damien.saillard@email.fr"
  },
  {
    id: 3,
    firstname: "Malou",
    lastname: "Anglade",
    email: "malou.anglade@email.fr"
  },
  {
    id: 4,
    firstname: "Mohamed",
    lastname: "Aissaoui",
    email: "mohamed.aissaoui@email.fr"
  },
  {
    id: 5,
    firstname: "Céline",
    lastname: "Gonzalez",
    email: "celine.gonzalez@email.fr"
  },
  {
    id: 6,
    firstname: "Anas",
    lastname: "Derraz",
    email: "anas.derraz@email.fr"
  }
];

const CollaboratorsList: FunctionComponent<{}> = () => {
  return (
    <>
      <ListTable>
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>profile</th>
          </tr>
        </thead>

        <tbody>
          {/* {users.map(user => {
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>profile</td>
            </tr>;
          })} */}
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john.doe@email.fr</td>
            <td>profile icon</td>
          </tr>
        </tbody>
      </ListTable>
    </>
  );
};

export default CollaboratorsList;
