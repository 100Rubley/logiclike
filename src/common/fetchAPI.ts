const checkRes = (res: Response) => res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const fetchAPI = <T>(url: string): Promise<T> => {
  return fetch(url).then(checkRes).then(res => res as Promise<T>) 
}

