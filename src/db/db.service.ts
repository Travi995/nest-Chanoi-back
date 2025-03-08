import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',        
        host: 'localhost',        
        port: parseInt(process.env.DB_PORT ?? '5432') ,
        username: process.env.DB_USER,   
        password: process.env.DB_PASSWORD,  
        database: process.env.DB_NAME,   
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,        // ¡Cuidado en producción!
        // logging: true,
      });

      return dataSource.initialize();
    },
  },
];
