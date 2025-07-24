import { Button } from "@/components/ui/button";

const SixBox = () => {
  const boxData = [
    {
      icon: "./code.svg",
      title: "프로그래밍 입문 강의",
      description:
        "코드를 처음 접하는 분들을 위한 쉽고 체계적인 입문 강의로 기초를 탄탄히 다지세요.",
      tags: ["#코딩기초", "#HTML", "#CSS", "#JavaScript"]
    },
    {
      icon: "/icons/bim-api.svg",
      title: "AI 기초부터 심화 과정",
      description:
        "AI 알고리즘의 원리부터 실전 프로젝트까지, 단계별로 학습할 수 있는 전문 과정",
      tags: ["#머신러닝 ", "#딥러닝", "#TensorFlow "]
    },
    {
      icon: "/icons/flare.svg",
      title: "프로젝트 기반 학습",
      description:
        "실제 사례를 바탕으로 진행되는 프로젝트로 실무 역량을 키우고 포트폴리오를 완성하세요.",
      tags: ["#실전코딩 ", "#설계 실전코딩", "#포트폴리오"]
    },
    {
      icon: "/icons/settings.svg",
      title: "자격증 대비 특강",
      description:
        "국내외 IT 자격증 취득을 위한 핵심 이론 및 기출 문제 집중 강의",
      tags: ["#정보처리기사", "#AWS", "#Azure", "#자격증"]
    },
    {
      icon: "/icons/settings-profiles.svg",
      title: "코드 리뷰 & 멘토링",
      description:
        "현직 개발자 멘토와의 코드 리뷰, 1:1 멘토링으로 더 빠른 성장과 실력 향상",
      tags: ["#멘토링", "#코드리뷰", "#커뮤니티"]
    },
    {
      icon: "/icons/pdf.svg",
      title: "취업 준비 가이드",
      description:
        "이력서 작성, 면접 대비, 포트폴리오 관리 등 IT 취업을 위한 A to Z 가이드",
      tags: ["#취업준비", "#이력서", "#면접"]
    }
  ];

  return (
    <div className="w-full  bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] py-10 md:py-12 lg:py">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {boxData.map((box, index) => (
            <div
              key={index}
              className="bg-[#262626] border border-[#333] rounded-lg p-6 md:p-8 hover:bg-[#2a2a2a] transition-colors duration-300"
            >
              {/* Icon and Title Row */}
              <div className="flex items-center mb-4">
                <img
                  src={box.icon}
                  alt={`${box.title} icon`}
                  className="w-[30px] h-[30px] mr-3"
                />
                <h3 className="text-lg md:text-xl font-semibold text-[#EEEEEE]">
                  {box.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#A5A5A5] text-sm md:text-base leading-relaxed mb-6">
                {box.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {box.tags.map((tag, tagIndex) => (
                  <Button
                    key={tagIndex}
                    variant="outline"
                    size="sm"
                    className="bg-[#1F1F1F] border border-[#4F4F4F] text-[#eee] hover:bg-[#3B3B3B] hover:text-[#EEEEEE] px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixBox;
