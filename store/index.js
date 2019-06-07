export const state = ()=>(
  {
    list : ["上海","深圳"]
  }
)

export const mutations = {
  add(state,text){
    state.list.push(text)
  }
}
