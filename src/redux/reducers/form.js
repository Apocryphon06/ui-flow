let initial_state = [
  {
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    usage: "",
  },
];

const formReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "FULL_NAME_AND_DISPLAY_NAME":
      return {
        ...state,
        fullName: action.payload1,
        displayName: action.payload2,
      };

    case "WORKSPACE_NAME_AND_URL":
      return {
        ...state,
        workspaceName: action.payload1,
        workspaceURL: action.payload2,
      };

    case "USAGE":
      return {
        ...state,
        usage: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
