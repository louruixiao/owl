import { ButtonExpose, OwlWithOptions } from '../types';
import { withPrefab } from '../withPrefab';
const withButton = (options: OwlWithOptions) => {
	return {
		...withPrefab<ButtonExpose>(options)
	};
};
export { withButton as withButton };
