<script lang="ts" setup>
const count = ref(0)

function increment() {
  count.value++
}

const input = ref('hello world')
const radio = ref('1')
const checked = ref(true)
const num = ref(1)
const options = ref([{
  value: 'Option1',
  label: 'Option1'
}, {
  value: 'Option2',
  label: 'Option2'
}, {
  value: 'Option3',
  label: 'Option3'
}, {
  value: 'Option4',
  label: 'Option4'
}, {
  value: 'Option5',
  label: 'Option5'
}])
const value = ref('')

const valueC = ref([])

const optionsC = ref([{
  value: 'guide',
  label: 'Guide',
  children: [{
    value: 'disciplines',
    label: 'Disciplines',
    children: [{
      value: 'consistency',
      label: 'Consistency'
    }, {
      value: 'feedback',
      label: 'Feedback'
    }, {
      value: 'efficiency',
      label: 'Efficiency'
    }, {
      value: 'controllability',
      label: 'Controllability'
    }]
  }, {
    value: 'navigation',
    label: 'Navigation',
    children: [{
      value: 'side nav',
      label: 'Side Navigation'
    }, {
      value: 'top nav',
      label: 'Top Navigation'
    }]
  }]
}, {
  value: 'component',
  label: 'Component',
  children: [{
    value: 'basic',
    label: 'Basic',
    children: [{
      value: 'layout',
      label: 'Layout'
    }, {
      value: 'color',
      label: 'Color'
    }, {
      value: 'typography',
      label: 'Typography'
    }, {
      value: 'icon',
      label: 'Icon'
    }, {
      value: 'button',
      label: 'Button'
    }]
  }, {
    value: 'form',
    label: 'Form',
    children: [{
      value: 'radio',
      label: 'Radio'
    }, {
      value: 'checkbox',
      label: 'Checkbox'
    }, {
      value: 'input',
      label: 'Input'
    }, {
      value: 'input-number',
      label: 'InputNumber'
    }, {
      value: 'select',
      label: 'Select'
    }, {
      value: 'cascader',
      label: 'Cascader'
    }, {
      value: 'switch',
      label: 'Switch'
    }, {
      value: 'slider',
      label: 'Slider'
    }, {
      value: 'time-picker',
      label: 'TimePicker'
    }, {
      value: 'date-picker',
      label: 'DatePicker'
    }, {
      value: 'datetime-picker',
      label: 'DateTimePicker'
    }, {
      value: 'upload',
      label: 'Upload'
    }, {
      value: 'rate',
      label: 'Rate'
    }, {
      value: 'form',
      label: 'Form'
    }]
  }, {
    value: 'data',
    label: 'Data',
    children: [{
      value: 'table',
      label: 'Table'
    }, {
      value: 'tag',
      label: 'Tag'
    }, {
      value: 'progress',
      label: 'Progress'
    }, {
      value: 'tree',
      label: 'Tree'
    }, {
      value: 'pagination',
      label: 'Pagination'
    }, {
      value: 'badge',
      label: 'Badge'
    }]
  }, {
    value: 'notice',
    label: 'Notice',
    children: [{
      value: 'alert',
      label: 'Alert'
    }, {
      value: 'loading',
      label: 'Loading'
    }, {
      value: 'message',
      label: 'Message'
    }, {
      value: 'message-box',
      label: 'MessageBox'
    }, {
      value: 'notification',
      label: 'Notification'
    }]
  }, {
    value: 'navigation',
    label: 'Navigation',
    children: [{
      value: 'menu',
      label: 'NavMenu'
    }, {
      value: 'tabs',
      label: 'Tabs'
    }, {
      value: 'breadcrumb',
      label: 'Breadcrumb'
    }, {
      value: 'dropdown',
      label: 'Dropdown'
    }, {
      value: 'steps',
      label: 'Steps'
    }]
  }, {
    value: 'others',
    label: 'Others',
    children: [{
      value: 'dialog',
      label: 'Dialog'
    }, {
      value: 'tooltip',
      label: 'Tooltip'
    }, {
      value: 'popover',
      label: 'Popover'
    }, {
      value: 'card',
      label: 'Card'
    }, {
      value: 'carousel',
      label: 'Carousel'
    }, {
      value: 'collapse',
      label: 'Collapse'
    }]
  }]
}, {
  value: 'resource',
  label: 'Resource',
  children: [{
    value: 'axure',
    label: 'Axure Components'
  }, {
    value: 'sketch',
    label: 'Sketch Templates'
  }, {
    value: 'docs',
    label: 'Design Documentation'
  }]
}])

const value1 = ref(true)
const valueS = ref(10)

const valueTS = ref('')

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}

const tableData = ref([{
  date: '2016-05-03',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
}, {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
}, {
  date: '2016-05-04',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
}, {
  date: '2016-05-01',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
}])

const data = ref([{
  label: 'Level one 1',
  children: [{
    label: 'Level two 1-1',
    children: [{
      label: 'Level three 1-1-1'
    }]
  }]
}, {
  label: 'Level one 2',
  children: [{
    label: 'Level two 2-1',
    children: [{
      label: 'Level three 2-1-1'
    }]
  }, {
    label: 'Level two 2-2',
    children: [{
      label: 'Level three 2-2-1'
    }]
  }]
}, {
  label: 'Level one 3',
  children: [{
    label: 'Level two 3-1',
    children: [{
      label: 'Level three 3-1-1'
    }]
  }, {
    label: 'Level two 3-2',
    children: [{
      label: 'Level three 3-2-1'
    }]
  }]
}])

const defaultProps = ref({
  children: 'children',
  label: 'label'
})

</script>

<template>
  <div>
    <button @click="increment">
      Count {{ count }}
    </button>
    <el-button @click="increment">
      Count {{ count }}
    </el-button>
    <el-input placeholder="Please input" v-model="input"></el-input>
    <el-radio v-model="radio" label="1">Option A</el-radio>
    <el-radio v-model="radio" label="2">Option B</el-radio>
    <el-checkbox v-model="checked">Option</el-checkbox>
    <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
    <el-select v-model="value" placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-cascader v-model="valueC" :options="optionsC"></el-cascader>
    <el-switch v-model="value1">
    </el-switch>
    <el-slider v-model="valueS"></el-slider>

    <el-time-select v-model="valueTS" :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }" placeholder="Select time">
    </el-time-select>

    <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
    </el-date-picker>

    <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time">
    </el-date-picker>
    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
      :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">Click to upload</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
    <el-rate v-model="value1"></el-rate>
    <el-color-picker v-model="color1"></el-color-picker>
    <el-transfer v-model="value" :data="data">
    </el-transfer>

    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180">
      </el-table-column>
      <el-table-column prop="address" label="Address">
      </el-table-column>
    </el-table>

    <el-tag>Tag 1</el-tag>
    <el-tag type="success">Tag 2</el-tag>
    <el-tag type="info">Tag 3</el-tag>
    <el-tag type="warning">Tag 4</el-tag>
    <el-tag type="danger">Tag 5</el-tag>
    <el-progress :percentage="50"></el-progress>
    <el-tree :data="data" :props="defaultProps"></el-tree>
    <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>

    <el-badge :value="12" class="item">
      <el-button size="small">comments</el-button>
    </el-badge>
    <el-skeleton />
    <el-empty description="description"></el-empty>
    <el-descriptions title="User Info">
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
    <el-result icon="success" title="Success Tip" subTitle="Please follow the instructions">
      <template slot="extra">
        <el-button type="primary" size="medium">Back</el-button>
      </template>
    </el-result>
  </div>
</template>
