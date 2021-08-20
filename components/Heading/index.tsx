import { heading } from './styles';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	children: string;
}

export const Heading = ({ headingLevel, children }: HeadingProps) => {
	const Heading = headingLevel;

	return <Heading css={heading[headingLevel]}>{children}</Heading>;
};
