import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Header = styled.h1`
  color: #007f00; /* Verde escuro */
  margin-bottom: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ffd700; /* Amarelo dourado */
    color: #007f00; /* Verde escuro */
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const DataContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: ${(props) => (props.primary ? "#007f00" : "#ffd700")};
  color: ${(props) => (props.primary ? "#fff" : "#007f00")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    color: #fff;
  }
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
`;

const ItemDetails = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 5px;
    padding: 10px 15px;
    background-color: ${(props) => (props.primary ? "#007f00" : "#ffd700")};
    color: ${(props) => (props.primary ? "#fff" : "#007f00")};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      color: #fff;
    }
  }
`;

function DataManager() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({});
  const [editData, setEditData] = useState({});
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const fetchData = useCallback(async () => {
    if (!token) return;
    try {
      const response = await axios.get("http://localhost:3001/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fetchedData = response.data.items;
      if (Array.isArray(fetchedData)) {
        setData(fetchedData);
      } else {
        console.error("Os dados retornados não são um array");
        setData([]);
      }
    } catch (error) {
      console.error(
        "Erro ao buscar dados:",
        error.response ? error.response.data : error.message
      );
    }
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [token, fetchData]);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      setAuthError("");
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error.response ? error.response.data : error.message
      );
      setAuthError("Login falhou. Verifique suas credenciais.");
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:3001/", newData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (error) {
      console.error(
        "Erro ao criar:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleUpdate = async () => {
    if (!editData.id) {
      console.error("ID do registro não encontrado para atualização");
      return;
    }

    try {
      await axios.put(`http://localhost:3001/${editData.id}`, editData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (error) {
      console.error(
        "Erro ao atualizar:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (error) {
      console.error(
        "Erro ao deletar:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Header>Gerenciador de Dados</Header>

      {!token ? (
        <LoginContainer>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {authError && <p>{authError}</p>}
        </LoginContainer>
      ) : (
        <DataContainer>
          <Button primary onClick={handleLogout}>
            Logout
          </Button>

          <div>
            <h2>Criar Novo Registro</h2>
            <input
              type="text"
              placeholder="Novo dado"
              name="data"
              onChange={(e) =>
                setNewData({ ...newData, [e.target.name]: e.target.value })
              }
            />
            <Button onClick={handleCreate}>Criar</Button>
          </div>

          <div>
            <h2>Editar Registro</h2>
            <input
              type="text"
              placeholder="Produto"
              name="Produtos"
              value={editData.Produtos || ""}
              onChange={(e) =>
                setEditData({ ...editData, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Outros Estados p/kg"
              name="Outros Estados p/kg"
              value={editData["Outros Estados p/kg"] || ""}
              onChange={(e) =>
                setEditData({ ...editData, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Em SP p/kg"
              name="Em SP p/kg"
              value={editData["Em SP p/kg"] || ""}
              onChange={(e) =>
                setEditData({ ...editData, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Em SP - Simples Nacional"
              name="Em SP -\r\nSimples Nacional"
              value={editData["Em SP -\r\nSimples Nacional"] || ""}
              onChange={(e) =>
                setEditData({ ...editData, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Embalagem"
              name="Embalagem"
              value={editData.Embalagem || ""}
              onChange={(e) =>
                setEditData({ ...editData, [e.target.name]: e.target.value })
              }
            />
            <Button onClick={handleUpdate}>Atualizar</Button>
          </div>

          <List>
            {currentItems.map((item) => (
              <ListItem
                key={item.id}
                onClick={() =>
                  setExpandedItemId(expandedItemId === item.id ? null : item.id)
                }
              >
                <span>{item.Produtos}</span>
                <div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditData(item);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item.id);
                    }}
                  >
                    Excluir
                  </Button>
                </div>
                <ItemDetails visible={expandedItemId === item.id}>
                  <p>Outros Estados p/kg: {item["Outros Estados p/kg"]}</p>
                  <p>Em SP p/kg: {item["Em SP p/kg"]}</p>
                  <p>
                    Em SP - Simples Nacional:{" "}
                    {item["Em SP -\r\nSimples Nacional"]}
                  </p>
                  <p>Embalagem: {item.Embalagem}</p>
                </ItemDetails>
              </ListItem>
            ))}
          </List>

          <Pagination>
            <PaginationControls>
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Anterior
              </button>
              {Array.from(
                { length: endPage - startPage + 1 },
                (_, i) => startPage + i
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  style={{
                    backgroundColor:
                      currentPage === page ? "#007f00" : "#ffd700",
                    color: currentPage === page ? "#fff" : "#007f00",
                  }}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Próximo
              </button>
            </PaginationControls>
          </Pagination>
        </DataContainer>
      )}
    </Container>
  );
}

export default DataManager;
