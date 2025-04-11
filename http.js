import { jwtDecode } from "jwt-decode";

class http {
  async post(url, body) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const status = await response.status;
    const data = await response.json();
    if (status >= 400) {
      throw data;
    }
    return { data, status };
  }
  async postWithToken(url, access, body) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }
  async get(url, access) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
  async delete(url, access, param) {
    const response = await fetch(`${url}${param}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.text();
    return data;
  }
  async put(url, access, param, body) {
    const response = await fetch(`${url}${param}/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const isExpired = jwtDecode(access).exp * 1000 < Date.now();
    const data = await response.json();
    return data;
  }
}
export default http;
