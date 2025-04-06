import api from "../api/axios";


export async function login(email: string, password: string) {
  try {
    const response = await api.post("/api/login", {
      email,
      password, 
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export async function register(email: string, password: string) {
    try {
      const response = await api.get("/api/register", {
        params: {
          email,
          password,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }