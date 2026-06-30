import { jwtDecode } from "jwt-decode";

class http {
  async post(url, body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const status = await response.status;
      const data = await response.json();
      if (!response.ok) throw data;
      return { data, status };
    } catch (err) {
      const error = {
        name: err.name ?? "Unknwown error",
        status: err.status ?? 500,
        message: err.message ?? "If problem persists, contact the support team",
      };
      return error;
    }
  }
  async postWithToken(url, token, body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) throw data;

      return { data, status: response.status };
    } catch (err) {
      const error = {
        name: err.name ?? "Unknwown error",
        status: err.status ?? 500,
        message: err.message ?? "If problem persists, contact the support team",
      };
      return error;
    }
  }
  async get(url, token) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        cache: "force-cache",
      });
      const data = await response.json();
      if (!response.ok) throw data;
      return { data, status: response.status };
    } catch (err) {
      const error = {
        name: err.name ?? "Unknwown error",
        status: err.status ?? 500,
        message: err.message ?? "If problem persists, contact the support team",
      };
      return error;
    }
  }
  async delete(url, access, param) {
    try {
      const response = await fetch(`${url}/${param}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) throw data;
      return { data, status: response.status };
    } catch (err) {
      const error = {
        name: err.name ?? "Unknwown error",
        status: err.status ?? 500,
        message: err.message ?? "If problem persists, contact the support team",
      };
      return error;
    }
  }
  async patch(url, access, param, body) {
    try {
      const response = await fetch(`${url}/${param}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (!response.ok) throw data;
      return { data, status: response.status };
    } catch (err) {
      const error = {
        name: err.name ?? "Unknwown error",
        status: err.status ?? 500,
        message: err.message ?? "If problem persists, contact the support team",
      };
      return error;
    }
  }

  async upload(url, token, body) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      });

      const data = await response.json();

      if (!response.ok) throw data;

      return { data, status: response.status };
    } catch (err) {
      const error = {
        name: err.name ?? "Unknwown error",
        status: err.status ?? 500,
        message: err.message ?? "If problem persists, contact the support team",
      };
      return error;
    }
  }
}

const {
  post,
  postWithToken,
  get,
  patch,
  delete: deleteEntry,
  upload,
} = http.prototype;

export { post, postWithToken, get, patch, deleteEntry, upload };
