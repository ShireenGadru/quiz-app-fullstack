import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, ISelectedOptions } from "../types/Questions.types";
import axios from "axios";

interface IQuestionsState {
  questionsList: IQuestion[];
  loading: boolean;
  error: string;
  currentIndex: number;
  selectedOptions: ISelectedOptions[];
}

const initialState: IQuestionsState = {
  questionsList: [],
  loading: false,
  error: "",
  currentIndex: 0,
  selectedOptions: [],
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (quizType: "react" | "js", { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/quiz/${quizType}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    updateSelectedOptions: (state, action: PayloadAction<ISelectedOptions>) => {
      state.selectedOptions.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questionsList = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updateSelectedOptions } = questionsSlice.actions;
export default questionsSlice.reducer;
