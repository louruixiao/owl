import * as components from '@owl/themes/skeleton';
declare module 'vue' {
	export interface GlobalComponents {
		OButton: typeof components.OButton;
		OIcon: typeof components.OIcon;
		OLayout: typeof components.OLayout;
		OLayoutItem: typeof components.OLayoutItem;
	}
}
