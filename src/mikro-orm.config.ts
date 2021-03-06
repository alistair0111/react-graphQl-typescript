import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from '@mikro-orm/core';
import path from 'path';


export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), 
        pattern: /^[\w-]+\d+\.[tj]s$/,
        wrap: true, 
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    user:'alistair7',
    password: 'alistair7',
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];