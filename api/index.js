import micro from 'micro';


export default micro((req, res) => {
    return {
        status: 'success',
        message: 'hello world!',
    };
});
