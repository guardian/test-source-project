import { Paragraph } from './index';

export default {
	title: 'Paragraph',
};

export const paragraph = () => (
	<Paragraph>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
		vitae massa sed blandit. Quisque malesuada velit vitae ante scelerisque,
		ut laoreet mi malesuada. Praesent porttitor sit amet arcu ac hendrerit.
		Vestibulum condimentum sem at dignissim facilisis. Praesent commodo
		aliquet porttitor. Cras ac varius justo. Donec consectetur, lacus a
		pretium venenatis, erat libero vestibulum nunc, nec mattis lectus sem a
		ligula. Aenean eleifend massa at placerat rutrum. Cras in elit eget
		lorem tincidunt facilisis. Proin et diam consectetur, elementum dui ut,
		bibendum nisl.
	</Paragraph>
);

paragraph.story = {
	name: 'Default',
};
