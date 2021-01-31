export const schema = gql`
  type Post {
    id: Int!
    bodyText: String!
    createdAt: DateTime!
    Project: Project
    projectId: Int
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    bodyText: String!
    projectId: Int
  }

  input UpdatePostInput {
    bodyText: String
    projectId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
