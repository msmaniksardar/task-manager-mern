import { app } from "./app.js";
import { PORT } from "./config/config.js";
import { DATABASE_CONNECTION } from './config/databaseConfig.js';




app.listen(PORT , async()=>{
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
   await DATABASE_CONNECTION();
}); 