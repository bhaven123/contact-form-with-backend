import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ContactForm from "./components/ContactForm";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContactForm />
    </ThemeProvider>
  );
}

export default App;
