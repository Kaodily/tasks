function AppReducer(state, action) {
  switch (action.type) {
    case "Sidebar":
      return { ...state, isSidebar: !state.isSidebar };
    case "Theme":
      return { ...state, theme: !state.theme };
    case "openModal":
      {
        // if (typeof window != "undefined" && window.document) {
        //   document.body.style.overflow = "hidden";
        // }
        const { target } = action.payload.e;
        const { modal } = target.dataset;
        if (modal) return { ...state, modal: modal };
      }
      break;
    case "closeModal": {
      //  if (!state.modal) {
      //   document.body.style.overflow = "unset";
      // }

      return { ...state, modal: false };
    }
    case "DeleteBoard": {
      const id = action.payload.id;
      console.log(id);
      const filtered = state?.data?.filter((item) => id !== item.name);
      return { ...state, data: filtered };
    }

    case "changeLink": {
      const task = action.payload.id;
      const newState =
        task === "Platform Launch"
          ? {
              ...state,
              tasks: {
                "Platform Launch": true,
                "Marketing Plan": false,
                Roadmap: false,
              },
            }
          : task === "Marketing Plan"
          ? {
              ...state,
              tasks: {
                "Platform Launch": false,
                "Marketing Plan": true,
                Roadmap: false,
              },
            }
          : {
              ...state,
              tasks: {
                "Platform Launch": false,
                "Marketing Plan": false,
                Roadmap: true,
              },
            };
      return newState;
    }
    case "filteredTask": {
      console.log("helllo");
      const task = action.payload.id;
      return { ...state, filtered: task };
    }
  }
}
export default AppReducer;
