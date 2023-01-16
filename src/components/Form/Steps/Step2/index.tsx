import {
	PlanTitleSelectedProps,
	PlanTypeProps,
	PlanValuesSselectedProps,
	ValueProviderProps,
} from "context/types";
import { ValuesContext } from "context/valuesContext";
import React, { Fragment } from "react";
import * as S from "./style";
import ToggleSwitch from "./toggle";

type PlansProp = {
	icon: string;
	title: PlanTitleSelectedProps;
	price: PlanValuesSselectedProps;
	type: PlanTypeProps;
};
const infoPlans: PlansProp[] = [
	{
		icon: "icon-arcade.svg",
		title: "Arcade",
		price: "9/mo",
		type: "month",
	},
	{
		icon: "icon-advanced.svg",
		title: "Advanced",
		price: "12/mo",
		type: "month",
	},
	{
		icon: "icon-pro.svg",
		title: "Pro",
		price: "15/mo",
		type: "month",
	},
	{
		icon: "icon-arcade.svg",
		title: "Arcade",
		price: "90/yr",
		type: "year",
	},
	{
		icon: "icon-advanced.svg",
		title: "Advanced",
		price: "120/yr",
		type: "year",
	},
	{
		icon: "icon-pro.svg",
		title: "Pro",
		price: "150/yr",
		type: "year",
	},
];

const Step2 = () => {
	const { values, handlePlanType, changePlanSelect } = React.useContext(
		ValuesContext
	) as ValueProviderProps;
	console.log(values);
	return (
		<Fragment>
			<S.WrapperCardPlans>
				{infoPlans
					.filter((filterType) => filterType.type === values.planType)
					.map((plan) => {
						const planIsSelected =
							plan.title === values.planSelected.title &&
							plan.price === values.planSelected.value;
						return (
							<S.CardPlan
								key={plan.title}
								isActive={planIsSelected}
								onClick={() =>
									changePlanSelect({ title: plan.title, value: plan.price })
								}
							>
								<S.CardIcon alt="" src={plan.icon} width={40} height={40} />
								<S.CardContent>
									<S.TitleCardPlan>{plan.title}</S.TitleCardPlan>
									<S.PriceCardPlan>${plan.price}</S.PriceCardPlan>
									{plan.type === "year" ? (
										<S.DescriptionCardPlan>2 months free</S.DescriptionCardPlan>
									) : null}
								</S.CardContent>
							</S.CardPlan>
						);
					})}
			</S.WrapperCardPlans>
			<ToggleSwitch
				planType={values.planType}
				onClickType={() => handlePlanType()}
			/>
		</Fragment>
	);
};

export default Step2;
