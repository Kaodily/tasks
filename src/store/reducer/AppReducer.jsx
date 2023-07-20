function AppReducer(state, action) {
  switch (action.type) {
    case "Sidebar":
      return { ...state, isSidebar: !state.isSidebar };
    case "Theme":
      return { ...state, theme: !state.theme };
  }
}
export default AppReducer;
