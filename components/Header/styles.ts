import { css } from '@emotion/react';
import { brandBackground, brandText } from '@guardian/src-foundations/palette';
import { space } from '@guardian/src-foundations';
import { titlepiece } from '@guardian/src-foundations/typography';
import { width } from '@guardian/src-foundations/size';

export const logo = css`
	width: ${width.ctaMedium}px;
	height: auto;
	padding-right: ${space[3]}px;
`;

export const header = css`
	background-color: ${brandBackground.primary};
	padding: ${space[3]}px 0;
	flex: none;
`;

export const container = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const title = css`
	color: ${brandText.primary};
	${titlepiece.small({ fontWeight: 'bold', lineHeight: 'loose' })}
	&:hover {
		color: ${brandText.anchorPrimaryHover};
	}
`;

export const titleLink = css`
	text-decoration: none;
	&:active {
		text-decoration: none;
	}
`;
