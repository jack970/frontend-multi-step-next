import { ValueProviderProps } from "context/types";
import { ValuesContext } from "context/valuesContext";
import React, { Fragment } from "react";
import LayoutForm from "./Layout";
import StepInfos from "./stepInfo";

const Form = () => {
	const { handleStep, step: currentStep } = React.useContext(
		ValuesContext
	) as ValueProviderProps;
	return (
		<Fragment>
			{StepInfos.map(
				(form) =>
					currentStep === form.step && (
						<LayoutForm
							key={form.step}
							step={form.step}
							title={form.title}
							description={form.description}
							handleStep={handleStep}
						>
							{form.children}
						</LayoutForm>
					)
			)}
		</Fragment>
	);
};

export default Form;
