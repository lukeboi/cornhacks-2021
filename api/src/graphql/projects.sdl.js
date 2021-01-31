export const schema = gql`
  type Project {
    id: Int!
    name: String!
    user: User!
    userId: Int!
    posts: [Post]!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project
  }

  input CreateProjectInput {
    name: String!
    userId: Int!
  }

  input UpdateProjectInput {
    name: String
    userId: Int
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`
