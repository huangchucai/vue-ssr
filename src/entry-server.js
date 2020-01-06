import createApp from './app';


// 服务器调用此函数，产生一个新的APP实例
export default (context) => {
    // 如果服务端访问/foo,  会首先访问首页，然后通过路由跳转到指定的路径到/foo
    return new Promise(((resolve, reject) => {
        let { app, router, store } = createApp();
        router.push(context.url); // 跳转到指定路由
        console.log(context.url);
        router.onReady(() => {
            console.log(context.url);
            const matchedComponents = router.getMatchedComponents();
            console.log(matchedComponents);
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }

            Promise.all(matchedComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({ store });
                }
            })).then(() => {
                context.state = store.state;
                console.log('fff');
                resolve(app);
            }).catch((e) => {
                console.log(e);
                return reject({ code: 404 });
            });
            // Promise 应该 resolve 应用程序实例，以便它可以渲染
        });
    }));

}
