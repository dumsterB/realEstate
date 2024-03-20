import { createBrowserRouter } from "react-router-dom";
import { UsersPage } from "../../pages/users";
import {PostsPage} from "../../pages/posts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UsersPage />,
    },
    {
        path: "/posts",
        element: <PostsPage />,
    },
]);