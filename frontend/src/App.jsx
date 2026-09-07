import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return;
    }

    axios
      .get("http://localhost:8000/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        if (data.success) {
          dispatch(setUser(data.user));
        }
      })
      .catch(() => {
        localStorage.removeItem("accessToken");
        dispatch(setUser(null));
      });
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
