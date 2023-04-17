"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgBuilder = void 0;
const fs_1 = require("fs");
const findSvgFile = (dir) => {
    // 识别svg标签的属性
    const svgTitle = /<svg([^>+].*?)>/;
    // 有一些svg文件的属性会定义height和width，要把它清除掉
    const clearHeightWidth = /(width|height)="([^>+].*?)"/g;
    // 没有viewBox的话就利用height和width来新建一个viewBox
    const hasViewBox = /(viewBox="[^>+].*?")/g;
    // 清除换行符
    const clearReturn = /(\r)|(\n)/g;
    const svgRes = [];
    const dirents = (0, fs_1.readdirSync)(dir, {
        withFileTypes: true
    });
    for (const dirent of dirents) {
        const path = dir + dirent.name;
        if (dirent.isDirectory()) {
            svgRes.push(...findSvgFile(`${path}/`));
        }
        else {
            const svg = (0, fs_1.readFileSync)(path)
                .toString()
                .replace(clearReturn, '')
                .replace(svgTitle, (_$1, $2) => {
                let width = 0;
                let height = 0;
                let content = $2.replace(clearHeightWidth, (_s1, s2, s3) => {
                    s3 = s3.replace('px', '');
                    if (s2 === 'width') {
                        width = s3;
                    }
                    else if (s2 === 'height') {
                        height = s3;
                    }
                    return '';
                });
                if (!hasViewBox.test($2)) {
                    content += `viewBox="0 0 ${width} ${height}"`;
                }
                return `<symbol id="${dirent.name.replace('.svg', '')}" ${content}>`;
            })
                .replace('</svg>', '</symbol>');
            svgRes.push(svg);
        }
    }
    return svgRes;
};
const svgBuilder = (path) => {
    if (path === '')
        return;
    const result = findSvgFile(path);
    return {
        name: 'svg-transform',
        transformIndexHtml: (html) => {
            return html.replace('<body>', `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${result.join('')}
            </svg>
        `);
        }
    };
};
exports.svgBuilder = svgBuilder;
