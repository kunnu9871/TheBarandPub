import bcrypt from 'bcrypt';

// encrypt the password....

const encryptedPassword = (password)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};


//compare password......

const compare_password = (given_password, password)=>{
    console.log('inside compare function')
    return bcrypt.compareSync(given_password, password, (error)=>{
        console.log(error)
    });
};



export {encryptedPassword, compare_password};