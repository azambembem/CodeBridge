import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
/* yani map qilinganda commentga olinganlarni hammmasi utils 
folder ichidagi routes.tsx ichidan olinadi. masalan: pages/sign-up",
 pages/sign-in", pages/home"
*/
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import SignIn from "./pages/sign-in";
// import SignUp from "./pages/sign-up";
import { authed_route, unauthed_route } from "./utils/routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {unauthed_route.map((route, index) => {
          return <Route key={index} {...route} />; // yani biz buyerda map orqali ro'yxatdan  utmaganganlarni ishatdik.
        })}
        {authed_route.map((route) => {
          return <Route key={route.id} {...route} />; // yani biz buyerda map orqali ro'yxatdan utganlarni ishatdik.
        })}
        {/* <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
