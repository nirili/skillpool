import React, { FunctionComponent } from "react";
import Modali, { useModali } from "modali";
import { ListTable } from "./CollaboratorsList.style";
import UserCard from "../UserCard";

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
}

const users = [
  {
    id: 1,
    firstName: "India",
    lastName: "Dabon",
    email: "india.dabon@email.fr"
  },
  {
    id: 2,
    firstName: "Damien",
    lastName: "Saillard",
    email: "damien.saillard@email.fr"
  },
  {
    id: 3,
    firstName: "Malou",
    lastName: "Anglade",
    email: "malou.anglade@email.fr"
  },
  {
    id: 4,
    firstName: "Mohamed",
    lastName: "Aissaoui",
    email: "mohamed.aissaoui@email.fr"
  },
  {
    id: 5,
    firstName: "Céline",
    lastName: "Gonzalez",
    email: "celine.gonzalez@email.fr"
  },
  {
    id: 6,
    firstName: "Anas",
    lastName: "Derraz",
    email: "anas.derraz@email.fr"
  },
  {
    id: 7,
    firstName: "Soukaina",
    lastName: "Kamel",
    email: "soukaina.kamel@email.fr"
  },
  {
    id: 8,
    firstName: "Alexandre",
    lastName: "Hachim",
    email: "alexandre.hachim@email.fr"
  },
  {
    id: 9,
    firstName: "Kevin",
    lastName: "Lefranc",
    email: "kevin.lefranc@email.fr"
  },
  {
    id: 10,
    firstName: "Antoine",
    lastName: "Guittet",
    email: "antoine.guittet@email.fr"
  }
];

const CollaboratorsList: FunctionComponent<{}> = () => {
  const [modal, toggleModal] = useModali({
    animated: true,
    large: true
  });
  return (
    <>
      <ListTable>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>profile</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={toggleModal}>profile</button>

                <Modali.Modal {...modal}>
                  <UserCard />
                </Modali.Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </ListTable>
    </>
  );
};

export default CollaboratorsList;
