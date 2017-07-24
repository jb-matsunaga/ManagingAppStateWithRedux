export function selectBook(book) {
    // selectBookはActionCreatorであり、アクションを返す必要がある
    // typeプロパティを持つオブジェクト
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}