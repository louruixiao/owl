import { OButton, OCodeEditor, OIcon, OLayout, OLayoutGrid, OLayoutItem } from './skeleton';
declare module 'vue' {
	interface GlobalComponents {
		OIcon: typeof OIcon;
		OButton: typeof OButton;
		OLayout: typeof OLayout;
		OLayoutItem: typeof OLayoutItem;
		OCodeEditor: typeof OCodeEditor;
		OLayoutGrid: typeof OLayoutGrid;
	}

	interface ComponentCustomProps {
		id?: string;
		display?: boolean;
	}
}
