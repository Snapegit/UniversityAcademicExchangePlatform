const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootg75441il/",
            name: "springbootg75441il",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootg75441il/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校学术交流平台"
        } 
    }
}
export default base
