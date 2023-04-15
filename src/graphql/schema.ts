import {gql} from "apollo-server";
export const typeDefs = gql`
    enum PROGRESS_STATUS {
        PENDING
        REOPENED
        COMPLETED
    }
    
    type Phase {
        id: ID!
        name: String!
        order: Int
        status: PROGRESS_STATUS
        tasks: [Task]!
    }
    
    type Task {
        id: ID!
        name: String!
        phase: Phase!
        status: PROGRESS_STATUS!
    }
    
    input CreatePhaseInput {
        # we should also add order field, if its below
        # what we already have we would push other
        # not implement for the sake of simplicity
        name: String!
    }
    
    input CreateTaskInput{
        name: String!
        phase: String!
    }

    type Query {
        phases(status: PROGRESS_STATUS, page: Int = 1):[Phase]!   
        tasks(status: PROGRESS_STATUS, page: Int = 1): [Task]!
    }
    
    type Mutation {
        createPhase(input: CreatePhaseInput!): Phase!
        createTask(input: CreateTaskInput!): Task!
        finishTask(taskID: ID!): Task!
        reopenTask(taskID: ID!): Task!
    }
`;
