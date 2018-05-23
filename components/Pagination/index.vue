<template>
  <el-pagination
    :total="value.total"
    :page-size="value.limit"
    :current-page="value.page"
    layout="prev,pager,next"
    @current-change="page => handleChange('page', page)"
    @size-change="limit => handleChange('limit', limit)"
  />
</template>

<script>
import { Pagination } from 'element-ui'

export default {
  components: {
    'el-pagination': Pagination,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleChange(key, value) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          [key]: value,
        },
      })
      // console.log(this.$route)
      // console.log(this.$router.push)
      // this.$emit('change', { ...value, [key]: value })
    },
  },
}
</script>
