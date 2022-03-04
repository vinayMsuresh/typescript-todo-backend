import { applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer";
import createSagaMiddleware from "@redux-saga/core";

export const saga = createSagaMiddleware();
export const store = createStore(reducer,applyMiddleware(saga));

