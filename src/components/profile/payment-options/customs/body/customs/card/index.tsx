import { Button } from "@/components/ui/button";
import type { PaymentForm, TPaymentOption } from "@/types/payment";
import { Delete, Edit } from "lucide-react";
import type { FC } from "react";
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
import { createPaymentOptionSchema } from "@/models/validation/payment";
import { useCardFeatures } from "./features";

const Card: FC<TPaymentOption> = (payment_option) => {
	const {
		onEdit: { mutateAsync: onEdit },
		onDelete: { mutate: onDelete },
	} = useCardFeatures();

	const formik = useFormik<PaymentForm>({
		initialValues: {
			card_name: payment_option.card_name,
			card_number: payment_option.card_number,
			phone_number: payment_option.phone_number,
		},
		onSubmit: async (values) => await onEdit({ ...payment_option, ...values }),
		validationSchema: createPaymentOptionSchema,
	});

	return (
		<div className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10">
			<div className="flex-1 flex gap-2 items-center">
				<h3 className="text-base">{payment_option.card_name}</h3>
			</div>
			<div className="flex-1">
				<h3 className="text-base">{payment_option.card_number}</h3>
			</div>
			<div className="flex-1">
				<h3 className="text-base">{payment_option.phone_number}</h3>
			</div>
			<div className="flex-1 flex gap-4">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant={"ghost"}>
							<Edit />
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit Option</DialogTitle>
							<DialogDescription>
								Edit your payment option to your account.
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
									{formik.isSubmitting ? "Processing..." : "Edit Option"}
								</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
				<Button onClick={() => onDelete(payment_option)} variant={"ghost"}>
					<Delete />
				</Button>
			</div>
		</div>
	);
};

export default Card;
