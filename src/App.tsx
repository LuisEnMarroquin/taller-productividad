import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

function App() {
  const [chats, setChats] = useState<string[]>([]);

  const [name, setName] = useState("");
  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("xd", event.target.value);
    setChats((current) => [...current, name]);
    setName("");
  };

  return (
    <Container>
      <Box component="h1" sx={{ textAlign: "center" }}>
        Mini aplicación de notas
      </Box>
      <Box sx={{ py: "10px" }}>
        <ul>
          {chats.map((value, index) => (
            <Box component="li" key={index}>
              {value}
            </Box>
          ))}
        </ul>
      </Box>
      <Box sx={{ py: "20px" }}>
        <TextField
          fullWidth
          label="Mensaje"
          variant="outlined"
          value={name}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ py: "20px", textAlign: "center" }}>
        <Button variant="contained" onClick={handleSubmit}>
          Guardar
        </Button>
      </Box>
    </Container>
  );
}

export default App;
