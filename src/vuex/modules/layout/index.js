/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/10
 * Description: 文件描述
 */
export default {
    state: {
        pei: {
            people: [
                { name: "潘金莲", num: "sdf", state: "血压", pos: "301室", id: 1, color: '#11111', weizhi: '101室' },
                { name: "武大郎", num: "23sd01", state: "心率", pos: "301室", id: 2 },
                { name: "武松", num: "2301dsf", state: "脉搏", pos: "301室", id: 3 },
                { name: "孙悟空", num: "23sdf01", state: "死了", pos: "301室", id: 4 },
                { name: "嫦娥", num: "23sdf01", state: "活了", pos: "301室", id: 5 },
                { name: "程咬金", num: "23dsf01", state: "狠了", pos: "301室", id: 6 },
                { name: "雨雾", num: "2cv301", state: "狼人", pos: "301室", id: 7 },
                { name: "金木", num: "23df01", state: "狠人", pos: "301室", id: 8 },
                { name: "佐助", num: "23zf01", state: "啊啊", pos: "301室", id: 9 },
            ]
        },
        isCollapse: false,
        logoShow: false,
        uniquerouter: true,
        rightNav: {},
        tabnavBox: [{
            title: 'home',
            path: '/index'
        }]
    },
    mutations: {
        addTab(state, arg) {
            state.isActive = arg.path
            for (let i = 0; i < state.tabnavBox.length; i++) {
                if (state.tabnavBox[i].path === arg.path) {
                    return false
                }
            }
            state.tabnavBox.push({
                title: arg.title,
                path: arg.path
            })
        },
        openMenu(state, arg) {
            state.rightNav = arg
        },
        removeTab(state, arg) {
            let index = state.tabnavBox.findIndex(function(value, key) {
                return value.path === arg.tabItem.path
            })
            state.tabnavBox.splice(index, 1)
            if (arg.tabItem.path === arg.fullPath) {
                let tabActive = state.tabnavBox[index] || state.tabnavBox[index - 1]
                arg.router.push(tabActive.path)
            }
        },
        removeOtherTab(state, arg) {
            state.tabnavBox = [{
                title: 'home',
                path: '/index'
            }]
            if (arg.all) {
                arg.router.push('/index')
                return false
            }
            state.tabnavBox.push(arg.tabItem)
            arg.router.push(arg.tabItem.path)
        },
        collapse(state, arg) {
            state.isCollapse = !state.isCollapse
            if (state.logoShow) {
                setTimeout(function() {
                    state.logoShow = false
                }, 300)
            } else {
                state.logoShow = true
            }
        },
    },
    actions: {
        addTab({ commit }, arg) {
            commit('addTab', arg)
        },
        openMenu({ commit }, arg) {
            commit('openMenu', arg)
        },
        removeTab({ commit }, arg) {
            commit('removeTab', arg)
        },
        removeOtherTab({ commit }, arg) {
            commit('removeOtherTab', arg)
        },
        collapse({ commit }, arg) {
            commit('collapse', arg)
        },
    }
}