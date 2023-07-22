function AppReducer(state, action) {
  switch (action.type) {
    case "Sidebar":
      return { ...state, isSidebar: !state.isSidebar };
    case "Theme":
      return { ...state, theme: !state.theme };
    case "openModal":
      {
        const { target } = action.payload.e;
        const { modal } = target.dataset;
        if (modal) return { ...state, modal: modal };
      }
      break;
    case "closeModal":
      return { ...state, modal: false };
    case "DeleteBoard": {
      const filtered = state?.data?.boards?.filter((item) => {
        return action.payload.id === "/"
          ? item.name !== "Platform Launch"
          : action.payload.id  !== "/Roadmap"
          ? item.name !== "Roadmap"
          : item.name !== "Marketing Plan";
      })
      return { ...state, data: filtered };
    }
  }
}
export default AppReducer;
