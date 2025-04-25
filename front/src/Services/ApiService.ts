const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

/**
 * Methode générique permettant d'effectuer des requètes POST à l'API
 * @param endpoint
 * @param body 
 * @returns Réponse de l'API sérialiser en T
 */
export const PostRequest = async <T>(endpoint: string, body: unknown, token?: string, method: string = "POST"): Promise<T> => {
  try {
   const uri = API_BASE_URI + endpoint;
   const headers: HeadersInit = {
     "Content-Type": "application/json",
   };

   if (token) headers["Authorization"] = `Bearer ${token}`;

   const response = await fetch(uri, {
     method: method,
     headers,
     body: JSON.stringify(body),
   });

   if (!response.ok) throw new Error("Une erreur inconnue est survenue.");

   return await response.json();
   
  } catch (error) {
   console.error(error);
   throw error;
  }
};

export const PutRequest = async <T>(endpoint: string, body: unknown, token?: string): Promise<T> => {
  return PostRequest(endpoint, body, token, "PUT");
}


