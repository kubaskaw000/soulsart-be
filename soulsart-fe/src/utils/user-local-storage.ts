export const setStoredUserId = (userId) => {
  localStorage.setItem("user", userId);
};

export const getStoredUserId = (userId) => {
  localStorage.getItem("user");
};
