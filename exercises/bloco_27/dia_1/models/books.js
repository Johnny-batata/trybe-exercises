const connection = require('../connection');

const getByAuthorId = async(id) => {
    const [books] = await connection.execute(
        `SELECT * FROM model_example.books WHERE author_id = ${id};`,
    );
    console.log(books)
    return books
}

const getBookByid = async(id) => {
    const [books] = await connection.execute(
        `SELECT * FROM model_example.books WHERE id = ${id};`,
    );
    console.log(books)
    return books
}

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books;',
    );
    return books
};
const verifyAuthorid =async (id) => {
     const [books] = await connection.execute(
    `SELECT * FROM model_example.books WHERE author_id = ${id}`,
    );
    if (!books) return false
    return true
}
      

const isValid = async(title, author_id) => {
    const verifyAuthor = await verifyAuthorid(author_id)

    if (!title || typeof title !== 'string') return false;
    if (title.length < 3) return false;
    if (!author_id || typeof author_id !== 'int') return false;
    if (verifyAuthor === false) return false;

    return true;
};

const create = async (title, author_id) => { 
    const [books] = await connection.execute(
        `INSERT INTO model_example.books (title, author_id) VALUES (${title}, ${author_id})`,
        );
        console.log('entrei', books) 
        return books
    }

module.exports = {
    getAll,
    getByAuthorId,
    getBookByid,
    isValid, 
    create
};