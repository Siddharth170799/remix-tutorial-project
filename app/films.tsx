import axios from "axios";

export type Film={
    id:string;
    title:string;
    original_title:string;
    description:string;
    image:string;
    movie_banner:string;
    people:string[];
    item:string
}
export async function getFilms() {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9");
        return response
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { error: "Failed to fetch movies" };
    }
}