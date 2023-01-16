import {
	AddOnProps,
	AddOnTypeProps,
	PlanTypeProps,
	ValueProviderProps,
} from "context/types";
import { ValuesContext } from "context/valuesContext";
import React, { Fragment } from "react";
import Checkbox from "../../../checkbox";
import * as S from "./style";

type Props = {};

const Step3 = (props: Props) => {
	const { values, handleAddOn } = React.useContext(
		ValuesContext
	) as ValueProviderProps;
	const { planType } = values;

	const newAddOn = (
		planType: PlanTypeProps,
		item: AddOnProps,
		index: number
	) => {
		const newItem: AddOnProps = { ...item, checked: !item.checked };
		const newListAddOns: AddOnProps[] = [...values.addOn[planType]];
		newListAddOns[index] = newItem;
		const newAddOns: AddOnTypeProps = {
			...values.addOn,
			[planType]: newListAddOns,
		};
		handleAddOn(newAddOns);
	};

	return (
		<Fragment>
			{values.addOn[planType].map((item, index) => (
				<S.WrapperAddOnCard
					key={index}
					onClick={() => newAddOn(planType, item, index)}
				>
					<Checkbox checked={item.checked} />
					<S.ContentAddOnCard>
						<S.TitleAddOnCard>{item.title}</S.TitleAddOnCard>
						<S.DescriptionAddOnCard>{item.description}</S.DescriptionAddOnCard>
					</S.ContentAddOnCard>
					<S.PriceAddOnCard>+${item.price}</S.PriceAddOnCard>
				</S.WrapperAddOnCard>
			))}
		</Fragment>
	);
};

export default Step3;
