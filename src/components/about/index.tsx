import OurStory from "@/components/about/customs/our-story";
import Icons from "@/components/about/customs/icons";
import Service from "@/components/about/customs/service";
import PersonImages from "@/components/about/customs/person-images";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../ui/breadcrumb";

const About = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="my-[80px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <OurStory />
      <Icons />
      <PersonImages />
      <Service />
    </div>
  );
};

export default About;
