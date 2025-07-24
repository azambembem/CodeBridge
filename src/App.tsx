import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import { authed_route, unauthed_route } from "./utils/routes";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useMemo } from "react";
import { matchPath } from "react-router-dom";
import Footer from "./components/footer";

const App = () => {
  const { pathname } = useLocation();
  const isAuthenticated = useIsAuthenticated();

  const activeRoutes = isAuthenticated ? authed_route : unauthed_route;

  const foundRoute = useMemo(() => {
    // 1. Top-level route ichidan izlaymiz
    for (const route of activeRoutes) {
      // "/my-profile/manage-subscriptions"
      if (matchPath(route.path, pathname)) return route;

      // "/my-profile/manage-subscriptions/:id" - child route
      if (route.children) {
        const matchedChild = route.children.find((child) => {
          if (child.path) {
            const fullPath = route.path.endsWith("/")
              ? route.path + child.path
              : route.path + "/" + child.path;
            return matchPath(fullPath, pathname);
          }
          return false;
        });

        if (matchedChild) {
          return {
            ...matchedChild,
            id: route.id
          }; // return child with `customLayout`
        }
      }
    }

    return undefined;
  }, [pathname, activeRoutes]);
  return (
    <div className="w-full">
      {!foundRoute?.customLayout && <Navbar />}

      <Routes>
        {activeRoutes.map((route) => {
          if (route.children) {
            return (
              <Route path={route.path} element={route.element} key={route.id}>
                {route.children.map((child, i) => (
                  <Route
                    key={i}
                    path={child.path}
                    index={child.index}
                    element={child.element}
                  />
                ))}
              </Route>
            );
          }

          return (
            <Route key={route.id} path={route.path} element={route.element} />
          );
        })}
      </Routes>

      {!foundRoute?.customLayout && <Footer />}
    </div>
  );
};

export default App;
