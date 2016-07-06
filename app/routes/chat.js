module.exports = {
  path: 'chat',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../containers/Chat.jsx'))
    })
  }
}
