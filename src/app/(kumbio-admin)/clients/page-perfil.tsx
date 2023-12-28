import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createDataT(
  id,
  fecha,
  serv_suministrados,
  profesional,
  estado_cita,
  estado_pago,
  pendiente_pagar,
  monto_adecuado,
  pagado
) {
  return {
    id,
    fecha,
    serv_suministrados,
    profesional,
    estado_cita,
    estado_pago,
    pendiente_pagar,
    monto_adecuado,
    pagado,
  };
}

const rows = [
  createDataT(
    "1",
    "10/10/2021",
    "cita medica",
    "Si",
    "Por realizar",
    "Pendiente",
    "100$",
    "100.99",
    "0"
  ),
  createDataT(
    "2",
    "11/11/2021",
    "cita dental",
    "No",
    "Realizado",
    "Completado",
    "200$",
    "200.99",
    "1"
  ),
  createDataT(
    "3",
    "12/12/2021",
    "examen fisico",
    "Si",
    "Por realizar",
    "Pendiente",
    "300$",
    "300.99",
    "0"
  ),
];

const ClientsPage = () => {
  // const [value, setValue] = React.useState(0);
  var value = 0;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // setValue(newValue);
  };
  return (
    <>
      <Container>
        <h1>Clientes</h1>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <Card>
              <CardContent>
                <Grid container justifyContent="center">
                  <Button variant="contained" endIcon={<AddIcon />}>
                    Nuevo
                  </Button>
                </Grid>

                {/* <Typography variant="h5" component="div">
                  Card 1
                </Typography> */}
                {/* <TextField
                  id="outlined-basic"
                  label="Buscar"
                  variant="outlined"
                  size="small"
                /> */}
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <SearchIcon sx={{ color: "action.active", mr: 1, my: 0 }} />
                  <TextField
                    id="input-with-sx"
                    label="Buscar"
                    variant="standard"
                  />
                </Box>

                <Grid container justifyContent="center">
                  <Button variant="text" sx={{ display: "block", m: 0 }}>
                    Cliente 1
                  </Button>{" "}
                </Grid>
                <Grid container justifyContent="center">
                  <Button variant="text" sx={{ display: "block", m: 0 }}>
                    Cliente 2
                  </Button>{" "}
                </Grid>
                <Grid container justifyContent="center">
                  <Button variant="text" sx={{ display: "block", m: 0 }}>
                    Cliente 3
                  </Button>{" "}
                </Grid>
                <Grid container justifyContent="center">
                  <Button variant="text" sx={{ display: "block", m: 0 }}>
                    Cliente 4
                  </Button>{" "}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={9}>
            <Card>
              <CardContent>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={2}
                      // onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Informacion General" {...a11yProps(0)} />
                      <Tab label="Registro de citas" {...a11yProps(1)} />
                      <Tab label="Perfil de cliente" {...a11yProps(2)} />
                      <Tab label="Documentos" {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <Grid container>
                      {/* Nombre  */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Nombre
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Apellido */}
                      <Grid item md={5} spacing={3} mb={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Apellido
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Cumpleanos  */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Cumpleaños
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Genero */}
                      <Grid item md={5} spacing={3} mb={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Genero
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Características del cliente */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Características del cliente
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Alergias, Condiciones O Lesiones Previas	 */}
                      <Grid item md={5} spacing={3} mb={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Condiciones
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                          placeholder="Alergias, condiciones o lesiones previas"
                        />
                      </Grid>
                      {/* Tomando medicamentos  */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Tomando medicamentos
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Emergencia */}
                      <Grid item md={5} spacing={3} mb={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Emergencia
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          label=""
                          id="fullWidth"
                        />
                      </Grid>
                      {/* Objetivos */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Objetivos
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                        />
                      </Grid>
                      {/* Observaciones / Diagnóstico */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Observaciones / Diagnóstico
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                        />
                      </Grid>
                      {/* Acciones / Tratamientos*/}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Acciones / Tratamientos
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                        />
                      </Grid>
                      {/* Pasos a seguir  */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Pasos a seguir
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                        />
                      </Grid>
                      {/* Comentarios / Preferencias
                       */}
                      <Grid item md={5} spacing={3} mb={2} mr={2}>
                        <Typography variant="h6" m={0} mt={1}>
                          Comentarios / Preferencias
                        </Typography>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                        />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    Item Three
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    Item Three
                  </CustomTabPanel>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ClientsPage;
