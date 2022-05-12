const express = require("express");
const router = express.Router();
const coursedata = require("../controller/user")

router.get("/course",coursedata.Get_cources)
router.get("/course/:id",coursedata.get_id_cources)
router.put("/course/update/:id",coursedata.courses_update)
router.delete("/course/delete/:id",coursedata.cources_delite)
router.post("/course/post",coursedata.course_post)

module.exports=router