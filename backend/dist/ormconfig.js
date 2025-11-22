"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormconfig = void 0;
const user_entity_1 = require("./users/user.entity");
const cosmetic_entity_1 = require("./cosmetics/cosmetic.entity");
const user_cosmetic_entity_1 = require("./shop/user-cosmetic.entity");
const transaction_entity_1 = require("./shop/transaction.entity");
exports.ormconfig = {
    type: 'sqlite',
    database: process.env.DB_PATH || 'cosmetics_db.sqlite',
    entities: [user_entity_1.User, cosmetic_entity_1.Cosmetic, user_cosmetic_entity_1.UserCosmetic, transaction_entity_1.Transaction],
    synchronize: true,
};
//# sourceMappingURL=ormconfig.js.map