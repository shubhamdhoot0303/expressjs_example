//cookies all get set and delete method 

class StudentController{
  static set_cookie = (req,res) =>{
    res.cookie("username","shubham")
    res.cookie("username1","shubham1",{maxAge:10000})
    res.send("cookies set...")
  }      
  static get_cookie = (req,res) =>{
    console.log(req.cookies)
    res.send("cookies get...")
  }     
  static delete_cookie = (req,res) =>{
    res.clearCookie("username1")
    res.send("cookies delete...")
  }      
 }
 export default StudentController;