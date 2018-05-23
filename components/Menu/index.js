import { Menu, MenuItem, Submenu } from 'element-ui'

export default {
  props: {
    mode: { type: String, default: 'horizontal' },
    navItems: { type: Array, required: true },
    theme: { type: Object, default: () => ({}) },
  },
  components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item': MenuItem,
  },
  render() {
    const { navItems, mode, theme } = this

    return (
      <el-menu text-color="#7b4832" mode={mode} style={{ borderBottom: 'none', borderRight: 'none' }}>
        {navItems.map(({ title, items: subItems, to }, idx) => {
          if (!subItems) {
            return (
              <el-menu-item class={theme.item} index={`${idx}`} key={idx}>
                <span onClick={() => this.$emit('close')}>
                  <nuxt-link class={theme.link} to={to}>
                    {title}
                  </nuxt-link>
                </span>
              </el-menu-item>
            )
          }
          return (
            <el-submenu class={theme.item} key={idx} index={`${idx}`}>
              <template slot="title">
                <span onClick={() => this.$emit('close')}>
                  <nuxt-link class={theme.link} to={to}>
                    {title}
                  </nuxt-link>
                </span>
              </template>
              {subItems.map((item, subIdx) => (
                <el-menu-item class={theme.subItem} key={subIdx} index={`${idx}-${subIdx}`}>
                  <span onClick={() => this.$emit('close')}>
                    <nuxt-link class={theme.subLink} to={item.to}>
                      {item.title}
                    </nuxt-link>
                  </span>
                </el-menu-item>
              ))}
            </el-submenu>
          )
        })}
      </el-menu>
    )
  },
}
