"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCosmeticDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cosmetic_dto_1 = require("./create-cosmetic.dto");
class UpdateCosmeticDto extends (0, mapped_types_1.PartialType)(create_cosmetic_dto_1.CreateCosmeticDto) {
}
exports.UpdateCosmeticDto = UpdateCosmeticDto;
//# sourceMappingURL=update-cosmetic.dto.js.map