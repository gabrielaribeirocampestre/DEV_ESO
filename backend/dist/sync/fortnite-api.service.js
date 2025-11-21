"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortniteApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let FortniteApiService = class FortniteApiService {
    constructor(http) {
        this.http = http;
    }
    async getCosmetics() {
        const url = 'https://fortnite-api.com/v2/cosmetics/br';
        const response = await (0, rxjs_1.firstValueFrom)(this.http.get(url));
        const items = response.data.data.map(item => {
            var _a, _b, _c, _d, _e, _f;
            return ({
                name: item.name,
                description: item.description || 'No description',
                price: 1000,
                rarity: (_b = (_a = item.rarity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null,
                type: (_d = (_c = item.type) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : null,
                imageUrl: ((_e = item.images) === null || _e === void 0 ? void 0 : _e.icon) || ((_f = item.images) === null || _f === void 0 ? void 0 : _f.smallIcon) || '',
            });
        });
        return items;
    }
};
exports.FortniteApiService = FortniteApiService;
exports.FortniteApiService = FortniteApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], FortniteApiService);
//# sourceMappingURL=fortnite-api.service.js.map