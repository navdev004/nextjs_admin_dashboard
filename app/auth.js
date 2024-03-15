import NextAuth from 'next-auth';


import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from './lib/utils';
import { User } from './lib/models';
import { authConfig } from './authconfig';
import bcrypt from 'bcryptjs'


const login = async(credentials)=>{
    try {
        connectToDB();
        const user = await User.findOne({ username:credentials.username});

        if(!user) throw new Error("Wrong credentials!");

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if(!isPasswordCorrect) throw new Error("Wrong credentials!");

        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login!");
    }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ]
})
 
