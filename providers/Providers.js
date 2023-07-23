'use client'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
}
from '@apollo/client'

const Providers = ({children}) => {
    const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache() //কুয়েরিকে ক্যাশ করতে ব্যবহার করা হচ্ছে
    })
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default Providers