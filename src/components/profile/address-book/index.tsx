import SideBar from "../customs/sidebar";
import Body from "./customs/body";
import Header from "./customs/header";

const AddressBook = () => {
  return (
    <div className="w-[90%] m-auto mb-[140px]">
      <Header />
      <div className="flex gap-[100px]">
        <SideBar />
        <Body />
      </div>
    </div>
  );
};

export default AddressBook;
