import Channel from '../../Models/channel'

export default {
  Query: {
    channel: async (_, { id }) => {
      const channel = await Channel.findByPk(id)
      return channel
    },
  },
  Subscription: {
    onChannelAdded: (channel) => {
      return channel
    },
  },
}
