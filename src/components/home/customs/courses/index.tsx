import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Courses = () => {
  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const solutions = [
    {
      id: "fitc",
      title: "Frontend 입문",
      subtitle: "코딩 기초부터 웹 페이지 제작까지",
      description:
        "실제 웹 페이지를 만들면서 HTML, CSS, JavaScript의 기초를 쉽고 재미있게 배울 수 있는 강의입니다.",
      image:
        "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2021/07/24141202/fullstack-web-developer-p9tzmk.png",
      buttons: [
        { text: "수강 신청", variant: "primary" },
        { text: "문의하기", variant: "secondary" }
      ]
    },
    {
      id: "fitc",
      title: "Frontend 입문",
      subtitle: "코딩 기초부터 웹 페이지 제작까지",
      description:
        "실제 웹 페이지를 만들면서 HTML, CSS, JavaScript의 기초를 쉽고 재미있게 배울 수 있는 강의입니다.",
      image:
        "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2021/07/24141202/fullstack-web-developer-p9tzmk.png",
      buttons: [
        { text: "수강 신청", variant: "primary" },
        { text: "문의하기", variant: "secondary" }
      ]
    },
    {
      id: "fitc",
      title: "Frontend 입문",
      subtitle: "코딩 기초부터 웹 페이지 제작까지",
      description:
        "실제 웹 페이지를 만들면서 HTML, CSS, JavaScript의 기초를 쉽고 재미있게 배울 수 있는 강의입니다.",
      image:
        "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2021/07/24141202/fullstack-web-developer-p9tzmk.png",
      buttons: [
        { text: "수강 신청", variant: "primary" },
        { text: "문의하기", variant: "secondary" }
      ]
    },
    {
      id: "fitc",
      title: "Frontend 입문",
      subtitle: "코딩 기초부터 웹 페이지 제작까지",
      description:
        "실제 웹 페이지를 만들면서 HTML, CSS, JavaScript의 기초를 쉽고 재미있게 배울 수 있는 강의입니다.",
      image:
        "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2021/07/24141202/fullstack-web-developer-p9tzmk.png",
      buttons: [
        { text: "수강 신청", variant: "primary" },
        { text: "문의하기", variant: "secondary" }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#262626] py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-none mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-[#EEEEEE] mb-16 md:mb-20 leading-relaxed px-4 text-[18px] md:text-[20px] lg:text-[28px] font-semibold">
          CodeBridge의 인기 코스를 확인하세요
        </h2>

        {/* Desktop: Fixed Width Boxes */}
        <div className="hidden lg:flex justify-center items-start gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="w-[384px] bg-[#333333] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition-colors duration-300"
            >
              {/* Image */}
              <div className="aspect-video mb-6">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-left">
                {/* Title */}
                <h3 className="text-[32px] font-semibold text-[#EEEEEE] mb-2">
                  {solution.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#EEEEEE] font-pre text-[16px] mb-4">
                  {solution.subtitle}
                </p>

                {/* Description */}
                <p className="text-[#A5A5A5] text-sm md:text-[13px] leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 ">
                  {solution.buttons.map((button, index) => (
                    <Button
                      key={index}
                      onClick={
                        button.text === "문의하기"
                          ? () => scrollToSection("contact-heading")
                          : undefined
                      }
                      className={`
                         px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200
                        ${
                          button.variant === "primary"
                            ? "bg-[#D5001C] hover:bg-[#4b4949] text-[#eee] border-0"
                            : "bg-transparent hover:bg-[#333333] text-[#CCCCCC] border border-[#555555] hover:border-[#777777]"
                        }
                        w-full sm:w-auto min-w-[144px] h-[40px]
                      `}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-sm md:max-w-lg mx-auto relative">
            <CarouselContent>
              {solutions.map((solution) => (
                <CarouselItem key={solution.id}>
                  <div className="p-1">
                    <Card className="bg-[#262626] border-[#404040]">
                      <CardContent className="p-0">
                        <div className="bg-[#262626] rounded-lg overflow-hidden">
                          {/* Image */}
                          <div className="aspect-video bg-[#333333] mb-6">
                            <img
                              src={solution.image}
                              alt={solution.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-6 text-left">
                            {/* Title */}
                            <h3 className="text-[32px] font-semibold text-[#EEEEEE] mb-2">
                              {solution.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[#EEEEEE] font-semibold text-[16px] mb-4">
                              {solution.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-[#A5A5A5] text-sm font-light leading-relaxed mb-6">
                              {solution.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3">
                              {solution.buttons.map((button, index) => (
                                <Button
                                  key={index}
                                  onClick={
                                    button.text === "문의하기"
                                      ? () => scrollToSection("contact-heading")
                                      : undefined
                                  }
                                  className={`
                                    px-6 py-3 rounded-md text-[14px] font-semibold transition-all duration-200
                                    ${
                                      button.variant === "primary"
                                        ? "bg-[#D5001C] hover:bg-[#DB3446] text-[#eee] border-0"
                                        : "bg-[#3B3B3B] hover:bg-[#333333] text-[#eee] border border-[#eee] hover:border-[#4F4F4F]"
                                    }
                                    w-full h-10
                                  `}
                                >
                                  {button.text}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#262626] text-[#eee] border border-[#444] w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#333]" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#262626] text-[#eee] border border-[#444] w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#333]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Courses;
