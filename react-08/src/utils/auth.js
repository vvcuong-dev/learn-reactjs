export const requestLogin = async (data) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error("Error during login request:", error);
    throw error;
  }
};

export const saveToken = (token) => {
  localStorage.setItem("authToken", JSON.stringify(token));
};

export const getToken = () => {
  try {
    const raw = localStorage.getItem("authToken");
    if (!raw) return null;

    const token = JSON.parse(raw);

    if (token && token.access_token) {
      return token;
    }

    return null;
  } catch (error) {
    console.error("Error retrieving token from localStorage:", error);
    return null;
  }
};

export const removeToken = () => {
  localStorage.removeItem("authToken");
};
