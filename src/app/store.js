import { configureStore } from "@reduxjs/toolkit";
import { addTopicReducer } from "../features/topics/topicsSlice";

export default configureStore({
	reducer: {
		addTopic: addTopicReducer,
	},
});
