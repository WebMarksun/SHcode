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

new Vue({
    el: '#app',
    data: {
        list: data,
        title: '123',
        editId: '' // 记录正在编辑的数据的id
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
            console.log(this.editId);

            this.$nextTick(()=>{
                this.$refs.miaov[index].focus()
            })
        }
    }
})