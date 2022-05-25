export default (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE_TO_FAVORITES':
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case 'REMOVE_RECIPE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
