"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmeticsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cosmetics_service_1 = require("./cosmetics.service");
const cosmetics_controller_1 = require("./cosmetics.controller");
const cosmetic_entity_1 = require("./cosmetic.entity");
let CosmeticsModule = class CosmeticsModule {
};
exports.CosmeticsModule = CosmeticsModule;
exports.CosmeticsModule = CosmeticsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cosmetic_entity_1.Cosmetic])],
        providers: [cosmetics_service_1.CosmeticsService],
        controllers: [cosmetics_controller_1.CosmeticsController],
        exports: [cosmetics_service_1.CosmeticsService],
    })
], CosmeticsModule);
//# sourceMappingURL=cosmetics.module.js.map