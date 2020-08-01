const init = {
};

export default function (state = init, action) {
	switch (action.type) {
		case 'xx': {
			return {
				...state,
			};
		}
		default: {
			return state;
		}
	}
}
