import { defineComponent, ref } from 'vue';

export default defineComponent(() => {
	const sizeRef = ref('1x');

	const changeSize = (size: any) => {
		sizeRef.value = size;
	};
	return () => (
		<>
			<o-button
				onClick={() => {
					changeSize('1x');
				}}>
				1x
			</o-button>
			<o-button
				onClick={() => {
					changeSize('2x');
				}}>
				2x
			</o-button>
			<o-button
				onClick={() => {
					changeSize('10x');
				}}>
				10x
			</o-button>
			<o-icon icon='heart' size={sizeRef.value}></o-icon>
		</>
	);
});
