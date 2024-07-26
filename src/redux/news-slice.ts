import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Article } from '../models/article'
import { RootState } from '../app/store'
import axios from 'axios'


const newApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    "Authorization": import.meta.env.VITE_APP_NEW_API_KEY,
  },
  params: {
    "language": "en",
    "pageSize": 50,
  }
});

// Slice state
export interface NewsState {
  categoriesArticles: [
    Article[],
    Article[],
    Article[],
    Article[],
    Article[],
    Article[],
    Article[],
    Article[],
  ],
  isLoading: boolean,
  searchArticles: Article[],
  isSearching: boolean,
  error: Error | null
}

// Initial state
const initialState: NewsState = {
  categoriesArticles: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  isLoading: false,
  searchArticles: [],
  isSearching: false,
  error: null
}

export const categories = [
  'India',
  'World',
  'Business',
  'Entertainment',
  'Health',
  'Science',
  'Sports',
  'Technology'
];

const categoryParams = [
  { "country": "in" },
  {},
  { "country": "in", "category": "business" },
  { "country": "in", "category": "entertainment" },
  { "country": "in", "category": "health" },
  { "country": "in", "category": "science" },
  { "country": "in", "category": "sports" },
  { "country": "in", "category": "technology" },
];

interface GetCategoriesArticlesPayload {
  categoryIndex: number;
  articles: Article[];
}

export const getCategoriesArticles
  : AsyncThunk<GetCategoriesArticlesPayload, number, any> = createAsyncThunk(
    "news/getCategoriesArticles",
    async (categoryIndex: number) => {
      const response = await newApi.get(
        "/top-headlines",
        { params: categoryParams[categoryIndex]},
      );
      return { categoryIndex: categoryIndex, articles: response.data.articles as Array<Article>};
    }
  );



export const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoriesArticles.pending, (state) => { state.isLoading = true });
    builder.addCase(getCategoriesArticles.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.error = null;
      const { categoryIndex, articles } = actions.payload;
      state.categoriesArticles[categoryIndex] = articles;
    });
    builder.addCase(getCategoriesArticles.rejected, (state, actions) => {
      state.isLoading = false
      state.error = actions.payload as Error;
    });

  },
});

export const { } = newsSlice.actions;

export const categoriesArticles = (state: RootState) => state.news.categoriesArticles;

export default newsSlice.reducer;