import { createSlice, configureStore } from "@reduxjs/toolkit";

const options = {
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
                state.topics.id: {
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.paylaod.icon,
                    quizIds: [],
                }
            }
        }
    }


const topicsSlice = createSlice(options);

export {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;