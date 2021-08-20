import { Heading, Paragraph, Page } from '../components';
import { Link } from '@guardian/src-link';
import { Radio, RadioGroup } from '@guardian/src-radio';

const Home = () => (
	<Page>
		<Heading headingLevel="h1">Home</Heading>

		<Paragraph>
			This is a simple web app that uses a number of components from{' '}
			<Link href="https://github.com/guardian/source">Source</Link>.
		</Paragraph>

		<RadioGroup
			error=""
			label="Select your preferred colour"
			name="colours"
			orientation="vertical"
			supporting=""
		>
			<Radio label="Red" supporting="" value="red" defaultChecked />
			<Radio label="Green" supporting="" value="green" />
			<Radio label="Blue" supporting="" value="blue" />
		</RadioGroup>
	</Page>
);

export default Home;
