// export { default } from './reducer';    // reducerf를 불러와서 default로 export함
// export * from './actions';              // 모든 액션 생성 함수를 불러와서 같은 이름으로 export
// export * from './types';

import { TodosState, TodosAction } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

// 초기값 설정
const initialState: TodosState = [
    { id: 1, text: '타입스크립트 배우기', done: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    { id: 3, text: '투두리스트 만들기', done: false }
];

// reducer 구현
const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, { payload: text }) =>
        state.concat({
            id: Math.max(...state.map(todo => todo.id)) + 1,
            text,
            done: false
        }),
    [TOGGLE_TODO]: (state, { payload: id }) =>
        state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) =>
        state.filter(todo => todo.id !== id)

});

export default todos;
export * from './actions';              // 모든 액션 생성 함수를 불러와서 같은 이름으로 export
export * from './types';