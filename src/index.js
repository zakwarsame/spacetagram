import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./providers/ThemeProvider";

// this stops react query from automatically refetching data everytime the user leaves the tab
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
