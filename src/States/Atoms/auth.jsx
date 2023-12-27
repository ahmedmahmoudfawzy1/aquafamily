import { atom } from "recoil";

const oldData = localStorage.getItem("loogedinUser");

export const authData = atom({
  key: "auth",
  default: {
    isAuth: oldData ? true : false,
    userId: oldData ? oldData.id : null,
  },
});
