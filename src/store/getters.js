export const clickTimes = state => state.clickTimes
// 也可以通过让 getter 返回一个函数，来实现给 getter 传参。
export const tasks = state => (id) => {
  return state.tasks.filter(task => parseInt(task.id) === id)
}
export const todoCount = state => state.todoCount + state.clickTimes
export const userInfo = state => state.user
