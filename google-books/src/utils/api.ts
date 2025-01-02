export async function fetchBooks(query: string): Promise<any[]> {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    if (!apiKey) {
      console.error("API key is missing!");
      return [];
    }
  
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`API error: ${response.status}`);
        return [];
      }
  
      const data = await response.json();
      console.log("Fetched data:", data);
      return data.items || [];
    } catch (error) {
      console.error("Fetch failed:", error);
      return [];
    }
  }
  