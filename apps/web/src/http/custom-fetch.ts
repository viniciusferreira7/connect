// src/http/custom-fetch.ts

export const customFetch = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(url, options)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()

  if (!res.ok) {
    let error: unknown
    try {
      error = body ? JSON.parse(body) : {}
    } catch {
      error = body
    }
    throw error
  }

  return body ? JSON.parse(body) : ({} as T)
}
