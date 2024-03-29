import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const isActiveState = atom({
  key: "isActiveState",
  default: false,
});

export const todayState = atom({
  key: "todayState",
  default: [],
});

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});
