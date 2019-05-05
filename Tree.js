const input = require('./input');
const Tree = {
    conf: {
        key: 'key',
        text: 'text',
        children: 'children',
        pid: 'pid'
    },
    toArray(roots, deeplyMod = true) {
        const entryArray = (Array.isArray(roots) ? roots : [roots]);
        if (deeplyMod) {
            return this.toArrayDeeply(entryArray);
        } else {
            return this.toArrayWidely(entryArray);
        }
    },
    // 广度优先
    toArrayWidely(arr) {
        const result = [];
        //队列
        const stack = [...arr];
        while (stack.length) {
            const top = stack.shift();
            // do whay u want
            if (!top.pid) {
                top.pid = -1;
            }
            result.push(this._getCleanNode(top));
            if (this._hasChildren(top)) {
                // 将当前节点的所有子节点放到待遍历区
                // stack.push(...top[this.conf.children]);
                top[this.conf.children].forEach(child => {
                    // 注入pid
                    child[this.conf.pid] = top[this.conf.key];
                    stack.push(child);
                });
            }
        }
        return result;
    },
    // 深度优先
    toArrayDeeply(arr) {
        const result = [];
        const walkDeeply = (node) => {
            node.forEach(item => {
                result.push(this._getCleanNode(item));
                if (this._hasChildren(item)) {
                    walkDeeply(item[this.conf.children]);
                }
            });
        }
        walkDeeply(arr);
        return result;
    },
    _hasChildren(item) {
        const cKey = this.conf.children
        if (item[cKey] && item[cKey].length) {
            return true;
        } else {
            return false;
        }
    },
    _getCleanNode(item) {
        const node = { ...item };
        delete node[this.conf.children];
        return node;
    },
    _safePush(obj, key, val) {
        if (typeof obj[key] === 'undefined') {
            obj[key] = [];
        }
        obj[key].push(val);
    },
    // 耗时较长
    arrToNodeUsedMore(dataArray, rootId) {
        let source = dataArray.reduce((accumulator, currentValue) => {
            const pid = currentValue[this.conf.pid];
            const val = accumulator[pid] || [];
            val.push(currentValue);
            accumulator[pid] = val;
            return accumulator;
        }, {});
        let result = source[rootId];
        const travelResult = (node) => {
            node.forEach(item => {
                const nodeId = item[this.conf.key];
                const son = source[nodeId];
                if (son) {
                    item[this.conf.children] = son;
                }
                if (this._hasChildren(item)) {
                    travelResult(item[this.conf.children]);
                }
            });
            // 处理好之后 如果有children 继续吧children遍历下去
        }
        travelResult(result);
        return result;
    },
    // 数组转树
    arrToNode(dataArray, rootId) {
        const getChildren = (nodeId) => {
            const children = [];
            dataArray.forEach(item => {
                if (item[this.conf.pid] === nodeId) {
                    children.push(item);
                    item[this.conf.children] = getChildren(item[this.conf.key]);
                }
            });
            return children;
        }
        return getChildren(rootId);
    },

    getParentById(obj,nodeId,parent) {
        let children = obj[this.conf.children];
        if (obj[this.conf.key] === nodeId) {
            return parent;
        }
        for (let index = 0; index < children.length; index++) {
            const element = children[index];
            const result = this.getParentById(element, nodeId, obj);
            if (result) {
                return result;
            }
        }
    },
    getParentById1(arr, nodeId, parent) {
        let result;
        for (let index = 0; index < arr.length; index++) {
            const item = arr[index];
            if (item[this.conf.key] === nodeId) {
                return  parent;
            }
            if (this._hasChildren(item)) {
                const tmp = this.getParentById1(item.children, nodeId, item);
                if (tmp) {
                    result = tmp;
                };
            }
        }
        return result;
        
    }
}

let array = Tree.toArray(input.first, false);

let node = Tree.arrToNode(array, -1);

let parent = Tree.getParentById1([input.first], 13);
console.log(parent)
