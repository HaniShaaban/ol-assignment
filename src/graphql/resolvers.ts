import {phasesData, tasksData} from "../dataStore/seed";
import {getPhases} from "../controllers/phase/getPhases";
import {getTasks} from "../controllers/tasks/getTasks";
import {createPhase} from "../controllers/phase/createPhase";
import {createTask} from "../controllers/tasks/createTask";
import {finishTask} from "../controllers/tasks/finishTask";
import {reopenTask} from "../controllers/tasks/reopenTask";

export const resolvers = {
    Query: {
        phases: getPhases,
        tasks: getTasks
    },
    Mutation:{
        createPhase,
        createTask,
        finishTask,
        reopenTask
    },
    Phase: {
        tasks(phase) {
            return tasksData.filter((el) => el.phase === phase.id)
        }
    },
    Task:{
        phase(task){
            return phasesData.find((el) => el.id === task.phase)
        }
    }
};
