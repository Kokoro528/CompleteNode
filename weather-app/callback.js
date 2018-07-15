var getUser = (id, callback) => {
        var user = {
                id,
                name:'vikram'
        };

        setTimeout(() => callback(user));
};

getUser(31, (userObject) => {
        console.log(userObject);
});
