import Sidebar from "../customs/sidebar";
import Body from "./customs/body";
import Header from "./customs/header";

const Orders = () => {
	return (
		<div className="w-[90%] m-auto mb-[140px]">
			<Header />
			<div className="flex gap-[100px]">
				<Sidebar />
				<Body />
			</div>
		</div>
	);
};

export default Orders;
