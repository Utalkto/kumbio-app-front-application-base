import { CreateClient } from "@/components/client/CreateClient";
import { Container } from "@mui/material";
import React from "react";

const CreateClientPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 2, display: "flex", flexDirection: "row", gap: 2 }}
    >
      <CreateClient />
    </Container>
  );
};

export default CreateClientPage;
