"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const fortnite_api_service_1 = require("./fortnite-api.service");
const sync_service_1 = require("./sync.service");
const sync_controller_1 = require("./sync.controller");
const cosmetics_module_1 = require("../cosmetics/cosmetics.module");
let SyncModule = class SyncModule {
};
exports.SyncModule = SyncModule;
exports.SyncModule = SyncModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, cosmetics_module_1.CosmeticsModule],
        controllers: [sync_controller_1.SyncController],
        providers: [fortnite_api_service_1.FortniteApiService, sync_service_1.SyncService],
    })
], SyncModule);
//# sourceMappingURL=sync.module.js.map