import { createBrowserRouter } from "react-router-dom";
import { UsersPage } from "../../pages/users";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UsersPage/>,
    },
]);