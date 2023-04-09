import { Ticket } from "src/entities/tickets.entity";
import { User } from "src/entities/users.entity";

export default ()=>({
    DB: {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        entities:[User, Ticket],
        synchronize:process.env.DB_SYNCHRONIZE,
      }, 
});