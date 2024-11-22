export const scrollIntoView = (id: string, offsetHeight?: any) => {
     const url = new URL(window.location.href)
     const hash = url.hash
     if (hash !== '') {
          const urlHash = hash.slice(1)
          if (urlHash === id) {
               const element: any = document.querySelector(`#${id}`)
               if (element) {
                    let targetOffset = element.offsetTop
                    if (offsetHeight) {
                         targetOffset -= window.innerHeight * offsetHeight
                    }
                    window.scrollTo({
                         top: targetOffset,
                         behavior: 'smooth',
                    })
               }
          }
     }
}
