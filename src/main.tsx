import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import createStore from "react-auth-kit/createStore"; // react-auth-kit ni ishlatish uchun settings
import AuthProvider from "react-auth-kit"; // react-auth-kit ni ishlatish uchun settings
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // react-query settings
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux"; // redux uchun
import store from "./redux"; // redux store
import { DialogProvider } from "@/components/ui/use-dialog";

const auth_store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:" //  react-auth-kit ni ishlatish uchun settings
});

const queryClient = new QueryClient(); // @tanstack/react-query; // react-query settings

createRoot(document.getElementById("root")!).render(
  <AuthProvider store={auth_store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ReactQueryDevtools initialIsOpen={false} />
          <DialogProvider>
            <App />
          </DialogProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider> // react-auth-kit ni ishlatish uchun settings
);
