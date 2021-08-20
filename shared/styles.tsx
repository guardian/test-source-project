import { css, Global } from '@emotion/react';
import { background } from '@guardian/src-foundations/palette';

export const globalStyles = (
	<Global
		styles={css`
			html,
			body,
			#__next {
				margin: 0;
				background: ${background.primary};
				height: 100%;
			}
		`}
	/>
);
