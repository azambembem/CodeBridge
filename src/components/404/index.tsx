import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../ui/breadcrumb";
import { Button } from "../ui/button";

const NotFound = () => {
  const navigate = useNavigate();

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
              <BreadcrumbPage>404 Error</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[110px] mb-10">404 Not Found</h1>
        <h3 className="text-base">
          Your visited page not found. You may go home page.
        </h3>

        <Button
          variant={"destructive"}
          onClick={() => navigate("/")}
          className="my-[80px] w-[254px] h-xs[56px]"
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
