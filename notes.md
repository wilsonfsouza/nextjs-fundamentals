## Client Boundary and Component chain (composition)

The only way a server component can be chained and used inside a client component/boundary is by defining `children` inside of a client component. If I add a component directly inside of a client component, it will be converted to cliend component by the client boundary. --> Islands Architecture pattern

The goal here is to send less js to the client

## Suspense API

By default, next.js will wait everything to finish loading to them display content on screen, even if some information could be already displayed.

By using React Suspense, we can load by parts that can be displayed while other information is loaded

Next.js loading.tsx is a global loading for the page itself, which is different than the fallback on suspese which is the loading for that component itself
