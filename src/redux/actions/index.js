export const setNameDisplayName = (fullname, nickname) => {
  return {
    type: "FULL_NAME_AND_DISPLAY_NAME",
    payload1: fullname,
    payload2: nickname,
  };
};

export const setWorkspaceNameAndURL = (wrkname, wrkurl) => {
  return {
    type: "WORKSPACE_NAME_AND_URL",
    payload1: wrkname,
    payload2: wrkurl,
  };
};

export const setUsage = (usg) => {
  return {
    type: "USAGE",
    payload: usg,
  };
};
