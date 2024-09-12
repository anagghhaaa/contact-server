const jsonServer=require('json-server')
const contactserver=jsonServer.create()

const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')

contactserver.use(middleware);
contactserver.use(router)

const PORT=3000 || process.env.PORT

contactserver.listen(PORT,()=>{
    console.log("Server Running at:" +PORT);
    
})