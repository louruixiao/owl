import { OButton, OIcon, OLayout, OLayoutGrid, OLayoutItem } from './skeleton';
declare module 'vue' {
	interface GlobalComponents {
		OIcon: typeof OIcon;
		OButton: typeof OButton;
		OLayout: typeof OLayout;
		OLayoutItem: typeof OLayoutItem;
		OLayoutGrid: typeof OLayoutGrid;
	}

	interface ComponentCustomProps {
		id?: string;
		display?: boolean;
	}
}
