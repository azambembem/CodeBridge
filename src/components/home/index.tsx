import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Flayer from "./customs/flayer";
import ItMotivation from "./customs/it-motivation";
import AiPractice from "./customs/ai-practice";
import SixBox from "./customs/six-box";
import Courses from "./customs/courses";
import ContactSession from "./customs/contact-session";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // scroll uchu yangi qo'shilgan qismi. Yani boshqa pagelardan turib scroll qilganda home page kelib homepagedan avtomatic 문의하기 scroll bolish.
  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // state 초기화해서 새로고침 시 반복 방지
        navigate(location.pathname, { replace: true, state: {} });
      }, 300); // 렌더 완료를 위한 지연
    }
  }, [location, navigate]);

  return (
    <div>
      <Flayer />
      <ItMotivation />
      <AiPractice />
      <SixBox />
      <Courses />
      <ContactSession />
    </div>
  );
};

export default Home;
