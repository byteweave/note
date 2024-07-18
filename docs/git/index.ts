const path = "/git";
import { git_scm } from "../git_scm";
export const git = () => {
  return [{ text: "Git", link: path + "/" }, ...git_scm()];
};
