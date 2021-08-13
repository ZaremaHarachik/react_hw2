let url = "https://jsonplaceholder.typecode.com/users";

const getUsers = () => {
    return fetch(url)
    .then(value => value.json());
};
const getUser = async(id) => {
    let user = await fetch(url + '/' + id)
        .then(value => value.json());
    return user
}

export {getUsers,getUser};