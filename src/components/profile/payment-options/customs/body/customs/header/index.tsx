import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import type { PaymentForm } from "@/types/payment";
import { useHeaderFeatures } from "./features";
import { createPaymentOptionSchema } from "@/models/validation/payment";

const Header = () => {
	const {
		onSubmit: { mutateAsync: onSubmit },
	} = useHeaderFeatures();

	const formik = useFormik<PaymentForm>({
		initialValues: {
			card_name: "",
			card_number: "",
			phone_number: "",
		},
		onSubmit: async (values) => await onSubmit(values),
		validationSchema: createPaymentOptionSchema,
	});

	return (
		<div className="flex items-center justify-between">
			<h1 className="text-[#DB4444] text-base font-semibold">
				Payment Options
			</h1>

			<Dialog>
				<DialogTrigger asChild>
					<Button variant="ghost">
						<Plus />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add Option</DialogTitle>
						<DialogDescription>
							Add a new payment option to your account.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={formik.handleSubmit}>
						<div className="grid gap-4 py-4">
							<div className="flex w-full items-center gap-4">
								<Label htmlFor="card_name" className="text-nowrap">
									Card Name
								</Label>
								<Input
									id="card_name"
									placeholder="Pedro Duarte"
									className="w-full"
									{...formik.getFieldProps("card_name")}
								/>
							</div>
							<div className="flex w-full items-center gap-4">
								<Label htmlFor="card_number" className="text-nowrap">
									Card Number
								</Label>
								<Input
									id="card_number"
									placeholder="0000 0000 0000 0000"
									className="w-full"
									{...formik.getFieldProps("card_number")}
								/>
							</div>
							<div className="flex w-full items-center gap-4">
								<Label htmlFor="phone_number" className="text-nowrap">
									Phone Number
								</Label>
								<Input
									id="phone_number"
									placeholder="+998 __ ___ __ __"
									className="w-full"
									{...formik.getFieldProps("phone_number")}
								/>
							</div>
						</div>
						<DialogFooter>
							<Button
								disabled={
									!(formik.dirty && formik.isValid) || formik.isSubmitting
								}
								type="submit"
							>
								{formik.isSubmitting ? "Processing..." : "Create Option"}
							</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Header;
