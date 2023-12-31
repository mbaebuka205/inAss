import { Router } from "express";
import {createStdntRec, deleteStdntRec, readRecbyCourse, readRecbyName, readRecbyScore, readStdntRec, updateStdntRec} from "../controller/schoolController"

const router:Router = Router()

router.route('/create-student').post(createStdntRec)
router.route('/read-student').get(readStdntRec)
router.route('/update-student/:studentID').patch(updateStdntRec)
router.route('/delete-student/:studentID').delete(deleteStdntRec)
router.route('/student-name/:name').get(readRecbyName)
router.route('/student-score/:examscore').get(readRecbyScore)
router.route('/student-course/:course').get(readRecbyCourse)

export default router;