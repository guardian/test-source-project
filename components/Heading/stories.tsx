import { Heading, HeadingProps } from './index';

export default {
	title: 'Heading',
	component: Heading,
	args: {
		headingLevel: 'h1',
	},
};

const Template = (args: HeadingProps) => (
	<Heading {...args}>Heading Text</Heading>
);

export const h1 = Template.bind({});

export const h2 = Template.bind({});
h2.args = {
	headingLevel: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
	headingLevel: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
	headingLevel: 'h4',
};

export const h5 = Template.bind({});
h5.args = {
	headingLevel: 'h5',
};

export const h6 = Template.bind({});
h6.args = {
	headingLevel: 'h6',
};

export const p = Template.bind({});
p.args = {
	headingLevel: 'p',
};
