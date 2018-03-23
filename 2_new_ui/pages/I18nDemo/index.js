import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { Pagination, DatePicker, TimePicker, Calendar,
     Popconfirm, Table, Modal, Button, Select, Transfer, Radio } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import style from './style.css';

moment.locale('en');

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'filter1',
    value: 'filter1',
  }],
}, {
  title: 'Age',
  dataIndex: 'age',
}];

// 国际化是全局的
// 这儿只是将包含文案的 ant-design 组件放在这个位置 便于查看国际化效果
export default class I18nDemo extends Component {
  state = {
    visible: false,
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  hideModal = () => {
    this.setState({ visible: false });
  }
  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className={style.main} >
        <h1 className={ style.font } >I18nDemo</h1>
        <div className={ style.locale_components }>
          <div className={ style.example }>
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
          </div>
          <div className={ style.example }>
            <Select showSearch style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            </Select>
            <DatePicker />
            <TimePicker />
            <RangePicker style={{ width: 200 }} />
          </div>
          <div className={ style.example }>
            <Button type="primary" onClick={this.showModal}>Show Modal</Button>
            <Button onClick={info}>Show info</Button>
            <Button onClick={confirm}>Show confirm</Button>
            <Popconfirm title="Question?">
            <a href="#">Click to confirm</a>
            </Popconfirm>
          </div>
          <div className={ style.example }>
            <Transfer
            dataSource={[]}
            showSearch
            targetKeys={[]}
            render={item => item.title}
            />
          </div>
          <div style={{ width: 319, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar fullscreen={false} value={moment()} />
          </div>
          <div className={ style.example }>
            <Table dataSource={[]} columns={columns} />
          </div>
          <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
            <p>Locale Modal</p>
          </Modal>
        </div>
      </div>
    )
  }
}