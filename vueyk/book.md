vue组件里面使用

mutation   

this.$store.commit('方法名',参数)

------使用辅助函数--------

...mapMutation(['方法名'])

this.方法名(参数)


action

this.$store.dispatch('方法名',参数)


-------------------


...mapActions(['方法名'])

this.方法名(参数)
