import React from "react";
import {
	AddOnTypeProps,
	ChangeEventProps,
	FormValuesProps,
	PlanSelectedProps,
	ValueProviderProps,
} from "./types";

const addOnInfo: AddOnTypeProps = {
	month: [
		{
			checked: false,
			title: "Online service",
			description: "Access to Multiplayer games",
			price: "1/mo",
		},
		{
			checked: false,
			title: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: "2/mo",
		},
		{
			checked: false,
			title: "Customizable Profile",
			description: "Custom theme on your profile",
			price: "2/mo",
		},
	],
	year: [
		{
			checked: false,
			title: "Online service",
			description: "Access to Multiplayer games",
			price: "10/yr",
		},
		{
			checked: false,
			title: "Larger storage",
			description: "Extra 1TB of cloud save",
			price: "20/yr",
		},
		{
			checked: false,
			title: "Customizable Profile",
			description: "Custom theme on your profile",
			price: "20/yr",
		},
	],
};

const initialValues: FormValuesProps = {
	name: "",
	email: "",
	phone_number: "",
	planType: "month",
	planSelected: {
		title: "Arcade",
		value: "9/mo",
	},
	addOn: addOnInfo,
};

type Props = {
	children: React.ReactNode;
};

export const ValuesContext = React.createContext<ValueProviderProps | null>(
	null
);

const ValuesProvider: React.FC<Props> = ({ children }) => {
	const [step, setStep] = React.useState(1);
	const [values, setValues] = React.useState<FormValuesProps>(initialValues);

	const handleStep = (step: number) => setStep(step);

	const onChangeValues = (e: ChangeEventProps) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handlePlanType = () =>
		values.planType === "month"
			? setValues({ ...values, planType: "year" })
			: setValues({ ...values, planType: "month" });

	const changePlanSelect = (planSelected: PlanSelectedProps) =>
		setValues({ ...values, planSelected: planSelected });

	const handleAddOn = (newAddOn: AddOnTypeProps) =>
		setValues({ ...values, addOn: newAddOn });

	return (
		<ValuesContext.Provider
			value={{
				step,
				handleStep,
				values,
				onChangeValues,
				handlePlanType,
				changePlanSelect,
				handleAddOn,
			}}
		>
			{children}
		</ValuesContext.Provider>
	);
};

export default ValuesProvider;
