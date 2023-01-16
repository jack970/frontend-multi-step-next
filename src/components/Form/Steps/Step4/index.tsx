import { AddOnProps, ValueProviderProps } from "context/types";
import { ValuesContext } from "context/valuesContext";
import { Fragment, useContext } from "react";
import * as S from "./style";

const Step4 = () => {
	const { values } = useContext(ValuesContext) as ValueProviderProps;
	const { planSelected, planType, addOn } = values;
	const { title: titleSelected, value: priceSelected } = planSelected;

	const getAddOnActives: AddOnProps[] = addOn[planType].filter(
		(addon) => addon.checked == true
	);
	const convertStrToINT = (value: string) => parseInt(value.split("/")[0]);

	const priceAddOns: number[] = getAddOnActives.map((addon) =>
		convertStrToINT(addon.price)
	);

	const priceTotal = priceAddOns.reduce(
		(sum, current) => sum + current,
		convertStrToINT(priceSelected)
	);

	return (
		<Fragment>
			<S.SummaryContent>
				<S.SummaryType type="header">
					<S.SummaryTitle>
						{titleSelected} ({planType === "month" ? "Monthly" : "Yearly"})
						<S.ButtonChange>Change</S.ButtonChange>
					</S.SummaryTitle>
					<S.SummaryDescription
						type="price"
						style={{ fontWeight: "700", fontSize: "1rem" }}
					>
						${priceSelected}
					</S.SummaryDescription>
				</S.SummaryType>
				<S.Line />
				{getAddOnActives.map((addon) => (
					<S.SummaryType key={addon.title}>
						<S.SummaryDescription type="title">
							{addon.title}
						</S.SummaryDescription>
						<S.SummaryDescription type="price">
							+${addon.price}
						</S.SummaryDescription>
					</S.SummaryType>
				))}
			</S.SummaryContent>
			<S.SummaryType style={{ margin: "1.5rem 1rem 0 1rem" }}>
				<S.SummaryDescription type="title">
					Total (per {planType})
				</S.SummaryDescription>
				<S.SummaryTotalPrice>
					+${priceTotal}/{planType === "month" ? "mo" : "yr"}
				</S.SummaryTotalPrice>
			</S.SummaryType>
		</Fragment>
	);
};

export default Step4;
