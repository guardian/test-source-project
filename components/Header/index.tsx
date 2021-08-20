import { header, container, logo, title, titleLink } from './styles';
import { SvgRoundelBrandInverse } from '@guardian/src-brand';
import { Container } from '@guardian/src-layout';

export const Header = () => {
	return (
		<header css={header}>
			<Container>
				<div css={container}>
					<div>
						<a href="/" css={titleLink}>
							<span css={title}>Source Test App</span>
						</a>
					</div>
					<div css={logo}>
						<SvgRoundelBrandInverse />
					</div>
				</div>
			</Container>
		</header>
	);
};
