"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
exports.app = (0, fastify_1.default)().withTypeProvider();
exports.app.register(cors_1.default, {
    origin: '*',
});
exports.app.register(swagger_1.default, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass.in',
            description: 'Especificações da API construida durante a Next Level Week RocketSeat',
            version: '1.0.0'
        }
    },
    transform: fastify_type_provider_zod_1.jsonSchemaTransform
});
exports.app.register(swagger_ui_1.default, {
    routePrefix: '/docs'
});
exports.app.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
exports.app.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
exports.app.get('/', () => {
    return 'Hello sunshine';
});
exports.app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP Server Running!');
});
