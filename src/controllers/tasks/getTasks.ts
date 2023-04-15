import { tasksData} from "../../dataStore/seed";
import {TASKS_BATCH_LIMIT} from "../../config";

export const getTasks =  (_,{status, page = 1 }) => {
    try {
        // Take into consideration pagination if needed
        // We can achieve Skip & Take
        const skip = TASKS_BATCH_LIMIT * page;

        // No filter is passed, return all data
        if(!status){
            return  tasksData
        }

        // Return Phases based on its progress status
        return  tasksData.filter((el) => el.status === status);
    }
    catch (e){
        console.log(e);
        return []
    }
}
