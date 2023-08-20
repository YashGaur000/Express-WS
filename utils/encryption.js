import bcrypt from 'bcrypt';
export const Hashing={
    Salt : 10,
    Hashpwd(plaintxt){
        return bcrypt.hashSync(plaintxt, this.Salt);
    },
    Comparepwd(plainpassword, dbpassword){
        return bcrypt.compareSync(plainpassword, dbpassword);
    }
}