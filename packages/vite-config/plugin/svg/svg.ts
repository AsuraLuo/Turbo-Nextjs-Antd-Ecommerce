import { readFileSync, readdirSync } from 'fs'

const findSvgFile: Function = (dir: string) => {
  // 识别svg标签的属性
  const svgTitle: RegExp = /<svg([^>+].*?)>/
  // 有一些svg文件的属性会定义height和width，要把它清除掉
  const clearHeightWidth: RegExp = /(width|height)="([^>+].*?)"/g
  // 没有viewBox的话就利用height和width来新建一个viewBox
  const hasViewBox: RegExp = /(viewBox="[^>+].*?")/g
  // 清除换行符
  const clearReturn: RegExp = /(\r)|(\n)/g
  const svgRes: any[] = []

  const dirents = readdirSync(dir, {
    withFileTypes: true
  })

  for (const dirent of dirents) {
    const path: string = dir + dirent.name

    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(`${path}/`))
    } else {
      const svg: any = readFileSync(path)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, (_$1: any, $2: any) => {
          let width: number = 0
          let height: number = 0
          let content: string = $2.replace(clearHeightWidth, (_s1: any, s2: any, s3: any) => {
            s3 = s3.replace('px', '')

            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })

          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }

          return `<symbol id="${dirent.name.replace('.svg', '')}" ${content}>`
        })
        .replace('</svg>', '</symbol>')

      svgRes.push(svg)
    }
  }

  return svgRes
}

export const svgBuilder = (path: string) => {
  if (path === '') return

  const result: any[] = findSvgFile(path)

  return {
    name: 'svg-transform',
    transformIndexHtml: (html: string) => {
      return html.replace(
        '<body>',
        `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${result.join('')}
            </svg>
            <script>
              !(function(t) {
                function e() {
                  var e = this || self;
                  (e.globalThis = e), delete t.prototype._T_;
                }
                "object" !== typeof globalThis &&
                (this
                    ? e()
                    : (t.defineProperty(t.prototype, '_T_', {
                      configurable: !0,
                      get: e,
                    }),
                    _T_));
              })(Object);
            </script>
        `
      )
    }
  }
}
