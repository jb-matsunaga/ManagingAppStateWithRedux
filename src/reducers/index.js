import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;

// すべてのreducerはそのactionを処理し、新しいstateを返す 
// 新しいstateが組み立てられる 
// コンテナにstateの変更を通知する 
// 通知では、コンテナが新しいpropsで再レンダリングされる
