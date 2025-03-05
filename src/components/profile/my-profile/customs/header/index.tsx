import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import type { TUser } from "@/types/user";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const Header = () => {
  const auth = useAuthUser<TUser>();
  return (
    <div className="flex items-center justify-between my-[80px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>My Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1>
        Welcome! <span className="text-[#DB4444]">{auth?.first_name}</span>
      </h1>
    </div>
  );
};

export default Header;
