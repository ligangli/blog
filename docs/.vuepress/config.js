/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2023-03-13 15:38:29
 */
module.exports = {
    base:'/blog/',
    title: 'VuePress 教程',
    description: 'VuePress 搭建静态博客教程',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Lee博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/ligangli' },
                    { text: 'CSDN', link: '' }
                ]
            }
        ],
         // 侧边栏配置
         sidebar: [
            {
                title: '导航栏',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "uniapp",
                path: '/note/javaPlugin', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [
                    { title: "工程", path: "/note/javaPlugin" },
                    { title: "工程", path: "/note/threejs入门" },
                ],
            }
        ]
    }
}
