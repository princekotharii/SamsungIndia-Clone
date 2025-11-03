import jwt from "jsonwebtoken";

// to generate 
export async function generateAccessToken(data){
    try {
        // destructure data
        const {Email, _id} = data

        const accessToken =  jwt.sign({
            Email, _id
        }, process.env.JWT_SECRETS,{expiresIn: '7d'})
        console.log(accessToken , 'accessToken');
        
        const options = {
            httpOnly: true,
            expire: new Date(Date.now()+7*24*60*60*1000)
        }
        
        return {accessToken , options}

    } catch (error) {
        console.log(error);
    }
}