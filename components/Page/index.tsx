import { Header } from '../Header';
import { Footer } from '@guardian/src-footer';
import React from 'react';
import { main, page } from './styles';
import { Container } from '@guardian/src-layout';

interface PageProps {
	children?: React.ReactNode;
}

export const Page = ({ children }: PageProps) => (
	<div id="page" css={page}>
		<Header />
		<main css={main}>
			<Container>{children}</Container>
		</main>
		<Footer />
	</div>
);
