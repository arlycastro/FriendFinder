var path =require ("path")
    
module.exports = function (app) {
  app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "../PUBLIC/survey.html"));
})
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname,"../PUBLIC/home.html"))
})
};
