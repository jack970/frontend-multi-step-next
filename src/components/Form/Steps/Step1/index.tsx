import { ValueProviderProps } from "context/types";
import { ValuesContext } from "context/valuesContext";
import React from "react";
import styled from "styled-components";

const WrapperContainer = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
const ContainerInput = styled.div`
	margin-bottom: 2rem;
`;

const Step1 = () => {
	const { onChangeValues, values } = React.useContext(
		ValuesContext
	) as ValueProviderProps;

	return (
		<WrapperContainer>
			<ContainerInput>
				<Label>Name</Label>
				<Input
					required={true}
					type={"text"}
					name="name"
					placeholder="John Doe"
					autoComplete="on"
					value={values.name}
					onChange={onChangeValues}
				/>
			</ContainerInput>
			<ContainerInput>
				<Label>Email Address</Label>
				<Input
					required={true}
					type={"text"}
					name="email"
					placeholder="JohnDoe@gmail.com"
					autoComplete="on"
					value={values.email}
					onChange={onChangeValues}
				/>
			</ContainerInput>
			<ContainerInput>
				<Label>Phone Number</Label>
				<Input
					required={true}
					type={"text"}
					name="phone_number"
					placeholder="e.g +1 234 567 890"
					autoComplete="on"
					value={values.phone_number}
					onChange={onChangeValues}
				/>
			</ContainerInput>
		</WrapperContainer>
	);
};

export default Step1;
