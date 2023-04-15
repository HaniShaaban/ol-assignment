import {ApolloError, UserInputError} from "apollo-server";
import {Task} from "../../types/task.type";
import {findTaskByID} from "../../helpers/tasks";
import {PROGRESS_STATUS} from "../../helpers/enum";
import {findPhaseByID, isCurrentPhaseDone} from "../../helpers/phases";

export const reopenTask = (_,{taskID}) => {
    try {
        if (!taskID) {
            return new UserInputError('Task ID was not provided');
        }

        const task : Task = findTaskByID(taskID);
        if (!task) {
            return new UserInputError('Could not load Task');
        }
        if(task.status !== PROGRESS_STATUS.COMPLETED){
            return new UserInputError('Could not reopen an unfinished Task');
        }

        const { phase } = task;
        // Update Task Status
        task.status = PROGRESS_STATUS.REOPENED;
        isCurrentPhaseDone(phase);
        const currentPhase = findPhaseByID(phase);
        //Reopen phase if it was marked as completed
        if(currentPhase.status === PROGRESS_STATUS.COMPLETED){
            currentPhase.status = PROGRESS_STATUS.REOPENED;
        }


        return task;
    }
    catch (e){
        //Should be reported - ex: Sentry, Winston
        console.log(e);
        return new ApolloError('Error has occurred')
    }
}
