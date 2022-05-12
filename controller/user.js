const data=require("../courses.json")
const fs=require("fs")

Get_cources=(req,res)=>{
    res.send(data)
}
get_id_cources=((req,res)=>{
    const { id }=req.params;
    const course_found=data.find((course)=>course.id==id)
    if(course_found){
        res.send(course_found)        
    }else{
        res.send("tha course with givan id ${res.params.id")
    }
})

courses_update=((req,res)=>{
    const { id }=req.params;
    const course_found=data.find((course)=>course.id==id)
    if(course_found){
        course_found.name=req.body.name
        course_found.logo=req.body.logo
        course_found.notes=req.body.notes
        course_found.days_to_complete=req.body.days_to_complete
        course_found.short_description=req.body.short_description
        course_found.type=req.body.type
        course_found.course_type=req.body.course_type
        course_found.lang_available=req.body.lang_available
        fs.readFileSync("courses.json",JSON.stringify(data,null,4))
        res.send("yes")

    }else{
        res.send("tha course with givan id ${res.params.id")
    }
})

cources_delete=(req, res) => {
    const { id } = req.params;
    Data = data.filter((course) => course.id !== id)
    if (Data) {
        fs.writeFileSync('courses.json', JSON.stringify(Data, null, 4));
        res.send('cource with id ${id} deletd from the database')
    }else{
        res.send("Data is not Deleted")
    }
}

course_post=(req, res) => {
    cdict = {
        id:req.body.id,
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:req.body.lang_available
        };
        data.push(dict)
    fs.writeFileSync('courses.json', JSON.stringify(data, null, 4));
    res.send('new cource ${ New_cource.name} has been added to you database succesfully.')
}

module.exports={Get_cources,get_id_cources,courses_update,cources_delete,course_post}
