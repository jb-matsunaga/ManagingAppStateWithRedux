import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;

// すべてのreducerはそのactionを処理し、新しいstateを返す 
// 新しいstateが組み立てられる 
// コンテナにstateの変更を通知する 
// 通知では、コンテナが新しいpropsで再レンダリングされる
