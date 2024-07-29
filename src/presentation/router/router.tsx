import { Navigate, createBrowserRouter } from "react-router-dom";
import { AssistantPage } from '../pages';
import { ChatLayout } from "../layouts/ChatLayout";
import HomePage from "../pages/home/HomePage";

export const menuRoutes = [
  {
    to: "assistant",
    icon: "fa-solid fa-user",
    title: "Asistente",
    description: "Información del asistente",
    component: <AssistantPage />
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/chat',
    element: <ChatLayout />,
    children: [
      ...menuRoutes.map(route => ({
        path: route.to,
        element: route.component
      })),
      {
        path: '',
        element: <Navigate to={menuRoutes[0].to} />
      }
    ],
  }
])