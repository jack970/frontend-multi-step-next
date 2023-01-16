import ValuesProvider from "../../context/valuesContext";
import LayoutForm from "./Layout";
import StepInfos from "./stepInfo";

type FormProps = {
	currentStep: number;
	handleStep: Function;
};

const Form = ({ currentStep, handleStep }: FormProps) => {
	return (
		<ValuesProvider>
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
		</ValuesProvider>
	);
};

export default Form;
