import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return(
                <li 
                  key={book.title}
                  onClick={() => this.props.selectBook(book)}
                  className="list-group-item">
                  {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // 返されたものは何でもBookListの中のpropsとして表示
    return {
        books: state.books
    };
}

// この関数から返されたものは、BookListコンテナのpropsとして終了する
function mapDispatchToProps(dispatch) {
    // selectBookが呼び出されると、結果はすべてのreducerに渡される
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// BookListをコンポーネントからコンテナに昇格する
// - この新しいdispatchメソッド,selectBookについて知る必要がある
// それをpropとして利用可能にする
export default connect(mapStateToProps, mapDispatchToProps)(BookList);