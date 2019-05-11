import Vue from "vue";

export const userKey = "0c8ee0e570bc6c3c4306be7c73099aec";
export const baseApiUrl = "http://localhost:3000/api";

export function showError(e) {
  if (e && e.response && e.response.data) {
    Vue.toasted.global.defaultError({ msg: e.response.data });
  } else if (typeof e === "string") {
    Vue.toasted.global.defaultError({ msg: e });
  } else {
    Vue.toasted.global.defaultError();
  }
}

export default { baseApiUrl, showError, userKey };
