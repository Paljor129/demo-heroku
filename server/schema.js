export default `
    type Person {
        _id: String
        firstName: String!
        lastName: String!
        nickName: String
        birth: Int
        nationality: String
    }
    type Query {
        allPersons(firstName: String, nickName: String): [Person!]!
        getPerson(id: String!): Person!
    }
    type Mutation {
        createPerson(firstName: String!, 
            lastName: String!, 
            nickName: String,
            birth: Int,
            nationality: String
        ): Person!
        changeNickName(id: String!, nickName: String!):Person!
    }
`