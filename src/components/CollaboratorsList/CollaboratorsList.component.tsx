import React, { FunctionComponent, useState, useEffect } from "react";
import Modali, { useModali } from "modali";
import { ListTable } from "./CollaboratorsList.style";
import UserCard from "../UserCard";
import axios from "axios";
interface CollaboratorProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
}

const CollaboratorsList: FunctionComponent<{}> = () => {
  const [modal, toggleModal] = useModali({
    animated: true,
    large: true
  });

  const [collaborators, setCollaborators] = useState<CollaboratorProps[]>([]);
  useEffect(() => {
    getUsers();
  }, [collaborators]);

  const deleteUser = (id: number) => {
    axios.delete(`http://localhost:4000/users/${id}`);
  };

  const getUsers = async () => {
    const collaboratorsData = await axios.get(`http://localhost:4000/users`);
    const data: [] = collaboratorsData.data;

    setCollaborators(data);
    return data;
  };
  return (
    <>
      <ListTable>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>profile</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {collaborators &&
            collaborators.map(collaborator => (
              <tr key={collaborator.id}>
                <td>{collaborator.firstName}</td>
                <td>{collaborator.lastName}</td>
                <td>{collaborator.email}</td>
                <td>
                  <button onClick={toggleModal}>profile</button>

                  <Modali.Modal {...modal}>
                    <UserCard />
                  </Modali.Modal>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(collaborator.id);
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </ListTable>
    </>
  );
};

export default CollaboratorsList;
