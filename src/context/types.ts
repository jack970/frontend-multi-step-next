export type PlanTypeProps = "year" | "month";
export type PlanTitleSelectedProps = "Arcade" | "Advanced" | "Pro";
export type PlanValuesSselectedProps =
	| "9/mo"
	| "12/mo"
	| "15/mo"
	| "90/yr"
	| "120/yr"
	| "150/yr";
export type PlanSelectedProps = {
	title: PlanTitleSelectedProps;
	value: PlanValuesSselectedProps;
};

export type AddOnProps = {
	checked: boolean;
	title: string;
	description: string;
	price: string;
};
export type AddOnTypeProps = {
	month: AddOnProps[];
	year: AddOnProps[];
};

export type FormValuesProps = {
	name: string;
	email: string;
	phone_number: string;
	planType: PlanTypeProps;
	planSelected: PlanSelectedProps;
	addOn: AddOnTypeProps;
};

export type ChangeEventProps = React.ChangeEvent<HTMLInputElement>;
export type ValueProviderProps = {
	step: number;
	handleStep: (step: number) => void;
	values: FormValuesProps;
	onChangeValues: (e: ChangeEventProps) => void;
	handlePlanType: () => void;
	changePlanSelect: (planSelected: PlanSelectedProps) => void;
	handleAddOn: (newAddOn: AddOnTypeProps) => void;
};
