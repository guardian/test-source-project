import { p } from './styles';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = ({ children }: ParagraphProps) => (
	<p css={p}>{children}</p>
);
