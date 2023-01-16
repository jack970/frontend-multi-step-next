import styled from "styled-components";
import GlobalStyle from "styles/globals";

const LayoutWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 600px) {
		position: relative;
	}
`;

export const LayoutContent = styled.div`
	background-color: var(--White);
	max-width: var(--max-width);
	border-radius: var(--border-radius);
	box-shadow: 0rem 0rem 1rem #00000029;
	min-height: 35rem;
	display: flex;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		margin: 0 1rem;
		margin-bottom: 4rem;
		min-height: auto;
	}
`;

const Layout = ({ children }: { children: any }) => {
	return (
		<LayoutWrapper>
			<GlobalStyle />
			<LayoutContent>{children}</LayoutContent>
		</LayoutWrapper>
	);
};

export default Layout;
