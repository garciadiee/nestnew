import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

export const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
};