let data = [
    {
        id:1,
        title: 'hello',
        selected: true
    },
    {
        id:2,
        title: 'hello123',
        selected: false
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        list: data,
        title: '123',
        hash: 'all',
        beforeTitle: '', // 记录点击编辑那一刻的title值
        editId: '' // 记录正在编辑的数据的id
    },
    computed: {
        /**isSelectedAll(){  //{key:function}
            //return this.list.every(item => item.selected);
           return this.list.filter(item => item.selected).length === this.list.length;
        }*/

        filterList(){
            switch(this.hash){
                case 'all':
                    return this.list;
                break;
                case 'active':
                    return this.list.filter(item => !item.selected);
                break;
                case 'completed':
                    return this.list.filter(item => item.selected);
                break;
                default:
                    return this.list;
            }
        },

        isSelectedAll: {
            get(){
                return this.list.filter(item => item.selected).length === this.list.length;
            },
            set(newValue){
                this.list.forEach(item => item.selected = newValue)
            }
        },
        // 我选中的
        unSelectedLen(){
            return this.list.filter(item => !item.selected).length;
        }
    },
    methods:{
        // 添加
        add(ev){
            if(this.title.trim() === '') return;
            console.log(this.title);
            this.list.push({
                id: Date.now(),
                title: this.title.trim(),
                selected: false
            });
            this.title = '';
        },
        // 删除
        remove(option){
            // id
            let index = this.list.findIndex(item => item === option);
            this.list.splice(index,1);
        },
        // 编辑
        editTodo(id,index){  // 一个是id，一个是index
            this.editId = id;
            this.$nextTick(()=>{
                this.$refs.miaov[index].focus()
            })

            let item = this.list.find(item => item.id === id);

            if(item){
                this.beforeTitle = item.title;  // 编辑那一刻存一下title
            }

            console.log(this);
        },
        // 编辑完成
        editDone(item){

            if(item.title.trim() === ''){
                // 删除
                this.remove(item)
            }

            this.editId = ''; //设置为空，让编辑状态消失
        },
        // 取消编辑
        cancelEdit(item){
            this.editId = '';
            item.title = this.beforeTitle;
            this.beforeTitle = '';
        }
    },
    mounted(){
        console.log('渲染');

        var filterHash = {
            all:true,
            active: true,
            completed: true
        }

        // 页面一上来，先取那hash值，用来过滤数据
        var changehash = () => {
            var hash = window.location.hash;

            if(!hash){
                hash = 'all'
            }else {
                hash = hash.slice(2)
                if(!filterHash[hash]){
                    hash = 'all'
                    window.location.hash = '/'+hash;
                }
            }

            // 改变根实例的数据
            this.hash = hash;

            console.log(hash);
        }
        
        window.addEventListener('hashchange',changehash)
        changehash();

    }
});




/*
    hash值的几种情况：
        1. 不存在 默认是all
        2. 超过了所规定的三个值 默认all
        3. 正常情况
            all active completed
*/

