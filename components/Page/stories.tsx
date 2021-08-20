import { css } from '@emotion/react';
import { Page } from './index';

export default {
	title: 'Page',
};

const wrapper = css`
	height: 500px;
	overflow-y: scroll;
`;

export const shortContent = () => (
	<div css={wrapper}>
		<Page>
			<h1>Heading</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				egestas vitae massa sed blandit. Quisque malesuada velit vitae
				ante scelerisque, ut laoreet mi malesuada. Praesent porttitor
				sit amet arcu ac hendrerit. Vestibulum condimentum sem at
				dignissim facilisis. Praesent commodo aliquet porttitor. Cras ac
				varius justo. Donec consectetur, lacus a pretium venenatis, erat
				libero vestibulum nunc, nec mattis lectus sem a ligula. Aenean
				eleifend massa at placerat rutrum. Cras in elit eget lorem
				tincidunt facilisis. Proin et diam consectetur, elementum dui
				ut, bibendum nisl.
			</p>
		</Page>
	</div>
);

shortContent.story = {
	name: 'Short content',
};

export const longContent = () => (
	<div css={wrapper}>
		<Page>
			<h1>Heading</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				egestas vitae massa sed blandit. Quisque malesuada velit vitae
				ante scelerisque, ut laoreet mi malesuada. Praesent porttitor
				sit amet arcu ac hendrerit. Vestibulum condimentum sem at
				dignissim facilisis. Praesent commodo aliquet porttitor. Cras ac
				varius justo. Donec consectetur, lacus a pretium venenatis, erat
				libero vestibulum nunc, nec mattis lectus sem a ligula. Aenean
				eleifend massa at placerat rutrum. Cras in elit eget lorem
				tincidunt facilisis. Proin et diam consectetur, elementum dui
				ut, bibendum nisl.
			</p>
			<p>
				Aliquam efficitur consequat mi in porta. Morbi quis magna
				feugiat, gravida ante id, tristique lacus. Proin suscipit
				lobortis libero quis ultrices. Ut vitae imperdiet tortor.
				Curabitur feugiat risus vel leo venenatis, sed molestie odio
				eleifend. Mauris egestas velit id cursus dapibus. Donec cursus
				eros ligula, nec facilisis nisl hendrerit non. Suspendisse sed
				ex massa. Morbi et leo orci. Ut feugiat arcu leo, in porta quam
				commodo ut. Aenean volutpat volutpat ante, et tempus massa.
				Vestibulum quis metus suscipit, pharetra ante a, consequat
				turpis. Nunc elementum ante enim, euismod convallis neque
				convallis a.
			</p>
			<p>
				Sed finibus sagittis metus, ac finibus sem tempor faucibus. In
				in convallis nisl, ut aliquam metus. Integer quis felis eget
				dolor ornare molestie ac eget purus. Fusce convallis suscipit
				finibus. Phasellus sollicitudin hendrerit eros, commodo
				scelerisque nisi eleifend eget. Nullam at augue ac erat mattis
				suscipit ut non lorem. Integer auctor sem nec tincidunt varius.
				Proin a ullamcorper nisi, laoreet eleifend metus.
			</p>
			<p>
				Phasellus viverra feugiat viverra. Duis sed massa ligula.
				Praesent porta nisi magna. Curabitur vehicula, eros in varius
				viverra, lectus quam dictum libero, sit amet convallis purus
				eros et ante. Nam at quam consectetur, ornare sapien sit amet,
				laoreet nisi. Sed felis arcu, malesuada in pharetra eget,
				molestie a tellus. Nam porta est ut rutrum consequat. Praesent
				eleifend nisl nec orci lobortis, eget consectetur ante cursus.
				Aliquam sodales magna massa, ut molestie augue tristique a.
			</p>
			<p>
				In et ex cursus arcu pretium laoreet. Vestibulum efficitur purus
				vitae aliquam condimentum. Ut maximus dolor nec elit faucibus
				rhoncus. Fusce et nisi commodo, aliquam arcu at, sagittis
				sapien. In consequat, leo ut fringilla mollis, ex nisl
				ullamcorper dolor, a fringilla dui ante eu urna. Nulla id
				elementum turpis, et aliquam justo. Aliquam vehicula dui non
				tortor feugiat bibendum. Nunc eget arcu in enim sodales pharetra
				sit amet nec ex. Aliquam imperdiet sodales turpis in luctus.
				Fusce fermentum pulvinar massa, ac sodales sem cursus ac.
				Aliquam ut nunc eros. Integer sit amet tristique nisi, eu
				hendrerit leo.
			</p>
			<p>
				Sed aliquam ligula vitae urna rhoncus, id euismod lorem
				efficitur. Quisque ultrices scelerisque ligula eu dignissim.
				Proin posuere quis arcu id sodales. Morbi lobortis dictum orci
				eget ornare. Praesent efficitur suscipit efficitur. Nulla in dui
				et turpis feugiat posuere fermentum id erat. In mattis urna
				sapien, sed egestas dui volutpat et. Morbi sed metus non metus
				interdum suscipit eu nec leo. Integer nisl velit, aliquam ut
				orci non, euismod tempus lectus. Quisque rutrum, dui eu ultrices
				interdum, diam nibh vulputate enim, ut condimentum massa lacus
				ut ligula. Aenean ut risus in ante convallis facilisis. Interdum
				et malesuada fames ac ante ipsum primis in faucibus. Nunc purus
				elit, consectetur vitae tristique ac, ullamcorper non neque. Ut
				rutrum ut nisl ac venenatis. Phasellus ex eros, blandit eget
				dignissim ac, auctor vitae elit. Suspendisse mollis nunc eros,
				et dictum nulla tincidunt ac.
			</p>
			<p>
				Ut ac purus consequat, vulputate ante at, venenatis neque.
				Phasellus vel felis fermentum, euismod nulla eu, hendrerit
				felis. Praesent eu tortor ac eros iaculis volutpat. Aliquam quis
				rhoncus mauris. Sed vulputate euismod nisl in tincidunt.
				Vestibulum ultricies vitae elit at imperdiet. Aliquam posuere
				vitae metus ac molestie. Duis consectetur dui tincidunt, aliquam
				orci a, semper purus. Donec iaculis odio quis risus bibendum
				posuere. Nulla facilisi. Morbi auctor ex sed dapibus pharetra.
				Nulla facilisi.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				facilisis nisi eget suscipit tincidunt. In enim nulla, dictum ut
				porta eget, tempus non purus. Vivamus ante dui, efficitur
				faucibus semper vel, porta rhoncus nisl. Nullam at pharetra ex.
				Pellentesque congue ut eros in euismod. Phasellus a ex maximus
				massa efficitur posuere sed vel lorem. Mauris finibus justo sem,
				vel scelerisque nisl eleifend vel. Integer ac dolor accumsan,
				viverra elit sit amet, interdum dui. Nam ac risus id quam
				lacinia efficitur non ut dolor. Interdum et malesuada fames ac
				ante ipsum primis in faucibus. Quisque hendrerit rutrum risus
				vitae tristique. Sed quis felis nec mauris laoreet convallis
				vitae id ante. Suspendisse vehicula neque odio, ut placerat
				ipsum scelerisque quis.
			</p>
			<p>
				Morbi lobortis purus ut ex convallis pulvinar. Fusce posuere
				ornare ultrices. Phasellus a ullamcorper tellus. Integer vel
				aliquet neque. Nullam orci justo, lacinia id enim id, venenatis
				sodales mauris. Nam tempus lobortis enim, eget gravida massa
				auctor nec. Pellentesque malesuada iaculis ullamcorper. Integer
				tristique sagittis justo suscipit viverra. Nullam sit amet
				facilisis erat. Quisque neque tortor, mattis nec nunc tincidunt,
				iaculis feugiat sem. Morbi id placerat felis. Curabitur in
				turpis odio. Cras semper molestie massa, ac condimentum nibh
				tincidunt sed.
			</p>
			<p>
				Duis dictum fermentum dapibus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis
				egestas. Sed commodo, nulla sed aliquam eleifend, eros ipsum
				facilisis nunc, in suscipit turpis mauris sed turpis. Duis nec
				vestibulum massa, vitae viverra mi. Suspendisse purus quam,
				luctus ac turpis ultrices, sollicitudin facilisis orci. Morbi
				condimentum leo ut nisi dapibus porta. Vivamus mollis sem vel
				massa cursus, sed scelerisque ligula molestie. Sed aliquam
				placerat vehicula.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
				egestas vitae massa sed blandit. Quisque malesuada velit vitae
				ante scelerisque, ut laoreet mi malesuada. Praesent porttitor
				sit amet arcu ac hendrerit. Vestibulum condimentum sem at
				dignissim facilisis. Praesent commodo aliquet porttitor. Cras ac
				varius justo. Donec consectetur, lacus a pretium venenatis, erat
				libero vestibulum nunc, nec mattis lectus sem a ligula. Aenean
				eleifend massa at placerat rutrum. Cras in elit eget lorem
				tincidunt facilisis. Proin et diam consectetur, elementum dui
				ut, bibendum nisl.
			</p>
			<p>
				Aliquam efficitur consequat mi in porta. Morbi quis magna
				feugiat, gravida ante id, tristique lacus. Proin suscipit
				lobortis libero quis ultrices. Ut vitae imperdiet tortor.
				Curabitur feugiat risus vel leo venenatis, sed molestie odio
				eleifend. Mauris egestas velit id cursus dapibus. Donec cursus
				eros ligula, nec facilisis nisl hendrerit non. Suspendisse sed
				ex massa. Morbi et leo orci. Ut feugiat arcu leo, in porta quam
				commodo ut. Aenean volutpat volutpat ante, et tempus massa.
				Vestibulum quis metus suscipit, pharetra ante a, consequat
				turpis. Nunc elementum ante enim, euismod convallis neque
				convallis a.
			</p>
			<p>
				Sed finibus sagittis metus, ac finibus sem tempor faucibus. In
				in convallis nisl, ut aliquam metus. Integer quis felis eget
				dolor ornare molestie ac eget purus. Fusce convallis suscipit
				finibus. Phasellus sollicitudin hendrerit eros, commodo
				scelerisque nisi eleifend eget. Nullam at augue ac erat mattis
				suscipit ut non lorem. Integer auctor sem nec tincidunt varius.
				Proin a ullamcorper nisi, laoreet eleifend metus.
			</p>
			<p>
				Phasellus viverra feugiat viverra. Duis sed massa ligula.
				Praesent porta nisi magna. Curabitur vehicula, eros in varius
				viverra, lectus quam dictum libero, sit amet convallis purus
				eros et ante. Nam at quam consectetur, ornare sapien sit amet,
				laoreet nisi. Sed felis arcu, malesuada in pharetra eget,
				molestie a tellus. Nam porta est ut rutrum consequat. Praesent
				eleifend nisl nec orci lobortis, eget consectetur ante cursus.
				Aliquam sodales magna massa, ut molestie augue tristique a.
			</p>
			<p>
				In et ex cursus arcu pretium laoreet. Vestibulum efficitur purus
				vitae aliquam condimentum. Ut maximus dolor nec elit faucibus
				rhoncus. Fusce et nisi commodo, aliquam arcu at, sagittis
				sapien. In consequat, leo ut fringilla mollis, ex nisl
				ullamcorper dolor, a fringilla dui ante eu urna. Nulla id
				elementum turpis, et aliquam justo. Aliquam vehicula dui non
				tortor feugiat bibendum. Nunc eget arcu in enim sodales pharetra
				sit amet nec ex. Aliquam imperdiet sodales turpis in luctus.
				Fusce fermentum pulvinar massa, ac sodales sem cursus ac.
				Aliquam ut nunc eros. Integer sit amet tristique nisi, eu
				hendrerit leo.
			</p>
			<p>
				Sed aliquam ligula vitae urna rhoncus, id euismod lorem
				efficitur. Quisque ultrices scelerisque ligula eu dignissim.
				Proin posuere quis arcu id sodales. Morbi lobortis dictum orci
				eget ornare. Praesent efficitur suscipit efficitur. Nulla in dui
				et turpis feugiat posuere fermentum id erat. In mattis urna
				sapien, sed egestas dui volutpat et. Morbi sed metus non metus
				interdum suscipit eu nec leo. Integer nisl velit, aliquam ut
				orci non, euismod tempus lectus. Quisque rutrum, dui eu ultrices
				interdum, diam nibh vulputate enim, ut condimentum massa lacus
				ut ligula. Aenean ut risus in ante convallis facilisis. Interdum
				et malesuada fames ac ante ipsum primis in faucibus. Nunc purus
				elit, consectetur vitae tristique ac, ullamcorper non neque. Ut
				rutrum ut nisl ac venenatis. Phasellus ex eros, blandit eget
				dignissim ac, auctor vitae elit. Suspendisse mollis nunc eros,
				et dictum nulla tincidunt ac.
			</p>
			<p>
				Ut ac purus consequat, vulputate ante at, venenatis neque.
				Phasellus vel felis fermentum, euismod nulla eu, hendrerit
				felis. Praesent eu tortor ac eros iaculis volutpat. Aliquam quis
				rhoncus mauris. Sed vulputate euismod nisl in tincidunt.
				Vestibulum ultricies vitae elit at imperdiet. Aliquam posuere
				vitae metus ac molestie. Duis consectetur dui tincidunt, aliquam
				orci a, semper purus. Donec iaculis odio quis risus bibendum
				posuere. Nulla facilisi. Morbi auctor ex sed dapibus pharetra.
				Nulla facilisi.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				facilisis nisi eget suscipit tincidunt. In enim nulla, dictum ut
				porta eget, tempus non purus. Vivamus ante dui, efficitur
				faucibus semper vel, porta rhoncus nisl. Nullam at pharetra ex.
				Pellentesque congue ut eros in euismod. Phasellus a ex maximus
				massa efficitur posuere sed vel lorem. Mauris finibus justo sem,
				vel scelerisque nisl eleifend vel. Integer ac dolor accumsan,
				viverra elit sit amet, interdum dui. Nam ac risus id quam
				lacinia efficitur non ut dolor. Interdum et malesuada fames ac
				ante ipsum primis in faucibus. Quisque hendrerit rutrum risus
				vitae tristique. Sed quis felis nec mauris laoreet convallis
				vitae id ante. Suspendisse vehicula neque odio, ut placerat
				ipsum scelerisque quis.
			</p>
			<p>
				Morbi lobortis purus ut ex convallis pulvinar. Fusce posuere
				ornare ultrices. Phasellus a ullamcorper tellus. Integer vel
				aliquet neque. Nullam orci justo, lacinia id enim id, venenatis
				sodales mauris. Nam tempus lobortis enim, eget gravida massa
				auctor nec. Pellentesque malesuada iaculis ullamcorper. Integer
				tristique sagittis justo suscipit viverra. Nullam sit amet
				facilisis erat. Quisque neque tortor, mattis nec nunc tincidunt,
				iaculis feugiat sem. Morbi id placerat felis. Curabitur in
				turpis odio. Cras semper molestie massa, ac condimentum nibh
				tincidunt sed.
			</p>
			<p>
				Duis dictum fermentum dapibus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis
				egestas. Sed commodo, nulla sed aliquam eleifend, eros ipsum
				facilisis nunc, in suscipit turpis mauris sed turpis. Duis nec
				vestibulum massa, vitae viverra mi. Suspendisse purus quam,
				luctus ac turpis ultrices, sollicitudin facilisis orci. Morbi
				condimentum leo ut nisi dapibus porta. Vivamus mollis sem vel
				massa cursus, sed scelerisque ligula molestie. Sed aliquam
				placerat vehicula.
			</p>
		</Page>
	</div>
);

longContent.story = {
	name: 'Long content',
};

export const noContent = () => (
	<div css={wrapper}>
		<Page />
	</div>
);

noContent.story = {
	name: 'No content',
};
