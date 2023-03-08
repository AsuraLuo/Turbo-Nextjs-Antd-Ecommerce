import { useEffect } from 'react'

export const useDebug = () => {
  // No developer devtool
  useEffect(() => {
    // ;(function () {
    //   let callbacks = [],
    //     timeLimit = 50
    //   open = false
    //   const loop = () => {
    //     const startTime = new Date()
    //     debugger
    //     if (new Date() - startTime > timeLimit) {
    //       if (!open) {
    //         callbacks.forEach(function (fn) {
    //           fn.call(null)
    //         })
    //       }
    //       open = true
    //       window.stop()
    //       alert('别看啦!')
    //       window.location.reload()
    //     } else {
    //       open = false
    //     }
    //   }
    //   // setInterval(loop, 1)
    //   return {
    //     addListener: (fn: any) => {
    //       callbacks.push(fn)
    //     },
    //     cancleListenr: (fn: any) => {
    //       callbacks = callbacks.filter(function (v) {
    //         return v !== fn
    //       })
    //     }
    //   }
    // })().addListener(() => {
    //   window.location.reload()
    // })
  }, [])

  // No 键盘检测和右键
  useEffect(() => {
    const handleWindowLoad = () => {
      // 屏蔽键盘事件
      document.onkeydown = (e: KeyboardEvent) => {
        // F12
        if (e.keyCode === 123) {
          return false
        }
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
          return false
        }
        // Shift+F10
        if (e.shiftKey && e.keyCode === 121) {
          return false
        }
        // Ctrl+U
        if (e.ctrlKey && e.keyCode === 85) {
          return false
        }
      }

      // 屏蔽鼠标右键
      document.oncontextmenu = () => {
        return false
      }
    }

    handleWindowLoad()
  }, [])

  return {}
}
