import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import NavBar from "./components/navigation/NavBar.tsx";
import HomePage from "./pages/HomePage.tsx";
import { useStore } from "./api/store.ts";
import { famousQuotes } from "./api/quotes.ts";
import Conferences from "./pages/Conferences.tsx";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col h-screen">
    <NavBar />
    <main className="flex-grow overflow-auto">{children}</main>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/conferences",
    element: (
      <Layout>
        <Conferences />
      </Layout>
    ),
  },
]);

useStore.getState().setQuotes(famousQuotes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
