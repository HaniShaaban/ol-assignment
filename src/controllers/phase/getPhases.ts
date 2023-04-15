import {PHASES_BATCH_LIMIT} from "../../config";
import {phasesData} from "../../dataStore/seed";
export const getPhases =  (_,{status, page  }) => {
    try {

        // Take into consideration pagination if needed
        const skip = PHASES_BATCH_LIMIT * page;

        // No filter is passed, return all data
        if(!status){
            return  phasesData.sort((a, b) => a.order - b.order);
        }

        // Return Phases based on its progress status
        return  phasesData.filter((el) => el.status === status)
            .sort((a, b) => a.order - b.order);
    }
    catch (e){
        console.log(e);
        return []
    }
}
