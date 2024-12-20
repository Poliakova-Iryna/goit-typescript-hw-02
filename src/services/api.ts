import axios from 'axios';

interface UnsplashResponse {
    results: []; 
    total: number;
    total_pages: number;
}
  
export const fetchImages = async <T>(query: string, page: number, perPage = 12): Promise<T> => {
    const response = await axios.get<UnsplashResponse>(`https://api.unsplash.com/search/photos?client_id=eLd2wI29ERF9oySF8wmbyhOOjS7CZMZitvyMNYq8EE0`, {
      params: {
        query: query,
        page: page,
        per_page: perPage,
      },
    });
    
    return response.data as T;
};