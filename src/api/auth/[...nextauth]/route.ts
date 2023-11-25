import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const handler=NextAuth({
   secret:"anysfklksdlksdmk",
    providers:[
        GoogleProvider({
    clientId:"363414656898-m3v1fcfdlovvgtu7rladqjrp87f72nnc.apps.googleusercontent.com",
    
    clientSecret:"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"
})

    ]

})

export {handler as GET, handler as POST}