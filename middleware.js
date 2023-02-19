module.exports = reqFilter = (req, resp, next) => {
  if(!req.query.age){
    resp.send("Please peovide age");
  } else if(req.query.age < 18){
    resp.send("Your are too young to access this page");
  } else {
    next();
  }
};

