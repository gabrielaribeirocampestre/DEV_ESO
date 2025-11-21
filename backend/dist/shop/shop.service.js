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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shop_item_entity_1 = require("./shop-item.entity");
const cosmetics_service_1 = require("../cosmetics/cosmetics.service");
let ShopService = class ShopService {
    constructor(repo, cosmetics) {
        this.repo = repo;
        this.cosmetics = cosmetics;
    }
    async create(dto) {
        var _a;
        const cosmetic = await this.cosmetics.findOne(dto.cosmeticId);
        if (!cosmetic)
            throw new common_1.NotFoundException('Cosmetic not found');
        const shopItem = this.repo.create({
            ...dto,
            price: (_a = dto.price) !== null && _a !== void 0 ? _a : cosmetic.price,
        });
        return this.repo.save(shopItem);
    }
    async generateDailyShop(totalItems, featuredItems) {
        const cosmetics = await this.cosmetics.findAll(1, 9999);
        if (cosmetics.total < totalItems)
            throw new Error('Not enough cosmetics to generate the shop');
        const shuffled = cosmetics.items.sort(() => Math.random() - 0.5);
        const main = shuffled.slice(0, totalItems);
        const featured = shuffled.slice(totalItems, totalItems + featuredItems);
        const created = [];
        for (const item of main) {
            created.push(await this.repo.save({
                cosmeticId: item.id,
                price: item.price,
                featured: false,
            }));
        }
        for (const item of featured) {
            created.push(await this.repo.save({
                cosmeticId: item.id,
                price: item.price,
                featured: true,
            }));
        }
        return created;
    }
    async getTodayShop() {
        const today = await this.repo.find({
            relations: ['cosmetic'],
            order: { id: 'DESC' },
            take: 100,
        });
        return today;
    }
    async findOne(id) {
        return this.repo.findOne({ where: { id }, relations: ['cosmetic'] });
    }
    async delete(id) {
        return this.repo.delete(id);
    }
};
exports.ShopService = ShopService;
exports.ShopService = ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shop_item_entity_1.ShopItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cosmetics_service_1.CosmeticsService])
], ShopService);
//# sourceMappingURL=shop.service.js.map