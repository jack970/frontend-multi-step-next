import * as S from "./style";

type LayoutFormProps = {
	step: number;
	title: string;
	description: string;
	handleStep: Function;
	children: JSX.Element;
};
const LayoutForm: React.FC<LayoutFormProps> = (props) => {
	const { handleStep, step, title, description, children } = props;

	const handleSubmit = () => {
		handleStep(step !== 6 ? step + 1 : 1);
	};
	const backStep = () => handleStep(props.step - 1);

	return (
		<S.WrapperStepForm onSubmit={handleSubmit}>
			<div style={{ flex: 1 }}>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
				{children}
			</div>
			{step != 5 && (
				<S.ButtonWrapper>
					{step !== 1 && (
						<S.Button typeButton="back" onClick={backStep}>
							Go Back
						</S.Button>
					)}

					{step === 4 ? (
						<S.ButtonConfirm typeButton="next" type="submit">
							Confirm
						</S.ButtonConfirm>
					) : (
						<S.Button typeButton="next">Next Step</S.Button>
					)}
				</S.ButtonWrapper>
			)}
		</S.WrapperStepForm>
	);
};

export default LayoutForm;
