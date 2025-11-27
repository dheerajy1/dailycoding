import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.SERVER_URL || "https://dummyjson.com",
  timeout: 10000,
});

// OPTIONAL: add interceptors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Normalize error for easier handling downstream
    return Promise.reject({
      message: error?.response?.data?.message || error.message,
      status: error?.response?.status || 500,
      data: error?.response?.data || null,
    });
  }
);

// Wrapped GET to handle Next.js tags
type NextOptions = { tags?: string[] };
export async function get<T = any>(
  url: string,
  config?: AxiosRequestConfig & { next?: NextOptions }
): Promise<T> {
  if (config?.next) {
    // Use fetch if `next` is provided
    const baseURL = api.defaults.baseURL || "";
    const fullUrl = baseURL + url; // prepend baseURL

    const res = await fetch(fullUrl, {
      method: "GET",
      headers: config?.headers as Record<string, string> | undefined,
      cache: "force-cache",  
      next: { tags: config.next.tags },
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw { message: data.message || res.statusText, status: res.status, data };
    }

    return res.json();
  }

  // Fallback to Axios
  const response = await api.get<T>(url, config);
  return response.data;
}