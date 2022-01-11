import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./providers/ThemeProvider";

const queryClient = new QueryClient();


ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </QueryClientProvider>,
  document.getElementById("root")
);
