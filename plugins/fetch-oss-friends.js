module.exports = async function myPlugin(context, options) {
  return {
    name: 'oss-friends-plugin',
    async loadContent() {
      try {
        const response = await fetch('https://formbricks.com/api/oss-friends');
        if (response.ok) {
          const { data } = await response.json();
          return data;
        }
        throw new Error(`api response not ok, status: ${response.status}`);
      } catch (err) {
        console.error(`error fetching oss friends: ${err}`);
      }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ ossFriends: content });
    },
  };
};
