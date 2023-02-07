import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ContactForm from "./components/ContactForm";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#8892b0",
      },
      secondary: {
        main: "#ccd6f6",
      },
    },
  });

  return (
    // Using Theme Provider for dark theme
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContactForm />
    </ThemeProvider>
  );
}

export default App;
