import { jwtDecode } from "jwt-decode";

function isTokenExpired(token) {
  try {
    const decodedTokenExp = jwtDecode(token).exp * 1000;
    const isExpired = Date.now() > decodedTokenExp;
    return isExpired;
  } catch (error) {
    return false;
  }
}

export default isTokenExpired;
