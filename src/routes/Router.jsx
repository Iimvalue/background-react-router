import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Background from "../components/Background";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <div className="flex flex-row">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Background img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2Fe%2F6%2F320156.jpg&f=1&nofb=1&ipt=2e7376b7b252348beba3a1c4dccaf0df45976ec88c1f79ab3cdac0c235329d4d" />,
      },
      {
        path: "/space",
        element: (
          <Background img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2Fe%2F6%2F320156.jpg&f=1&nofb=1&ipt=2e7376b7b252348beba3a1c4dccaf0df45976ec88c1f79ab3cdac0c235329d4d" />
        ),
      },
      {
        path: "/zoo",
        element: (
          <Background img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fback_origin_pic%2F00%2F09%2F09%2F413f6b62795fc500f6d47fd3a6daa45a.jpg&f=1&nofb=1&ipt=0150269a3ee8a785e4eca948b5aa6688ccc1464ccf63b98abc77b3d7101410d2" />
        ),
      },
      {
        path: "/sky",
        element: (
          <Background
            img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F03%2F28%2F355460-clouds-sky.jpg&f=1&nofb=1&ipt=37b2b2a3a019f65bac4c163b01975045e445e90c115f16053d0d9be5f782a7f5"
          />
        ),
      },

      {
        path: "/qassim-dates",
        element: (
          <Background
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2Fddcdf9_44f7af91ccb9485491e3b0b6161a40fb~mv2.jpg%2Fv1%2Ffill%2Fw_1000%2Ch_581%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Fddcdf9_44f7af91ccb9485491e3b0b6161a40fb~mv2.jpg&f=1&nofb=1&ipt=3e6714267f1f34a157e3fa9501c952abdbf9b0bab0f55b361b969bd24c74794c"
          />
        ),
      },

      {
        path: "/desert",
        element: (
          <Background
            img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fdesert-4k_bGpnaWWUmZqaraWkpJRnZWltrWZmamc.jpg&f=1&nofb=1&ipt=bd41458ce4ed5558b02002288870a448c9cf3beb509ae279108b73f2ad1da4be"
          />
        ),
      },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
