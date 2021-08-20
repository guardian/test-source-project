import { css } from '@emotion/react';
import { headline } from '@guardian/src-foundations/typography';

const headingStyles = (typographyFn: () => string) => {
	return css`
		${typographyFn()}
	`;
};

export const heading = {
	h1: headingStyles(headline.xlarge),
	h2: headingStyles(headline.large),
	h3: headingStyles(headline.medium),
	h4: headingStyles(headline.small),
	h5: headingStyles(headline.xsmall),
	h6: headingStyles(headline.xxsmall),
	p: headingStyles(headline.xxxsmall),
};
