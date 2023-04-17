"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpProxy = void 0;
const proxy = __importStar(require("http2-proxy"));
const error = (message) => {
    throw new Error(message);
};
const httpProxy = (configOptions) => {
    const configure = ({ middlewares }) => {
        const result = Object.entries(configOptions);
        for (const [regexp, { target, rewrite, headers, secure = true }] of result) {
            const re = new RegExp(regexp);
            const tu = new URL(target);
            if (!tu.pathname.endsWith('/')) {
                tu.pathname += '/';
            }
            const protocol = /^https?:$/.test(tu.protocol)
                ? tu.protocol.slice(0, -1)
                : error(`Invalid protocol: ${tu.href}`);
            const port = 
            // eslint-disable-next-line no-nested-ternary
            tu.port === ''
                ? { https: 443, http: 80 }[protocol]
                : /^\d+$/.test(tu.port)
                    ? Number(tu.port)
                    : error(`Invalid port: ${tu.href}`);
            middlewares.use((req, res, next) => {
                if (req.url && re.test(req.url)) {
                    const url = (rewrite?.(req.url) ?? req.url).replace(/^\/+/, '');
                    const { pathname, search } = new URL(url, tu);
                    proxy.web(req, res, {
                        protocol,
                        port,
                        hostname: tu.hostname,
                        path: pathname + search,
                        onReq: async (_, options) => {
                            options.headers = {
                                ...options.headers,
                                ...headers
                            };
                        },
                        ['rejectUnauthorized']: secure
                    }, (err) => err && next(err));
                }
                else {
                    next();
                }
            });
        }
    };
    return {
        name: 'http2-proxy',
        configureServer: configure,
        configurePreviewServer: configure
    };
};
exports.httpProxy = httpProxy;
