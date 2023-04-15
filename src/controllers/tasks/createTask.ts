import {ApolloError, UserInputError} from "apollo-server";
import {CreateTaskInput, Task} from "../../types/task.type";
import {findPhaseByID} from "../../helpers/phases";
import {PROGRESS_STATUS} from "../../helpers/enum";
import {generateTaskID} from "../../helpers/tasks";
import {tasksData} from "../../dataStore/seed";

export const createTask =  (_,{input}) => {
    try{
        const { name, phase } : CreateTaskInput = input;
        const desiredPhase = findPhaseByID(phase);
        if (!desiredPhase) {
            return  new UserInputError('Cannot add Task to a phase that does not exist' +
                'Consider creating a phase or selecting a phase that exists')
        }
        if(desiredPhase.status === PROGRESS_STATUS.COMPLETED){
            return  new UserInputError('Cannot add Task to a completed Phase')
        }
        // Getting last id in order to create the newly added task,
        // for simplicity im using small numbers to test
        const generatedID = generateTaskID()
        const payload: Task = {
            status: PROGRESS_STATUS.PENDING,
            id: generatedID,
            name,
            phase
        };
        tasksData.push(payload);
        return payload;
    }
    catch (e){
        //Should be reported - ex: Sentry, Winston
        console.log(e);
        return new ApolloError('Error has occurred')
    }
}
