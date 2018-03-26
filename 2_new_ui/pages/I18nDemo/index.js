import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
// import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Pagination, DatePicker, TimePicker, Calendar,
     Popconfirm, Table, Modal, Button, Select, Transfer, Radio } from 'antd';
import { translate } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/zh-cn';
import i18n from '../../utils/i18n';
import * as DemoActions from './actions';
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

const mapStateToProps = ({ I18nDemo }) => ({ I18nDemo });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(DemoActions, dispatch),
});

// 国际化是全局的
// 这儿只是将包含文案的 ant-design 组件放在这个位置 便于查看国际化效果
export class I18nDemo extends Component {
  static propTypes = {
    I18nDemo: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

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
    const { t } = this.props;
    return (
      <div className={style.main} >
        <h1 className={ style.font } >I18nDemo</h1>
        <p>{t('test')}</p>
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

export default translate('I18nDemo', { wait: true, i18n })(
  connect(mapStateToProps, mapDispatchToProps)(I18nDemo)
);