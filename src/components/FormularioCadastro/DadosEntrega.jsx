import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

export default function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="Cep"
        name="cep"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        name="endereco"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="Numero"
        name="numero"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        name="estado"
        margin="normal"
        variant="outlined"
      />
      <TextField
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        name="cidade"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
