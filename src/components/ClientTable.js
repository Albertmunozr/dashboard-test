import React, { useState } from "react";
import { useGetUsersQuery } from "../features/services/tableUsers";

function ClientTable() {
  const [search, setSearch] = useState("");
  //const [select, setSelect] = useState({});
  const [list, setList] = useState([]);
  const { data, isError, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const handleSelectChange = (e) => {
    //setSelect(e.target.value);
    seleccion(e.target.value);
  };

  const filtrar = (term) => {
    let results = data.filter((element) => {
      if (
        element.username.toString().toLowerCase().includes(term.toLowerCase())
      )
        return element;
    });
    setList(results);
  };

  const seleccion = (sel) => {
    let results = data.filter((element) => {
      if (element.company.name === sel) return element;
    });
    setList(results);
  };

  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>
                User
                <div>
                  <input
                    name="Buscar"
                    type="text"
                    placeholder="Buscar por Username"
                    value={search}
                    onChange={handleChange}
                  />
                </div>
              </th>
              <th>Email</th>
              <th>Web</th>
              <th>
                Compañia
                <div>
                  <select
                    name="Select"
                    placeholder="Empresa.."
                    //value={select}
                    onChange={handleSelectChange}
                  >
                    <option>Todas</option>
                    {data.map((sel) => (
                      <option value={sel.company.name} key={sel.id}>
                        {sel.company.name}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </thead>

          {list.length === 0 ? (
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {list.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default ClientTable;
