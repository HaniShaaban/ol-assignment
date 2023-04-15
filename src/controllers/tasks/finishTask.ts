import {ApolloError, UserInputError} from "apollo-server";
import {Task} from "../../types/task.type";
import {findTaskByID} from "../../helpers/tasks";
import {checkIfPreviousPhasesDone, isCurrentPhaseDone} from "../../helpers/phases";
import {PROGRESS_STATUS} from "../../helpers/enum";

export const finishTask = (_,{taskID}) => {
    try{
        if (!taskID) {
            return new UserInputError('Task ID was not provided');
        }

        const task : Task = findTaskByID(taskID);
        if (!task) {
            return new UserInputError('Could not load Task');
        }
        const { phase } = task;
        // Check if there are any pending tasks from previous phase
        const arePreviousPhasesDone = checkIfPreviousPhasesDone(phase);
        if (!arePreviousPhasesDone) {
            return new UserInputError(
                'All tasks from previous phases must be completed before moving to next phase',
            );
        }
        task.status = PROGRESS_STATUS.COMPLETED;
        isCurrentPhaseDone(phase);
        return task;
    }
    catch (e){
        //Should be reported - ex: Sentry, Winston
        console.log(e);
        return new ApolloError('Error has occurred')
    }
}
