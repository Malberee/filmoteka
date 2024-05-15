import {
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit'
import { AuthState } from './types'
import {
  initAuth,
  auth,
  logOut,
  fetchLibrary,
  libraryAction,
} from './operation'

const initialState: AuthState = {
  email: null,
  id: null,
  library: [],
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logOut.fulfilled, (state) => {
        state.email = null
        state.id = null
        state.library = []
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.library = action.payload
      })
      .addCase(libraryAction.fulfilled, (state, action) => {
        if (typeof action.payload === 'object') {
          state.library = [action.payload, ...state.library]

          return
        }

        state.library = state.library.filter(
          (movie) => movie.id !== action.payload
        )
      })
      .addMatcher(
        isPending(initAuth, auth, logOut, fetchLibrary, libraryAction),
        (state) => {
          state.error = null
          state.isLoading = true
        }
      )
      .addMatcher(isFulfilled(initAuth, auth), (state, action) => {
        const { email, id, library } = action.payload

        state.email = email
        state.id = id
        state.library = library
      })
      .addMatcher(
        isFulfilled(initAuth, auth, logOut, fetchLibrary, libraryAction),
        (state) => {
          state.isLoading = false
        }
      )
      .addMatcher(
        isRejectedWithValue(
          initAuth,
          auth,
          logOut,
          fetchLibrary,
          libraryAction
        ),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const userReducer = userSlice.reducer
