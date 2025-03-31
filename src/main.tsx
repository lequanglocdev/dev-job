import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "./components/ui/sonner.tsx";

const CLIENT_ID =
  "527668267667-l6e4qe9b4mb7kvb67bq0jpkgdc3fv0o8.apps.googleusercontent.com";
createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
