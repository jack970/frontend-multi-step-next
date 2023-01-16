import styled from "styled-components";

type CheckMarkProps = {
	checked: boolean;
};
const CheckBoxContainer = styled.div``;
const CheckBoxCheckMark = styled.span<CheckMarkProps>`
	width: 23px;
	height: 23px;
	margin-right: 6px;
	border-radius: var(--border-radius);
	border: 1px solid var(--Light-gray);
	background: ${(props) =>
		props.checked ? "var(--Purplish-blue)" : "transparent"};
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("icon-checkmark.svg");
	background-position: center;
	background-repeat: no-repeat;
`;

const Checkbox = (props: CheckMarkProps) => {
	const { checked } = props;
	return (
		<CheckBoxContainer>
			<CheckBoxCheckMark checked={checked}></CheckBoxCheckMark>
		</CheckBoxContainer>
	);
};

export default Checkbox;
