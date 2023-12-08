import { LayoutState } from './';

// Con esto es como en typescript creamos algo como los actions creators
type LayoutActionType =
	| { type: '[Layout] - OpenDrawer' }
	| { type: '[Layout] - OpenOrganization' };

export const layoutReducer = (
	state: LayoutState,
	action: LayoutActionType
): LayoutState => {
	switch (action.type) {
		case '[Layout] - OpenDrawer':
			return {
				...state,
				isOpenDrawer: !state.isOpenDrawer,
			};

		case '[Layout] - OpenOrganization':
			return {
				...state,
				isOpenOrganization: !state.isOpenOrganization,
			};

		default:
			return state;
	}
};
