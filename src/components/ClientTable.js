import React, { useState } from "react";
import { useGetUsersQuery } from "../features/services/tableUsers";

function ClientTable() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const { data, isError, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const handleSelectChange = (e) => {
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
      <div className="table w-full mt-8 bg-white m-2">
        <table className="border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="border border-slate-300">Nombre</th>
              <th className="border border-slate-300">
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
              <th className="border border-slate-300">Email</th>
              <th className="border border-slate-300">Web</th>
              <th className="border border-slate-300">
                Compañia
                <div>
                  <select
                    name="Select"
                    placeholder="Empresa.."
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
                  <td className="border border-slate-300 p-2">{user.name}</td>
                  <td className="border border-slate-300 p-2">
                    {user.username}
                  </td>
                  <td className="border border-slate-300 p-2">{user.email}</td>
                  <td className="border border-slate-300 p-2">
                    {user.website}
                  </td>
                  <td className="border border-slate-300 p-2">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {list.map((user) => (
                <tr key={user.id}>
                  <td className="border border-slate-300 p-2">{user.name}</td>
                  <td className="border border-slate-300 p-2">
                    {user.username}
                  </td>
                  <td className="border border-slate-300 p-2">{user.email}</td>
                  <td className="border border-slate-300 p-2">
                    {user.website}
                  </td>
                  <td className="border border-slate-300 p-2">
                    {user.company.name}
                  </td>
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
