export const state = ()=>(
  {
    app : [1,2]
  }
)
//Mutation 必须是同步函数
export const mutations = {
  add(state,text){
    state.app.push(text)
  }
}
