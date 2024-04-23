import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UseActionState from "./pages/UseActionStatePage";
import UseFormStatus from "./pages/UseFormStatus";
import UseOptimistic from "./pages/UseOptimistic";

const router = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "use-action-state", element: <UseActionState /> },
          { path: "use-form-status", element: <UseFormStatus /> },
          { path: "use-optimistic", element: <UseOptimistic /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
];

export default router;
