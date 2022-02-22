import { OIconPrefabDefine, OIconPrefabOptionsDefine } from '@owl/types';
import { isArray, isObject, isString } from 'lodash-es';
import { computed, ref, watchEffect } from 'vue';
import { withPrefab } from '../withPrefab';

/**
 *
 * icon核心逻辑
 *
 * @param {OIconPrefabOptionsDefine} options
 * @returns
 */
export const withIcon = (options: OIconPrefabOptionsDefine): OIconPrefabDefine => {
	const { props } = options;
	const prefab = withPrefab(options);

	const obtainIcon = computed(() => {
		if (isArray(props.icon) || isObject(props.icon)) {
			return props.icon;
		} else {
			return [props.type as string, props.icon as string];
		}
	});

	const animiateClass = computed(() => {
		const animate = props.animiate;
		if (isString(animate)) {
			return 'fa-' + animate;
		} else if (isArray(animate)) {
			return 'fa-' + (props.animiate as Array<string>).join(' fa-');
		} else {
			return null;
		}
	});

	const sizeClass = computed(() => {
		return !props.size || 'fa-' + props.size;
	});

	prefab.addClass([animiateClass, sizeClass]);

	//是否同时有翻转和旋转
	const obtainIsFlipAndRotation = computed<boolean>(() => {
		if (props.rotation && props.flip) {
			return true;
		}
		return false;
	});

	const obtainFlip = computed<string | null>(() => {
		if (props.flip && props.rotation) {
			return 'fa-flip-' + props.flip;
		}
		return props.flip as string;
	});

	//静态旋转
	const rotateByClass = ref<string | null>();
	prefab.addClass(rotateByClass);
	const rotateDeg = ref<string | null>(null);
	prefab.cssVar('fa-rotate-angle', rotateDeg, false);

	//设置图标将缩放的最大值
	const scale = ref<number | null>(null);
	prefab.cssVar('fa-beat-scale', scale, false);
	prefab.cssVar('fa-beat-fade-scale', scale, false);

	//设置图标将淡入淡出的最低不透明度值
	const opacity = ref<number | null>(null);
	prefab.cssVar('fa-fade-opacity', opacity, false);
	prefab.cssVar('fa-beat-fade-opacity', opacity, false);

	//设置旋转轴
	const flipAxisX = ref<0 | 1 | null>(0);
	prefab.cssVar('fa-flip-x', flipAxisX, false);

	const flipAxisY = ref<0 | 1 | null>(1);
	prefab.cssVar('fa-flip-y', flipAxisY, false);

	const flipAxisZ = ref<0 | 1 | null>(0);
	prefab.cssVar('fa-flip-z', flipAxisZ, false);

	const setFlipAxis = (axis: 'x' | 'y' | 'z') => {
		switch (axis) {
			case 'x': {
				flipAxisX.value = 1;
				break;
			}
			case 'y': {
				flipAxisY.value = 1;
				break;
			}
			case 'z': {
				flipAxisZ.value = 1;
				break;
			}
		}
	};

	//设置旋转角度
	const flipAngle = ref<string | null>(null);
	prefab.cssVar('fa-flip-angle', flipAngle, false);

	//动画配置选项
	const a_delay = ref<number | null>(null);
	prefab.cssVar('fa-animation-delay', a_delay, false);
	const a_direction = ref<string | null>(null);
	prefab.cssVar('fa-animation-direction', a_direction, false);
	const a_duration = ref<number | null>(null);
	prefab.cssVar('fa-animation-duration', a_duration, false);
	const a_iterationCount = ref<number | null>(null);
	prefab.cssVar('fa-animation-iteration-count', a_iterationCount, false);
	const a_timingFunction = ref<string | null>(null);
	prefab.cssVar('fa-animation-timing', a_timingFunction, false);

	watchEffect(() => {
		if (props.rotation) {
			rotateByClass.value = 'fa-rotate-by';
			rotateDeg.value = props.rotation + 'deg';
		} else {
			rotateByClass.value = null;
			rotateDeg.value = null;
		}

		scale.value = props.animiateScale || null;
		opacity.value = props.animiateOpacity || null;
		if (props.animiateFlipAngle) {
			flipAngle.value = props.animiateFlipAngle + 'deg';
		} else {
			flipAngle.value = null;
		}

		if (props.animiateFlipAxis) {
			flipAxisX.value = 0;
			flipAxisY.value = 0;
			flipAxisZ.value = 0;
			if (isString(props.animiateFlipAxis)) {
				setFlipAxis(props.animiateFlipAxis);
			} else if (isArray(props.animiateFlipAxis)) {
				props.animiateFlipAxis.forEach(setFlipAxis);
			}
		}
		if (props.animiateOptions) {
			const { delay, direction, duration, iterationCount, timingFunction } = props.animiateOptions;
			a_delay.value = delay || null;
			a_duration.value = duration || null;
			a_direction.value = direction || null;
			a_iterationCount.value = iterationCount || null;
			a_timingFunction.value = timingFunction || null;
		}

		prefab.domRefresh();
	});

	return {
		...prefab,
		obtainIcon,
		obtainFlip,
		obtainIsFlipAndRotation
	};
};
